# Review Notes
This is a basic project with a single page website. I used the app.component as a controller in this case.  If the app were to expand, it might make sense to employ more of a controller pattern, or even module federation.
- Search the poetry database
- Displays a list of search results to select from (selecting displays the poem)
- You can also get a random poem by pushing the "Random" button.  This can be done repeatedyly.
- UI behaves as you would expect.  "Random" clears the search term as well as selecting a poem from search results.

One feature that would be fun to put into this app is a checkbox to indicate if you think musicians are poets.  If it is checked, you would also query a music api (Spotify?) when searching. In this case it might make sense to take advantage of observables (forkJoin) when calling multiple apis at the same time.  This feature would also require some UI updates to indicate if the search result source was music or poetry.

# Poetry

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
