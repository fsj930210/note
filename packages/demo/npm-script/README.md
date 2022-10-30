# 用 npm script 打造超溜的前端工作流

## 如何让多个 npm script 串行？

只需要用 `&&` 符号把多条 npm scripts 按先后顺序串起来即可

## 如何让多个 npm script 并行？

只需要用 `&` 符号把多条 npm script 按先后顺序并起来即可

## 如何解决在并行命令时命令进程不退出

只需要在命令最后加一个`& wait`即可

## 如何简化命令

通过使用`npm-run-all`三方包

```json

# 串行
"test": "npm-run-all lint:js lint:css lint:json lint:markdown test:*"

# 进一步简化
"test": "npm-run-all lint:* test:*"

# 并行
"test": "npm-run-all --parallel lint:* mocha"

```

## 如何给 npm script 传递参数

子需要在命令后面跟上一个`--`，再跟上具体的参数就行了

```json

npm run lint:js -- --fix

```

## 如何给 npm script 增加注释

命令的本质是 `shell` 命令（适用于 `linux` 平台），我们可以在命令前面加上注释。
注释后面的换行符 `\n` 和多余的空格，换行符是用于将注释和命令分隔开，这样命令就相当于微型的 `shell` 脚本，多余的空格是为了控制缩进，也可以用制表符 `\t` 替代

```json

"test": "# 运行所有代码检查和单元测试 \n    npm-run-all --parallel lint:* test:*"

```

## 如何减少日志输出

使用 `--loglevel silent`，或者 `--silent`，或者更简单的 `-s`来控制

```bash

npm test -s

```

## 如何尽可能多的显示运行时状态

使用 `--loglevel verbose`，或者 `--verbose`，或者更简单的 `-d` 来控制

```bash 

 npm test -d

```

## 使用 npm script 钩子

npm script 的设计者为命令的执行增加了类似生命周期的机制，具体来说就是 `pre` 和 `post` 钩子脚本，任何一个命令都可以添加这两个钩子

```json

"precover": "rm -rf coverage",
"cover": "# nyc是覆盖率收集工具 istanbul 的命令行版本 \n  nyc --reporter=html npm test",
"postcover": "rm -rf .nyc_output && open coverage/index.html"

```

## 使用变量

预定义变量，通过运行 `npm run env` 就能拿到完整的变量列表。
变量的使用方法遵循 `shell` 里面的语法，直接在 `npm script` 给想要引用的变量前面加上 `$` 符号即可。
使用自定义变量，可以在npm的配置上增加自己的变量，然后按照对应的格式去取，这里以`config`为例，在`config`中配置一个`port`，取值时只需取`$npm_package_config_port`就能取到了。

```json

  "cover": "# nyc是覆盖率收集工具 istanbul 的命令行版本 \n  nyc --reporter=html npm test",
  "cover:cleanup": "rm -rf coverage && rm -rf .nyc_output",
  "cover:archive": "mkdir -p coverage_archive/$npm_package_version && cp -r coverage/* coverage_archive/$npm_package_version",
  "postcover": "npm run cover:archive && npm run cover:cleanup && opn coverage_archive/$npm_package_version/index.html"
  "config": {
    "port": 3000
  },
  "cover:serve": "http-server coverage_archive/$npm_package_version -p $npm_package_config_port",
  "cover:open": "open http://localhost:$npm_package_config_port",
  "postcover": "npm-run-all cover:archive cover:cleanup --parallel cover:serve cover:open"
```

## 实现命令行自动补全

1. `npm completion >> ~/.npm-completion.bash`
2. 

``` bash

 echo "[ -f ~/.npm-completion.bash ] && source ~/.npm-completion.bash;" >> ~/.bashrc
 echo "[ -f ~/.npm-completion.bash ] && source ~/.npm-completion.bash;" >> ~/.zshrc

``` 

最后记得 `source ~/.zshrc` 或者 `source ~/.bashrc`
  
## 实现 npm script 跨平台兼容

