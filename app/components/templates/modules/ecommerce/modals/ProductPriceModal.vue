<template>
  <Page>

    <StackLayout>

      <GridLayout
          columns="auto,*"
          orientation="horizontal"
          ios:padding="0"
          ios:style="height: 60"
          android:style="height: 80"
          width="100%"
          backgroundColor="#0989cc"
      >

        <Image
            src="~/images/b-arrow.png"
            horizontalAlignment="left"
            verticalAlignment="center"
            col="0"
            @tap="closeModal"
            width="15"
            marginLeft="20"
            android:marginTop="20"
        />

        <Label
            text="Product prices"
            fontSize="20"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginRight="15"
            android:marginTop="20"
            col="1"
            color="white"
        />
      </GridLayout>

      <StackLayout orientation="vertical">

        <ListView for="(item, index) in prices" ref="priceView" height="100%">
          <v-template>

            <FlexboxLayout flexDirection="row" justifyContent="space-between" alignItems="center" alignContent="center">

              <WrapLayout>
                <Label :text="item.name" @tap="showStore(item)"/>
              </WrapLayout>

              <FlexboxLayout class="right-side" alignContent="center" alignSelf="center">
                <Label :text="item.pivot.price" :class="{ old: item.pivot.old_price > 0 }" class="price"/>
                <Label :text="item.pivot.old_price" v-if="item.pivot.old_price > 0" class="price"/>
                <Label text="buy" class="btn-buy" @tap="_cart(item)"/>
              </FlexboxLayout>

            </FlexboxLayout>

          </v-template>
        </ListView>

      </StackLayout>

    </StackLayout>
  </Page>
</template>

<script>
import StoreModal from "./StoreModal";
import {mapActions} from 'vuex'

export default {

  components: {
    StoreModal
  },

  props: ['prices', 'product'],


  methods: {

    ...mapActions({
      insert: 'ECCart/insert'
    }),

    showStore(store) {

      this.$showModal(StoreModal, {
        props: { store: store },
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then( (res) => {

      });

    },

    _cart(price) {
      let data = {}
      data.product_name = this.product
      data.product_id = price.pivot.product_id
      data.store_id = price.id
      data.quantity = 1
      data.price = price.pivot.old_price > 0 ? price.pivot.old_price : price.pivot.price

      this.insert(data)
      this.$root.$emit('refresh::cart')
    },

    closeModal() {
      this.$modal.close()
    }

  }
}
</script>

<style scoped lang="scss">

WrapLayout {
  width: 48%;
}
FlexboxLayout.right-side {
  width: 48%;
  flex-direction: row;
  justify-content: flex-end;
  .btn-buy {
    background-color: #ea4c62;
    border-radius: 3;
    width: 60;
    text-align: center;
    color: #ffffff;
    font-size: 15;
    margin-right: 5;
  }
  .price {
    background-color: #5df55d;
    margin-right: 5;
    &.old {
      text-decoration: line-through;
      //background-color: none;
      font-size: 10;
    }
  }
}
</style>
