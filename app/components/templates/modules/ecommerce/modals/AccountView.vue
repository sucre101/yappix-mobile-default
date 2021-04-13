<template>
  <Page>

    <StackLayout>

      <GridLayout
          columns="auto,*"
          orientation="horizontal"
          ios:padding="0"
          ios:style="height: 60"
          android:style="height: 80"
          width="100%"
          backgroundColor="#0989cc"
      >

        <Image
            src="~/images/b-arrow.png"
            horizontalAlignment="left"
            verticalAlignment="center"
            col="0"
            @tap="goBack"
            width="15"
            marginLeft="20"
            android:marginTop="20"
        />

        <Label
            text="Account"
            fontSize="20"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginRight="15"
            android:marginTop="20"
            col="1"
            color="white"
        />
      </GridLayout>

      <GridLayout v-if="isLoggedIn">

        <Label text="some"/>

      </GridLayout>

      <StackLayout v-else orientation="horizontal" width="100%" height="100%" horizontalAlignment="center" verticalAlignment="center">
        <Label fontSize="20" text="Auth"/>
      </StackLayout>

    </StackLayout>

  </Page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters({
      'isLoggedIn': 'User/isLoggedIn'
    })
  },

  created() {

  },

  mounted() {
    console.log(this.isLoggedIn)
  },

  methods: {

    goBack() {
      this.$modal.close()
    },

    onPaymentCardTextFieldDidChange($event) {
      console.log($event)
    }

  }

}
</script>

<style scoped>

</style>
