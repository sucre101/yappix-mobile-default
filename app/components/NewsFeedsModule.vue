<template lang="html">

  <Page>

    <ActionBar class="action-bar">

      <NavigationButton visibility="hidden" />

      <GridLayout
          columns="auto,*, auto"
          orientation="horizontal"
          ios:padding="0 10"
          height="100%"
          width="100%"
      >

        <Image
            src="res://menu"
            horizontalAlignment="left"
            verticalAlignment="center"
            tintColor="white"
            col="0"
            @tap="onDrawerButtonTap"
            width="15"
        />

        <Label
            :text="setTitlePage"
            style="text-transform: uppercase"
            fontSize="18"
            color="white"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginLeft="50"
            col="1"
        />

        <FlexboxLayout col="2" verticalAlignment="center" flexDirection="row" width="80" justifyContent="space-between">
          <Image src="~/images/white/Search@3x.png" width="20" height="20" />
          <Image src="~/images/white/Bookmark-fill@3x.png" width="20" height="20" />
          <Image src.decode="font://&#xf142;" class="fas" width="20" height="20" tintColor="#ffffff" />
        </FlexboxLayout>

      </GridLayout>
    </ActionBar>

    <Frame id="news-list">
      <NewsList />
    </Frame>

  </Page>

</template>

<script>
import NewsList from "~/components/templates/modules/newsfeeds/NewsList";
import Notification from "~/components/templates/modules/notifications/Notification";
import * as utils from "~/shared/utils";
import SelectedPageService from "../shared/selected-page-service";

export default {

  components: {
    NewsList, Notification
  },

  data() {
    return {
      currentIndex: 0,
      pageList: [
        { name: 'News feeds posts' },
        { name: 'Push Notifications' },
        { name: 'News posts near' },
        { name: 'My account' },
        { name: 'New post' },
      ]
    }
  },

  computed: {

    setTitlePage() {
      return this.pageList[this.currentIndex].name.toUpperCase()
    }

  },

  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Browse");
  },

  created() {
    this.$root.$on('post::back', () => {
      this.currentIndex = 0;
    });
  },

  destroyed() {
    this.$root.$off('post::back');
  },

  methods: {

    changeView(arg) {
      this.currentIndex = arg.newIndex;
    },

    onDrawerButtonTap() {
      utils.showDrawer();
    }

  }


}
</script>

<style lang="scss" scoped>

@import "~@nativescript/theme/scss/variables/blue";


TabStripItem {
  color: #38a7dc;
}

TabStripItem:active {
  color: white;
}

</style>
