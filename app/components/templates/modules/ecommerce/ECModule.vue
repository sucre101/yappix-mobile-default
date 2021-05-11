<template>
  <Page @loaded="moduleLoaded">

    <ActionBar class="action-bar" :backgroundColor="actionBarColor.background" :color="actionBarColor.fontColor">

      <NavigationButton visibility="hidden"/>

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
            :color="actionBarColor.fontColor"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginLeft="50"
            col="1"
            ref="pageTitle"
        />

        <FlexboxLayout col="2" verticalAlignment="center" flexDirection="row" width="80" justifyContent="space-around"
                       ref="editedTopBar">
          <Image
              src.decode="font://&#xf009;"
              class="fas" width="20" height="20" tintColor="white"
              @tap="changeViewType"
          />

          <Image
              src.decode="font://&#xf406;"
              class="fas"
              width="20"
              height="20"
              tintColor="white"
              @tap="openAccount"
          />
        </FlexboxLayout>

      </GridLayout>
    </ActionBar>

    <BottomNavigation @selectedIndexChanged="changeView">

      <TabStrip :backgroundColor="navigationBottomColor.background" :color="navigationBottomColor.fontColor" isIconSizeFixed="false">

        <TabStripItem>
          <Image src.decode="font://&#xf015;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf0ca;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf541;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image id="label" src.decode="font://&#xf0f3;" class="fas t-14" android:style="font-size: 4"
                 :class="{ alert : notify }"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf07a;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

      </TabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <TabContentItem>
        <Frame id="home-page">
          <Home/>
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="category-list">
          <CategoryList :view-type="viewType"/>
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="sales-list">
          <Sales/>
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="notification-list">
          <NotificationView/>
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="cart-page">
          <Cart/>
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
import NotificationView from "~/components/templates/modules/ecommerce/notifications/NotificationView";
import Sales from "~/components/templates/modules/ecommerce/sales/Sales";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "ECModule",

  components: {
    CategoryList: CategoriesList,
    Home: HomePage,
    Cart: CartView,
    AccountView: AccountView,
    NotificationView: NotificationView,
    Sales: Sales
  },

  data() {
    return {
      currentIndex: 0,
      pageList: [
        {name: 'Home page'},
        {name: 'Categories'},
        {name: 'Sales'},
        {name: 'Notifications'},
        {name: 'Cart'},
      ],
      notify: false,
      viewType: false
    }
  },

  computed: {

    ...mapGetters({
      'isLoggedIn': 'User/isLoggedIn',
      'getCart': 'ECCart/getCart',
      'getOrders': 'ECCart/getOrders'
    }),

    setTitlePage() {
      return this.pageList[this.currentIndex].name.toUpperCase()
    },

    actionBarColor() {
      return {
        background: this.$root.$app.cfg.modules.ecommerce.settings.styles.top_bar.css["background-color"],
        fontColor: this.$root.$app.cfg.modules.ecommerce.settings.styles.top_bar.css.color
      }
    },

    navigationBottomColor() {
      return {
        background: this.$root.$app.cfg.modules.ecommerce.settings.styles.bottom_nav.css["background-color"],
        fontColor: this.$root.$app.cfg.modules.ecommerce.settings.styles.bottom_nav.css.color
      }
    },

    stylesForTopBar() {
      return this.$root.$app.cfg.modules.ecommerce.settings.styles.top_bar.css
    }

  },

  created() {

    this.$root.$on('notification::update', (data) => {
      this.notify = true
    })

    this.init()

    setTimeout(() => {

      if (!this.getCart.length) {
        this.query()
      }

      if (!this.getOrders.length) {
        this.getOrdersData()
      }

    }, 3000)

  },

  destroyed() {
    this.$root.$off('notification::update')
  },

  methods: {

    ...mapActions({
      init: 'ECCart/init',
      query: 'ECCart/query',
      getOrdersData: 'ECCart/getOrders'
    }),

    moduleLoaded($arg) {
      // let label = $arg.object
      // let str = ''

      // for (let vlas in this.$app.cfg.modules.ecommerce.settings.styles) {
      //   // console.log(this.$app.cfg.modules.ecommerce.settings.styles[vlas].css)
      //   str += `.${vlas}${JSON.stringify(this.$app.cfg.modules.ecommerce.settings.styles[vlas].css)}`
      // }
      //
      // console.log(str)

      // label.addCss(".checkout_btn { color: #000000, background : #000000 }")
    },

    changeView(arg) {
      this.currentIndex = arg.newIndex;

      if (arg.newIndex === 3) {
        this.notify = false
      }
    },

    actionBarFn($arg) {
      console.log($arg.object)
    },

    changeViewType() {
      this.viewType = !this.viewType
    },

    onDrawerButtonTap() {
      utils.showDrawer()
    },

    openAccount() {

      if (this.isLoggedIn) {
        this.$root.$emit('show::auth')
      } else {
        this.$showModal(AccountView, {
          fullscreen: true,
          animated: true,
          stretched: true,
          dimAmount: 0.5
        })
      }

    }

  }

}
</script>

<style scoped lang="scss">
.alert {
  color: #923a3a;
}
</style>
