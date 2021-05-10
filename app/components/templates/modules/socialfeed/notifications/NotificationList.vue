a<template>

  <Page actionBarHidden="true">

    <StackLayout height="100%">

      <ListView   for="request in requests"   separatorColor="red" height="100%">

        <v-template>

          <Label :text="request.name+' '+request.email" class="post-list-title" textWrap="true"/>

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
        requests: []
      }
    },

    mounted() {
      this._getrequests();
    },


    methods: {

      _getrequests() {

        this.$app.api.get(socialFeed.getRequests(this.$app.cfg.modules.socialfeed.id, 3))
        .then((res) => {
          if(res.success){
            this.requests = [ ...res.users]
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

