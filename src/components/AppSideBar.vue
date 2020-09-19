<template>
  <div class="component-size" :class="collapsed ? 'component-size-active' : ''">
    <div class="head-portrait" :class="collapsed ? 'head-portrait-active' : ''"></div>
    <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline" class="phone-item">
      <a-menu-item v-for="item in Dynamicmenu" :key="item.key" class="menu-item">
        <i class="icon-item" :class="item.icon" :style="collapsed ? 'position: absolute; left: 33%;' : ''"></i>
        <span v-if="!collapsed" class="item-name">{{ item.name }}</span>
      </a-menu-item>
    </a-menu>
    <div class="component-midline"></div>
    <div class="link-menu" :class="collapsed ? 'link-menu-active' : ''">
      <div class="link-github" :class="collapsed ? 'link-icon-active' : ''" @click="linkOpen('github')"></div>
      <div class="link-cnblogs" :class="collapsed ? 'link-icon-active' : ''" @click="linkOpen('cnblogs')"></div>
      <div class="link-csdn" :class="collapsed ? 'link-icon-active' : ''" @click="linkOpen('csdn')"></div>
    </div>
    <div v-if="collapsed" class="glyphicon glyphicon-hand-right" style="cursor: pointer;" @click="() => (collapsed = !collapsed)" />
    <div v-else class="glyphicon glyphicon-hand-left" style="cursor: pointer;" @click="() => (collapsed = !collapsed)" />
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  name: 'size',
  setup () {
    const data = reactive({
      collapsed: false,
      selectedKeys: [1],
      Dynamicmenu: [
        {
          name: '主页',
          key: 1,
          icon: 'glyphicon glyphicon-home',
          router: '',
        },
        {
          name: '归档',
          key: 2,
          icon: 'glyphicon glyphicon-credit-card',
          router: '',
        },
        {
          name: '标签',
          key: 3,
          icon: 'glyphicon glyphicon-tags',
          router: '',
        },
        {
          name: '关于',
          key: 4,
          icon: 'glyphicon glyphicon-fire',
          router: '',
        },
      ],
    });
    return { ...toRefs(data) };
  },
  methods: {
    linkOpen (v) {
      const blank = window.open();
      if (v === 'github') {
        blank.location.href = 'https://github.com/ssjshengjie';
      } else if (v === 'cnblogs') {
        blank.location.href = 'https://www.cnblogs.com/ssjBlog/';
      } else if (v === 'csdn') {
        blank.location.href = 'https://blog.csdn.net/carly_ssj';
      }
    },
  },
};
</script>

<style lang="scss">
/* pc */
@media screen and (min-width: 768px) {
  .component-size {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 1);
    .ant-menu {
      background: rgba(0, 0, 0, 1);
    }
    .head-portrait {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      background: url("../assets/image/taibai.jpg");
      background-size: 100% 100%;
      margin: 16px;
      margin-left: 25px;
      margin-bottom: 100px;
    }
    .head-portrait-active {
      height: 50px;
      width: 50px;
      position: relative;
      top: 50px;
      left: -10px;
    }
    .menu-item {
      display: flex;
      .icon-item,
      .item-name {
        flex: 1;
        text-align: center;
        align-items: center;
      }
      .icon-item {
        font-size: 28px;
        line-height: 1.4 !important;
      }
      .item-name {
        font-size: 18px;
      }
    }
    .menu-item:hover {
      color: skyblue !important;
    }
    .link-menu {
      display: flex;
      flex-direction: column;
      margin-left: 25%;
      width: 100px;
      height: 350px;
      margin-top: 30px;
      .link-github,
      .link-cnblogs,
      .link-csdn {
        width: 100%;
        height: 100px;
        border-radius: 30%;
        margin-bottom: 10px;
        cursor: pointer;
        box-shadow: 10px 10px 5px #888888;
      }
      .link-github {
        background: url("../assets/image/github.jpg");
        background-size: 100% 100%;
      }
      .link-cnblogs {
        background: url("../assets/image/cnblogs.jpg");
        background-size: 100% 100%;
      }
      .link-csdn {
        background: url("../assets/image/csdn.jpg");
        background-size: 100% 100%;
      }
      .link-icon-active {
        width: 50px;
        height: 50px;
      }
    }
    .link-menu-active {
      margin-left: 16%;
    }
    .component-midline {
      border-top: 1px solid #7c7c7c;
      margin-top: 30px;
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
    .glyphicon-hand-left {
      font-size: 50px;
    }
    .glyphicon-hand-right {
      font-size: 40px;
    }
    .glyphicon-hand-left:hover,
    .glyphicon-hand-right:hover {
      color: skyblue;
    }
  }
  .component-size-active {
    width: 80px !important;
  }
  .component-size-phone {
    display: none !important;
  }
}
/* ipad */
@media screen and (min-width: 540px) and (max-width: 768px) {
  .component-size {
    width: 80px !important;
    height: 100vh;
    background: rgba(0, 0, 0, 1);
    .ant-menu {
      background: rgba(0, 0, 0, 1);
    }
    .head-portrait {
      position: relative;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      top: 50px;
      left: -10px;
      background: url("../assets/image/taibai.jpg");
      background-size: 100% 100%;
      margin: 16px;
      margin-left: 25px;
      margin-bottom: 100px;
    }
    .menu-item {
      display: flex;
      text-align: center;
      .icon-item,
      .item-name {
        flex: 1;
        padding: 0px;
        font-size: 18px;
        align-items: center;
        text-align: center;
        justify-content: center;
        position: relative;
      }
      .icon-item {
        left: -10px;
        line-height: 35px !important;
      }
      .item-name {
        left: -2px;
      }
    }
    .menu-item:hover {
      color: skyblue !important;
    }
    .link-menu {
      display: flex;
      flex-direction: column;
      margin-left: 25%;
      width: 100px;
      height: 350px;
      margin-top: 30px;
      margin-left: 16%;
      .link-github,
      .link-cnblogs,
      .link-csdn {
        width: 50px;
        height: 50px;
        border-radius: 30%;
        margin-bottom: 10px;
        cursor: pointer;
        box-shadow: 10px 10px 5px #888888;
      }
      .link-github {
        background: url("../assets/image/github.jpg");
        background-size: 100% 100%;
      }
      .link-cnblogs {
        background: url("../assets/image/cnblogs.jpg");
        background-size: 100% 100%;
      }
      .link-csdn {
        background: url("../assets/image/csdn.jpg");
        background-size: 100% 100%;
      }
    }
    .component-midline {
      border-top: 1px solid #7c7c7c;
      margin-top: 30px;
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
    .glyphicon-hand-left,
    .glyphicon-hand-right {
      display: none;
    }
  }
}
/* phone */
@media screen and (max-width: 540px) {
  .component-size {
    .head-portrait,
    .component-midline,
    .glyphicon-hand-right,
    .glyphicon-hand-left {
      display: none;
    }
    .phone-item {
      display: flex;
      background: #303a50;
      .ant-menu-item-selected {
        border-radius: 5px;
        background-color: tan !important;
      }
      .icon-item {
        color: snow;
        margin-right: 10px;
      }
      .item-name {
        color: snow;
      }
    }
  }
}
</style>
