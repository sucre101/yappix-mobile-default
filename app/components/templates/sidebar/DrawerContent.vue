<template lang="html">
  <GridLayout rows="auto, *" class="sidebar-drawer" id="sidebar-drawer">

    <AbsoluteLayout v-if="isLoggedIn" row="0" class="logged">

      <FlexboxLayout @tap="onNavigationItemTap(SelfProfile)">
        <Image
            class="nt-drawer__header-image fas t-36"
            src="~/images/yappix-background.png"
        />
      </FlexboxLayout>

      <Image src="~/images/Compose.png" @tap="onNavigationItemTap(SelfProfile)"/>

      <Label class="menu_header-name" :text="user.name" top="45" left="70"/>
      <Label class="menu_header-country" text="San Francisco, CA" top="70" left="70"/>

    </AbsoluteLayout>

    <AbsoluteLayout v-show="!isLoggedIn" row="0" class="not-logged">

      <FlexboxLayout class="image">
        <Image src="~/images/yappix-background.png"/>
      </FlexboxLayout>

      <Label text="You are not logged in." fontSize="13" top="47" left="70"/>
      <Label text="Please log in or register" fontSize="13" top="67" left="70"/>

      <FlexboxLayout flexDirection="row" class="buttons" justifyContent="flex-start">

        <Button class="sign-up" text="SIGN UP" @tap="onNavigationItemTap(Register)"/>
        <Button class="sign-in" text="SIGN IN" @tap="showAuthModal"/>

      </FlexboxLayout>

    </AbsoluteLayout>

    <ScrollView row="1" class="nt-drawer__body">
      <StackLayout backgroundColor="#239ddd" style="color: white">

        <GridLayout v-if="checkModule('newsfeeds')"
                    columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'News' ? ' -selected': '')"
                    @tap="onNavigationItemTap(NewsFeedsModule)"
        >
          <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
          <Label col="1" text="News Feeds"/>
        </GridLayout>

        <GridLayout v-if="checkModule('pagebuilder')"
                    columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Pages' ? ' -selected': '')"
                    style="margin-left: 50px"
                    @tap="onNavigationItemTap(PageBuilderModule)">
          <Label col="0" text.decode="&#xf0ad;" class="nt-icon fas"/>
          <Label col="1" text="Page Builder"/>
        </GridLayout>

        <GridLayout v-if="checkModule('socialfeed')"
                    columns="auto, *"
                    :class="'nt-drawer__list-item' + (selectedPage === 'Social' ? ' -selected': '')"
                    style="margin-left: 50px"
                    @tap="onNavigationItemTap(SocialFeedModule)">
          <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
          <Label col="1" text="Social Feed"/>
        </GridLayout>

        <GridLayout
            columns="auto, *"
            :class="'nt-drawer__list-item' + (selectedPage === 'Browse' ? ' -selected': '')"
            @tap="onNavigationItemTap(Browse)"
        >


          <GridLayout v-if="false"
              columns="auto, *"
                      :class="'nt-drawer__list-item' + (selectedPage === 'Browse' ? ' -selected': '')"
                      @tap="onNavigationItemTap(Browse)">
            <Label col="0" text.decode="&#xf1ea;" class="nt-icon far"/>
            <Label col="1" text="Browse" class="p-r-10"/>
          </GridLayout>

          <GridLayout
              v-if="checkModule('ecommerce')"
              columns="auto, *"
              :class="'nt-drawer__list-item' + (selectedPage === 'Ecommerce' ? ' -selected': '')"
              @tap="onNavigationItemTap(Ecommerce)"
          >
            <Label col="0" text.decode="&#xf005;" class="nt-icon fas"/>
            <Label col="1" :text="checkModuleAlias('ecommerce')" class="p-r-10"/>
          </GridLayout>

          <GridLayout
              v-if="checkModule('webview')"
              columns="auto, *"
              :class="'nt-drawer__list-item' + (selectedPage === 'WebView' ? ' -selected': '')"
              @tap="onNavigationItemTap(webview)"
          >
            <Label col="0" text.decode="&#xf0c1;" class="nt-icon fas"/>
            <Label col="1" :text="checkModuleAlias('webview')" class="p-r-10"/>
          </GridLayout>
        </GridLayout>

      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
  import ECModule from "~/components/templates/modules/ecommerce/ECModule"
  import ClientWebView from "~/components/templates/modules/webview/ClientWebView"
  import {mapGetters} from 'vuex'
  import Home from "~/components/Home"
  import Browse from "~/components/Browse"
  import Featured from "~/components/Featured"
  import Search from "~/components/Search"
  import Settings from "~/components/Settings"
  import Register from "~/components/templates/register/Register"
  import Auth from "~/components/templates/auth/Auth"
  import SelfProfile from "~/components/templates/profile/SelfProfile"
  import Profile from "~/components/templates/profile/Profile"
  import NewsFeedsModule from "~/components/NewsFeedsModule"
  import PageBuilderModule from "~/components/PageBuilderModule"
  import SocialFeedModule from "~/components/SocialFeedModule";

  import * as utils from "~/shared/utils"
  import SelectedPageService from "~/shared/selected-page-service"

  export default {

    components: {
      Home,
      Browse,
      Featured,
      Search,
      Settings,
      Register,
      SelfProfile,
      Profile,
      NewsFeedsModule,
      PageBuilderModule,
      Auth,
      ECModule,
      ClientWebView,
      SocialFeedModule
    },

    data() {
      return {
        Home: Home,
        Browse: Browse,
        Featured: Featured,
        Search: Search,
        Settings: Settings,
        Register: Register,
        Auth: Auth,
        SelfProfile: SelfProfile,
        Profile: Profile,
        NewsFeedsModule: NewsFeedsModule,
        PageBuilderModule: PageBuilderModule,
        SocialFeedModule: SocialFeedModule,
        Ecommerce: ECModule,
        webview: ClientWebView,
        selectedPage: "",
        authUser: false,
      };
    },

    computed: {

      ...mapGetters({
        isLoggedIn: 'User/isLoggedIn',
        getUserData: 'User/getUserData'
      }),

      user() {
        return this.authUser ? this.getUserData : {}
      }
    },

    mounted() {
      SelectedPageService.getInstance().selectedPage$
      .subscribe((selectedPage) => {
        this.selectedPage = selectedPage
      });
    },

    created() {
      this.authUser = this.isLoggedIn;

      this.$root.$on('auth', () => {
        this.authUser = this.isLoggedIn;
      })
    },

    methods: {

      onButtonTap() {
        console.log("Button was pressed");
      },

      checkModule(moduleName) {
        return this.$root.$app.cfg.modules.hasOwnProperty(moduleName);
      },

      checkModuleAlias(moduleName) {
        return this.$root.$app.cfg.modules[moduleName].alias ? this.$root.$app.cfg.modules[moduleName].alias : moduleName
      },

      onNavigationItemTap(component) {
        this.$navigateTo(component, {
          clearHistory: false
        });
        utils.closeDrawer();
      },

      showAuthModal() {
        this.$root.$emit('show::auth')
      },

    }
  };
</script>

<style lang="scss" scoped>

  @import "sidebar";

</style>
