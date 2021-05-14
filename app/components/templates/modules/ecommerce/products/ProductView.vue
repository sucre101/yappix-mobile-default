<template>
  <Page>
    <ActionBar :title="product.name" color="#ffffff">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack"/>
    </ActionBar>

    <GridLayout ref="myGrid">

      <ScrollView height="100%">

        <StackLayout orientation="vertical">

          <GridLayout rows="250,*">

            <Carousel
                height="100%"
                width="100%"
                indicatorColor="#2699fb"
                showIndicator="true"
                verticalAlignment="middle"
                color="#bce0fd"
                indicatorColorUnselected="#bce0fd"
                indicatorAnimation="drop"
                indicatorRadius="4"
                indicatorOffset="0, 15"
                row="0"
            >

              <CarouselItem v-for="(item, i) in product.images"
                            :key="i" backgroundColor="white" verticalAlignment="middle">
                <Image :src="`${item.url_original}`" stretch="aspectFill" width="100%" loadMode="async"/>
              </CarouselItem>

            </Carousel>

            <StackLayout orientation="vertical" row="1" width="100%" height="600">

              <Tabs id="tabs">

                <TabStrip highlightColor="Aqua">

                  <TabStripItem>
                    <Label text="Description"></Label>
                    <Image src="res://home"></Image>
                  </TabStripItem>

                  <TabStripItem>
                    <Label text="Specs"></Label>
                    <Image src="res://settings"></Image>
                  </TabStripItem>

                  <TabStripItem>
                    <Label text="Options"></Label>
                    <Image src="res://search"></Image>
                  </TabStripItem>

                </TabStrip>

                <TabContentItem>
                  <StackLayout orientation="vertical" height="100%">
                    <ScrollView height="100%">
                      <HtmlView class="content" ref="myComponent" :html="product.desc"/>
                    </ScrollView>
                  </StackLayout>

                </TabContentItem>

                <TabContentItem>
                  <GridLayout>
                    <Label text="Specs tab is coming soon" class="h2 text-center">
                    </Label>
                  </GridLayout>
                </TabContentItem>

                <TabContentItem>
                  <GridLayout>
                    <Label text="Options tab is coming soon" class="h2 text-center">
                    </Label>
                  </GridLayout>
                </TabContentItem>

              </Tabs>
            </StackLayout>

<!--            <HtmlView class="content" ref="myComponent" :html="product.desc" row="2"/>-->

          </GridLayout>

        </StackLayout>

      </ScrollView>

      <AbsoluteLayout class="btn">
        <FlexboxLayout width="100%" justifyContent="center" left="0" top="0">
          <Button text="ADD TO CARD" class="buy-button" @tap="openPrice"/>
        </FlexboxLayout>
      </AbsoluteLayout>

    </GridLayout>

  </Page>
</template>

<script>
import { ECModule } from '~/route-list'
import ProductPriceModal from "../modals/ProductPriceModal";
import { mapGetters, mapActions } from 'vuex'

export default {

  components: {

  },

  props: ['product'],

  data() {
    return {
      grid: Object,
      priceList: [],
    }
  },

  computed: {

    ...mapGetters({
      'getCart': 'ECCart/getCart'
    })

  },

  mounted() {

    this.grid = this.$refs.myGrid.nativeView

  },

  methods: {

    goBack() {
      this.$navigateBack()
    },

    openPrice() {

      if (!this.priceList.length) {
        this._getProductPriceData()
            .then((res) => {
              this.$showModal(ProductPriceModal, {
                props: { prices: this.priceList, product: this.product.name },
                fullscreen: true,
                animated: true,
                stretched: true,
                dimAmount: 0.5
              }).then( (res) => {
                console.log(this.getCart)
              });
            })
            .catch(err => console.log(err))
      } else {

        this.$showModal(ProductPriceModal, {
          props: { prices: this.priceList },
          fullscreen: true,
          animated: true,
          stretched: true,
          dimAmount: 0.5
        }).then( (res) => {

        });

      }

    },

    _getProductPriceData() {

      return new Promise((res, rej) => {
        this.$app.api.get(ECModule.getProductData(this.$app.cfg.modules.ecommerce.id, this.product.id))
            .then((res) => {
              if (res.success) {
                let price = [...res.data.prices]
                price.forEach( val => this.priceList.push(val) )
              }
            })
            .catch(err => rej())
        res()
      })

    }

  }

}
</script>

<style scoped lang="scss">
.content {
  width: 95%;
}
.btn {
  margin-top: 90%;
  .buy-button {
    width: 120;
    height: 40;
    background-color: #0989cc;
    color: #ffffff;
    border-radius: 4;
    text-transform: uppercase;
  }
}
#tabs {
  TabStripItem {
    background-color: #cb6464;
    border-radius: 4;
  }
}
</style>
