# fronit React options

## Using fronit for React
For **fronit** to make React components, start by writing *React* (or *R*) after *fronit*. Then provide a name for the file/component after *React*. See example below.
```sh
fronit React Hello
```
**Note that if no options were called, fronit will default React components to a class component with a .jsx extension!**

## Options
Here are all the available options and their flags:

Option Type: shorthand, full
- class component: -c, --class
- functional component: -f, --functional
- pure component: -p, --pure
- state: -s, --state

Lifecycle Methods:
- getDerivedStateFromProps: --gdsfp, --getDerivedStateFromProps
- componentDidMount: --cdm, --componentDidMount
