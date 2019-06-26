#制定node镜像的版本
FROM node:10

#声明作者
MAINTAINER xinchao

# 执行命令，创建文件夹
RUN mkdir -p /home/egg_study

# 指定工作目录
WORKDIR  /home/egg_study

# 拷贝package.json文件到工作目录
# !!重要：package.json需要单独添加。
# Docker在构建镜像的时候，是一层一层构建的，仅当这一层有变化时，重新构建对应的层。
# 如果package.json和源代码一起添加到镜像，则每次修改源码都需要重新安装npm模块，这样木有必要。
# 所以，正确的顺序是: 添加package.json；安装npm模块；添加源代码。
COPY package.json /home/egg_study/package.json

#安装依赖
RUN npm install

# 拷贝所有源代码到工作目录
COPY . /home/egg_study

#对外暴露的端口
EXPOSE 7001

#程序启动脚本
CMD [ "npm", "start" ]