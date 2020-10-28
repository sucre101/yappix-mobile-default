<template lang="html">
  <GridLayout rows="auto, *" class="nt-drawer__content">
    <AbsoluteLayout row="0" class="nt-drawer__header" backgroundColor="#4dbbf5" :height="height">
      <template v-if="auth">
        <FlexboxLayout
            top="40"
            left="20"
            backgroundColor="#2699fb"
            width="50" height="50"
            alignItems="center"
            borderRadius="40"
            @tap="onNavigationItemTap(SelfProfile)"
        >
          <Image
              class="nt-drawer__header-image fas t-36"
              src.decode="font://&#xf007;"
              style="color: white"
          />
        </FlexboxLayout>
        <Image
            src="~/images/Compose.png"
            width="15"
            top="50"
            left="220"
            @tap="onNavigationItemTap(SelfProfile)"
        />
        <Label class="menu_header-name" text="John Doe" top="45" left="70"/>
        <Label class="menu_header-country" text="San Francisco, CA" top="70" left="70"/>
      </template>

      <template v-else>
        <FlexboxLayout
            top="40"
            left="20"
            borderColor="#b8e5fd"
            borderWidth="1"
            width="50" height="50"
            alignItems="center"
            borderRadius="40"
        >
          <Image
              src="~/images/yappix-background.png"
              width="40"
              height="40"
          />
        </FlexboxLayout>
        <Label text="You are not logged in." fontSize="13" top="47" left="70"/>
        <Label text="Please log in or register" fontSize="13" top="67" left="70"/>

        <Button
            text="SIGN IN"
            @tap="onNavigationItemTap(Register)"
            top="90"
            left="10"
            width="100"
            height="30"
            marginTop="20"
            marginBottom="10"
            backgroundColor="#747474"
            borderRadius="3"
            color="white"
        />

        <Button
            text="SIGN UP"
            @tap="onNavigationItemTap(Register)"
            top="90"
            left="120"
            width="100"
            height="30"
            marginTop="20"
            marginBottom="10"
            backgroundColor="#067dbc"
            borderRadius="3"
            color="white"
        />

        <!--        <FlexboxLayout>-->
        <!--          <Button text="Button" @tap="onNavigationItemTap(Register)"/>-->
        <!--        </FlexboxLayout>-->
      </template>

    </AbsoluteLayout>

    <ScrollView row="1" class="nt-drawer__body">
      <StackLayout backgroundColor="#239ddd" style="color: white">

        <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'News' ? ' -selected': '')"
                    style="margin-left: 50px"
                    @tap="onNavigationItemTap(NewsFeedsModule)">
          <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
          <Label col="1" text="News Feeds"/>
        </GridLayout>

        <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Browse' ? ' -selected': '')"
                    @tap="onNavigationItemTap(Browse)">
          <Label col="0" text.decode="&#xf1ea;" class="nt-icon far"/>
          <Label col="1" text="Browse" class="p-r-10"/>
        </GridLayout>

        <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Search' ? ' -selected': '')"
                    @tap="onNavigationItemTap(Search)">
          <Label col="0" text.decode="&#xf002;" class="nt-icon fas"/>
          <Label col="1" text="Search" class="p-r-10"/>
        </GridLayout>

        <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Featured' ? ' -selected': '')"
                    @tap="onNavigationItemTap(Featured)">
          <Label col="0" text.decode="&#xf005;" class="nt-icon fas"/>
          <Label col="1" text="Featured" class="p-r-10"/>
        </GridLayout>

        <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Settings' ? ' -selected': '')"
                    @tap="onNavigationItemTap(Settings)">
          <Label col="0" text.decode="&#xf013;" class="nt-icon fas"/>
          <Label col="1" text="Settings" class="p-r-10"/>
        </GridLayout>

        <GridLayout columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Profile' ? ' -selected': '')"
                    @tap="onNavigationItemTap(Profile)">
          <Label col="0" text.decode="&#xf1ea;" class="nt-icon far"/>
          <Label col="1" text="Profile" class="p-r-10"/>
        </GridLayout>

      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
  import Home from "~/components/Home";
  import Browse from "~/components/Browse";
  import Featured from "~/components/Featured";
  import Search from "~/components/Search";
  import Settings from "~/components/Settings";
  import RegisterPage from "~/components/base/RegisterPage";
  import SelfProfile from "~/components/templates/profile/SelfProfile";
  import Profile from "~/components/templates/profile/Profile";
  import NewsFeedsModule from "~/components/NewsFeedsModule";

  import * as utils from "~/shared/utils";
  import SelectedPageService from "~/shared/selected-page-service";

  export default {

    components: {
      Home,
      Browse,
      Featured,
      Search,
      Settings,
      RegisterPage,
      SelfProfile,
      Profile,
      NewsFeedsModule
    },

    data() {
      return {
        Home: Home,
        Browse: Browse,
        Featured: Featured,
        Search: Search,
        Settings: Settings,
        Register: RegisterPage,
        SelfProfile: SelfProfile,
        Profile: Profile,
        NewsFeedsModule: NewsFeedsModule,
        selectedPage: "",
        auth: true,
      };
    },

    computed: {
      height() {
        return this.auth ? 120 : 160
      }
    },


    mounted() {
      SelectedPageService.getInstance().selectedPage$
      .subscribe((selectedPage) => {
        this.selectedPage = selectedPage
      });
    },

    methods: {
      onButtonTap() {
        console.log("Button was pressed");
      },
      onNavigationItemTap(component) {
        this.$navigateTo(component, {
          clearHistory: false
        });
        utils.closeDrawer();
      }
    }
  };
</script>

<style lang="scss" scoped>

  AbsoluteLayout {
    padding: 0;
    //height: 120;

    Image {

    }

    .menu_header-name {
      font-size: 18;
    }

    .menu_header-country {
      font-size: 14;
    }
  }

  ScrollView {
    GridLayout {

      margin-left: 50px;

      Label {
        font-size: 16px;
        text-transform: uppercase;
      }

      Label.fas {
        font-size: 18px;
      }
    }
  }

</style>
