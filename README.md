# fronit

[![Build Status](https://travis-ci.org/orenJim/fronit.svg?branch=master)](https://travis-ci.org/orenJim/fronit)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

a command line tool to help quickly and efficiently generate frontend components from popular libraries/frameworks
<!-- [![Coverage Status](https://coveralls.io/repos/github/orenJim/fronit/badge.svg?branch=master)](https://coveralls.io/github/orenJim/fronit?branch=master) -->

        _____                 _ __ 
       / ___/________  ____ (🏎️) /_
      / /__/ ___/ __ \/ __ \/ / __/
     / ___/ /  / /_/ / / / / / /_  
    /_/  /_/   \____/_/ /_/_/\__/  
                              
## What is "fronit" and why use it?
**front-end** + **initalize** = **fronit**

I made **fronit** with the idea that I could reduce the time spent writing the same component boilerpalte over and over again for front-end components, like React. Inspired by my days using Rails for Ruby, where one command line could generate a Controller or Model with actions already filled in.

With **fronit**:
* create component file with one line on command line
* save time
* choose what gets created with the file
  * need "componentDidMount"? add *--cdm* or *--componentDidMount* to your command line

No more:
* creating new empty file
* then writing the same "import React from 'react'..."
* time spent manually writing it all out

I know there are a few boilerplate/template generators out there already. But I hope you use mine because **fronit** has many options when creating components. While it currently only generates React components right now, Vue and Angular will be supported soon!

Let's see how to use **fronit**!

## How to use "fronit"
First, let's install **fronit**!

```shell
npm install -g fronit
```

**Next, make sure you are in the directory you want the component file to be created!**

To use it, the command is *fronit*, followed by the *library/framework* you want to use, then the *name of your component*, and finally any options you want this component to have.

Here is an example:

```sh
fronit React Hello -c -s --cdm .jsx
```

This will create a file called Hello.jsx, which will be a class component with this.state and componentDidMount already written inside it.

## Options
Here are the first set of options you can choose:
* React (R for shorthand)
```sh
fronit React Component or fronit R ComponentName
```
* Vue (V for shorthand)
```sh
fronit Vue Component or fronit V ComponentName
```
* Angular (A for shorthand)
```sh
fronit Angular Component or fronit A ComponentName
```

For more detailed options for each library/framework:
* React
* Vue
* Angular
