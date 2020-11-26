<template>
  <div class="blog-file">
    <div class="file-content">
      <div class="file-left">
        <a-timeline>
          <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
          <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
          <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
          <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
          <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
          <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
          <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
          <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
          <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
          <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
          <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
          <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
          <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
          <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
          <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
          <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
          <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
          <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
          <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
          <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
          <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
          <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
          <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
          <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
          <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
          <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
          <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
          <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
        </a-timeline>
        <a-pagination v-model:current="current" :total="50" show-less-items />
      </div>
      <div class="file-right">
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
.blog-file {
  width: 100%;
  min-height: calc(100vh - 150px);
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  // background: url('../assets/image/taibai.jpg');
  //align-items: center;
  .file-content {
    width: 75%;
    //background: red;
    display: flex;
    .file-left {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .file-right {
      width: 30%;
    }
  }
}
</style>