var domain = '/api';

if (window.location.href.indexOf("192.168") !== -1 || window.location.href.indexOf(":900") !== -1 || window.location.href.indexOf("localhost") !== -1) {
  domain = 'http://' + window.location.hostname + ':7999';
}

function errorAlert(err) {
  alert(err);
}

function tipsAlert(tips) {
  alert(tips)
}

var makeGet = function(url) {
  return function(data, callback) {
    $.get(domain + url, data)
      .done(function(data) {
        paseJson(data, callback);
      })
      .fail(function(err) {
        errorAlert(err);
      });
  };
}

var makePost = function(url) {
  return function(data, callback) {
    $.post(domain + url, data)
      .done(function(data) {
        paseJson(data, callback);
      })
      .fail(function(err) {
        errorAlert(err);
      });
  };
}

var paseJson = function(response, callback) {
  if (typeof response === 'string') {
    response = JSON.parse(response);
  }
  if (response.code != 1) {
    return errorAlert('服务器出错' + response.msg);
  }
  callback(response.data);
}


// API 定义

var apiForLogin = makePost('/login');
var apiForMemeberIndex = makeGet('/memeber');