+ `rimraf`或 `del-cli`，用来删除文件和目录，实现类似于 `rm -rf` 的功能；
+ `cpr`，用于拷贝、复制文件和目录，实现类似于 `cp -r` 的功能；
+ `make-dir-cli`，用于创建目录，实现类似于 `mkdir -p` 的功能；
+ 用 `cross-var` 引用变量 `cross-var-no-babel`
+ 用 `cross-env` 设置环境变量

`cp -r` 的替换需特别说明下，`cpr` 默认是不覆盖的，需要显示传入 `-o` 配置项，并且参数必须严格是 `cpr <source> <destination> [options]` 的格式，即配置项放在最后面；

```json

 "cover": "# nyc是覆盖率收集工具 istanbul 的命令行版本 \n  nyc --reporter=html npm test",
  "cover:cleanup": "rimraf coverage && rimraf .nyc_output",
  "cover:archive": "cross-var \"make-dir coverage_archive/$npm_package_version && cpr coverage/* coverage_archive/$npm_package_version -o\"",
  "cover:serve": "cross-var http-server coverage_archive/$npm_package_version -p $npm_package_config_port",
  "cover:open": "cross-var open http://localhost:$npm_package_config_port",
  "precover": "npm run cover:cleanup",
  "postcover": "npm-run-all cover:archive --parallel cover:serve cover:open"

```

## 把庞大的 npm script 拆到单独文件中

```json

"cover": "scripty",
"cover:serve": "scripty",
"cover:open": "scripty"

```

+ 需要给脚本加权限`chmod -R a+x scripts/**/*.sh`

## 用 node.js 脚本替代复杂的 npm script

使用`shelljs` 来编写脚本

```json

"cover": "node scripts/cover.js",

```

## 文件变化时自动运行 npm script

使用`onchange`包来实现

+ `watch:lint` 里面的文件匹配模式可以使用通配符，但是模式两边使用了转义的双引号，这样是跨平台兼容的；
+ `watch:lint` 里面的 `-i` 参数是让 `onchange` 在启动时就运行一次 `--` 之后的命令，即代码没变化的时候，变化前后的对比大多数时候还是有价值的；
+ `watch` 命令实际上是使用了 `npm-run-all` 来运行所有的 `watch` 子命令；

```json

  "watch:test": "npm run test:js -- --watch",
  "watch": "npm-run-all --parallel watch:*",
  "watch:lint": "onchange -i \"**/*.js\" \"**/*.less\" -- npm run lint",

```

## 使用 livereload 实现自动刷新

```json

  "client": "npm-run-all --parallel client:*",
  "client:reload-server": "livereload client/",
  "client:static-server": "http-server client/"

```

`livereload`有`bug`

## 使用 npm script 实现构建流水线

```json

  "prebuild": "rm -rf dist && mkdir -p dist/{images,styles,scripts}",
  "build:images": "scripty",
  "build:styles": "scripty",
  "build:scripts": "scripty",
  "build:hash": "scripty",
  "build": "scripty"

```

## 在 Git Hooks 中执行 npm script

```json

"precommit": "lint-staged",
"prepush": "npm run test"

```

## 使用 npm script 进行服务运维

```json

  "release:patch": "npm version patch && git push && git push --tags",
  "release:minor": "npm version minor && git push && git push --tags",
  "release:major": "npm version major && git push && git push --tags"

```
如果要求所有的版本号不超过 `10`，即 `0.0.9` 的下个版本是 `0.1.0` 而不是 `0.0.10`，可以编写简单的 `shell` 脚本来实现（注意这样会破坏 `semver` 的约定），具体步骤如下：

首先，在 `scripts` 目录下新增 `bump.sh`（别忘了文件的可执行权限：`chmod a+x scripts/bump.sh`）

## 使用 npm script 进行服务进程和日志管理

```json

"predeploy": "npm i && npm run build",
"deploy": "pm2 restart pm2.json"

```

```bash

mkdir logs
touch logs/.gitkeep
git add logs/.gitkeep
git commit -m 'add logs folder'

```

并且设置该目录为 `git` 忽略的，再改动 `.gitignore`

这里加 `logs/.gitkeep` 空文件的目的是为了能把 `logs` 目录提交到 `git` 里面，但是我们故意忽略 `logs` 目录里面的内容，这是在 `git` 中提交目录结构而忽略其中内容的常见做法。
