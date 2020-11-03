<template>

  <Page actionBarHidden="true">

    <ActivityIndicator :busy="isBusy"  @loaded="someMethod" class="activity-indicator" />

    <ListView for="item in items" v-if="!isBusy">

      <v-template>

        <StackLayout orientation="vertical">
          <Label :text="item.title" row="0" class="post-list-title" textWrap="true" @tap="openPage(item)"/>
        </StackLayout>

      </v-template>

    </ListView>

  </Page>

</template>

<script>

import PagesBlocks from "~/components/templates/modules/pageBuilder/PagesBlocks";

export default {

  components: {
    PagesBlocks
  },

  data() {
    return {
      isBusy: false,
      items: []
    }
  },

  created() {
    this.getData();
  },


  methods: {

    someMethod(arg) {
      this.isBusy = true;
    },

    openPage(page) {
      this.$showModal(PagesBlocks, {
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      });

      this.$root.$emit('page::open', page);

    },

    getData() {
      this.items = [];

      this.items =  [
        {
          "id": 3,
          "app_id": 2,
          "template_id": null,
          "title": "third",
          "thumb": null,
          "short_content": null,
          "is_active": true,
          "created_at": null,
          "updated_at": null,
          "template": null
        },
        {
          "id": 4,
          "app_id": 2,
          "template_id": null,
          "title": "next",
          "thumb": null,
          "short_content": null,
          "is_active": true,
          "created_at": "2020-09-15 08:55:33",
          "updated_at": "2020-09-15 08:55:33",
          "template": null
        },
        {
          "id": 5,
          "app_id": 2,
          "template_id": null,
          "title": "last",
          "thumb": null,
          "short_content": null,
          "is_active": true,
          "created_at": "2020-09-15 08:56:35",
          "updated_at": "2020-09-15 08:56:35",
          "template": null
        },
        {
          "id": 8,
          "app_id": 2,
          "template_id": null,
          "title": "Лд",
          "thumb": null,
          "short_content": null,
          "is_active": true,
          "created_at": "2020-09-17 08:51:59",
          "updated_at": "2020-09-17 08:51:59",
          "template": null
        },
        {
          "id": 9,
          "app_id": 2,
          "template_id": null,
          "title": "ad",
          "thumb": null,
          "short_content": null,
          "is_active": true,
          "created_at": "2020-09-17 10:19:49",
          "updated_at": "2020-09-17 10:19:49",
          "template": null
        },
        {
          "id": 10,
          "app_id": 2,
          "template_id": null,
          "title": "рйр",
          "thumb": null,
          "short_content": null,
          "is_active": true,
          "created_at": "2020-09-17 13:54:02",
          "updated_at": "2020-09-17 13:54:02",
          "template": null
        }
      ];

    }

  }

}

</script>

<style lang="scss" scoped>


</style>

