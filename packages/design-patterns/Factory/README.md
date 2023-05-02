# 工厂模式

通过工厂封装，隐藏创建对象细节

## 应用场景

1. JQuery $('xxx') 其实就是工厂模式，里面实际执行逻辑是 new JQuery('xxxx')
2. React.createElement() 创建VNode节点
3. _createElementNode() vue的创建VNode节点