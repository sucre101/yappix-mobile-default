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

      <StackLayout row="1" horizontalAlignment="center" width="100%" alignSelf="center">
        <TextField hint="Your title"
                  color="orangered"
                  backgroundColor="lightyellow"
                  v-model="post.title"
        >
        </TextField>
        <TextView hint="Your post"
                  color="orangered"
                  backgroundColor="lightyellow"
                  v-model="post.text"
        >
        </TextView>
        <Label class="confirm" text="Save" backgroundColor="#4e7fff" textAlignment="center" @tap="save"/>
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
        post: {
          title: '',
          text: '',
          user_module_id: null,
          app_user_id: null
        },
        isBusy: true,
      }
    },

    computed: {

      currentPostTitle() {
        return this.post ? this.post.title : 'POST'
      },

    },

    created() {


    },

    methods: {

      closeCurrentPost() {
        this.$modal.close();
      },

      save(){
        this.post.user_module_id = this.$app.cfg.modules.socialfeed.id
        this.post.app_user_id = 2

        this.$app.api.post(socialFeed.setPost(), this.post)
        .then((res) => {
          if (res.success) {

          }

        })
        .then(res => this.$modal.close())
        .catch(err => console.log(err))
      },

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
