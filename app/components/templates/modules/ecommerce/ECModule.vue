<template>
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
            ref="pageTitle"
        />

        <FlexboxLayout col="2" verticalAlignment="center" flexDirection="row" width="80" justifyContent="space-between">
          <Image src="~/images/white/Search@3x.png" width="20" height="20" />
          <Image src="~/images/white/Bookmark-fill@3x.png" width="20" height="20" />
          <Image src.decode="font://&#xf406;" class="fas" width="20" height="20" tintColor="white" @tap="openAccount"/>
        </FlexboxLayout>

      </GridLayout>
    </ActionBar>

    <BottomNavigation @selectedIndexChanged="changeView">

      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <TabStrip style="background-color: #0989cc" isIconSizeFixed="false">

        <TabStripItem>
          <Image src.decode="font://&#xf015;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf0ca;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf406;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf0f3;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf07a;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

      </TabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <TabContentItem>
        <Frame id="home-page">
          <Home />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="category-list">
          <CategoryList />
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
        <Frame id="cart-page">
          <Cart />
        </Frame>
      </TabContentItem>

    </BottomNavigation>

  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import CategoriesList from "~/components/templates/modules/ecommerce/categories/CategoriesList";
import HomePage from "~/components/templates/modules/ecommerce/home/HomePage";
import CartView from "~/components/templates/modules/ecommerce/cart/CartView";
import AccountView from "~/components/templates/modules/ecommerce/modals/AccountView";
import {mapActions} from 'vuex'
import StoreModal from "~/components/templates/modules/ecommerce/modals/StoreModal";

export default {
  name: "ECModule",

  components: {
    CategoryList: CategoriesList,
    Home: HomePage,
    Cart: CartView,
    AccountView: AccountView
  },

  data() {
    return {
      currentIndex: 0,
      pageList: [
        { name: 'Home page' },
        { name: 'Categories' },
        { name: 'Profile' },
        { name: 'Notification' },
        { name: 'Cart' },
      ]
    }
  },

  computed: {

    setTitlePage() {
      return this.pageList[this.currentIndex].name.toUpperCase()
    }

  },

  created() {

    this.init()

    setTimeout(() => {
      this.query()
      this.getOrders()
    }, 3000)

  },

  methods: {

    ...mapActions({
      init: 'ECCart/init',
      query: 'ECCart/query',
      getOrders: 'ECCart/getOrders'
    }),

    changeView(arg) {
      this.currentIndex = arg.newIndex;
    },

    onDrawerButtonTap() {
      utils.showDrawer()
    },

    openAccount() {
      this.$showModal(AccountView, {
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then( (res) => {

      });
    }

  }

}
</script>

<style scoped>

</style>
