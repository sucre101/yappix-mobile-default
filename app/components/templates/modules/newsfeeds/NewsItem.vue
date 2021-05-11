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

      <GridLayout height="250">
        <Carousel
            height="100%"
            width="100%"
            indicatorColor="#2699fb"
            showIndicator="true"
            verticalAlignment="middle"
            color="#bce0fd"
            indicatorColorUnselected="#bce0fd"
            indicatorAnimation="drop"
            indicatorRadius="4"
            indicatorOffset="0, 15"
        >

          <CarouselItem v-for="(item, i) in example"
                        :key="i" backgroundColor="white" verticalAlignment="middle">
            <Image :src="item.src" stretch="fill" width="100%" loadMode="async"/>
          </CarouselItem>

        </Carousel>

      </GridLayout>

      <FlexboxLayout class="action-buttons">

        <StackLayout orientation="horizontal">

          <Image
              width="25"
              height="25"
              src="~/images/white/like@3x.png"
          />

          <Label :text="convert(post.likes)" />

        </StackLayout>

        <StackLayout orientation="horizontal">

          <Image
              src="~/images/white/Comment@3x.png"
              width="20"
              height="20"
          />

          <Label :text="convert(post.commentCount)" />

        </StackLayout>

        <StackLayout orientation="horizontal">

          <Image
              src="~/images/white/Comment@3x.png"
              width="20"
              height="20"
          />

          <Label :text="convert(post.dontKnow)" />

        </StackLayout>

        <StackLayout orientation="horizontal">

          <Image
              src="~/images/white/Comment@3x.png"
              width="20"
              height="20"
          />

          <Label :text="convert(post.repostsCount)" />

        </StackLayout>


        <StackLayout orientation="horizontal">

          <Image
              src="~/images/white/Bookmark@3x.png"
              width="30"
              height="30"
          />

        </StackLayout>

      </FlexboxLayout>

    </StackLayout>

  </Page>
</template>

<script>
import { newsFeed } from '~/route-list'
import { cNumToStr } from '~/services/helpers'

export default {

  data() {
    return {
      post: {},
      postImages: [],
      isBusy: true,
      example: [
        { src: 'https://wall2mob.com/m/wp-DishonoredVideoGameWide_37616-cprw.jpg?i=37616&w=640&h=480&fdl=0' },
        { src: 'https://wall2mob.com/m/wp-DishonoredVideoGameWide_37616-cprw.jpg?i=37616&w=640&h=480&fdl=0' },
        { src: 'https://wall2mob.com/m/wp-DishonoredVideoGameWide_37616-cprw.jpg?i=37616&w=640&h=480&fdl=0' },
        { src: 'https://wall2mob.com/m/wp-DishonoredVideoGameWide_37616-cprw.jpg?i=37616&w=640&h=480&fdl=0' },
        { src: 'https://wall2mob.com/m/wp-DishonoredVideoGameWide_37616-cprw.jpg?i=37616&w=640&h=480&fdl=0' },
        { src: 'https://wall2mob.com/m/wp-DishonoredVideoGameWide_37616-cprw.jpg?i=37616&w=640&h=480&fdl=0' },
      ],
    }
  },

  computed: {

    currentPostTitle() {
      return this.post ? this.post.title : 'POST'
    },

  },

  created() {

    this.listner('post::read')
        .then(this.loadData);

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

    loadData() {

      let data = {

        title: '',
        shortTitle: '',
        description: '',
        countLike: 1,
        countComment: 1,
        voting: {
          active: true,
          count: 12312,
        },
        countRepost: 1,
        created: '',
        author: '',
        media: {
          video: [],
          images: [],
        },
        tags: [],
        comments: []


      }

      this.$app.api.get(newsFeed.getPost(this.post.id))
          .then((res) => {

            if (res.title) {
              this.post.title = res.title;
            }

            if (res.images.length) {
              res.images.forEach((item) => {
                this.postImages.push(item.src);
              })
            }

            this.isBusy = false;
          })
          .catch(err => console.log(err));

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
