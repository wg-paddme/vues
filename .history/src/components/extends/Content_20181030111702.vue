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
          <div class="containers">
            <div v-for="(item, key) in newsListShow">
              <news-cell
              :newsDate="item"
              :key="key"
              ></news-cell>
            </div>
          </div>
      </Content>
  </Layout>
</template>
<script>
import Api from "../../axios/api.js"
import NewCell from "./NewCell";
export default {
  name: 'containers',
  data:{
    return {
      newsListShow: []
    };
  },
  components:{
    NewCell
  },
  created() {
    debugger;
    this.setNewsApi();
  },
  methods:{
    setNewsApi: function() {
      api.JH_news('/news/index', 'type=top&key=123456')
      .then(res => {
        console.log(res);
        this.newsListShow = res.articles;
      });
    },
  }
}
</script>

