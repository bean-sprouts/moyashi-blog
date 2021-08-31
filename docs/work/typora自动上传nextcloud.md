# typora自动上传nextcloud

## picgo安装与配置

picgo是一个图床上传工具，有图形化版本，我们这里只安装命令行版本即可。

### picgo安装

```bash
npm intall picgo -g
```

### nextcloud插件安装

nextcloud插件的工作原理是将图片上传到nextcloud的指定文件夹，然后设置文件共享，返回分享链接。

```bash
# 安装插件
picgo install picgo-plugin-nextcloud-uploader
# 启用插件
# 选择nextcloud-uploader
picgo use plugins
# 配置uploader
# 选择nextcloud-uploader
# 填写nextcloud服务器地址、账号、密码
# 路径填写服务器路径，例如'Sysnc/assets'
picgo set uploader
# 启用uploader
picgo use uploader
# 测试上传，查看是否返回nextcloud分享路径
picgo upload ./img.png
```



## typora配置

设置 - 图像

- 选择插入图片时`上传图片`
- 勾选`对本地位置应用上述规则`和`对网络位置应用上述规则`
- 上传服务选择`Custom Command`，然后在命令中输入

```bas
# /usr/local/bin/node /usr/local/bin/picgo upload
node路径 picgo路径 upload
```

- 点击`验证图片上传选项`，测试是否成功，成功会返回nextcloud的分享链接
- 在typora中粘贴一张图片，查看是否自动上传并将链接修改为nextcloud的分享链接