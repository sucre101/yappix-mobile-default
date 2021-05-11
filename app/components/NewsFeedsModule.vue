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
            v-if="Object.keys($root.$app.cfg.modules).length > 1"
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

    <BottomNavigation @selectedIndexChanged="changeView">

      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <TabStrip style="background-color: #0989cc" isIconSizeFixed="false">

        <TabStripItem>
          <Image src.decode="font://&#xf03b;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf0f3;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf14e;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf406;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf067;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

      </TabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <TabContentItem>
        <Frame id="news-list">
          <NewsList />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="notification">
          <Notification />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <GridLayout>
          <Label text="Search Page" class="h2 text-center"></Label>
        </GridLayout>
      </TabContentItem>

      <TabContentItem>
        <GridLayout>
          <Label text="Search Page" class="h2 text-center"></Label>
        </GridLayout>
      </TabContentItem>

      <TabContentItem>
        <GridLayout>
          <Label text="Search Page" class="h2 text-center"></Label>
        </GridLayout>
      </TabContentItem>

    </BottomNavigation>

  </Page>

</template>

<script>
import NewsList from "~/components/templates/modules/news/NewsList";
import Notification from "~/components/templates/modules/notifications/Notification";
import * as utils from "~/shared/utils";

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
