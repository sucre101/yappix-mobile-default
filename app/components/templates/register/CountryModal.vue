<template>
  <Page id="countryListModal">

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

      <ListView for="item in list" @itemTap="choose" height="100%">
        <v-template>
          <StackLayout orientation="horizontal" width="100%">
            <Label :text="item.emoji"/>
            <Label :text="item.name" />
            <Label :text="'+' + item.phone" horizontalAlignment="right" textAlignment="right"/>
          </StackLayout>

        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import { countries } from 'countries-list';

export default {

  data() {
    return {
      countryList: [],
      title: 'Choose your country code',
      selected: false,
    }
  },

  computed: {

    list() {
      for (let item in countries) {
        countries[item].base = item;
        this.countryList.push(countries[item])
      }
      return this.countryList;
    }

  },

  methods: {
    completeModal() {
      this.$modal.close(this.selected);
    },

    choose(sel) {
      this.selected = sel.item.base;
      this.completeModal();
    }
  }

}
</script>
