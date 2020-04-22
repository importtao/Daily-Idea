<template>
  <div class="heytap-404">
    <div class="header">
      <!-- <navbar :disabled="disableItem" :black-list="removedItem" /> -->
      <h1>HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</h1>
    </div>
    <div class="main">
      <p>页面找不到</p>
      <el-button type="primary">返回首页</el-button>
    </div>
  </div>
</template>

<script>
// import { default as Navbar } from '@/layout/components/Navbar'
// import ResizeMixin from '@/layout/mixin/ResizeHandler'
// import { mapState } from 'vuex'

// try {
//   top.location.hostname
//   if (top.location.hostname !== window.location.hostname) {
//     top.location.href = window.location.href
//   }
// } catch (e) {
//   top.location.href = window.location.href
// }

// export default {
//   name: 'Mine',
//   components: {
//     Navbar
//   },
//   mixins: [ResizeMixin],
//   data() {
//     return {
//       disableItem: ['save', 'mine', 'output'],
//       removedItem: ['new', 'material', 'save', 'import', 'output']
//     }
//   },
//   computed: {
//     ...mapState({
//       userInfo: state => state.user.userInfo
//     }),
//     fixedHeader() {
//       return this.$store.state.settings.fixedHeader
//     }
//   },
//   created() {
//     this.$store.dispatch('user/getUserInfo', {
//       noNeedRedirect: true
//     }).then(res => {
//       if (res.code !== 0) {
//         this.$message.error(res.data.message)
//       }
//     })
//   },
//   methods: {
//     goHome() {
//       window.location.href = '/home.html'
//     }
//   }
// }
</script>

<style lang="scss">

body {
  height: auto;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 1000px;
  transition: width 0.28s;
}

.mobile .fixed-header {
  width: 100%;
}

.main {
  margin-top: 90px;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    max-width: 480px;
    max-height: 290px;
    margin-bottom: 40px;
  }
  p {
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 16px 0;
  }
  .el-button.el-button--primary {
    width: 80px;
    height: 32px;
    padding: 0;
  }
}
</style>
