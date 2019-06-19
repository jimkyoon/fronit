# fronit 🏎️

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
<!-- **front-end** + **initalize** = **fronit** -->

Tired of writing the same thing over and over again with every new component file? Already know what life cycle methods or functions you need? Want to just go straight to the actual coding? **fronit**'s got you!

With **fronit**:
* create component file with one line on command line
* save time
* choose what gets created with the file
  * need *componentDidMount*? add *--cdm* or *--componentDidMount* to your command
  * going to be using *TypeScript*? put *.ts* or *.tsx* with your command

No more:
* creating new empty file
* then writing the same "import React from 'react'..."
* wasted time spent manually writing it all out

I know there are a few boilerplate/template generators out there already. But I hope you use **fronit** because it has many options when creating components. While it currently only generates React components right now, Vue and Angular will be supported soon!

Let's see how to use **fronit**!

## How to use "fronit"
First, let's install **fronit**!
```shell
npm install -g fronit
```
**Next, make sure you are in the directory you want the component file to be created!**
```shell
# example: you want fronit to create files to your project's component folder
cd project/src/client/component
```
To use it, the command is *fronit*, followed by the *library/framework* you want to use, then the *name of your component*, and finally any options you want this component to have.

Here is an example:
```sh
fronit React Hello --class --state --componentDidMount .jsx
# or shorthand
fronit R Hello -c -s --cdm .jsx
```
This will create a file called *Hello.jsx*, which will be a *class component* with *this.state* and *componentDidMount* already written inside it.

There are a lot more options you can add! To see more options, see the next section for the library/framework you are going to use!

## Options
For more detailed options for each library/framework:
* [React](react.md)
* [Vue](vue.md)
* [Angular](angular.md)

## Contribute
Please contribute! While I may have started on React, there are still plenty more to do! Vue and Angular also need attention!

Check the doc/guide for React, Vue or Angular for a check list of features I still need to add!

