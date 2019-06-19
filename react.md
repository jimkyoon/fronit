# fronit React options

## Using fronit for React
For **fronit** to make React components, start by writing *React* (or *R*) after *fronit*. Then provide a name for the file/component after *React*. See example below.
```sh
fronit React Hello
```
**Note: Bare minimum needed to create a React component is *fronit React ComponentName*!**

**Note: If no options were called, fronit will default React components to a class component with a .jsx extension!**

**Note: If choosing multiple types, for instance, choosing Class and Functional or choosing .js and .ts in the same command line, only 1 will be chosen!**

**Note: If class component was chosen, but hook options were called, the class component will be created but hooks will be ignored! Same goes for the other way!**

## Options
Here are all the available options and their flags:

### Component Types:
- Class Component:
```sh
-c or --class
```
- Functional Component:
```sh
-f or --functional
```
- Pure Component:
```sh
-p or --pure
```
- State:
```sh
-s or --state
```

### Lifecycle Methods:
*Note: these will only work with class components*
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

### Hooks:
*Note: these will only work with functional components*
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
