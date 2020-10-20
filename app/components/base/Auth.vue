<template>
  <Page id="authorization" actionBarHidder="true">

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
import { mapActions, mapGetters } from 'vuex';
import Home from "~/components/Home";

export default {

  components: {
    Home
  },

  data() {
    return {
      email: '',
      password: '',
    }
  },

  computed: {
    ...mapGetters({
      getApiHeaders: 'User/getApiHeaders'
    })
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
            this.saveUserData(res.user);
            this.saveToken(res.access_token);
            this.$app.api.setHeader(this.getApiHeaders)
          }).then(() => {
            this.$root.$emit('auth')
            this.$navigateTo(Home);
      });
    }
  }
};
</script>

<style scoped lang="scss">

@import "auth";

</style>
