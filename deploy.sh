#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 安装依赖
npm install

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git config --global user.name 'auto'
git config --global user.email 'auto@users.noreply.github.com'
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:bean-sprouts/moyashi-blog.git master:gh-pages
# 例如 git push -f git@github.com:koala-coding/blog.git master:gh-pages
cd -
