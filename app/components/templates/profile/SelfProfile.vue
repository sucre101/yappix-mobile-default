<template>
  <Page id="selfProfile">

    <ActionBar flat="true">
      <GridLayout columns="auto,*, auto" orientation="horizontal" ios:padding="0" class="topBar">

        <Image src="res://menu" col="0" @tap="onDrawerButtonTap" class="o-menu" />
        <Label text="My Profile" class="topBar-title" col="1" />
        <Image class="fas three-dots-options" src.decode="font://&#xf142;" col="2" />

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
              <TextField  hint="Required Field" row="1" class="input-field"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="Last Name" row="0"/>
              <TextField  hint="Required Field" row="1" class="input-field"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="E-Mail" row="0"/>
              <TextField  hint="email" row="1" class="input-field" keyboardType="email"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="Password" row="0"/>
              <TextField  hint="Required Field" secure="true" row="1" class="input-field"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="Password repeat" row="0"/>
              <TextField  hint="Required Field" secure="true" row="1" class="input-field"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="Gender" row="0"/>
              <StackLayout class="input-field" verticalAlignment="center" row="1">
                <Label :text="gendersList[profileGenderId].name" @tap="selectGender" marginTop="10"/>
              </StackLayout>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="Country" row="0"/>
              <StackLayout class="input-field" verticalAlignment="center" row="1">
                <Label :text="countriesList[profileCountryId - 1].name" @tap="selectCountry" marginTop="10"/>
              </StackLayout>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group">
              <Label text="About me" row="0"/>
              <TextView text="dadhaskhdjka" hint="Required Field" row="1" class="text-field" />
            </GridLayout>

            <FlexboxLayout class="action-buttons">
              <Button text="Save" class="save" />
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
import { GendersList, CountriesList } from "~/store/ListGetters";
import SelfProfileModal from "~/components/templates/profile/modals/SelfProfileModal";

export default {

  components: {
    GendersList, CountriesList, SelfProfileModal
  },

  data() {
    return {
      selectActive: false,
      profileGenderId: 0,
      gendersList: GendersList,
      countriesList: CountriesList,
      profileCountryId: 1,
    }
  },

  methods: {

    onButtonTap() {
      console.log("Button was pressed");
    },

    onDrawerButtonTap() {
      utils.showDrawer();
    },

    selectGender() {

      this.$showModal(SelfProfileModal, {
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then( result => this.profileGenderId = result );

      this.$root.$emit('profile::modal', {
        items: this.gendersList,
        selected: this.profileGenderId,
        modalTitle: 'Select your gender'
      });
    },

    selectCountry() {

      this.$showModal(SelfProfileModal, {
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then( result => this.profileCountryId = result );

      this.$root.$emit('profile::modal', {
        items: this.countriesList,
        selected: this.profileCountryId,
        modalTitle: 'Select your country'
      });
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
