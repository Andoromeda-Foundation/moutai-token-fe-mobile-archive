import config_default from "./config.default";

const config_env = process.env.VUE_APP_ENV
  ? require("./config." + process.env.VUE_APP_ENV + ".js").default
  : {};

export default Object.assign({}, config_default, config_env);
