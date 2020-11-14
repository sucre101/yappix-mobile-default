<template>
  <Page class="page-notification" actionBarHidden="true">
    <ActivityIndicator :busy="isBusy"  class="activity-indicator" color="red" width="100" height="100"/>

    <StackLayout orientation="vertical" height="100%" class="content__list">

      <ListView for="notif in notifications" v-if="!isBusy" separatorColor="#f1f9ff" height="100%" width="100%">
        <v-template>

          <GridLayout rows="auto, auto" padding="15">

            <StackLayout row="0" padding="0" class="notify-item">

              <GridLayout columns="50, 250, *">

                <StackLayout class="profile-photo" col="0">
                  <Label class="fas" text.decode="&#xf007;"/>
                </StackLayout>

                <StackLayout col="1">
                  <Label :text="notif.owner.name" fontSize="15" style="font-weight: 500; margin-top: -10; margin-left: -5" color="#0989cc"/>
                  <Label fontSize="12" color="#4d4d4d" style="margin-left: -5; margin-top: -5">
                    <FormattedString>
                      <span :text="notif.action + ' . '"/>
                      <span :text="notif.created" />
                    </FormattedString>
                  </Label>
                </StackLayout>

                <Image src.decode="font://&#xf142;" class="fas" width="20" height="20" col="2" tintColor="#2699fb" horizontalAlignment="right"/>

              </GridLayout>

            </StackLayout>

            <StackLayout row="1" backgroundColor="#7fffd4" padding="0">

              <GridLayout columns="150, *">

                <StackLayout col="0" width="100" padding="20 0">

                  <Image :src="notif.thumb" stretch="aspectFit" />

                </StackLayout>

                <Label text="123123123131" col="1"/>

              </GridLayout>

            </StackLayout>



          </GridLayout>

        </v-template>
      </ListView>

    </StackLayout>

  </Page>
</template>

<script>
export default {

  data() {
    return {
      isBusy: false,
      notifications: [
        {
          action: 'new comment',
          owner: {
            id: 1,
            name: 'Alex',
          },
          comment: 'Some text',
          created: '20.12.2020',
          thumb: 'https://wall2mob.com/m/wp-DishonoredVideoGameWide_37616-cprw.jpg?i=37616&w=640&h=480&fdl=0'
        },
        {
          action: 'new comment',
          owner: {
            id: 1,
            name: 'Sergey'
          },
          comment: 'Some text',
          created: '20.12.2020',
          thumb: 'https://imag.malavida.com/mvimgbig/download-fs/fondo-de-pantalla-hello-kitty-12641-2.jpg'
        },
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
@import "notification";
</style>
