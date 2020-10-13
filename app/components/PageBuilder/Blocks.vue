<template>
    <Page class="single-post-page">

        <StackLayout orientation="vertical" class="content">

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
                    @tap="closeCurrentPost"
                    width="15"
                    marginLeft="20"
                    android:marginTop="20"
                />

                <Label
                    text="currentPostTitle"
                    fontSize="20"
                    horizontalAlignment="center"
                    verticalAlignment="center"
                    marginRight="15"
                    android:marginTop="20"
                    col="1"
                    color="white"
                />

            </GridLayout>

                    <HtmlView v-for="block in blocks"
                        :html="block.content"
                    ></HtmlView >

        </StackLayout>

    </Page>

</template>

<script>
  export default  {

    data() {
      return {
        blocks: []
      }
    },
    mounted(){
      this.$root.$on('page::open', (data) => {
        for (let i=0;i<data.length;i++){
          this.blocks.push(data[i])
        }
      });
    },
    methods: {
      closeCurrentPost() {
        this.$modal.close();
      },
    }
  }

</script>

<style>

</style>
