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
            marginRight="25"
            col="1"
        />

      </GridLayout>
    </ActionBar>

    <Frame id="pages-blocks">
      <PagesBlocks />
    </Frame>

  </Page>

</template>

<script>
import PagesBlocks from "~/components/templates/modules/pagebuilder/PagesBlocks";
import * as utils from "~/shared/utils";
import SelectedPageService from "../shared/selected-page-service";

export default {

  components: {
    PagesBlocks
  },

  data() {
    return {
      currentIndex: 0,
      pageList: [
        { name: 'Page Builder Pages' },
        { name: 'Push Notifications' }
      ]
    }
  },

  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Browse");
  },
  computed: {

    setTitlePage() {
      return this.pageList[this.currentIndex].name.toUpperCase()
    }

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
