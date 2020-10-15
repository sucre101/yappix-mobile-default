<template>
  <Page id="profile">

    <ActionBar flat="true">
      <GridLayout columns="auto, *" ios:padding="0">

        <Image src="res://menu" @tap="onDrawerButtonTap" col="0" />
        <Label text="Profile" col="1"/>

      </GridLayout>
    </ActionBar>

    <StackLayout>

      <GridLayout rows="auto, auto, auto, auto, auto">

        <FlexboxLayout row="0">
          <Image src="~/images/user_icon.png" />
        </FlexboxLayout>

        <Label :text="firstname + ' ' + lastname" row="1" class="fl-name" />
        <Label :text="email" row="2" horizontalAlignment="center"/>

        <Label :text="about" class="about" row="3" textWrap="true" />

        <GridLayout columns="auto, auto" row="4" class="btn-action">
          <Button text="Follow" class="follow" col="0" />
          <Button text="Message" class="message" col="1" />
        </GridLayout>

      </GridLayout>

    </StackLayout>

  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import SampleBtn from "~/components/ui/SampleBtn";

export default  {

  components: {
    SampleBtn
  },

  data() {
    return {
      firstname: 'John',
      lastname: 'Doe',
      avatar: '',
      email: 'exanple@mail.ru',
      about: 'Hi! My name is John, I’m a creative geek from San Francisco, CA. Contact me at john@mail.com',
      sample: []
    }
  },

  mounted() {
    this.getData();
  },

  methods: {

    onDrawerButtonTap() {
      utils.showDrawer();
    },

    follow() {
      console.log(123)
    },

    sendMessage() {
      console.log('send message')
    }

  }

}

</script>

<style lang="scss" scoped>
@import "profile";
</style>
