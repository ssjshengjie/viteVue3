<template>
  <div class="blog-footer">
      博客已正常运行 448天03时27分24秒
        <br/>
      托管于阿里云(学生机) | 使用七牛云对象存储
      <br/>
      <a style="color:rgb(170, 170, 170)">粤ICP备19114467号</a>
    </div>
</template>

<script>
export default {
  name: "BlogNavBar",
};
</script>

<style lang="scss">
.blog-footer {
  display: flex;
  width: 100%;
  height: 80px;
  background: #232323;
  justify-content: center;
  align-items: center;
  color: rgb(170, 170, 170);
  flex-direction: column;
}
</style>