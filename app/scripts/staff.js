var staffView = Vue.extend({
  template: $("#staff-template").html(),
  data: function() {
    return {
      currentGoods: {

      },
      goodsArray: [],
      exchangeHistoryList: []
    }
  },
  mounted: function() {
    this.goodsArray = defaultDatas.goodsArray;
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
      this.exchangeHistoryList = defaultDatas.exchangeHistoryList;
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