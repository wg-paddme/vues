<template>
<div>
  <div v-for="(menu, key) in lists">
    <Submenu v-if="menu.children.length" :id="menu.id" :name="parentKey+'-'+menu.sort">
        <template slot="title">
            <Icon :type="menu.iconCls" />
            {{menu.text}}
        </template>
        <ChildrenNav :childrenNav="menu.children" :chilidrenKey="menu.sort" @openMenu="openMenu" :len = "v-if='key==lists.length?true:false'"></ChildrenNav>
      </Submenu>
      <MenuItem v-else :id="menu.id" :name="parentKey+'-'+menu.sort"> <Icon :type="menu.iconCls" />{{menu.text}}</MenuItem>
  </div>

</div>

</template>
<script>
import ChildrenNav from "./ChildrenNav"
export default {
  props: {
    lists: Array,
    parentKey:Number
  },
  data() {
    return {
        openName:[]
    };
  },
  components:{
    ChildrenNav
  },
  methods:{
    openMenu:function(openMenu){
        this.openName = openMenu;
        this.$emit('oMeun',this.openName);

    }
  }
};
</script>

