module.exports = {
  // 基本配置（GitHub Pages部署需要）
  publicPath: process.env.NODE_ENV === 'production'
    ? 'box1'  // 替换为你的实际GitHub仓库名
    : '/',
  
  // 其他常用配置（可选）
  devServer: {
    port: 8080,       // 开发服务器端口
    host: '0.0.0.0'   // 允许局域网访问
  }
}