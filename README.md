# Project

A Quiz Application to help you study and create your own questions.

## Tested

This applications it was tested in **iOS** running in an **iPhone 11**

## Project structure

```
Project structure
src
├── actions -- Folder that contains all actions used thorught all the pages
├── components -- Folder that contains all shareable components thorught all the pages 
├── pages -- Folder that contains all the pages of the application
├── reducer -- Folder that contains all reducers used thorught all the pages
├── utils -- Folder that contains shared logic and services like API for the whole application 
└── store -- File that centralize and store all the data used thorught all the pages
```

## Redux Store

Must part of the project I'll try to create isolated components that doesn't require the used of redux, in this way 
I can re-used this components in another routes. That's why I let almost all of the redux information being handle 
by the pages files located in the **pages folder**. 

## Before run application

Following the course I try to run the application with pure expo. But because is kind of out of date with the use of 
**create react native app** doesn't work as expected with expo. 

To solve this problem I follow the current documentation to use **create react native app**, I leave the instruction's 
down below.

First we have to execute ``yarn install``

After all libraries are installed we have to change to the **ios folder** (`cd ios`) and execute ``pod install`` 
inside that folder. 

## Running the application

To run the application you just have to run the script ``react-native run-ios``

It will take some time to compile all the project after the ``...`` stops it should show this
message ``success Successfully launched the app on the simulator``
