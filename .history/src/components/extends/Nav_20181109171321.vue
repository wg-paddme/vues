<style>
.ivu-layout {
  height: inherit;
}

.ivu-layout-header {
  padding: 0 20px;
}
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>

<template>
     <Sider hide-trigger :style="{background: '#fff'}" width="250px" collapsible :collapsed-width="78" v-model="isCollapsed" class="menus" >
          <Menu
          :active-name='1-5'
          theme="light" ref="menuss"  width="auto"  :class="menuitemClasses" accordion>
            <Submenu v-for="(menu, key) in menuLists" :key="key" :name="menu.sort+''" :id="menu.id">
              <template slot="title">
                    <Icon :type="menu.iconCls" />
                    {{menu.text}}
                </template>
                <MenuNav
                :lists = menu.children
                :parentKey = menu.sort
                @oMeun = "openMenu"
                ></MenuNav>
            </Submenu>
        </Menu>
      </Sider>
</template>

<script>
import MenuNav from "./MenuNav"
export default {
  name:'menus',
  data() {
    return {
      isCollapsed: false,
      menuLists:[],
      openNames:[]
    };
  },
  components:{
    MenuNav
  },
  created() {
    this.getMenuApi();
  },
  methods: {
    openMenu(om){
      this.openNames = om;
      this.$nextTick(()=>{
          this.$refs.menuss.updateOpened();
          this.$refs.menuss.updateActiveName()
      })

    },
    getMenuApi: function() {
      this.$axios.get("/api/menu")
      .then((res)=>{
        //TODO 成功之后的请求
        if(res.data.code == 200){
          this.menuLists = res.data.data;
        }
      })
      .catch((err)=>{
        console.log("错误"+err);
      })
    },
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

