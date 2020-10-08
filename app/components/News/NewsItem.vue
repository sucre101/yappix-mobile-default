<template>
  <Page class="single-post-page">

    <StackLayout orientation="vertical" class="content">

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
            @tap="closeCurrentPost"
            width="15"
            marginLeft="20"
            android:marginTop="20"
        />

        <Label
            :text="currentPostTitle"
            fontSize="20"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginRight="15"
            android:marginTop="20"
            col="1"
            color="white"
        />

      </GridLayout>

      <AbsoluteLayout class="post-list-image" clipToBounds="true">
        <Image :src="post.image" stretch="fill" width="100%" loadMode="async"/>
      </AbsoluteLayout>

      <FlexboxLayout justifyContent="flex-start" flexDirection="row" backgroundColor="#747474">

        <StackLayout orientation="horizontal">

          <Image
              class="post-list-post-like"
              width="25"
              height="25"
              ios:style="background-size: 35px 25px"
              android:style="background-size: 85px 90px"
          />

          <Label :text="post.likes" />

        </StackLayout>

        <StackLayout orientation="horizontal">

          <Image
              src="~/images/white/Comment@3x.png"
              width="20"
              height="20"
          />

          <Label :text="post.commentCount" />

        </StackLayout>

        <StackLayout orientation="horizontal">

          <Image
              src="~/images/white/Comment@3x.png"
              width="20"
              height="20"
          />

          <Label :text="post.dontKnow" />

        </StackLayout>

        <StackLayout orientation="horizontal">

          <Image
              src="~/images/white/Comment@3x.png"
              width="20"
              height="20"
          />

          <Label :text="post.repostsCount" />

        </StackLayout>

      </FlexboxLayout>

    </StackLayout>

  </Page>
</template>

<script>

export default {

  data() {
    return {
      post: {}
    }
  },

  computed: {

    currentPostTitle() {
      return this.post ? this.post.title : 'POST'
    }

  },

  mounted() {
    this.$root.$on('post::read', (data) => {
      this.post = data;
    });
  },

  methods: {
    closeCurrentPost() {
      this.$root.$off('post::read', () => {
        this.post = {}
      });
      this.$modal.close();
    },

  }

}

</script>

<style lang="scss">

</style>
