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
            text="Checkout"
            fontSize="20"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginRight="15"
            android:marginTop="20"
            col="1"
            color="white"
        />
      </GridLayout>

      <GridLayout rows="*,50">
        <ScrollView row="0">

          <FlexboxLayout flexDirection="column" width="100%">

            <RadDataForm :source="user" />

          </FlexboxLayout>

        </ScrollView>
        <StackLayout row="1" horizontalAlignment="center" width="100%" alignSelf="center">
          <Label class="confirm" text="Confirm" backgroundColor="#4e7fff" textAlignment="center" @tap="_confirm"/>
        </StackLayout>
      </GridLayout>

    </StackLayout>
  </Page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {ECModule} from '~/route-list'

let plugin = require('@nativescript/core/platform')

export default {

  props: ['products'],

  data() {
    return {
      name: 'Camel',
      user: {
        name: '',
        email: '',
        phone: '',
        delivery_address: '',
        comment: '',
      }
    }
  },

  computed: {

    ...mapGetters({
      'isLoggedIn': 'User/isLoggedIn',
      'getUuid': 'User/getUuid'
    })

  },

  methods: {

    ...mapActions({
      'clear': 'ECCart/clearCart',
      'insertOrder': 'ECCart/insertOrder'
    }),

    closeModal() {
      this.$modal.close()
    },

    _confirm() {

      let data = {
        products: this.products,
      }

      data.user_data = this.user
      data.module_id = this.$app.cfg.modules.ecommerce.id
      data.uuid = this.getUuid

      this.$app.api.post(ECModule.checkout, data)
          .then((res) => {

            if (res.success) {
              this.insertOrder(res.order_id)
              this.clear()
            }

          })
        .then(res => this.$modal.close())
    }
  }
}
</script>

<style scoped lang="scss">
.confirm {
  padding-top: 13;
  padding-bottom: 10;
  color: white;
  width: 100%;
  height: 100%;
  font-size: 16;
}
</style>
