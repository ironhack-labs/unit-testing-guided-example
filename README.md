

![Ironhack Logo](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Unit Testing - Guided example



## Introduction

Test automation is a process of testing the code automatically by running a series of tests to verify that a program is functioning properly and meeting the requirements. 

**Unit testing** is an automated testing methodology in which a test-runner executes small units of code and asserts whether the results match the developer’s expectations.

The goal of this exercise is to get you familiarized with the process of forking and cloning your labs and running automated tests included in the labs.





## Iteration 1 - Initial Setup

Fork this repository. You should see an "**Actions**" tab at the top of the GitHub interface of *your fork*. Click on it. You should see the following:

![Actions Tab](https://user-images.githubusercontent.com/7128083/116699595-a9589500-a9bd-11eb-95be-fca6914504e0.png)

Since our automated tests will be running not only locally but also on GitHub, we need to enable workflows for this repository. Click on "I understand my workflows, go ahead and enable them". You'll have to do this for every lab that has automated tests.

*Clone* the fork to your machine.



## Iteration 2 - Exploring the project

At the root of this project you'll find multiple files that are worthy of notice.

First, `package.json`. This file contains the list of external dependencies necessary to make the project work, as well as the configurations necessary to run our unit tests. 

Second, you will find a `/tests` directory. This directory contains multiple files with the `.spec.js` extensions. When working with test runners, unit test files are commonly named ending with a `.spec.js` or `.tests.js` extension.

Third, our main working file, `calculator.js`. It contains four distinct functions, one for each of the basic arithmetic operations. The functions `sum`, `subtract`, and `divide` are incomplete. In the next steps, you'll be asked to complete each of them to meet the test requirements. 



Files such as `package-lock.json`, and directories such as `.github` and `node_modules` are part of the environment setup. You don't have to worry about them at the moment and you should leave them as they are. We will explain their purpose in the later point of the course while covering the *Node.js* environment.





## Iteration 3 - Setting up the project

Open your terminal.

To run the unit tests on your machine, you must have both [*Node.js*](https://nodejs.org/en/download/) (`node`) and `npm` installed. To ensure that you have both, run the following commands:

```shell
$ node -v
# and
$ npm -v
```

As a result, you should see the versions of both installed on your machine.

As we mentioned earlier, our `package.json` file contains a list of the dependencies for this project. However, these dependencies are not automatically installed in the project folder when you clone the repository. To install the project's dependencies, follow the instructions below:

```shell
# After you cloned this guided example, navigate to the folder
$ cd unit-testing-guided-example

# and install project dependencies
$ npm i
```





## Iteration 4 - Running unit tests

Before we start coding, we first need to run the `npm run test:watch` command in the terminal.

```shell
# in the root directory of this project run
$ npm run test:watch
```



![Image of terminal with failing test results](https://user-images.githubusercontent.com/7128083/114206907-ba306080-9953-11eb-8660-16161418590e.png)



There should be two distinct forms of output. First, your terminal should display a list of the failed unit tests. Second, a file named **`lab-solution.html`** should be automatically generated at the root of the project. Opening this file in the browser will display the results of the unit tests.

:bangbang: If you get a message that reads `jest: command not found`, you might have skipped the previous step where we installed dependencies by running the command `npm install`.



![Image of browser with failing test results](https://user-images.githubusercontent.com/7128083/114205765-90c30500-9952-11eb-85e5-dbb5bfd36028.png)



To see the results of the unit tests being updated automatically in the browser window, use the VSCode extension [*Live Server*](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to open the `lab-solution.html` file.

The tests are being run in the "watch mode". This means that each time you update and *save* your code `jest`  test runner will check for the changes in the code, and re-run the automated tests. Basically, every time you save a file tests will run again and the test results page will refresh. 



## Iteration 5 - Passing our first tests

To pass the first tests, open the `calculator.js` file and complete the `sum` function.

If you simply return a sum of both arguments from the `sum` function and save the file you should see the first two tests of the "Sum" suite passing.



## Iteration 6 - Subtracting

The `subtract` function follows the same logic. Complete it, save the file and check the results of the unit tests to ensure that all of the requirements are met.



## Iteration 7 - Dividing

The `divide` function follows the same logic. Complete it, save the file and check the results of the unit tests to ensure that all of the requirements are met.



## Iteration 8 (Bonus) - Creating our own tests

Up until now, we've been coding our functions to pass our tests. What we've been unknowingly doing is following a testing methodology called **"Test-Driven Development"**. This happens when the tests have been written in advance, and we're simply completing our functions to match the specifications that had been originally defined.

Now, we'll work in reverse.

You can inspect and compare the other `*.spec.js` files to understand how _suites_, _tests_ and _assertions_ are made with [Jest](https://jestjs.io/).

You're given a `multiply` function inside of the `calculate.js` file. It is already complete and requires no work from your side.

However, there are no unit tests for this function as of yet.

Create a file named `multiply.spec.js`. In this file, you'll create unit tests for the `multiply` function.

At the top of `multiply.spec.js`, you should import the `multiply` function that is exported by `calculator.js`. You can simply copy and paste the following line.

```js
const { multiply } = require('./../calculator.js');
```

Create a test suite for the "Multiply" functionality.

```js
describe("Multiply", () => {
  // Our tests will be added here.
});
```

Then, inside of this test suite, we'll be writing each of the following tests that consider the following scenarios.

- When the function is called with two positive integers. The value returned should be the result of the multiplication of both values.
- When the function is called with a negative and a positive integer. The value returned should be a negative number.
- When the function is called with any number and a number `0`. The value returned should be `0` (any number multiplied by `0` equals `0`).

It's up to you to decide what values the `multiply` function should be called with, in the tests, and what values are expected as a result.

Follow the same naming pattern for tests that you find in the other test files. You can also consult the [Jest documentation](https://jestjs.io/docs/expect), although you shouldn't need to.





## Iteration 8 - Committing solution and checking results

You have solved all of the prior iterations. All of the tests are passing locally.

Let's commit our work, and push it to GitHub.

Immediately after doing so, you should see something like this on your fork of the repository on GitHub:

![Image of ongoing tests](https://user-images.githubusercontent.com/7128083/114205759-8f91d800-9952-11eb-86dc-36b64512d743.png)





This means that GitHub will execute the unit tests for your repository and the code that you pushed.

After a couple of minutes at most, the test results should be ready.

If all of your tests are passing, you should see a green checkmark next to your commit message.



![Image of passing tests](https://user-images.githubusercontent.com/7128083/114199197-feb7fe00-994b-11eb-8b41-0dc5a916a3fb.png)



If any of the tests are failing, you'll see a red cross instead.

![Image of failing tests](https://user-images.githubusercontent.com/7128083/114199210-0081c180-994c-11eb-93ff-b1833ad27121.png)





What we have enabled for this repository is a so-called "_Continuous Integration/Continuous Delivery_" (CI/CD) system, that runs all of our tests one more time.



**Note that you might not always be able to complete every iteration in every lab, or to pass every single test. This shouldn't demotivate you. Automated tests are not the one true measure of the quality of your work or your worth as a developer. Rather, tests are an important tool that you will use as a developer to automate your software development and to gather feedback.**

Best of luck 💙



