<template lang="html">

  <Page>

    <ActionBar class="action-bar">
      <GridLayout
          columns="auto,*, auto"
          orientation="horizontal"
          ios:padding="0 10"
          height="100%"
          width="100%">

        <Image
            width="20"
            src="~/images/sb-menu.png"
            horizontalAlignment="left"
            verticalAlignment="center"
            tintColor="white"
            col="0"
            @tap="onDrawerButtonTap"
        />

        <Label
            :text="pageList[currentIndex].name"
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


    <BottomNavigation @selectedIndexChanged="changeView">

      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <TabStrip style="background-color: #0989cc;">
        <TabStripItem>
          <Label text="Home"></Label>
          <Image src="font://&#xf015;" class="fas t-36"></Image>
        </TabStripItem>
        <TabStripItem class="special">
          <Label text="Account"></Label>
          <Image src="font://&#xf007;" class="fas t-36"></Image>
        </TabStripItem>
        <TabStripItem class="special">
          <Label text="Search"></Label>
          <Image src="font://&#xf00e;" class="fas t-36"></Image>
        </TabStripItem>
      </TabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <TabContentItem>
        <Frame id="news-list">
          <NewsList />
        </Frame>
      </TabContentItem>
      <TabContentItem>
        <GridLayout>
          <Label text="Account Page" class="h2 text-center"></Label>
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
import NewsList from "~/components/News/NewsList"
import Search from "~/components/Search";
import Browse from "~/components/Browse";

import * as utils from "~/shared/utils";

export default {

  components: {

    NewsList, Search, Browse

  },

  data() {
    return {
      currentIndex: 0,
      pageList: [
        { name: 'Sample 1' },
        { name: 'Sample 2' },
        { name: 'Sample 3' },
      ]
    }
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

TabStrip {
  selected-item-color: blueviolet;
  un-selected-item-color: brown;
  highlight-color: gold;
}

</style>
