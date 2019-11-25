# cleanproject

**CRUD**

This is an adaptation of the CRUD project using vue Cli , where vue scafold the project structures and add modules necessary for a production level.

**The Problems**

Comunication betwen components is trick once you emit a event change with custom events is triggering the others too , so I think It will have to use VUEX to watch the mutations and changes to be stored, so far im trying to fix that without have to use State Management.

Axios is not being recognized globably normaly all the methods and data has to be inside their own component,lets see if now i can access the data form database.



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
