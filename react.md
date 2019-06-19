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
Class Component
```sh
-c or --class
```
Functional Component
```sh
-f or --functional
```
Pure Component
```sh
-p or --pure
```
State
```sh
-s or --state
```

### Lifecycle Methods:
- getDerivedStateFromProps: --gdsfp, --getDerivedStateFromProps
- componentDidMount: --cdm, --componentDidMount
- shouldComponentUpdate: --scu, --shouldComponentUpdate
- getSnapshotBeforeUpdate: --gsbu, --getSnapshotBeforeUpdate
- componentDidUpdate: --cdu, --componentDidUpdate
- componentWillUnmount: --cwu, --componentWillUnmount
- getDerivedStateFromError: --gdsfe, --getDerivedStateFromError
- componentDidCatch: --cdc, --componentDidCatch
*Note: these will only work with class components*

### Hooks:
- useState: -us, --useState
- useEffect: --ue, --useEffect
- useContext: --uc, --useContext
- useReducer: --ur, --useReducer
- useCallback: --ucb, --useCallback
- useMemo: --um, --useMemo
- useRef: --uref, --useRef
- useImperativeHandle: --uih, --useImperativeHandle
- useLayoutEffect: --ule, --useLayoutEffect
- useDebugValue: --udv, --useDebugValue
*Note: these will only work with functional components*

### File Type
- JS file: .js, --js
- JSX file: .jsx, --jsx
- TS file: .ts, --ts
- TSX file: .tsx, --tsx

### Others
Props:
- propTypes: --ptypes, --propTypes
- defaultProps: --dprops, --defaultProps
Fragments:
- Fragments: --frag, --fragment

## Options Coming Soon
- Custom functions in an array
  - ex. --custom[handleClick, handleSubmit]
- Redux/MobX
  - ex. --redux or --mobx
- React Context
- Styled Components
- If you know some options that developers would want, please suggest them and let's discuss!
