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
            @tap="closeModal"
            width="15"
            marginLeft="20"
            android:marginTop="20"
        />

        <Label
            :text="store.name"
            fontSize="20"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginRight="15"
            android:marginTop="20"
            col="1"
            color="white"
        />

      </GridLayout>

    </StackLayout>
  </Page>
</template>

<script>
export default {

  props: ['store'],

  mounted() {
    console.log(this.store)
  },

  methods: {

    closeModal() {
      this.$modal.close()
    }

  }

}
</script>

<style scoped>

</style>
