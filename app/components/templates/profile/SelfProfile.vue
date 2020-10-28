<template>
  <Page id="selfProfile">

    <ActionBar flat="true">
      <GridLayout columns="auto,*, auto" orientation="horizontal" ios:padding="0" class="topBar">

        <Image src="res://menu" col="0" @tap="onDrawerButtonTap" class="o-menu"/>
        <Label text="My Profile" class="topBar-title" col="1"/>
        <Image class="fas three-dots-options" src.decode="font://&#xf2f5;" col="2" @tap="logoutProfile"/>

      </GridLayout>
    </ActionBar>

    <StackLayout class="profile-form">

      <StackLayout class="profile-photo">
        <Label class="fas" text.decode="&#xf007;"/>
      </StackLayout>

      <StackLayout class="form">

        <ScrollView>
          <StackLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="First Name" row="0"/>
              <TextField hint="Required Field" row="1" class="input-field" v-model="user.name"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="Last Name" row="0"/>
              <TextField hint="Required Field" row="1" class="input-field"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="E-Mail" row="0"/>
              <TextField hint="email" row="1" class="input-field" keyboardType="email" v-model="user.email"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="Password" row="0"/>
              <Label text="error" row="1" color="red" horizontalAlignment="right" v-show="passwordError"/>
              <TextField hint="Required Field" v-model="newPassword" secure="true" row="1" class="input-field"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="Password repeat" row="0"/>
              <TextField hint="Required Field" v-model="repeatPassword" secure="true" row="1" class="input-field"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="Gender" row="0"/>
              <StackLayout class="input-field" verticalAlignment="center" row="1">
                <Label :text="gender" @tap="selectGender" marginTop="10"/>
              </StackLayout>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="Country" row="0"/>
              <StackLayout class="input-field" verticalAlignment="center" row="1">
                <Label :text="country" @tap="selectCountry" marginTop="10"/>
              </StackLayout>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="About me" row="0"/>
              <TextView text="dadhaskhdjka" hint="Required Field" row="1" class="text-field"/>
            </GridLayout>

            <FlexboxLayout class="action-buttons">
              <Button text="Save" class="save"/>
              <Button text="Cancel" class="cancel" @tap="navBack"/>
            </FlexboxLayout>

          </StackLayout>
        </ScrollView>

      </StackLayout>

    </StackLayout>

  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import {GendersList, CountriesList} from "~/store/ListGetters";
import SelfProfileModal from "~/components/templates/profile/modals/SelfProfileModal";
import {mapActions, mapGetters} from 'vuex';
import Auth from "~/components/templates/auth/Auth";

export default {

  components: {
    GendersList, CountriesList, SelfProfileModal
  },

  data() {
    return {
      selectActive: false,
      gendersList: GendersList,
      countriesList: CountriesList,
      authPage: Auth,
      user: {},
      newPassword: '',
      repeatPassword: '',
      passwordError: false,
      errorMessage: ''
    }
  },

  watch: {

    newPassword(val) {

      setTimeout(() => {
        this.passwordError = val.length < 6;
      }, 1500)
    },

    repeatPassword(val) {

      setTimeout(() => {
        this.passwordError = this.newPassword !== val;
      }, 1500);
    }

  },

  computed: {
    ...mapGetters({
      'userData': 'User/getUserData'
    }),

    gender() {
      let gender = this.gendersList[0].name;

      this.gendersList.find((data) => {
        if (data.id === this.user.gender_id) {
          gender = data.name;
        }
      })

      return gender;
    },

    country() {
      let country = this.countriesList[0].name;

      this.countriesList.find((data) => {
        if (data.id === this.user.country_id) {
          country = data.name;
        }
      })

      return country;
    }

  },

  created() {
    this.user = this.userData ? this.userData : {};


  },

  methods: {

    ...mapActions({
      logout: 'User/logout'
    }),

    onButtonTap() {
      console.log("Button was pressed");
    },

    onDrawerButtonTap() {
      utils.showDrawer();
    },

    setDefaultUserData() {
      return {
        name: '',
        email: '',
        gender_id: 0,
        country_id: 0
      }
    },

    selectGender() {

      this.$showModal(SelfProfileModal, {
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then(result => this.user.gender_id = result);

      this.$root.$emit('profile::modal', {
        items: this.gendersList,
        selected: this.user.gender_id,
        modalTitle: 'Select your gender'
      });
    },

    selectCountry() {

      this.$showModal(SelfProfileModal, {
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then(result => this.user.country_id = result);

      this.$root.$emit('profile::modal', {
        items: this.countriesList,
        selected: this.user.country_id,
        modalTitle: 'Select your country'
      });
    },

    logoutProfile() {
      this.user = this.setDefaultUserData();
      this.logout();
      this.$root.$emit('auth');
      this.$navigateTo(this.authPage);
    },

    navBack() {
      this.$navigateBack();
    },

  }
};
</script>

<style lang="scss" scoped>
@import "self-profile";
</style>
