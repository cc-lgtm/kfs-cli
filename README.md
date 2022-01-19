### docs

> 一个vue3的生成组件模板和打包，自动注册指定目录的组件，基于vite的脚手架

#### 安装
```ts
yarn add kfs-cli
```
#### 生成组件
> package.json里`scripts`配置里添加命令:

```ts
"generate": "kfs-cli generate"
```

> `node`运行命令:

```ts
yarn generate -g ./src/components
// 将在`src`目录下的`components`文件夹里创建组件模板
```

> 后续根据命令行提示输入组件名字和是否`setup`模板填写完成生成
> 需要创建多个组件，则在name输入框以空格分隔
