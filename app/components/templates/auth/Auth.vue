<template>
  <Page id="authorization" class="authorization">

    <ActionBar flat="true">
      <GridLayout columns="auto,*" orientation="horizontal" ios:padding="0" class="topBar">

        <Image src="res://menu" col="0" @tap="onDrawerButtonTap" />
        <Label text="SIGN IN PAGE" class="topBar-title" col="1"/>

      </GridLayout>
    </ActionBar>

    <StackLayout class="main-block" orientation="vertical">
      <GridLayout
          rows="auto, auto, auto, auto, auto"
          verticalAlignment="center"
          horizontalAlignment="center"
          width="80%"
          margin="auto"
      >

        <StackLayout row="0" orientation="horizontal" class="switch-type">

          <Label text="Using email" @tap="selectAuthType('email')" :class="{ active: selectedVariant === 'email' }"/>
          <Label text="Using sms" @tap="selectAuthType('sms')" :class="{ active: selectedVariant === 'sms' }"/>

        </StackLayout>

        <TextField hint="email" keyboardType="email" row="1" v-model="email" v-show="selectedVariant === 'email'"/>
        <TextField hint="phone" keyboardType="phone" row="1" v-model="phone" v-show="selectedVariant === 'sms'"/>

        <TextField hint="password" secure="true" row="2" v-model="password"/>

        <Button text="sign in" row="3" @tap="sendForm" style="z-index: 0"/>

        <StackLayout row="4" marginTop="30">

          <GridLayout columns="50, *" rows="auto, auto, auto">

            <StackLayout @tap="changeValue" verticalAlignment="top" horizontalAlignment="left" col="0" row="0" class="checkbox">
              <Image src.decode="font://&#xf00c;" class="fas" v-show="agree === true"/>
              <Image v-show="agree === false"/>
            </StackLayout>

            <Label :text="agreeText" textWrap="true" col="1" row="0" fontSize="16" marginTop="-5" color="#909090"/>

            <Label col="1" row="1" marginTop="25" textAlignment="left" textWrap="true" style="padding-right: 10" @tap="goToRegister">

              <FormattedString>
                <Span
                    text="If you don’t have an account yet, please"
                    color="#909090"
                    fontSize="16"
                />
                <Span text=" Sign In" fontSize="16" color="#0989cc" style="font-weight: bold"/>
              </FormattedString>

            </Label>


          </GridLayout>

        </StackLayout>

      </GridLayout>

    </StackLayout>

  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import {mapActions, mapGetters} from 'vuex';
import Home from "~/components/Home";
import Register from "~/components/templates/register/Register";

export default {

  components: {
    Home, Register
  },

  data() {
    return {
      email: '',
      phone: '',
      password: '',
      selectedVariant: 'email',
      agree: false,
      agreeText: 'I consent to the processing of personal data and accept the terms of the service'
    }
  },

  computed: {
    ...mapGetters({
      getApiHeaders: 'User/getApiHeaders'
    }),
  },

  methods: {

    ...mapActions({
      saveToken: 'User/saveToken',
      saveUserData: 'User/saveUserData'
    }),

    goToRegister() {
      this.$navigateTo(Register);
    },

    changeValue() {
      this.agree = !this.agree;
    },

    selectAuthType(type) {
      this.selectedVariant = type;
    },

    onDrawerButtonTap() {
      utils.showDrawer();
    },

    sendForm() {

      if (!this.agree) {
        alert('You need check politics');
        return false;
      }

      this.$app.api.post('auth/login', {email: this.email, password: this.password})
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
