var loginView = Vue.extend({
  template: $("#login-template").html(),
  mounted: function() {
    $('body').addClass('login-bg');
  },
  data: function() {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    login: function() {
      console.log(this.userName);
      console.log(this.passWord);
    }
  }
})

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('login-view', loginView)

// var loginView = new Vue({
//
//   data: {
//
//   }
// })