"use strict";

var appState = {
  router: null,
  isLogin: true
};
//# sourceMappingURL=state.js.map

"use strict";

var domain = '/api';

if (window.location.href.indexOf("192.168") !== -1 || window.location.href.indexOf(":900") !== -1 || window.location.href.indexOf("localhost") !== -1) {
  domain = 'http://' + window.location.hostname + ':7999';
}

function errorAlert(err) {
  alert(err);
}

function tipsAlert(tips) {
  alert(tips);
}

var makeGet = function makeGet(url) {
  return function (data, callback) {
    $.get(domain + url, data).done(function (data) {
      paseJson(data, callback);
    }).fail(function (err) {
      errorAlert(err);
    });
  };
};

var makePost = function makePost(url) {
  return function (data, callback) {
    $.post(domain + url, data).done(function (data) {
      paseJson(data, callback);
    }).fail(function (err) {
      errorAlert(err);
    });
  };
};

var paseJson = function paseJson(response, callback) {
  if (typeof response === 'string') {
    response = JSON.parse(response);
  }
  if (response.code != 1) {
    return errorAlert('服务器出错' + response.msg);
  }
  callback(response.data);
};

// API 定义

var apiForLogin = makePost('/login');
var apiForMemeberIndex = makeGet('/memeber');
//# sourceMappingURL=data.js.map

'use strict';

var loginView = Vue.extend({
  template: $("#login-template").html(),
  mounted: function mounted() {
    $('body').addClass('login-bg');
  },
  destoryed: function destoryed() {
    $('body').removeClass('login-bg');
  },
  data: function data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login: function login() {
      if (!this.username) {
        return tipsAlert("用户名不能为空");
      }
      if (!this.password) {
        return tipsAlert("密码不能为空");
      }
      if (this.username === 'admin') {
        return appState.router.push('/admin/staff');
      }
      appState.router.push('/staff');
      // apiForLogin({
      //   username: this.username,
      //   password: this.password
      // }, function(data) {
      //   // TODO 这里登陆角色跳转到不同到view
      //   appState.isLogin = true;
      //   // if (data.role === 1) {
      //     appState.router.push('/staff');
      //   // }
      // });
    }
  }
});

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('login-view', loginView);

// var loginView = new Vue({
//
//   data: {
//
//   }
// })
//# sourceMappingURL=login.js.map

'use strict';

var staffView = Vue.extend({
  template: $("#staff-template").html(),
  data: function data() {
    return {
      currentGoods: {},
      goodsArray: []
    };
  },
  mounted: function mounted() {
    this.goodsArray = [{
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      title: '吹风机一台',
      rank: 400
    }];
  },
  methods: {
    exchange: function exchange() {
      // TODO 获取当前选中的商品信息
      $(".exchange-confirm").modal('show');
    },
    sureConfirm: function sureConfirm() {
      $(".exchange-ok").modal('show');
    },
    closeConfirm: function closeConfirm() {
      $(".exchange-modal").modal('hide');
    },
    showExchangeHistory: function showExchangeHistory() {
      $(".exchange-history").modal('show');
    },
    logoff: function logoff() {
      appState.router.push('/login');
    }
  }
});

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('staff-view', loginView);

// var loginView = new Vue({
//
//   data: {
//
//   }
// })
//# sourceMappingURL=staff.js.map

"use strict";

var adminView = Vue.extend({
  template: $("#admin-template").html(),
  mounted: function mounted() {
    $(".admin-left-menu").on('click', function (event) {
      $('.admin-left-menu li').removeClass('active');
      $(event.target).addClass('active');
    });
  },
  destoryed: function destoryed() {},
  data: function data() {
    return {
      isActive: ''
    };
  },
  methods: {
    isActiveName: function isActiveName(name) {
      this.isActive = name;
    },
    logoff: function logoff() {
      appState.router.push('/login');
    }
  }
});

