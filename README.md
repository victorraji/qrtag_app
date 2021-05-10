# qrtag_app

The frontend stack

- Framework - [VueJS]
- UI library - [ElementUI]
- CSS - [TailwindCSS]
- Store - [VuexOrm]
- Routing - [VueRouter]

### Installation and setup

qrtag_app requires [Node.js](https://nodejs.org/) v4+ to run.

Clone the repo, install the dependencies and start the server.

```sh
$ cd qrtag_app
$ npm install
$ npm run serve
```

For linting

```sh
$ npm run lint
```

For testing

```sh
$ npm run test:unit
```

### Vuex Store Rules

The vuex store uses the [VuexOrm] helper plugin to manage the mutating and fetching data from the store. Details about the plugin is in their documentation.

The `model` folder contains files and each file should contain entities that relate to the store data.

- Register the entity on the `model` with a schema
- Add model and entity to the `database`
- Use store helpers - query builder and insert/update, create, delete to handle store state


### Page Rules

A page is route component, only pages should be registered on the router file of the module. Pages should be small and concise,handling api /fetching data calls.
Each page should have its corresponding route registered. Page naming should be descriptive of what the page is responsible for.

Components should be small and focused on one particular task, as features grow the component should be broken down into parent and child to handle growing features/tasks
Each component should be named specifically describing the task/feature the component represents

### CSS Rules

The css for this application is handled by [ElementUI] for UI components and [TailwindCSS] for normal css changes, custom css should therefore be avoided as in most cases the tailwindcss should handle the custom css.

Making changes to the elementUI theme can be done in two ways

1. Make the change from the element-variables file in the css folder, this has a list of common variables that Element UI uses for handling the css of its components.
2. Target the css class used on the component and change it from the variables. Targeting the css class would change the appearance of all the instances of the target component. If you want to make a change on a particular component alone you can target the css file using the css scope styling available on the component.


//docs and refernce links

[vuejs]: https://vuejs.org
[vuexorm]: https://vuex-orm.org
[elementui]: https://element.eleme.io/#/en-US
[tailwindcss]: https://tailwindcss.com
[vuerouter]: https://router.vuejs.org
[node.js]: http://nodejs.org


