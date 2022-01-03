

# BasicNgMfe

## (first)
### install latest node (current is 17)
```
npm install -g nx
```
```
npm install
```

## then to start them all together
```nx run appshell:serve-mfe```


- http://localhost:4200
- http://localhost:4201
- http://localhost:4202
- http://localhost:4203

### mfe = micro front end

##why is any of this interesting
- there are 4 different independent apps and one shared library
  - the appshell is the "host" app, and it has no references to the other 3 mfe apps, instead the 3 apps are lazy loaded from a service at runtime from a json configuration.  The LookupService simulates a call to an api or whatever else you might use to get your configured mfes.
  - the 3 mfe apps can run on their own. They have their own app module and component, but the module used when it's being used as a remote is in the remote-entry directory. The RemoteEntryModule sets up the apps initial page and routes.  (The mfes app module just refers to the remote one to starts up the same thing)  
  - the same shared library is referenced by all the apps, and at runtime when a mfe app is dynamically loaded, it gets its services from the host instead of using it's own copy. So a singleton service can still be a singleton service even across different apps that are running in the same host.
- most of what these apps are composed of are just normal angular with a few differences from what would be normal. Except for:
  - the ModuleFederation magic that is in each modules webpack.config
    - each module can be set as a host, remote, or both can actually be used if needed
    - the configured shared modules are resolved by webpack at runtime and provided by whatever module has them, so there is only 1 copy of each loaded into the clients browser
    - dependency versions are checked, so if you run 2 different modules with different angular core versions, then the client will end up with multiple versions of angular core.
    - sharedMappings.register is where the shared services are configured
- nx was used to create these apps together in the same workspace, so they use the same node_modules directory, but they are entirely seperate apps that can run on their own.
- nx has mfe plugins for angular that adds the correct configuration when you use it to add an app or library to an existing workspace.


# some nx ng info and commands
https://nx.dev/l/a/guides/setup-mfe-with-angular

```
npx create-nx-workspace BasicNgMfe
cd basic-ng-mfe/
npm install --save-dev @nrwl/angular

npx nx g @nrwl/angular:app appshell --mfe --mfeType=host --routing=true --unitTestRunner none --e2eTestRunner none

npx nx g @nrwl/angular:app mfe-app1 --mfe --mfeType=remote --port=4201 --host=appshell --routing=true --unitTestRunner none --e2eTestRunner none

npx nx g @nrwl/angular:app mfe-app2 --mfe --mfeType=remote --port=4202 --host=appshell --routing=true --unitTestRunner none --e2eTestRunner none

npx nx g @nrwl/angular:app mfe-app3 --mfe --mfeType=remote --port=4203 --host=appshell --routing=true --unitTestRunner none --e2eTestRunner none

nx g @nrwl/angular:lib shared/services
nx g @nrwl/angular:service NavToolbar --project=shared-services
nx g @nrwl/angular:service Messaging --project=shared-services
nx generate @nrwl/angular:component components/MainLayout --project=appshell

ng add @ng-bootstrap/ng-bootstrap
```














This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@basic-ng-mfe/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
