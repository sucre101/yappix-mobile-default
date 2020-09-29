<template>

  <Page>

    <ActionBar :title="postTitle" class="action-bar">
      <NavigationButton android.systemIcon="ic_menu_back" @tap="returnBack" />
    </ActionBar>

    <StackLayout>
      <Label text="ashdkhaskdhkj has askdjhaksdkjasak" />
    </StackLayout>

  </Page>

</template>

<script>

export default {

  // props: ['post'],

  data() {
    return {
      postTitle: 'this.post.title'
    }
  },

  methods: {

    returnBack() {
      this.$navigateBack();
    },

  }

}

</script>

<style lang="scss" scoped>

</style>
