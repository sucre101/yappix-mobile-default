<template>
  <Page id="selfProfileModal">

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
            @tap="completeModal"
            width="15"
            marginLeft="20"
            android:marginTop="20"
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

      <ListView class="list-group" for="item in locItems" @itemTap="choose" height="100%">
        <v-template>
          <FlexboxLayout flexDirection="row" class="list-group-item">
            <Label
                :text="item.name"
                class="list-group-item-heading"
                style="width: 60%"
                :class="{ activeChoose: selectedId === item.id }"
            />
          </FlexboxLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>

export default {

  data() {
    return {
      locItems: [],
      selectedId: 1,
      title: 'Select list'
    }
  },

  created() {
    this.$root.$on('profile::modal', (data) => {
      this.locItems = data.items;
      this.title = data.modalTitle;
      this.selectedId = data.selected;
    })
  },

  destroyed() {
    this.$root.$off('profile::modal', () => {
      this.locItems = [];
      this.title = '';
      this.selectedId = 0;
    });
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
</script>

<style lang="scss" scoped>
@import "self-profile-modal";
</style>
