<template>
  <div class="blog-tag">
    <div class="tag-content">
      <div class="tag-left">
        1111
      </div>
      <div class="tag-right">
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
export default {};
</script>

<style lang="scss">
.blog-tag {
  width: 100%;
  min-height: calc(100vh - 150px);
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  // background: url('../assets/image/taibai.jpg');
  //align-items: center;
  .tag-content {
    width: 75%;
    //background: red;
    display: flex;
    .tag-left {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .tag-right {
      width: 30%;
    }
  }
}
</style>