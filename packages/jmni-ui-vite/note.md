# jmni-ui-vite
学习小册https://juejin.cn/book/7117582869358182403


# 待优化
1. 文档自定义组件，显示demo和代码切换
2. 引入组件库，进行二次封装
3. workflow 重新配置（GitHubPage和GitHub Action配置），自动部署文档和自动执行单元测试 (参考：https://github.com/codes-templates/npm-react)
4. 完善组件测试工作,生成测试报告
5. git仓库 分支保护
6. 私服配置， changelog版本更改日志配置
7. unocss 在iife模式下打包失败，考虑使用tailwindCss替换（生态好，文档健全，下载活跃度高）
8. 不用umd格式， pageage.json和跟目录配置文件.cjs 替换（用module是兼容unocss的打包失败，考虑替换掉）

# 已实现
1. vitepress 文档建设
2. 引入方式 组件库支持按需引入和全局引入（组件开发支持.vue和.tsx）
3. 原子类 css动态原子类配置， unocss配置
4. 单元测试 vitest+@vue/test-utils
5. 代码规范化（eslint+prettier）
6. commit格式化 （husky+commitlint+lint-staged）
7. GitHub Action验证，在代码变更的时候及时反映状态（防止开发环境不同，有人升级了依赖库，或者强推了代码，需要自动验证是否通过，通过会带上ci passing徽章）

# commit提交规范
feat：新功能、新特性；
fix: 修改 bug；
perf：更改代码，以提高性能；
refactor：代码重构（重构，在不影响代码内部行为、功能下的代码修改）；
docs：文档修改；
style：代码格式修改, 注意不是 css 修改（例如分号修改）；
test：测试用例新增、修改；
build：影响项目构建或依赖项修改；
revert：恢复上一次提交；
ci：持续集成相关文件修改；
chore：其他修改（不在上述类型中的修改）；
release：发布新版本；
workflow：工作流相关文件修改
## 示例1
fix(global):修复checkbox不能复选的问题
## 示例2 下面圆括号里的 common 为通用管理的名称
fix(common): 修复字体过小的BUG，将通用管理下所有页面的默认字体大小修改为 14px
## 示例3
fix: value.length -> values.length
# tip
1. 测试覆盖率：在代码编写阶段，建议只对重点功能进行测试，没必要一定追求过高的测试覆盖率


# 开发阶段
当前阶段把GitHub action关闭 （settings/Actions/Action Permission 设置为disabled）
image.png

# 目录结构
├── config               # 配置文件
├── coverage            # 覆盖率报告
├── demo                # 代码范例
├── docs                # 文档
├── node_modules  
├── scripts              # 脚本 发布、提交信息检查
├── src                  # 组件代码
└── types                # TS类型定义
# 组件结构规范
├── src                 # 组件代码
    └── button       # 组件包名
         ├── index.ts   # 组件入口
         ├── Button.tsx  # 组件代码  
         └── __tests__   # 测试用例
                  └── Button.spec.ts   
包名：小写 + 中划线；
统一入口文件： index.ts；
组件代码： 大驼峰；
测试用例代码 ： 测试对象名+ .spec.ts。

# 待学习
1. mrm（https://mrm.js.org/）
2. 资料库 （https://qiyoe.cn/code/front-end/lint/commitizen.html）
3. pnpm 文档 （https://www.pnpm.cn/configuring）
4. npm 文档（https://docs.npmjs.com/）
5. vue3全家桶文档（vue3+ts+vitest+pina+vuerouter+vuex+vueUtilTest）
6. tailwindCss文档（https://www.tailwindcss.cn/）
7. githubPage和gitlabPage文档配置（https://vitepress.vuejs.org/guide/deploying）

# 规划
1.开发cli工具项目模板

# 填坑
## unocss 打包异常，提示 "does not found CSS placeholder in the generated chunks"
解决方案 https://github.com/unocss/unocss/issues/1341 
1.使用了lib模式打包， package.json 添加 type:module配置即可
2. 打包格式去除iife格式打包