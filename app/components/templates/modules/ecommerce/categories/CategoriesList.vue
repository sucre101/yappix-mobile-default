<template>
  <Page actionBarHidden="true" id="ec-category-list">

    <ScrollView>

      <WrapLayout padding="5 5" v-if="!viewType">
        <StackLayout v-for="(item, index) in categories" padding="0" marginRight="5" marginBottom="5" width="47%">
          <Label
              class="cat-item"
              :text="item.name"
              :key="index"
              height="150"
              alignSelf="center"
              textAlignment="center"
              backgroundColor="#cecece"
              verticalAlignment="center"
              @tap="showItem(item)"
              backgroundImage="~/images/no-image.png"
              style="background-repeat: no-repeat; background-position: center; background-size: contain"
          />
        </StackLayout>
      </WrapLayout>

      <WrapLayout padding="5 5" v-if="viewType">
        <StackLayout v-for="(item, index) in categories" padding="0" marginRight="5" marginBottom="5" width="100%">
          <Label
              class="cat-item"
              :text="item.name"
              :key="index"
              height="150"
              alignSelf="center"
              textAlignment="center"
              backgroundColor="#cecece"
              @tap="showItem(item)"
              backgroundImage="~/images/no-image.png"
              style="background-repeat: no-repeat; background-position: 0% 0%; background-size: contain"
          />
        </StackLayout>
      </WrapLayout>

    </ScrollView>

  </Page>

</template>

<script>
import { ECModule } from '~/route-list';
import CategoryView from "~/components/templates/modules/ecommerce/categories/CategoryView";

export default {

  components: {
    CategoryView
  },

  props: {
    children: {
      type: Array,
      default: () => {
        return []
      }
    },
    viewType: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      categories: [],
      loaded: false,
      memory: [],
    }
  },

  mounted() {
    this._loadData()
  },

  created() {
    this.$root.$on('category::child', (data) => {
      this.$navigateTo(CategoryView, {
        props: {
          category: data,
          viewType: this.viewType
        },
        clearHistory: false
      });
    })
  },

  methods: {

    showItem(item) {

      this.$navigateTo(CategoryView, {
        props: {
          category: item,
          viewType: this.viewType
        },
        clearHistory: false
      });

    },

    _loadData() {
      this.$app.api.get(ECModule.getCategories(11))
        .then((res) => {
          this.categories = [...res.categories]
        })
        .then(res => this.loaded = true)
    }

  }
}
</script>

<style scoped lang="scss">
#ec-category-list {
  margin: 0;
  padding: 0;
  Label {
    font-size: 20;
    color: black;
  }
  .cat-item {
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
