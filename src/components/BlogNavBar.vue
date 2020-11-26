<template>
  <div class="nav-container">
    <div class="nav-img">  
        <b>ssjBlog</b>
    </div>
    <div class="nav-left">
      <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal">
        <a-menu-item
          v-for="item in Dynamicmenu"
          :key="item.key"
          @click="changTitleRouter(item.router)"
        >
          <i class="icon-item" :class="item.icon" style="margin-right: 10px;"></i>
          <span v-if="!collapsed" class="item-name">{{ item.name }}</span>
        </a-menu-item>
      </a-menu>
      <div style="margin-top:8px">
        <a-input-search
          v-model:value="searchValue"
          placeholder="搜索本站"
          style="width: 200px"
          @search="onSearch"
        />
      </div>
    </div>

    <div class="nav-right">

    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  name: "BlogNavBar",
  setup() {
      const searchValue=ref('')
    const data = reactive({
      collapsed: false,
      selectedKeys: [1],
      Dynamicmenu: [
        {
          name: "主页",
          key: 1,
          icon: "glyphicon glyphicon-home",
          router: "/home",
        },
        {
          name: "归档",
          key: 2,
          icon: "glyphicon glyphicon-credit-card",
          router: "/file",
        },
        {
          name: "标签",
          key: 3,
          icon: "glyphicon glyphicon-tags",
          router: "/tag",
        },
        {
          name: "关于",
          key: 4,
          icon: "glyphicon glyphicon-fire",
          router: "/about",
        },
      ],
    });
    return { ...toRefs(data),searchValue };
  },
  methods: {
    changTitleRouter(item) {
      this.$router.push(item);
    },
    onSearch(content){
        console.log("测试一下· ",content)
    }
  },
};
</script>
<style lang="scss" scoped>
.nav-container {
  width: 100%;
  height: 70px;
  background: linear-gradient(#fff1eb, #ace0f9);
  display: flex;
  //text-align: center;
  align-items: center;
  .nav-img,
  .nav-right {
    flex: 1;
  }
  .nav-img {
    display: flex;
    justify-content: flex-end;
  }
  .nav-left {
    flex: 2;
    display: flex;
    justify-content: center;
    i,
    span {
      font-size: 16px;
    }
  }
}
.ant-menu {
  background: none;
}
.ant-menu-horizontal {
  border-bottom-color: none;
  border-bottom-style: none;
}
</style>