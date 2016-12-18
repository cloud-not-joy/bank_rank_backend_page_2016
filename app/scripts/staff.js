var staffView = Vue.extend({
  template: $("#staff-template").html(),
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {

  }
})

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('staff-view', loginView)

// var loginView = new Vue({
//
//   data: {
//
//   }
// })