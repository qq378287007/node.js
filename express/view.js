const express = require("express");
const app = express();

// 设置包含模板的文件夹（'views'）
app.set("views", path.join(__dirname, "views"));

// 设置视图引擎，比如'some_template_engine_name'
app.set("view engine", "some_template_engine_name");

app.get("/", (req, res) => {
    res.render("index", { title: "关于狗狗", message: "狗狗很牛！" });
});

