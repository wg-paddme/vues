<style>
  .layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: inherit;
}
</style>
<template>
  <Layout :style="{padding: '0 4px 4px'}" class="content-box">
      <Content :style="{padding: '8px', minHeight: '280px', background: '#fff'}">
          <div class="contentx"></div>
      </Content>
  </Layout>
</template>
<script>
export default {
  name: 'cententx',
  newsListShow: [],
  components:{
    NewCell,
  },
  created() {
    this.setNewsApi();
  },
}
</script>

