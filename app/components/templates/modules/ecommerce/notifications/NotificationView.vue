<template>
  <Page actionBarHidden="true" backgroundColor="#e1f0ff">
    <StackLayout orientation="vertical" height="100%">
      <ScrollView height="100%">
        <ListView for="(item, index) in notifications" separatorColor="#e1f0ff" ref="myList">
          <v-template>
            <FlexboxLayout class="message">
              <StackLayout>
                <FlexboxLayout flexDirection="row">
                  <WrapLayout width="8%" alignSelf="center" verticalAlignment="center" horizontalAlignment="center">
                    <Image :src="statuses[item.status_id].icon" tintColor="#0989CC" width="80%"/>
                  </WrapLayout>
                  <FlexboxLayout width="88%" alignSelf="center" flexDirection="column" justifyContent="center" @tap="_readNotification(item, index)">
                    <Label class="message-text" :text="formatData(item.data)"/>
                    <Label :text="item.created_at" alignSelf="flex-end"/>
                  </FlexboxLayout>
                </FlexboxLayout>
              </StackLayout>
            </FlexboxLayout>
          </v-template>
        </ListView>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import {ECModule} from '~/route-list'
import { mapGetters } from 'vuex'
import {NotificationStatuses} from "~/store/ListGetters";
import NotificationModal from "~/components/templates/modules/ecommerce/modals/NotificationModal";

export default {

  data() {
    return {
      notifications: [],
      statuses: NotificationStatuses
    }
  },

  mounted() {
    this._getNotifications()
  },

  computed: {
    ...mapGetters({
      'getUuid': 'User/getUuid'
    })
  },

  methods: {

    formatData($object) {
      let text = JSON.parse($object)
      return text.title
    },

    _readNotification(notification, index) {

      this.$showModal(NotificationModal, {
        props: { notification: notification },
        fullscreen: true,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then( res => this.notifications[index] = res )

    },

    _getNotifications() {

      this.$app.api.get(ECModule.getNotifications(this.$app.cfg.modules.ecommerce.id, this.getUuid))
        .then((res) => {

          this.notifications = []

          let list = [ ...res.notifications]

          list.forEach( val => {
            this.notifications.push(val)
          })
        })
    }

  }

}
</script>

<style scoped lang="scss">

.message {
  width: 100%;
  height: 70;
  justify-content: flex-start;
  flex-direction: row;
  StackLayout {
    background-color: #ffffff;
    align-self: center;
    padding: 5 10;
    border-radius: 10;
    width: 100%;
    .message-text {
      font-size: 15;
      color: #2a2a2a;
    }
  }
}

</style>
