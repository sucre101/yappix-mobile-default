<template>

  <Page actionBarHidden="true">

    <StackLayout height="100%">

      <ListView   for="post in posts"   separatorColor="red" height="100%">

        <v-template>

          <Label :text="post.title" class="post-list-title" textWrap="true" @tap="readPost(post)" />

        </v-template>

      </ListView>


    </StackLayout>

  </Page>

</template>

<script>
import NewsItem from "~/components/templates/modules/newsfeeds/feed/NewsItem";
import { socialFeed } from '~/route-list';

export default {

  components: {
    NewsItem
  },

  data() {
    return {
      isBusy: true,
      posts: []
    }
  },

  created() {
    this.getData();
  },


  methods: {
    readPost(post) {

      this.$showModal(NewsItem, {
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      });

      this.$root.$emit('post::read', post);
    },

    getData() {

      this.$app.api.get(socialFeed.getNews(this.$app.cfg.modules.socialfeed.id))
      .then((res) => {
        if(res.success){
          this.posts = [ ...res.posts]
        }
      }, error => {
        this.err = error
      })

    }

  }

}

</script>

<style lang="scss" scoped>

ListView {
  margin: 0;
  padding: 0;

  StackLayout {
    margin: 0;
    padding: 0;
  }

  GridLayout {
    margin: 0;

    Label {
      margin: 0;
      padding: 0;
    }

    .post-list-title {
      font-size: 22;
      font-weight: bold;
      color: black;
    }

    .post-list-short-text {
      font-size: 16;
      color: #747474;
      margin-top: 20;
    }

    StackLayout {
      padding: 20;

      FlexboxLayout {

        WrapLayout {

          Image {
            width: 25;
            tint-color: #007ECD;
          }

          .post-list-post-like {
            background-image: url('~/images/like.png');
            background-repeat: no-repeat;
            background-position: 0 0;
          }
          .post-list-post-like.likeActive {
            tint-color: #f4309c !important;
            background-image: url('~/images/like-active.png') !important;
          }

          Label {
            font-size: 17;
            font-weight: bold;
            margin-left: 5;
            color: #a3a3a3;
          }
        }

      }
    }


  }
}

</style>

