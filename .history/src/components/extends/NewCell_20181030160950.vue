<template>
  <div class="new-cell">
  <section class="financial-list">
    <section class="collect" @click="jumpPage">
      <aside>
        <Row type="flex">
          <Col span="6" order="1">{{newsDate.title}}</Col>
          <Col span="6" order="2"><img class="fl" src="./../../assets/logo.png" style="width:1rem; height:1rem"></Col>
          <Col span="6" order="3">{{newsDate.licNumber}}</Col>
          <Col span="6" order="4">{{(newsDate.buyTime) | formatDate}}</Col>
        </Row>
      <div style="clear: both"></div>
      </aside>
      <div style="clear: both"></div>
    </section>
  </section>
  </div>
</template>

<script>
export default {
  name: 'NewsCell',
  props: {
    newsDate: Object
  },
  data () {
    return {}
  },
  filters:{
    formatDate:function (val) {
        var value=new Date(val);
        var year=value.getFullYear();
        var month=padDate(value.getMonth()+1);
        var day=padDate(value.getDate());
        var hour=padDate(value.getHours());
        var minutes=padDate(value.getMinutes());
        var seconds=padDate(value.getSeconds());
        return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
    }
  },
  computed:{

  },
  methods: {
    jumpPage: function () {
      window.location.href = this.newsDate.url
    }
  }
}
</script>

<style scoped>
.financial-list {
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 0.28rem 0;
  border-bottom: 1px solid #ccc;
}

.financial-list .collect {
  width: 92%;
  margin: 0 auto;
}

.financial-list .collect aside:nth-of-type(1) {
  width: 63%;
  float: left;
}

.financial-list .collect aside:nth-of-type(2) {
  width: 32%;
  height: 2rem;
  float: left;
  margin-left: 0.3rem;
}

.financial-list .collect h2 {
  width: 100%;
  height: 0.96rem;
  font-size: 0.32rem;
  color: #333333;
  line-height: 0.48rem;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
}

.financial-list .collect aside:nth-of-type(2) img {
  width: 100%;
  height: 100%;
}

.financial-list .collect aside .Cleft {
  width: 45%;
  float: left;
  margin-top: 0.66rem;
}

.financial-list .collect aside .Cleft span{
  display: block;
  width: 1.4rem;
  margin-left: 0.05rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
}

.financial-list .collect aside .Cright {
  width: 55%;
  float: right;
  margin-top: 0.66rem;
}
.financial-list .collect aside .Cright span{
  display: inline-block;
  margin: 0.04rem 0 0 0.05rem;
}
.financial-list .collect aside span {
  font-size: 0.2rem;
  color: #999999;
}

.financial-list .collect aside .Cleft img,
.financial-list .collect aside .Cright img {
  width: 1rem;
  height: 1rem;
  margin-top: 0.09rem;
}
</style>
