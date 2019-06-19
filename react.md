# fronit React options

## Using fronit for React
For **fronit** to make React components, start by writing *React* (or *R*) after *fronit*. Then provide a name for the file/component after *React*. See example below.
```sh
fronit React Hello
```
**Note that if no options were called, fronit will default React components to a class component with a .jsx extension!**

## Options
Here are all the available options and their flags:

### Component Type
Class Component:
```sh
-c or --class
```
Functional Component:
```sh
-f or --functional
```
Pure Component:
```sh
-p or --pure
```
State:
```sh
-s or --state
```

### Lifecycle Methods:
- getDerivedStateFromProps:
```sh
--gdsfp or --getDerivedStateFromProps
```
- componentDidMount:
```sh
--cdm or --componentDidMount
```
- shouldComponentUpdate:
```sh
--scu or --shouldComponentUpdate
```
- getSnapshotBeforeUpdate:
```sh
--gsbu or --getSnapshotBeforeUpdate
```
- componentDidUpdate:
```sh
--cdu or --componentDidUpdate
```
- componentWillUnmount:
```sh
--cwu or --componentWillUnmount
```
- getDerivedStateFromError:
```sh
--gdsfe or --getDerivedStateFromError
```
- componentDidCatch:
```sh
--cdc or --componentDidCatch
```
*Note: these will only work with class components*

### Hooks:
- useState:
```sh
--us or --useState
```
- useEffect:
```sh
--ue or --useEffect
```
- useContext:
```sh
--uc or --useContext
```
- useReducer:
```sh
--ur or --useReducer
```
- useCallback:
```sh
--ucb or --useCallback
```
- useMemo:
```sh
--um or --useMemo
```
- useRef:
```sh
--uref or --useRef
```
- useImperativeHandle:
```sh
--uih or --useImperativeHandle
```
- useLayoutEffect:
```sh
--ule or --useLayoutEffect
```
- useDebugValue:
```sh
--udv or --useDebugValue
```
*Note: these will only work with functional components*

### File Type
- JS file:
```sh
.js or --js
```
- JSX file:
```sh
.jsx or --jsx
```
- TS file:
```sh
.ts or --ts
```
- TSX file:
```sh
.tsx or --tsx
```

### Others
Props:
- propTypes:
```sh
--ptypes or --propTypes
```
- defaultProps:
```sh
--dprops or --defaultProps
```
Fragments:
- Fragments:
```sh
--frag or --fragment
```

## Options Coming Soon
- Custom functions in an array
  - ex. --custom[handleClick, handleSubmit]
- Redux/MobX
  - ex. --redux or --mobx
- React Context
- Styled Components
- If you know some options that developers would want, please suggest them and let's discuss!
