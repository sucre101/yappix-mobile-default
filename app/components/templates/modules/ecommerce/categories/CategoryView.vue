<template>
  <Page>

    <ActionBar :title="category.name">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack"/>
    </ActionBar>

    <StackLayout class="main-container" orientation="vertical" height="100%" verticalAlignment="top">

      <Tabs height="100%" swipeEnabled="true" :selectedIndex="currentView">

        <TabStrip>

          <TabStripItem>
            <Label text="List"></Label>
          </TabStripItem>

          <TabStripItem>
            <Label text="Products"></Label>
          </TabStripItem>

          <TabStripItem>
            <Label text="Description"></Label>
          </TabStripItem>

        </TabStrip>

        <TabContentItem>
          <StackLayout>
            <ScrollView height="100%">
              <WrapLayout padding="5 5" v-if="category.children.length">
                <StackLayout
                    v-for="(item, index) in category.children"
                    :key="index"
                    padding="0"
                    marginRight="5"
                    marginBottom="5"
                    width="47%"
                    height="150"
                >
                  <Label
                      class="cat-item"
                      :text="item.name"
                      height="150"
                      alignSelf="center"
                      textAlignment="center"
                      backgroundColor="red"
                      @tap="showItem(item)"
                  />
                </StackLayout>
              </WrapLayout>
              <HtmlView v-else marginTop="50" :html="notFilled('List of category children empty')"/>
            </ScrollView>
          </StackLayout>
        </TabContentItem>

        <TabContentItem>
          <StackLayout>
            <ScrollView height="100%">
              <WrapLayout padding="5 5" v-if="category.products.length">
                <StackLayout
                    v-for="(item, index) in category.products"
                    :key="index"
                    padding="0"
                    marginRight="5"
                    marginBottom="5"
                    width="47%"
                    height="150"
                >
                  <Label
                      class="cat-item"
                      :text="item.name"
                      height="150"
                      alignSelf="center"
                      textAlignment="center"
                      backgroundColor="red"
                      @tap="showProduct(item)"
                  />
                </StackLayout>
              </WrapLayout>
              <HtmlView v-else marginTop="50" :html="notFilled('List of products empty')"/>
            </ScrollView>
          </StackLayout>
        </TabContentItem>

        <TabContentItem>
          <ScrollView height="100%">
            <HtmlView marginTop="50" :html="category.description ? category.description : notFilled('Description not filled')"/>
          </ScrollView>
        </TabContentItem>

      </Tabs>

    </StackLayout>

  </Page>
</template>

<script>
import ProductView from "~/components/templates/modules/ecommerce/products/ProductView";

export default {

  components: {
    ProductView
  },

  props: ['category'],

  data() {
    return {
      currentView: 0,
      views: [
        {name: 'products'},
        {name: 'categories'},
        {name: 'description'}
      ],
      notFilled : (val) => {
        return `<div><h1 style="text-align: center">${val}</h1></div>`
      }
    }
  },

  mounted() {
    if (!this.category.children.length) {
      this.currentView = 1
    }

    if (!this.category.children.length && !this.category.products.length) {
      this.currentView = 2
    }
  },

  methods: {

    goBack() {
      this.$navigateBack()
    },

    showProduct(product) {

      this.$navigateTo(ProductView, {
        props: {
          product: product,
        },
        clearHistory: false
      });

    },

    showItem(item) {

      this.$root.$emit('category::child', item)

    }

  }

}
</script>

<style scoped lang="scss">
.main-container {
  FlexboxLayout {
    padding: 7 0;

    Label {
      padding: 10 10;
      border-radius: 4;
      border-width: 2;
      border-color: #0989cc;
      color: #0989cc;
      text-transform: uppercase;
      font-size: 14;

      &.active {
        background-color: #b8e5fd;
      }
    }
  }
}
</style>
