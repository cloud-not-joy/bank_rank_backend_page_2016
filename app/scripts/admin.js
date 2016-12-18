var adminView = Vue.extend({
  template: $("#admin-template").html(),
  mounted: function() {
    $(".admin-left-menu").on('click', function(event) {
      $('.admin-left-menu li').removeClass('active');
      $(event.target).addClass('active');
    });
  },
  destoryed: function() {

  },
  data: function() {
    return {
      isActive: ''
    }
  },
  methods: {
    isActiveName: function(name) {
      this.isActive = name;
    }
  }
});


var adminStaffView = Vue.extend({
  template: $("#admin-staff-template").html(),
  data: function() {
    return {
      test: 'staff'
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(function(vm) {
      console.log(vm.test);
    })
  },
});

var adminGoodsView = Vue.extend({
  template: $("#admin-goods-template").html(),
  data: function() {
    return {

    }
  }
});

var adminSystemView = Vue.extend({
  template: $("#admin-system-template").html(),
  data: function() {
    return {

    }
  }
});

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('admin-view', adminView);
Vue.component('admin-staff', adminStaffView);
Vue.component('admin-goods', adminGoodsView);
Vue.component('admin-system', adminStaffView);