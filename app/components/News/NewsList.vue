<template>

  <Page actionBarHidden="true">

    <ActivityIndicator :busy="isBusy" class="activity-indicator"/>

    <ListView for="item in items" v-if="!isBusy">

      <v-template>

        <StackLayout orientation="vertical">

          <AbsoluteLayout class="post-list-image">
            <Image :src="item.image" stretch="fill" width="100%"/>
          </AbsoluteLayout>

          <GridLayout rows="auto, auto, auto" backgroundColor="white">

            <Label :text="item.title" row="0" class="post-list-title" textWrap="true" @tap="readPost(item)"/>

            <Label :text="item.shortText" row="1" class="post-list-shot-text" textWrap="true"/>

          </GridLayout>

        </StackLayout>

      </v-template>

    </ListView>

  </Page>

</template>

<script>
// import NewsItem from "~/components/News/NewsItem";

const NewsItem = {
  template: `
    <Frame>
      <Page>
        <ActionBar>
          <GridLayout
              columns="auto,*"
              orientation="horizontal"
              ios:padding="0"
              height="100%"
              width="100%">

            <Image
                src="~/images/b-arrow.png"
                horizontalAlignment="left"
                verticalAlignment="center"
                col="0"
                @tap="closeCurrentPost"
                width="15"
            />

            <Label
                :text="currentPostTitle"
                fontSize="20"
                horizontalAlignment="center"
                verticalAlignment="center"
                marginRight="15"
                col="1"
            />

          </GridLayout>
        </ActionBar>
        <StackLayout>
          <Label text="ashdkhaskdhkj has askdjhaksdkjasak"/>
        </StackLayout>
      </Page>
    </Frame>
  `,

  props: ['post'],

  data() {
    return {
      currentPostTitle: ''
    }
  },

  created() {
    this.currentPostTitle = this.post.title;
    console.log(this.post);
  },

  methods: {
    closeCurrentPost() {
      this.$modal.close();
    }
  }
}

export default {

  data() {
    return {
      isBusy: true,
      items: []
    }
  },

  created() {
    this.$root.$on('post::back', () => {
      this.getData();
    })
    this.getData();

    setTimeout(() => {
      this.isBusy = false;
    }, 1000);

  },

  destroyed() {
    this.isBusy = true;
  },

  methods: {

    readPost(post) {

      this.$showModal(NewsItem, {
        props: {
          post: post
        },
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      });

    },

    getData() {
      this.items = [];

      this.items = [
        {
          id: 1,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Investors From Silicon Valley",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 2,
          category: 'Sample category',
          image: 'https://i.imgur.com/l7oHbhx.jpg',
          title: "Item 1",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 3,
          category: 'Sample category',
          image: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
          title: "Item 1",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 4,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Item 1",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 5,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Item 1",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 6,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Item 1",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 7,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Item 1",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 8,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Item 1",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 9,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Item 1",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 10,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Item 1",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 11,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Item 1",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
          commentCount: 50,
          dontKnow: 341,
          repostsCount: 12
        },
        {
          id: 12,
          category: 'Sample category',
          image: 'https://lh3.googleusercontent.com/_ZCt-DLEryHiu_En6Akfoknes_eMaXyAgvx0eHeF8ON5iRjCS2_2o2kJWn9J9nQIvcaG',
          title: "Item 1",
          shortText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          likes: 609,
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

  GridLayout {
    height: 250;
    margin: 0;
    padding: 20;

    Label {
      margin: 0;
      padding: 0;
    }
  }
}

.post-list-image {
  height: 200;
}

.post-list-title {
  font-size: 22;
  font-weight: bold;
  color: black;
}

.post-list-shot-text {
  font-size: 16;
  color: #747474;
  margin-top: 20;
}

</style>
