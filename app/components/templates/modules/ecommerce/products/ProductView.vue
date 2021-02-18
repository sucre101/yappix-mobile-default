<template>
  <Page>
    <ActionBar :title="product.name">
      <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack"/>
    </ActionBar>

    <StackLayout height="100%" orientation="vertical" minHeight="400">
      <HtmlView ~myComponent ref="myComponent" :html="product.desc"/>
    </StackLayout>

  </Page>
</template>

<script>
import { Color } from "@nativescript/core";

export default {

  props: ['product'],

  data() {
    return {

    }
  },

  mounted() {

    const view = this.$refs.myComponent.nativeView


    view.backgroundColor = new Color('forestgreen')

    // view

    // view.animate({ backgroundColor: new Color("yellow"), duration: 10000 })
  },

  methods: {

    myMeth() {

    },

    goBack() {
      this.$navigateBack()
    }
  }

}
</script>

<style scoped>

</style>
