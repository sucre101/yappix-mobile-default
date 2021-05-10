<template>
  <Page class="single-post-page">

    <ActivityIndicator :busy="isBusy"  class="activity-indicator" color="red" width="100" height="100"/>

    <StackLayout orientation="vertical">

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


      <StackLayout orientation="horizontal">

        <Label :text="post.text" />

      </StackLayout>

      <FlexboxLayout class="action-buttons">

        <StackLayout orientation="horizontal" >

          <Image
              width="25"
              height="25"
              src="~/images/white/like@3x.png"
              @tap="like"
          />

          <Label :text="convert(post.clikes)" />

        </StackLayout>

        <StackLayout orientation="horizontal">

          <Image
              src="~/images/white/Comment@3x.png"
              width="20"
              height="20"
          />

          <Label :text="convert(post.ccomments)" />

        </StackLayout>

      </FlexboxLayout>

      <StackLayout row="1" horizontalAlignment="center" width="100%" alignSelf="center">
        <TextView hint="Enter your comment"
                  color="orangered"
                  backgroundColor="lightyellow"
                  v-model="set_comment.html"
        >
        </TextView>
        <Label class="confirm" text="Comment" backgroundColor="#4e7fff" textAlignment="center" @tap="comment"/>
      </StackLayout>

      <StackLayout  orientation="vertical"  >

        <Label text="Comments" />

        <StackLayout orientation="vertical"  v-for="(comment, i) in post.comments" :key="i"  >

          <Label :text="comment.html" />
          <Label :text="comment.user.name" />

        </StackLayout>

      </StackLayout>

    </StackLayout>

  </Page>
</template>

<script>
  import { socialFeed } from '~/route-list'
  import { cNumToStr } from '~/services/helpers'

  export default {

    data() {
      return {
        post: {},
        isBusy: true,
        set_comment: {
          post_id: null,
          html: '',
          module_id: null,
          app_user_id: '',
        },
        set_like: {
          from: null,
          to: null,
          user_module_id: this.$app.cfg.modules.socialfeed.id,
        }
      }
    },

    computed: {

      currentPostTitle() {
        return this.post ? this.post.title : 'POST'
      },

    },

    created() {

      this.listner('post::read');

    },

    methods: {

      listner(event) {
        return new Promise((resolve, reject) => {
          this.$root.$on(event, (data) => {
            this.post = { ...data };

            if (this.post.id) {
              resolve()
            } else {
              reject();
            }

          })
        })
      },

      convert(number) {
        return cNumToStr(number);
      },

      closeCurrentPost() {
        this.$root.$off('post::read', this.clearPage);
        this.$modal.close();
      },

      clearPage() {
        this.post = {};
      },
      comment(){
        this.set_comment.post_id = this.post.id
        this.set_comment.module_id = this.$app.cfg.modules.socialfeed.id
        this.set_comment.app_user_id = 2

        this.$app.api.post(socialFeed.setComment(), this.set_comment)
        .then((res) => {
          if (res.success) {
            // this.$root.$emit('notification::update')
          }

        })
        .then(res => this.$modal.close())
        .catch(err => console.log(err))
      },
      like(){
        this.set_like.from = 2
        this.set_like.to = this.post.id


        this.$app.api.post(socialFeed.setLike(), this.set_like)
        .then((res) => {
          if (res.success) {
            this.clear()
            // this.$root.$emit('notification::update')
          }

        })
        .then(res => this.$modal.close())
        .catch(err => console.log(err))
      }
    }

  }

</script>

<style lang="scss" scoped>
  .single-post-page {

    .action-buttons {

      background-color: #747474;
      flex-direction: row;
      justify-content: space-around;
      height: 50;
      vertical-align: center;
      padding-left: 15;

      StackLayout {

        Label {
          font-size: 14;
          vertical-align: center;
          font-weight: bold;
          margin-left: 5;
          color: white;
        }

      }
    }
  }

</style>
