<template>
  <Page id="registration" class="registration">

    <ActionBar flat="true">
      <GridLayout columns="auto,*" ios:padding="0" class="topBar">

        <Image src="res://menu" col="0" @tap="onDrawerButtonTap" />
        <Label text="SIGN UP PAGE" class="topBar-title" col="1"/>

      </GridLayout>
    </ActionBar>

    <StackLayout class="main-block" orientation="vertical">
      <GridLayout
          rows="auto, auto, auto, auto, auto, auto, auto"
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
        <TextField keyboardType="phone" row="1" v-model="phone" v-show="selectedVariant === 'sms'"/>

<!--        <GridLayout v-show="selectedVariant === 'sms'"-->
<!--                    row="1"-->
<!--                    columns="auto, auto"-->
<!--                    width="100"-->
<!--                    height="40"-->
<!--                    horizontalAlignment="left"-->
<!--                    verticalAlignment="center"-->
<!--                    marginTop="-5"-->
<!--                    marginLeft="15"-->
<!--        >-->
<!--          <Label :text="defCountryCode" fontSize="18" @tap="showCountryModal"/>-->
<!--        </GridLayout>-->

        <TextField hint="name" row="2" v-model="name"/>

        <TextField hint="password" secure="true" row="3" v-model="password"/>

        <TextField hint="repeat password" secure="true" row="4" v-model="repeatPassword"/>

        <Button text="sign in" row="5" @tap="sendForm" style="z-index: 0"/>

        <StackLayout row="6" marginTop="30">

          <GridLayout columns="50, *" rows="auto, auto, auto">

            <StackLayout @tap="changeValue" verticalAlignment="top" horizontalAlignment="left" col="0" row="0" class="checkbox">
              <Image src.decode="font://&#xf00c;" class="fas" v-show="agree === true"/>
              <Image v-show="agree === false"/>
            </StackLayout>

            <Label :text="agreeText" textWrap="true" col="1" row="0" fontSize="16" marginTop="-5" color="#909090"/>

            <Label col="1" row="1" marginTop="25" textAlignment="left" textWrap="true" style="padding-right: 10" @tap="goToLogin">

              <FormattedString>
                <Span
                    text="If you already have an account, please "
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
import SelectedPageService from "../../../shared/selected-page-service";
import Auth from "~/components/templates/auth/Auth";
import CountryModal from "~/components/templates/register/CountryModal";

export default {

  components: {
    Auth, CountryModal
  },

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      repeatPassword: '',
      selectedVariant: 'email',
      agree: false,
      error: false,
      agreeText: 'I consent to the processing of personal data and accept the terms of the service',
      defCountryCode: 38
    }
  },

  watch: {

    repeatPassword(val) {
      setTimeout(() => {
        this.error = this.password !== val;
      }, 1500)
    },

    password(val) {
      setTimeout(() => {
        this.error = val.length < 6
      }, 1500)
    },



  },

  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Browse");
  },

  methods: {

    onDrawerButtonTap() {
      utils.showDrawer();
    },

    showCountryModal() {
      this.$showModal(CountryModal, {
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      });
    },

    changeValue() {
      this.agree = !this.agree;
    },

    selectAuthType(type) {
      this.selectedVariant = type;
    },

    goToLogin() {
      this.$navigateTo(Auth);
    },

    sendForm() {

      if (!this.agree) {
        alert('You need check politics');
        return false;
      }

      if (this.error) {
        alert('You have error! Be careful');
        return false;
      }

      this.$app.api.post('auth/registration', { email: this.email, password: this.password })
        .then(res => console.log(res))
    }
  }
};
</script>

<style scoped lang="scss">
@import "registration";
</style>
