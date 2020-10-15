<template>
  <Page id="authorization">

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
        />

        <Label
            text="Authorization"
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

    <StackLayout class="main-block">
      <GridLayout
          rows="auto, auto, auto"
          verticalAlignment="center"
          alignSelf="center"
          horizontalAlignment="center"
          width="80%"
          margin="auto"
          borderWidth="1"
          borderColor="green"
      >
        <TextField hint="Enter your email" keyboardType="email" row="0" v-model="email"/>
        <TextField hint="Enter your password" secure="true" row="1" v-model="password"/>
        <Button text="send" row="2" @tap="sendForm"/>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "../../shared/selected-page-service";
import { mapActions, mapGetters } from 'vuex';

import Browse from "~/components/Browse";

export default {

  components: {
    Browse
  },

  data() {
    return {
      email: '',
      password: '',
      Browse: Browse,
    }
  },

  computed: {
    ...mapGetters({
      getApiToken: 'User/getApiToken'
    })
  },

  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Browse");
  },

  methods: {

    ...mapActions({
      saveToken: 'User/saveToken',
      saveUserData: 'User/saveUserData'
    }),

    onDrawerButtonTap() {
      utils.showDrawer();
    },

    sendForm() {

      this.$app.api.post('auth/login', { email: this.email, password: this.password })
          .then((res) => {
            this.saveToken(res.access_token);
            this.saveUserData(res.user);
            this.$navigateTo(this.Browse);
          });
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import '~@nativescript/theme/scss/variables/blue';
@import "auth";
// End custom common variables

// Custom styles
</style>
