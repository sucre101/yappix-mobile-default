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
            width="15"
            marginLeft="20"
            android:marginTop="20"
            @tap="closeModal"
        />

        <Label
            :text="title"
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
import { ECModule } from '~/route-list'

export default {

  props: ['notification'],

  computed: {
    title() {
      let text = JSON.parse(this.notification.data)
      return text.title
    }
  },

  created() {

    if (this.notification.status_id === 1001) {

      this.$app.api.get(ECModule.notifyRead(this.$app.cfg.modules.ecommerce.id, this.notification.id))
        .then((res) => {
          this.notification.status_id = 1002
        })

    }

  },

  methods: {

    closeModal() {

      this.$modal.close(1002)

    }

  }

}
</script>

<style scoped>

</style>