var adminStaffView = Vue.extend({
  template: $("#admin-staff-template").html(),
  data: function data() {
    return {
      test: 'staff',
      newStaff: {
        name: '',
        id: '',
        department: '',
        role: '',
        quota: '',
        previousDeposit: '',
        currentDeposit: '',
        cumulativeRank: '',
        exchangedRank: '',
        remainRank: '',
        password: ''
      },
      staffs: [{
        name: '张三',
        id: 123,
        department: '市场部',
        role: '员工',
        quota: 100,
        previousDeposit: 200,
        currentDeposit: 1000,
        cumulativeRank: 230,
        exchangedRank: 100,
        remainRank: 130,
        convertibleGoods: '冰箱 洗发露'
      }, {
        name: '美国队长',
        id: 1234,
        department: '市场部',
        role: '员工',
        quota: 100,
        previousDeposit: 200,
        currentDeposit: 1000,
        cumulativeRank: 2130,
        exchangedRank: 100,
        remainRank: 2030,
        convertibleGoods: '冰箱 洗发露'
      }],
      isShowAddStaff: false
    };
  },
  methods: {
    showAddStaff: function showAddStaff() {
      this.isShowAddStaff = true;
    },
    addStaff: function addStaff() {
      var newArray = [].concat(this.staffs);
      newArray.push($.extend({}, this.newStaff));
      this.staffs = newArray;
      this.isShowAddStaff = false;

      for (var _key in this.newStaff) {
        this.newStaff[_key] = '';
      }
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(function (vm) {
      console.log(vm.test);
    });
  }
});

var adminGoodsView = Vue.extend({
  template: $("#admin-goods-template").html(),
  data: function data() {
    return {
      newGoods: {
        name: '',
        rank: '',
        image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
      },
      goodsArray: [{
        name: '菜籽油',
        rank: '100',
        image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
      }, {
        name: '电视机',
        rank: '2000',
        image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
      }],
      isShowAddGoods: false
    };
  },
  methods: {
    showAddGoods: function showAddGoods() {
      this.isShowAddGoods = true;
    },
    addGoods: function addGoods() {
      var newArray = [].concat(this.goodsArray);
      newArray.push($.extend({}, this.newGoods));
      this.goodsArray = newArray;
      this.isShowAddGoods = false;

      for (var _key in this.newGoods) {
        this.newStaff[_key] = '';
      }
    }
  }
});

var adminSystemView = Vue.extend({
  template: $("#admin-system-template").html(),
  data: function data() {
    return {
      isShowSystem: true,
      isShowAddAdmin: false,
      isShowEditPassword: false
    };
  },
  methods: {
    showEditPassword: function showEditPassword() {
      this.isShowSystem = false;
      this.isShowEditPassword = true;
    },
    showAddAdmin: function showAddAdmin() {
      this.isShowSystem = false;
      this.isShowAddAdmin = true;
    },
    showSystem: function showSystem() {
      this.isShowSystem = true;
      this.isShowAddAdmin = false;
      this.isShowEditPassword = false;
    }
  }
});

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
Vue.component('admin-view', adminView);
Vue.component('admin-staff', adminStaffView);
Vue.component('admin-goods', adminGoodsView);
Vue.component('admin-system', adminStaffView);
//# sourceMappingURL=admin.js.map

'use strict';

console.log('\'Allo \'Allo!');

var routes = [{ path: '/login', component: loginView }, { path: '/staff', component: staffView }, {
  path: '/admin', component: adminView,
  children: [{
    path: 'staff', component: adminStaffView
  }, {
    path: 'goods', component: adminGoodsView
  }, {
    path: 'system', component: adminSystemView
  }]

}];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
var router = new VueRouter({
  routes: routes // （缩写）相当于 routes: routes
});

router.beforeEach(function (to, from, next) {
  if (from.path === '/login') {
    $("body").removeClass('login-bg');
  }
  if (to.path === '/login') {
    $("body").addClass('login-bg');
  }
  next();
});

appState.router = router;

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
var app = new Vue({
  router: router
}).$mount('#app-start');

// TODO 这里需要判断用户是否是登陆 如果是登陆了 就不显示登陆页面

if (!window.location.hash) {
  router.push('/login');
}

// if (!appState.isLogin) {
//   router.push('/admin');
// } else {
//   // debug 用
//   router.push('/staff');
// }
//# sourceMappingURL=main.js.map
