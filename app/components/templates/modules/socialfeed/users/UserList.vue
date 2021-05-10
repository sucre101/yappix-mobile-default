a<template>

    <Page actionBarHidden="true">

        <StackLayout height="100%">

            <ListView   for="user in users"   separatorColor="red" height="100%">

                <v-template>

                    <Label :text="user.name+' '+user.email" class="post-list-title" textWrap="true"/>

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
        users: []
      }
    },

    mounted() {
      this._getUsers();
    },


    methods: {

      _getUsers() {

        this.$app.api.get(socialFeed.getUsers())
        .then((res) => {
          if(res.success){
            this.users = [ ...res.users]
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

