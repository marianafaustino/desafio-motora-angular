# Alterações no backend
## Travels service
### Método post:
postTravel(travel: any): any {
    travel.id = ++this.lastUsedId;
    travel.driverId = travel.driverId || -1;
    travel.vehicleId = travel.vehicleId || -1;
    travel.start = travel.start || new Date();
    travel.status = travel.status || travel.end ? 'finished' : 'ongoing';
    travel.end = travel.end || undefined;
    travel.startingLocation = travel.startingLocation || [0, 0];
    travel.finalLocation = travel.finalLocation || [0, 0]

    this.travels.push(travel);

    this.travelsGateway.sendCreated(travel);
    return travel;
  }

### Exemplo de json para post (http://localhost:3000/travels/5):
{
    "startingLocation": [-20.3202, -40.293] ,
    "finalLocation": [-20.3155, -40.3128],
    "driverId": 1,
    "vehicleId": 1,
    "status": "finished",
    "start": "2021-01-01T00:00:00.000Z",
    "end": "2021-01-01T00:00:00.000Z"
  }

# MeuProjeto

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
