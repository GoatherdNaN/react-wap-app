let path = require("path");
module.exports= {
    /*webpack config*/
    root:path.resolve("./"),
    app:path.resolve("./src"),
    index:path.resolve("./src/index.js"),
    template:path.resolve('./index.html'),
    dist:path.resolve("./dist"),
    node_modules:path.resolve("./node_modules"),
    config:path.resolve("./config"),
    antd_mobile:path.resolve("./node_modules/antd-mobile"),
    normalize:path.resolve("./node_modules/normalize.css"),
    /*path of this item*/
    layouts:path.resolve("./src/layouts"),
    utils:path.resolve("./src/utils"),
    components:path.resolve("./src/components")
};
