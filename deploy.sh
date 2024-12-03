#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
push_addr=`git remote get-url --push origin`
commit_info=`git describe --all --always --long`
# 打包生成的文件夹路径
dist_path=docs/.vuepress/dist
# 推送的分支
push_branch=docs

# 生成静态文件
npm run build