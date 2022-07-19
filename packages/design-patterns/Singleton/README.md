## 单例模式

- 单例模式是在全局范围内只会出现一个实例的设计模式

- 应用场景
    - 全局message提示
    - 全局登录框
    - Vuex
    - EventBus

- 实现
   1. `javascript`闭包方式
   ```javascript
     function getSignletonInstance() {
         let instance = null;
         class Signleton{}
        return () => {
            if (instance === null) {
                instance = new Signleton();
            }
            return instance;
        }
     }
     const getSignletonIns = getSignletonInstance();
     const ins1 = getSignletonIns();
     const ins2 = getSignletonIns();
     console.log(ins1 === ins2)
   ```
   2. `javascript`模块化方式
   ```javascript
   // signleton.js
   let instance = null;
   class Signleton{}
   export default () => {
       if (instance === null) {
           instance = new Signleton();
       }
       return instance;
   }
   // test.js
   import getInstance from 'signleton';
    const ins1 = getInstance();
    const ins2 = getInstance();
    console.log(ins1 === ins2);
   ```
   3. `typescript`方式
   ```typescript
   class Signleton {
        // 设置private不让实例化
        private constructor() {}
        private static instance: Signleton | null = null;
        static getInstance() {
            if (Signleton.instance === null) {
            Signleton.instance = new Signleton();
            }
            return Signleton.instance;
        }
    }
   ```