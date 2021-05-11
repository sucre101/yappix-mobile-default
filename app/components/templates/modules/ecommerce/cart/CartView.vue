<template>
  <Page actionBarHidden="true" @loaded="pageLoaded">

    <GridLayout rows="40,*">

      <StackLayout class="top-tabs" row="0" orientation="horizontal" width="100%">

        <Label class="switch-button" text="cart" :class="{ active: active === 1}" @tap="active = 1"/>
        <Label class="switch-button" text="history" :class="{ active: active === 2}" @tap="active = 2"/>

      </StackLayout>

      <GridLayout row="1" height="100%">

        <StackLayout v-if="active === 1" height="100%">
          <GridLayout rows="*,50,50" v-if="cart.length">
            <ScrollView row="0">
              <ListView for="(item, index) in cart">
                <v-template>
                  <FlexboxLayout flexDirection="row" alignContent="center" alignItems="center"
                                 justifyContent="space-between">
                    <Label :text="item.name"/>
                    <FlexboxLayout width="40%" flexDirection="row" justifyContent="flex-end">
                      <Label class="increment-btn" text="-" @tap="decrement(item, index)"/>
                      <Label v-model="item.quantity"/>
                      <Label class="increment-btn" text="+" @tap="increment(item, index)"/>
                      <Label :text="item.price * item.quantity"/>
                    </FlexboxLayout>
                  </FlexboxLayout>
                </v-template>
              </ListView>
              <AbsoluteLayout>
                <Label text="Clear" class="clear_cart" @tap="_clear"/>
              </AbsoluteLayout>
            </ScrollView>
            <StackLayout row="1" horizontalAlignment="center" width="100%" alignSelf="center" v-if="cart.length">
              <Label class="checkout" color="Black" :text="`Total price ${total}`" textAlignment="center"/>
            </StackLayout>
            <FlexboxLayout row="2" width="100%" v-if="cart.length" flexDirection="row">
              <FlexboxLayout
                  class="action checkout_btn"
                  @tap="_checkout"
              >
                <Label text="Checkout"/>
              </FlexboxLayout>
            </FlexboxLayout>
          </GridLayout>
          <StackLayout v-else row="2" orientation="horizontal" horizontalAlignment="center" verticalAlignment="center">
            <Label text="CART CLEAR" fontSize="20"/>
          </StackLayout>

        </StackLayout>

        <StackLayout v-else height="100%">
          <GridLayout>
            <ListView for="(item, index) in orders">
              <v-template>
                <FlexboxLayout flexDirection="row" alignContent="center" alignItems="center"
                               justifyContent="space-between">
                  <Label text="order id"/>
                  <Label :text="item.order_id"/>
                </FlexboxLayout>
              </v-template>
            </ListView>
          </GridLayout>
        </StackLayout>

      </GridLayout>

    </GridLayout>
  </Page>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import CheckoutModal from "../modals/CheckoutModal"

export default {

  data() {
    return {
      cart: [],
      totalPrice: Number,
      currentView: 0,
      orders: [],
      active: 1
    }
  },

  computed: {

    ...mapGetters({
      'getCart': 'ECCart/getCart',
      'getOrders': 'ECCart/getOrders'
    }),

    total() {
      let price = 0;

      this.cart.forEach(val => {
        price += val.price * val.quantity
      })

      return price
    },

    checkoutBtnStyle() {
      return this.$app.cfg.modules.ecommerce.settings.styles.checkout_btn.css
    }

  },

  watch: {
    active(val, old) {
      if (val === 2) {
        this.orders = this.getOrders
      }
    }
  },

  created() {
    this.$root.$on('refresh::cart', product => {
      this.cart = this.getCart
    })
  },

  mounted() {
    if (!this.cart.length) {
      this.cart = this.getCart
    }
  },

  methods: {

    ...mapActions({
      'clear': 'ECCart/clearCart',
    }),

    increment(product, index) {
      this.cart[index].quantity = this.cart[index].quantity + 1
    },

    decrement(product, index) {
      this.cart[index].quantity = this.cart[index].quantity - 1
    },

    _checkout() {
      this.$showModal(CheckoutModal, {
        props: {products: this.cart},
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then((res) => {
        this.currentView = 1
        this.cart = this.getCart

      });
    },

    pageLoaded($arg) {
      const page = $arg.object

      let curr = ''
      for (let inst in this.$app.cfg.modules.ecommerce.settings.styles.checkout_btn.css) {
        curr += `${inst}:${this.$app.cfg.modules.ecommerce.settings.styles.checkout_btn.css[inst]};`
      }

      page.addCss(`.checkout_btn{${curr}}`)

      curr = ''

      for (let inst in this.$app.cfg.modules.ecommerce.settings.styles.clear_cart.css) {
        curr += `${inst}:${this.$app.cfg.modules.ecommerce.settings.styles.clear_cart.css[inst]};`
      }

      page.addCss(`.clear_cart{${curr}}`)

    },

    _clear() {
      this.clear()
      this.cart = []
    },

    showArray() {
      console.log(this.getOrders)
    }

  }

}
</script>

<style scoped lang="scss">
.checkout {
  padding-top: 13;
  padding-bottom: 10;
  color: white;
  width: 50%;
  height: 100%;
  font-size: 16;
}

.increment-btn {
  width: 25;
  height: 25;
  background-color: #557fb4;
  text-align: center;
  vertical-align: center;
  color: #ffffff;
  border-radius: 3;
}

.top-tabs {
  padding-top: 5;
  border-bottom-width: 1;
  border-bottom-color: #eeeeee;
  background-color: #dedede;
}

.switch-button {
  width: 50%;
  font-size: 15;
  text-align: center;

  &.active {
    border-bottom-width: 2;
    border-bottom-color: #557fb4;
  }
}
</style>
