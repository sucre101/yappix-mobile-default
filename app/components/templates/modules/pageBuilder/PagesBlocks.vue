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
            :text="currentPostTitle"
            fontSize="20"
            horizontalAlignment="center"
            verticalAlignment="center"
            marginRight="15"
            android:marginTop="20"
            col="1"
            color="white"
        />

      </GridLayout>
      <ScrollView orientation="vertical"  width="100%">
        <WrapLayout  width="100%">
          <WrapLayout
              :width="block.layout === '4'?'25%':
                    block.layout === '1-4'?'25%':
                    block.layout === '3-4'?'75%':
                    block.layout === '3'?'33.333%':
                    block.layout === '1-3'?'33.333%':
                    block.layout === '2-3'?'66.666%':
                    block.layout === '2'?'50%':'100%'"
              :height="block.template?block.template.height:'100%'"
              :color="block.template?block.template.color:'transparent'"
              :backgroundColor="block.template?block.template.bg_color:'transparent'"
              :borderWidth="block.template?block.template.border_width:'0'"
              :borderStyle="block.template?block.template.border_type:'none'"
              :borderColor="block.template?block.template.border_color:'none'"
              :borderRadius="block.template?block.template.border_radius:'0'"
              :textAlign="block.template?block.template.text_align:'left'"
              :overflow="block.template?block.template.overflow:'none'"
              :padding="block.template?block.template.padding:'0'"
              v-for="block in page.active_blocks"
              :key="block.id"
          >
            <PagesElements :elements="block.elements" />
          </WrapLayout>
        </WrapLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>

  import PagesElements from "~/components/templates/modules/pageBuilder/PagesElements";
  export default {

    components: {
      PagesElements
    },

    data() {
      return {
        page: {}
      }
    },

    computed: {
      currentPostTitle() {
        return this.page ? this.page.title : 'Page'
      }
    },

    mounted() {
      this.$root.$on('page::open', (data) => {
        this.page = data;
      });
    },

    methods: {
      closeCurrentPost() {
        this.$root.$off('page::open', this.clearPage);
        this.$modal.close();
      },

      clearPage() {
        this.page = {};
      }

    }

  }

</script>

<style scoped>

</style>
