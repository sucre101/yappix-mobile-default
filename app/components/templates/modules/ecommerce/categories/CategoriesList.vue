<template>
  <Page actionBarHidden="true" id="ec-category-list">

    <ScrollView>
      <WrapLayout padding="5 5">
        <StackLayout v-for="(item, index) in categories" padding="0" marginRight="5" marginBottom="5" width="47%">
          <Label
              class="cat-item"
              :text="item.name"
              :key="index"
              height="150"
              alignSelf="center"
              textAlignment="center"
              backgroundColor="#cecece"
              @tap="showItem(item)"
              backgroundImage="https://lh3.googleusercontent.com/proxy/kFJ73ukqD7G1zWqKV0ayOy-BobZGjX8AY2K1peP23Z_lsD5eWOx4L0-kyyU8bUK2JvYMXZxUOPD7HLPh7u5iZ1SwMYh2u6N0JC24q2QzTWAkbmY1WXfyJ2qk80U"
              style="background-repeat: no-repeat; background-position: center"
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
