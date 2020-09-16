<template>
  <div class="component-size">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div
          class="head-portrait"
          :style="collapsed ? 'height:50px;width:50px' : ''"
        ></div>
        <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
          <a-menu-item v-for="item in Dynamicmenu" :key="item.key" class="menu-item">
            <i class="icon-item" :class="item.icon"></i>
            <span v-if="!collapsed" class="item-name">{{ item.name }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content></a-layout-content>
        <a-layout-footer style="text-align: center"
          >Ant Design ©2018 Created by Ant UED</a-layout-footer
        >
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  name: "AppSidebar",
  setup() {
    const data = reactive({
      collapsed: false,
      selectedKeys: [1],
      Dynamicmenu: [
        { name: "主页", key: 1, icon: "iconfont icon-biaoqianA01_shouye-31", router: "" },
        { name: "归档", key: 2, icon: "iconfont icon-biaoqianA01_biji-94", router: "" },
        { name: "标签", key: 3, icon: "iconfont icon-biaoqiankuozhan_dongtai-254", router: "" },
        { name: "关于", key: 4, icon: "iconfont icon-biaoqianA01_faxian-32", router: "" },
      ],
    });
    return { ...toRefs(data) };
  }
};
</script>

<style lang="scss">
.component-size {
  #components-layout-demo-side {
    .head-portrait {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      background: url("../assets/image/taibai.jpg");
      background-size: 100% 100%;
      margin: 16px;
      margin-bottom: 200px;
    }
    .menu-item{
      display: flex;
      .icon-item,.item-name{
        flex: 1;
        text-align: center;
        align-items: center;
      }
    }

    .head-portrait:hover {
      animation: head-portrait 0.8s forwards;
      @keyframes head-portrait {
        0% {
          transform: rotate(0);
          animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
          transform: rotate(180deg);
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>
