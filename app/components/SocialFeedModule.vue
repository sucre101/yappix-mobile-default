<template lang="html">

  <Page>

    <ActionBar class="action-bar">

      <NavigationButton visibility="hidden" />

      <GridLayout
          columns="auto,*, auto"
          orientation="horizontal"
          ios:padding="0 10"
          height="100%"
          width="100%"
      >

        <Image
            src="res://menu"
            horizontalAlignment="left"
            verticalAlignment="center"
            tintColor="white"
            col="0"
            @tap="onDrawerButtonTap"
            width="15"
        />

        <Label
            :text="setTitlePage"
            style="text-transform: uppercase"
            fontSize="18"
            color="white"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginLeft="50"
            col="1"
        />

        <FlexboxLayout col="2" verticalAlignment="center" flexDirection="row" width="80" justifyContent="space-between">
          <Image src="~/images/white/Search@3x.png" width="20" height="20" />
          <Image src="~/images/white/Bookmark-fill@3x.png" width="20" height="20" />
          <Image src.decode="font://&#xf142;" class="fas" width="20" height="20" tintColor="#ffffff" />
        </FlexboxLayout>

      </GridLayout>
    </ActionBar>

    <BottomNavigation @selectedIndexChanged="changeView">

      <TabStrip backgroundColor="blue" isIconSizeFixed="false">

        <TabStripItem>
          <Image src.decode="font://&#xf570;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf0c0;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf064;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf0f3;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

        <TabStripItem>
          <Image src.decode="font://&#xf406;" class="fas t-14" android:style="font-size: 4"/>
        </TabStripItem>

      </TabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <TabContentItem>
        <Frame id="home-page">
          <NewsList />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="user-list">
          <Users />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="followers-list">
          <Followers />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="notification-list">
          <Notifications />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Frame id="profile">
<!--          <Profile />-->
        </Frame>
      </TabContentItem>

    </BottomNavigation>

  </Page>

</template>

<script>
import NewsList from "~/components/templates/modules/socialfeed/feed/NewsList";
import Notifications from "~/components/templates/modules/socialfeed/notifications/NotificationList";
import Users from "~/components/templates/modules/socialfeed/users/UserList";
import Followers from "~/components/templates/modules/socialfeed/users/FollowerList";
import Followings from "~/components/templates/modules/socialfeed/users/FollowingList";
import Profile from "~/components/templates/profile/SelfProfile";
import * as utils from "~/shared/utils";
import SelectedPageService from "../shared/selected-page-service";

export default {

  components: {
    NewsList, Notifications, Users, Profile, Followers, Followings
  },

  data() {
    return {
      currentIndex: 0,
      pageList: [
        { name: 'Feed' },
        { name: 'Users' },
        { name: 'Followers' },
        { name: 'Notifications' },
        { name: 'Profile' },
      ]
    }
  },

  computed: {

    setTitlePage() {
      return this.pageList[this.currentIndex].name.toUpperCase()
    }

  },

  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Browse");
  },

  created() {
    this.$root.$on('post::back', () => {
      this.currentIndex = 0;
    });
  },

  destroyed() {
    this.$root.$off('post::back');
  },

  methods: {

    changeView(arg) {
      this.currentIndex = arg.newIndex;
    },

    onDrawerButtonTap() {
      utils.showDrawer();
    }

  }


}
</script>

<style lang="scss" scoped>

@import "~@nativescript/theme/scss/variables/blue";


TabStripItem {
  color: #38a7dc;
}

TabStripItem:active {
  color: white;
}

</style>
