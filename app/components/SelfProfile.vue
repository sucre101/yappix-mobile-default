<template>
  <Page class="page">

    <ActionBar backgroundColor="white" flat="true">

      <GridLayout
          columns="auto,*, auto"
          orientation="horizontal"
          ios:padding="0"
          height="100%"
          width="100%">

        <Image
            src="res://menu"
            horizontalAlignment="left"
            verticalAlignment="center"
            tintColor="#067dbc"
            col="0"
            @tap="onDrawerButtonTap"
            width="15"
            marginLeft="10"
        />

        <Label
            text="My Profile"
            style="text-transform: uppercase; font-weight: bold"
            fontSize="20"
            color="#067dbc"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginRight="15"
            col="1"
        />

        <Image
            class="fas"
            width="5"
            src.decode="font://&#xf142;"
            horizontalAlignment="right"
            verticalAlignment="center"
            tintColor="#067dbc"
            marginRight="25"
            col="2"
        />

      </GridLayout>

    </ActionBar>

    <StackLayout width="100%" orientation="vertical">

      <StackLayout backgroundColor="#b8e5fd">
        <Label
            class="fas"
            text.decode="&#xf007;"
            color="white"
            fontSize="110"
            horizontalAlignment="center"
            style="padding-top: 80px; padding-bottom: 80px"
        />
      </StackLayout>

      <StackLayout width="100%" backgroundColor="#f1f9ff" height="100%">

        <ScrollView orientation="vertical">
          <StackLayout orientation="vertical">

            <GridLayout rows="auto, auto" class="input-group" horizontalAlignment="center">
              <Label text="First Name" row="0"/>
              <TextField  hint="Required Field" row="1" class="input-field"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group" horizontalAlignment="center">
              <Label text="Last Name" row="0"/>
              <TextField  hint="Required Field" row="1" class="input-field"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group" horizontalAlignment="center">
              <Label text="E-Mail" row="0"/>
              <TextField  hint="email" row="1" class="input-field" keyboardType="email"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group" horizontalAlignment="center">
              <Label text="Password" row="0"/>
              <TextField  hint="Required Field" secure="true" row="1" class="input-field"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group" horizontalAlignment="center">
              <Label text="Password repeat" row="0"/>
              <TextField  hint="Required Field" secure="true" row="1" class="input-field"/>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group" horizontalAlignment="center">
              <Label text="Gender" row="0"/>
              <StackLayout class="input-field" verticalAlignment="center" row="1">
                <Label :text="gendersList[profileGenderId].name" @tap="selectGender" marginTop="10"/>
              </StackLayout>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group" horizontalAlignment="center">
              <Label text="Country" row="0"/>
              <StackLayout class="input-field" verticalAlignment="center" row="1">
                <Label :text="countriesList[profileCountryId - 1].name" @tap="selectCountry" marginTop="10"/>
              </StackLayout>
            </GridLayout>

            <GridLayout rows="auto, auto" class="input-group" horizontalAlignment="center">
              <Label text="About me" row="0"/>
              <TextView  hint="Required Field" row="1" class="text-field"/>
            </GridLayout>

            <GridLayout columns="auto, auto">
              <Button
                  text="Save"
                  style="text-transform: uppercase; color: white"
                  backgroundColor="#067dbc"
                  borderRadius="2"
                  width="170"
                  marginTop="10"
                  col="0"
                  horizontalAlignment="left"
              />

              <Button
                  text="Cancel"
                  style="text-transform: uppercase; color: #067dbc"
                  borderRadius="2"
                  borderWidth="1"
                  borderColor="#b8e5fd"
                  width="170"
                  marginTop="10"
                  col="1"
                  horizontalAlignment="right"
              />

            </GridLayout>

          </StackLayout>
        </ScrollView>

      </StackLayout>

    </StackLayout>
W

  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { GendersList, CountriesList } from "~/store/ListGetters";

const GenderModal = {
  template: `
    <Frame>
      <Page>
        <ActionBar title="Choose your gender" backgroundColor="white" flat="true" color="#067dbc" verticalAlignment="center">
          <ActionItem @tap="completeModal"  ios.systemIcon="1" android.systemIcon="ic_menu_close_clear_cancel" ios.position="right"/>
        </ActionBar>
        <StackLayout>
          <ListView class="list-group" for="item in locItems" @itemTap="choose" style="height:1250px">
            <v-template>
              <FlexboxLayout flexDirection="row" class="list-group-item">
                <Label :text="item.name" class="list-group-item-heading" style="width: 60%" :class="{ activeChoose: selectedId === item.id }" />
              </FlexboxLayout>
            </v-template>
          </ListView>
        </StackLayout>
      </Page>
    </Frame>
  `,

  data() {
    return {
      locItems: GendersList,
      selectedId: 0,
    }
  },

  methods: {

    completeModal() {
      this.$modal.close(this.selectedId);
    },

    choose(sel) {
      this.selectedId = sel.item.id;
      this.completeModal();
    }

  }
}

const CountryModal = {
  template: `
    <Frame>
      <Page>
        <ActionBar title="Choose your country" backgroundColor="white" flat="true" color="#067dbc" verticalAlignment="center">
          <ActionItem @tap="completeModal"  ios.systemIcon="1" android.systemIcon="ic_menu_close_clear_cancel" ios.position="right"/>
        </ActionBar>
        <StackLayout>
          <ListView class="list-group" for="item in locItems" @itemTap="choose">
            <v-template>
              <FlexboxLayout flexDirection="row" class="list-group-item">
                <Label :text="item.name" class="list-group-item-heading" style="width: 60%" :class="{ activeChoose: selectedId === item.id }" />
              </FlexboxLayout>
            </v-template>
          </ListView>
        </StackLayout>
      </Page>
    </Frame>
  `,

  data() {
    return {
      locItems: CountriesList,
      selectedId: 1,
    }
  },

  methods: {

    completeModal() {
      this.$modal.close(this.selectedId);
    },

    choose(sel) {
      this.selectedId = sel.item.id;
      this.completeModal();
    }

  }
}

export default {

  components: {
    GendersList, CountriesList
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
      this.$showModal(GenderModal, {
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then( result => this.profileGenderId = result )
    },

    selectCountry() {
      this.$showModal(CountryModal, {
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then( result => this.profileCountryId = result )
    }

  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import '~@nativescript/theme/scss/variables/blue';
// End custom common variables
.input-group {
  align-items: center;
  margin: 0;
  padding: 0;
  color: #239ddd;
  margin-top: 10;
  Label {
    font-size: 18;
    font-weight: bold;
    margin-bottom: 10;
    margin-right: 10;
  }
  .text-field {
    height: 100;
    border-width: 1;
    border-color: #4dbbf5;
    width: 95%;
    font-size: 18;
    margin: 0;
    padding: 0;
    placeholder-color: #4dbbf5;
    padding-left: 15;
    font-weight: 400;
    Label {
      font-weight: 400;
    }
  }

  .input-field {
    border-width: 1;
    border-color: #4dbbf5;
    width: 95%;
    height: 50;
    font-size: 18;
    margin: 0;
    padding: 0;
    placeholder-color: #4dbbf5;
    padding-left: 15;
    font-weight: 400;

    Label {
      font-weight: 400;
    }
  }
}

</style>
