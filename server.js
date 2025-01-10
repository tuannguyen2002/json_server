const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, "public"), // Đặt các tệp tĩnh trong thư mục `public`
});

server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running on http://localhost:3001");
});
