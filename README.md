# grunt-nodejs-typescript
A powerful Grunt configuration that can lint and compile your TypeScript files and restart your node server each time you make a change to your code.

##Prerequesities

If you haven’t done it yet, to be able to run Grunt, you’ll have to first install [Node.js](http://nodejs.org). Then, install the Grunt CLI using npm (installed with NodeJS) by running this command:
```
npm install –g grunt-cli
```

<br>
You need TypeScript on your machine:
```
npm install –g typescript
```

<br>
Typescript is a typed language. It needs definitions files for the libraries you're using to be able to do it's work. There is an [opensource repository](http://definitelytyped.org/) full of TypeScript definitions for known libraries. Meaning someone has already done the job for us!
There's a [manager]((http://www.tsdpm.com)) using this repository to make our work even simpler. So don't forget to install it:
```
npm install –g tsd@next
```

<br>
This configuration use [nodemon](https://github.com/remy/nodemon) to handle the node server. So you need to install it:
```
npm install -g nodemon
```

##Commands

```
grunt
```
Will lint and compile your TypeScript files.

<br>
```
grunt serve
```
Will watch for changes in your code. When it detects a change, it lints the moddified file, compile the project and restart the node server.
