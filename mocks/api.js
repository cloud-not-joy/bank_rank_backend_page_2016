exports.login = {
  path: "/login",
  POST: function(req) {
    if (req.body.username === 'admin') {
      return {
        "code": 1,
        "msg": "",
        "data": {
          role: 1
        }
      } 
    } else {
      return {
        "code": 1,
        "msg": "",
        "data": {
          role: 2
        }
      }
    }
  },
  OPTIONS: function(req) {
    return {}
  }
}