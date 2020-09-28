<template>
    <Page class="page">
        <ActionBar class="action-bar">
          <GridLayout
              columns="auto,*, auto"
              orientation="horizontal"
              ios:padding="0 10"
              height="100%"
              width="100%">

            <Image
                width="20"
                src="~/images/sb-menu.png"
                horizontalAlignment="left"
                verticalAlignment="center"
                tintColor="white"
                col="0"
                @tap="onDrawerButtonTap"
            />

            <Label
                text="Home"
                style="text-transform: uppercase"
                fontSize="18"
                color="white"
                horizontalAlignment="center"
                verticalAlignment="center"
                marginRight="25"
                col="1"
            />

          </GridLayout>
        </ActionBar>

        <GridLayout class="page__content">
            <Label class="page__content-icon fas" text.decode="&#xf015;"/>
            <Label class="page__content-placeholder" :text="message"/>
        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import SelectedPageService from "../shared/selected-page-service";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");
    },
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
