a<template>

  <Page actionBarHidden="true">

    <StackLayout height="100%">

      <ListView   for="follower in followers"   separatorColor="red" height="100%">

        <v-template>

          <Label :text="follower.name+' '+follower.email" class="post-list-title" textWrap="true"/>

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
        followers: []
      }
    },

    mounted() {
      this._getfollowers();
    },


    methods: {

      _getfollowers() {

        this.$app.api.get(socialFeed.getFollowers(this.$app.cfg.modules.socialfeed.id, 3))
        .then((res) => {
          if(res.success){
            this.followers = [ ...res.users]
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

