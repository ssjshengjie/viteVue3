<template>
  <div class="blog-home">
    <div class="home-content">
      <div class="home-left">
        <a-list
          :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
          :data-source="data"
        >
          <template #renderItem="{ item, index }">
            <a-list-item>
              <a-card style="width: 300px">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </a-card>
            </a-list-item>
          </template>
        </a-list>
         <a-pagination v-model:current="current" :total="50" show-less-items />
      </div>
      <div class="home-right">
        <a-card hoverable style="width: 312px;">
          <template #cover>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </template>
          <a-card-meta title="SsjBlog" description="欢迎来到我的Blog">
            <template #avatar>
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
];
import { ref } from "vue";
export default {
  data() {
    return {
      data,
      pageSize: 20,
      current: 1,
    };
  },
  watch: {
    pageSize(val) {
      console.log("pageSize", val);
    },
    current(val) {
      console.log("current", val);
    },
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
  },
};
</script>

<style lang="scss">
.blog-home {
  width: 100%;
  min-height: calc(100vh - 150px);
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  // background: url('../assets/image/taibai.jpg');
  //align-items: center;
  .home-content {
    width: 75%;
    //background: red;
    display: flex;
    .home-left {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .home-right {
      width: 30%;
    }
  }
}
</style>