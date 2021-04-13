<template>

  <Page actionBarHidden="true">

    <ActivityIndicator :busy="isBusy"  @loaded="someMethod" class="activity-indicator" />

    <ListView for="item in items" v-if="!isBusy">

      <v-template>

        <StackLayout orientation="vertical">

          <AbsoluteLayout class="post-list-image" clipToBounds="true" >
            <Image :src="item.image" stretch="fill" width="100%" loadMode="async"/>
          </AbsoluteLayout>

          <GridLayout rows="auto, auto, auto" backgroundColor="white">

            <Label :text="item.title" row="0" class="post-list-title" textWrap="true" @tap="readPost(item)"/>

            <Label :text="item.shortText" row="1" class="post-list-short-text" textWrap="true"/>

            <FlexboxLayout justifyContent="flex-start" flexDirection="row" row="2" marginTop="15">

              <StackLayout orientation="horizontal">

                <Image
                    class="post-list-post-like"
                    :class="{ likeActive : item.selfLike }"
                    @tap="tapLike($event, item)"
                    width="25"
                    height="25"
                    ios:style="background-size: 35px 25px"
                    android:style="background-size: 85px 90px"
                />
                <Label :text="item.likes" />

              </StackLayout>

              <StackLayout orientation="horizontal">

                <Image
                  src="~/images/Chat.png"
                  width="25"
                  height="25"
                />

                <Label :text="item.commentCount" />

              </StackLayout>

              <StackLayout orientation="horizontal">

                <Image
                    src="~/images/Chart.png"
                    width="25"
                    height="25"
                />

                <Label :text="item.dontKnow" />

              </StackLayout>

              <StackLayout orientation="horizontal">

                <Image
                    src="~/images/repost.png"
                    width="25"
                    height="25"
                />

                <Label :text="item.repostsCount" />

              </StackLayout>

            </FlexboxLayout>

          </GridLayout>

        </StackLayout>

      </v-template>

    </ListView>

  </Page>

</template>

<script>
import NewsItem from "~/components/News/NewsItem";

export default {

  components: {
    NewsItem
  },

  data() {
    return {
      isBusy: true,
      items: []
    }
  },

  created() {
    this.getData();
  },


  methods: {

    someMethod(arg) {
      this.isBusy = false;
    },

    readPost(post) {

      this.$showModal(NewsItem, {
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      });

      this.$root.$emit('post::read', post);

    },

    tapLike(event, post) {

      if (post.selfLike) {
        post.likes--;
      } else {
        post.likes++;
      }

      post.selfLike = !post.selfLike

    },


    getData() {
      this.items = [];

      this.items = [
        {
          id: 1,
          category: 'Sample category',
          image: 'https://imag.malavida.com/mvimgbig/download-fs/fondo-de-pantalla-hello-kitty-12641-2.jpg',
          title: "Investors From Silicon Valley",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          selfLike: true,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 2,
          category: 'Sample category',
          image: 'https://wall2mob.com/m/wp-DishonoredVideoGameWide_37616-cprw.jpg?i=37616&w=640&h=480&fdl=0',
          title: "Item 2",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          selfLike: false,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 3,
          category: 'Sample category',
          image: '~/images/fondo.jpg',
          title: "Item 3",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          selfLike: true,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 4,
          category: 'Sample category',
          image: 'https://imag.malavida.com/mvimgbig/download-fs/fondo-de-pantalla-hello-kitty-12641-2.jpg',
          title: "Item 4",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          selfLike: false,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 5,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Item 5",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          selfLike: false,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 6,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Item 6",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          selfLike: false,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },


      ];

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

  .post-list-image {
    height: 200;
  }

  GridLayout {
    height: 180;
    margin: 0;
    padding: 20;

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

    FlexboxLayout {

      StackLayout {
        margin-right: 35;

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

</style>

