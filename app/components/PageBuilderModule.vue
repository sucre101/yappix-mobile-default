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

        <Frame id="pages">
          <Pages />
        </Frame>

  </Page>

</template>

<script>

  import Pages from "~/components/PageBuilder/Pages"
  import Search from "~/components/Search";
  import Browse from "~/components/Browse";
import * as utils from "~/shared/utils";

export default {

  components: {
    Pages, Search, Browse
  },

  data() {
    return {
      currentIndex: 0,
      pageList: [
        { name: 'Page Builder' },
        { name: 'Sample 2' },
        { name: 'Sample 3' },
        { name: 'Sample 4' },
        { name: 'Sample 5' },
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


TabStripItem {
  color: white;
}

TabStripItem:active {
  color: #38a7dc;
}

</style>
