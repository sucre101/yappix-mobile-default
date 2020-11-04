<template>
  <Page class="single-post-page">

    <ActivityIndicator :busy="isBusy"  class="activity-indicator" color="red" width="100" height="100"/>

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

      <StackLayout orientation="vertical" v-if="!isBusy && postImages.length">

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
              ref="myCarousel"

          >

            <CarouselItem v-for="(item, i) in example"
                          :key="i" backgroundColor="white" verticalAlignment="middle">
              <Image :src="item.src" stretch="fill" width="100%" loadMode="async"/>
            </CarouselItem>

          </Carousel>

        </GridLayout>

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



    </StackLayout>

  </Page>
</template>

<script>
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
      ]
    }
  },

  watch: {
    async postImages(to) {
      await this.$nextTick();
      this.$refs.myCarousel.nativeView.refresh();
    }
  },

  computed: {

    currentPostTitle() {
      return this.post ? this.post.title : 'POST'
    }

  },

  created() {
    this.$root.$on('post::read', (data) => {
      this.post = data;
    });
    this.loadData();
  },

  methods: {

    closeCurrentPost() {
      this.$root.$off('post::read', this.clearPage);
      this.$modal.close();
    },

    clearPage() {
      this.post = {};
    },

    loadData() {

      this.$app.api.get(`profile/${2}`)
      .then((res) => {

        this.post.title = res.title;

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

