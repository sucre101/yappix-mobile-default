<template>
  <Page actionBarHidden="true">

    <StackLayout height="100%">

      <ScrollView orientation="vertical"  height="100%"  width="100%">
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
              v-for="block in blocks"
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

  import { pageBuilder } from '~/route-list';
  import PagesElements from "~/components/templates/modules/pagebuilder/PagesElements";
  export default {

    components: {
      PagesElements
    },

    data() {
      return {
        blocks: [],
      }
    },

    computed: {
      currentPostTitle() {
        return  'Page'
      }
    },

    created() {
      this.getData();
    },


    methods: {
      getData() {

        this.$app.api.get(pageBuilder.getBlocks(this.$app.cfg.modules.pagebuilder.id))
        .then((res) => {
          if(res.success){
            this.blocks = [ ...res.blocks]
          }
        }, error => {
          // this.err = error
        })

      }

    }

  }

</script>

<style scoped>

</style>
