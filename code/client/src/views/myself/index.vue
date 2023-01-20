<template>
  <div class="home-wrapper">
    <div class="side-title">
      <Icon name="icon-me"></Icon>
      报告
    </div>
    <div class="home-body">
      <div class="myself-main">
        <div class="main-desc">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一款简约版PC端博客，
            网站名称为HELLO博客，通过node+vue+koa+MongoDB实现前后端分离，从项目构建到服务器部署,
            本网站主要分为客户端和管理员端。主要功能:</p>
            客户端<br/>
            1. 文章功能：文章内容支持`Markdown`语法且代码高亮展示；<br/>
            2. 标签功能：通过标签分类来检索文章数据；<br/>
            3. 侧边栏功能：点击排行、站长推荐和标签分类等；<br/>
            4. 搜索功能：通过关键词检索文章的标题和摘要，并支持搜索高亮；<br/>
            5. 留言功能：可点赞、回复评论，统计评论以及回复总数，支持`Emoji`表情；<br/>
            管理端<br/>
            1. 权限管理：CRUD 管理员，可分配权限；<br/>
            2. 文章管理：CRUD 文章，文章封面支持本地上传、文章内容支持`Markdown`语法编辑；<br/>
            3. 标签管理：CRUD 标签，标签背景色支持用`Vue-Color`插件自定义选择；<br/>
            4. 留言管理：RD 评论以及回复；<br/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运行步骤：见README.md文件所示。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;报告链接：<a href="https://kdocs.cn/l/ch5NpBWvN33D">实验报告</a></p>
        </div>
        <div class="main-footer">
          ◐ 安装插件：<p>图片懒加载vue-lazyload插件:npm install vue-lazyload --save</p>
          <p>Less全局变量导入style-resources-loader插件:yarn add style-resources-loader -D</p>
          <p>vue-color自定义选择颜色插件：yarn add vue-color</p>
          <p>marked和highlightJs插件:yarn add marked highlightJs -S</p>
          ◒ github地址：<a href="#" target="_blank">aaa</a>
          <br />
          ◓ 如果运行有问题或者表达不清楚的地方，欢迎微信联系我 🙏 🙏 🙏
          <br />
        </div>
      </div>
      <div class="side-main">
        <div class="side-wrapper">
          <div class="side-img">
            <img src="../../images/avatar.jpg" class="avatar" alt="" />
          </div>
          <div class="side-content">
            <div class="content-item">姓名：王欣怡</div>
            <div class="content-item">学号：0204214</div>
            <div class="content-item">班级：软件VR201班</div>
          </div>
        </div>
        <div class="side-wrapper">
          <div class="side-title">
            <Icon name="icon-wetchat"></Icon>
            个人微信
          </div>
          <div class="side-img">
            <img src="../../images/qrcode.jpg" class="qrcode" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myself",
  components: {},
  props: {},
  computed: {},
  data() {
    return {};
  },
  watch: {},
  created() { },
  mounted() { },
  beforeDestroy() { },
  methods: {},
};
</script>
<style lang="less" scoped>
.home-body {
  background-color: #fff;
}
.side-title {
  width: 1200px;
  background-color: #fff;
  margin: 20px auto 0;
  padding-left: 20px;
  &::after {
    width: 8.4%;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
}
.myself-main {
  width: 70%;
  padding: 24px;
  border-right: 1px solid @borderColor;
  .main-desc {
    font-size: 14px;
    line-height: 32px;
    color: @thinColor;
  }
  .main-footer {
    background: @thinBgColor;
    padding: 10px;
    text-align: left;
    line-height: 32px;
    margin: 20px auto;
    color: #0609308a;
    box-shadow: 6px 6px 12px @shadowColor;
    border-radius: 12px;
    a {
      color: #0609308a;
      text-decoration: underline;
    }
  }
}
.side-main {
  flex: 1;
  .side-wrapper {
    margin-top: 24px;
    .side-title {
      width: 92%;
      margin: 0;
      padding-left: 0;
      svg {
        font-size: 24px;
      }
      &::after {
        width: 10%;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
    .side-img {
      display: flex;
      justify-content: center;
      margin-bottom: 24px;
      .avatar {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        padding: 4px;
        box-shadow: 0px 4px 32px @shadowColor;
      }
      .qrcode {
        width: 80%;
        height: 80%;
        border-radius: 12px;
        margin-top: 24px;
        box-shadow: 0px 6px 12px @shadowColor;
      }
    }
    .side-content {
      .content-item {
        width: 92%;
        padding: 5px 10px;
        margin: 8px 0;
        border-radius: 5px;
        font-size: 14px;
        color: @thinColor;
        background-color: @thinBgColor;
        box-shadow: 4px 4px 5px @shadowColor;
      }
    }
  }
}
</style>
