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
    },
    logoff: function() {
      appState.router.push('/login');
    }
  }
});


var adminStaffView = Vue.extend({
  template: $("#admin-staff-template").html(),
  data: function() {
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
      staffs: [
        {
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
        },
        {
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
        }
      ],
      isShowAddStaff: false
    }
  },
  methods: {
    showAddStaff: function() {
      this.isShowAddStaff = true;
    },
    addStaff: function() {
      var newArray = [].concat(this.staffs);
      newArray.push($.extend({}, this.newStaff));
      this.staffs = newArray;
      this.isShowAddStaff = false;

      for (var _key in this.newStaff) {
        this.newStaff[_key] = '';
      }
    },
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
      newGoods: {
        name: '',
        rank: '',
        image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
      },
      goodsArray: [
        {
          name: '菜籽油',
          rank: '100',
          image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
        },
        {
          name: '电视机',
          rank: '2000',
          image: 'http://imgsize.ph.126.net/?imgurl=http://img0.ph.126.net/90nkdAyVBSoD9qRxzsvBrg==/6631984758396348885.jpg_188x188x1.jpg'
        }
      ],
      isShowAddGoods: false
    }
  },
  methods: {
    showAddGoods: function() {
      this.isShowAddGoods = true;
    },
    addGoods: function() {
      var newArray = [].concat(this.goodsArray);
      newArray.push($.extend({}, this.newGoods));
      this.goodsArray = newArray;
      this.isShowAddGoods = false;

      for (var _key in this.newGoods) {
        this.newStaff[_key] = '';
      }
    },
  },
});

var adminSystemView = Vue.extend({
  template: $("#admin-system-template").html(),
  data: function() {
    return {
      isShowSystem: true,
      isShowAddAdmin: false,
      isShowEditPassword: false
    }
  },
  methods: {
    showEditPassword: function() {
      this.isShowSystem = false;
      this.isShowEditPassword = true;
    },
    showAddAdmin: function() {
      this.isShowSystem = false;
      this.isShowAddAdmin = true;
    },
    showSystem: function() {
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