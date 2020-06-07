# debug-react
Quickly set up environment to debug/analyze react source code. Able to specify version(v16+)

迅速搭建React源码调试环境，可指定版本(v16+)

### Usage
```
git clone https://github.com/piscium2010/debug-react.git
cd debug-react
yarn
```
fetch specified react version
```
yarn fetch v16.13.1
```

### Debug
code/packages/react/src/ReactElement.js
```
export function createElement(type, config, children) {
  debugger
  let propName;
  ...
```

### Run
```
npm start
```

visit http://localhost:8080/

