<template>
  <Page actionBarHidden="true">

    <StackLayout>
      <Tabs height="100%" swipeEnabled="true" :selectedIndex="currentView" @selectedIndexChange="indexChange">
        <TabStrip>
          <TabStripItem>
            <Label text="Cart"></Label>
            <Image src="res://home"></Image>
          </TabStripItem>
          <TabStripItem>
            <Label text="History"></Label>
            <Image src="res://settings"></Image>
          </TabStripItem>
        </TabStrip>

        <TabContentItem>
          <GridLayout rows="*,50,50" v-if="cart.length">
            <ScrollView row="0">
              <ListView for="(item, index) in cart">
                <v-template>
                  <FlexboxLayout flexDirection="row" alignContent="center" alignItems="center" justifyContent="space-between">
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
            </ScrollView>
            <StackLayout row="1" horizontalAlignment="center" width="100%" alignSelf="center" v-if="cart.length">
              <Label class="checkout" color="Black" :text="`Total price ${total}`" textAlignment="center"/>
            </StackLayout>
            <StackLayout row="2" backgroundColor="#9cbbf5" horizontalAlignment="center" width="100%" alignSelf="center" v-if="cart.length">
              <Label class="checkout" text="Checkout" backgroundColor="Blue" textAlignment="center"  @tap="_checkout"/>
            </StackLayout>
          </GridLayout>
          <StackLayout v-else orientation="horizontal" horizontalAlignment="center" verticalAlignment="center">
            <Label text="CART CLEAR" fontSize="20"/>
          </StackLayout>
        </TabContentItem>
        <TabContentItem>
          <GridLayout rows="*">
            <ScrollView height="100%" row="0">
              <ListView for="(item, index) in orders">
                <v-template>
                  <FlexboxLayout flexDirection="row" alignContent="center" alignItems="center" justifyContent="space-between">
                    <Label text="order id"/>
                    <Label :text="item.order_id"/>
                  </FlexboxLayout>
                </v-template>
              </ListView>
            </ScrollView>
          </GridLayout>
        </TabContentItem>
      </Tabs>
    </StackLayout>



  </Page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CheckoutModal from "../modals/CheckoutModal"

export default {

  data() {
    return {
      cart: [],
      totalPrice: Number,
      currentView: 0,
      orders: []
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
    }

  },

  mounted() {
    this.cart = this.getCart
  },

  methods: {

    ...mapActions({
      'clear': 'ECCart/clearCart',
    }),

    indexChange(args) {
      if ( args.value === 1 ) {
        this.orders = this.getOrders
      }
    },

    increment(product, index) {
      this.cart[index].quantity = this.cart[index].quantity + 1
    },

    decrement(product, index) {
      this.cart[index].quantity = this.cart[index].quantity - 1
    },

    _checkout() {
      this.$showModal(CheckoutModal, {
        props: { products: this.cart },
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then( (res) => {
        this.currentView = 1
        this.cart = this.getCart
      });
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
  width: 100%;
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
</style>
