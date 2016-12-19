var staffView = Vue.extend({
  template: $("#staff-template").html(),
  data: function() {
    return {
      currentGoods: {

      },
      goodsArray: []
    }
  },
  mounted: function() {
    this.goodsArray = [{
      imgUrl: 'http://imgsize.ph.126.net/?imgurl=http://img1.ph.126.net/pKa8Kttj0AsOd7TijP9CRA==/6632036435442880504.jpg_188x188x1.jpg',
      title: '吹风机一台',
      rank: 400
    }];
  },
  methods: {
    exchange: function() {
      // TODO 获取当前选中的商品信息
      $(".exchange-confirm").modal('show');
    },
    sureConfirm: function() {
      $(".exchange-ok").modal('show');
    },
    closeConfirm: function() {
      $(".exchange-modal").modal('hide');
    },
    showExchangeHistory: function() {
      $(".exchange-history").modal('show');
    },
    logoff: function() {
      appState.router.push('/login');
    }
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