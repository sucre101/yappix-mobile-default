<template>

  <Page actionBarHidden="true">

    <ListView for="page in pages">

      <v-template>

        <StackLayout orientation="horizontal">
          <Label :text="page.title" textWrap="true"  @tap="openBlock(page.blocks)"></Label>
        </StackLayout>

      </v-template>

    </ListView>

  </Page>

</template>

<script>
  import Blocks from "./Blocks";
  export default  {
    components:{
      Blocks
    },
    data() {
      return {
        pages: [
          {
            title: "Home",
            blocks: [
              {
                content: "<p>image</p>",
                style: "color:blue"
              },
              {
                content: "<b>video</b>",
                style: "color:blue"
              },
              {
                content: "<i>html</i>",
                style: "color:blue"
              },
              {
                content: "<u>image</u>",
                style: "background-color:blue"
              },
            ]
          },
          {
            title: "Gallery",
            blocks: [
              {
                content: "<p>image</p>",
                style: "color:blue"
              },
              {
                content: "<b>video</b>",
                style: "color:blue"
              },
              {
                content: "<i>html</i>",
                style: "color:blue"
              },
              {
                content: "<u>image</u>",
                style: "background-color:blue"
              },
            ]
          },
          {
            title: "About",
            blocks: [
              {
                content: "<p>image</p>",
                style: "color:blue"
              },
              {
                content: "<b>video</b>",
                style: "color:blue"
              },
              {
                content: "<i>html</i>",
                style: "color:blue"
              },
              {
                content: "<u>image</u>",
                style: "background-color:blue"
              },
            ]
          },
          {
            title: "Contacts",
            blocks: [
              {
                content: "<p>image</p>",
                style: "color:blue"
              },
              {
                content: "<b>video</b>",
                style: "color:blue"
              },
              {
                content: "<i>html</i>",
                style: "color:blue"
              },
              {
                content: "<u>image</u>",
                style: "background-color:blue"
              },
            ]
          },
        ]
      }
    },

    methods: {
      openBlock(data) {
        this.$showModal(Blocks, {
          fullscreen: true,
          animated: true,
          stretched: true,
          dimAmount: 0.5
        });

        this.$root.$emit('page::open', data);

      },
    }

  }

</script>

<style>

</style>
