a<template>

  <Page actionBarHidden="true">

    <StackLayout height="100%">

      <ListView   for="following in followings"   separatorColor="red" height="100%">

        <v-template>

          <Label :text="following.name+' '+following.email" class="post-list-title" textWrap="true"/>

        </v-template>

      </ListView>


    </StackLayout>

  </Page>

</template>

<script>
  import NewsItem from "~/components/templates/modules/newsfeeds/NewsItem";
  import { socialFeed } from '~/route-list';

  export default {

    components: {
      NewsItem
    },

    data() {
      return {
        isBusy: false,
        followings: []
      }
    },

    mounted() {
      this._getfollowings();
    },


    methods: {

      _getfollowings() {

        this.$app.api.get(socialFeed.getfollowings(this.$app.cfg.modules.socialfeed.id, 2))
        .then((res) => {
          if(res.success){
            this.followings = [ ...res.users]
          }
        }, error => {
          this.err = error
        })

      }

    }

  }

</script>

<style lang="scss" scoped>

  .post-list-title {
    font-size: 22px;
    font-weight: bold;
    color: black;
  }


</style>

