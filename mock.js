var mockServer = require("back-mock");
var path = require("path");

mockServer('0.0.0.0', 7999, path.resolve('./mocks'));



