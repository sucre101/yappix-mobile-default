<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <GridLayout
          columns="auto,*, auto"
          orientation="horizontal"
          ios:padding="0 10"
          height="100%"
          width="100%">

        <Image
            src="res://menu"
            horizontalAlignment="left"
            verticalAlignment="center"
            tintColor="white"
            col="0"
            @tap="onDrawerButtonTap"
            width="15"
            marginLeft="10"
        />

        <Label
            text="Home"
            style="text-transform: uppercase"
            fontSize="18"
            color="white"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginRight="25"
            col="1"
        />

      </GridLayout>
    </ActionBar>

    <StackLayout id="container" orientation="vertical" width="100%" backgroundColor="yellow">


      <Label text="some text" />

    </StackLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "../shared/selected-page-service";
import ExampleBlock from "~/components/ExampleBlock";
import { mapGetters } from 'vuex'

export default {

  components: {
    ExampleBlock
  },

  data() {
    return {
      sample: false,

      page: [
        {
          blockId: 1,
          style: 'background-color: #e4e4e4; width: 50%; margin-top: 20; margin-bottom: 10; padding: 40',
          text: '1',
          children: [
            {
              blockId: 12,
              style: {
                color: '#000000'
              }
            }
          ]
        },
        {
          blockId: 2,
          style: 'background-color: #000000',
          text: 2,
          children: [
            {
              blockId: 33,
              style: {
                color: '#FFFFFF'
              }
            }
          ]
        }
      ]
    }
  },
  mounted() {

    SelectedPageService.getInstance().updateSelectedPage("Home");

    if (!this.maybeShow) {
      setTimeout(() => {
        if (!this.isLoggedIn) {
          this.$root.$emit('show::auth')
        }
      }, 5000)
    }
  },
  computed: {

    ...mapGetters({
      'isLoggedIn': 'User/isLoggedIn',
      'maybeShow': 'User/maybeShow'
    }),

    message() {
      return "<!-- Page content goes here -->";
    }

  },

  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },

    someMethod(event, param) {
      // console.log(event, param)
      // event.object.style = param.style;
    }

  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import '~@nativescript/theme/scss/variables/blue';
// End custom common variables

// Custom styles
</style>
