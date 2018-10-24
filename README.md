# Show Explorer

This repository contains code for a simple single page app that exposes a UI for exploring VICE shows.

## Quick Start
This project requires [Node JS](https://nodejs.org/en/) to be installed locally.

1. Download/clone this repository locally, and run `npm install` from within.
2. Run `npm run dev`
3. A new tab in your browser should automatically open, pointing to http://localhost:8888

## Testing
The project contains support for tests using a combination of tools including Mocha, Chai, Sinon, and Enzyme.

To run these tests, simply enter the following command:
- `npm run test:unit`

If you would like to watch for changes, you can also run `npm run test:unit:watch`.

## Technologies Used:
- React: main JS library
  - React Router: client side routing
- SCSS: styling
  - CSS Grid: layouts
  - Flexbox
  - FontAwesome: icons
- Babel: ES6+ transpiling
  - Async/Await
- Webpack: bundling of static assets
- ESLint: linting
- Mocha, Chai, Sinon, Enzyme: testing
  - [fetch-mock](https://github.com/wheresrhys/fetch-mock): lightweight library to mock fetch API

## Structure
The client side code for this project can be found within the `client` subdirectory.

```shell
|-- client
    |-- components/        # React components
    |-- styles/            # SCSS files
    |-- index.js           # entry file
    |-- index.html
```

**React**
I've organized React components into their own subdirectories containing the component itself, as well as a spec for that component.

For example:
```shell
|-- client
    |-- components/
       |-- App/
          |-- App.jsx
          |-- App.spec.js
```

I believe this type of file structure allows for a basic form of documentation for each component.


**Components**
```shell
|-- client
    |-- components/
       |-- Root/              # Entry component for the whole app, renders a Router with the main index route.
       |-- App/               # Wrapper for main presentation components Nav and Show.
       |-- Nav/               # A recirc of tiled links to VICE shows
       |-- Show/              # A components that renders a Tile, fetching and passing relevant props for a particular Show.
       |-- Tile/              # An abstraction of a box with an image and some text; for possible reuse as the app scales.
       |-- ErrorHandler.jsx   # A utility component for error handling
```

**Styling**
```shell
|-- client
    |-- styles/
       |-- application.scss        # contains imports and component specific styling
       |-- layout.scss             # defines grid layout for the app
       |-- mixins.scss             # utility mixins, specifically for media queries
       |-- reset.scss              # basic CSS reset
       |-- variables.scss          # color and size variables
```
For this project, given it's limited scope and size, I chose to keep component specific styling rules separate from component subdirectories. I would anticipate that as the application began to grow and more components were added, it would make sense to move to a CSS in JS / style component approach.

## UI
I've largely followed the designs, while adding a few unique components.

**Navigation**
I envisoned the tiled navigation component as a tool for exploring different VICE shows easily by name.

Possible future improvements include:
- centering view on tile that is currently selected when you first land on the page
- enable infinite scroll
-

**Main Content**
In addition to displaying the image of the show and it's meta data, I've added two navigation arrows to easily allow the user to explore more.
Possible future improvements include:
- Clicking on these clicks sometimes results in FOUC, so perhaps consider adding a styling or a loader to address.

**Layout**
CSS Grid makes it easy to keep the Layout fluid and responsive.
Possible future improvements include:
- The `horizontal` breakpoint included in the design specs leaves the navigation a bit too large for my liking on a tablet view. I'd likely add a tablet specific breakpoint to configure things more appropriately to each screen size.

## Error Handling
I've made use of React 16's new `componentDidCatch` lifecycle method to streamline user experience and handle possible edge cases.

For example, try navigating to `http://localhost:8888/?id=100`. Previously, this invalid query string would have unmounted the entire application. Now, we can catch that error and render as silly, but useful error component that allows the user to navigate back to more useful content.
