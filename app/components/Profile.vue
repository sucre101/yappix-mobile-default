<template>
  <Page class="page">

    <ActionBar backgroundColor="white" flat="true">

      <GridLayout
          columns="auto, *"
          ios:padding="0"
          height="100%"
          width="100%">

        <Image
            src="res://menu"
            horizontalAlignment="left"
            verticalAlignment="center"
            tintColor="#067dbc"
            @tap="onDrawerButtonTap"
            col="0"
            width="15"
            marginLeft="10"
        />

        <Label
            text="Profile"
            style="text-transform: uppercase; font-weight: bold"
            fontSize="20"
            color="#067dbc"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginRight="15"
            col="1"
        />

      </GridLayout>

    </ActionBar>

    <StackLayout horizontalAlignment="center">

      <GridLayout rows="auto, auto, auto, auto, auto">

        <FlexboxLayout
            width="70" height="70"
            alignItems="center"
            borderRadius="40"
            backgroundColor="#b8e5fd"
            justifyContent="center"
            marginTop="30"
            flexDirection="column"
            row="0"
        >
          <Image
              src="~/images/user_icon.png"
              width="30"
              height="30"
          />
        </FlexboxLayout>

        <Label :text="firstname + ' ' + lastname" row="1" horizontalAlignment="center" style="font-weight: bold" fontSize="20" color="#067dbc"/>
        <Label :text="email" row="2" horizontalAlignment="center"/>

        <Label
            :text="about"
            row="3"
            horizontalAlignment="center"
            textWrap="true"
            textAlignment="center"
            style="padding: 0 20px"
            fontSize="17"
            color="#747474"
            marginTop="25"
        />

        <GridLayout columns="auto, auto" row="4" marginTop="30" horizontalAlignment="center">

          <Button
              text="Folow"
              style="text-transform: uppercase; color: white"
              backgroundColor="#067dbc"
              borderRadius="4"
              width="100"
              height="40"
              col="0"
          />

          <Button
              text="Message"
              style="text-transform: uppercase; color: #067dbc"
              borderRadius="4"
              borderWidth="1"
              borderColor="#b8e5fd"
              width="100"
              height="40"
              col="1"
          />

        </GridLayout>

      </GridLayout>



    </StackLayout>

  </Page>
</template>

<script>
import * as utils from "~/shared/utils";

export default  {

  data() {
    return {
      firstname: 'John',
      lastname: 'Doe',
      avatar: '',
      email: 'exanple@mail.ru',
      about: 'Hi! My name is John, I’m a creative geek from San Francisco, CA. Contact me at john@mail.com'
    }
  },

  methods: {

    onDrawerButtonTap() {
      utils.showDrawer();
    },

  }

}

</script>

<style lang="scss" scoped>
StackLayout {
 background-color: #f1f9ff;
}
</style>
