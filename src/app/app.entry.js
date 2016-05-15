const bulk = require('bulk-require');

// Dependencies
import '../common/ui-common.entry';

// App Module definitions
import "./app.module.js";

// App Modules excluding examples
// const constants = bulk(__dirname, ['./constants/**/!(*index|*example|*.spec).js']);
// const services = bulk(__dirname, ['./services/**/!(*index|*example|*.spec).js']);
// const features = bulk(__dirname, ['./features/**/!(*index|*example|*.spec).js']);
// const routes = bulk(__dirname, ['./routes/**/!(*index|*example|*.spec).js']);


// App Modules
const constants = bulk(__dirname, ['./constants/**/!(*index|*.spec).js']);
const services = bulk(__dirname, ['./services/**/!(*index|*.spec).js']);
const features = bulk(__dirname, ['./features/**/!(*index|*.spec).js']);
const routes = bulk(__dirname, ['./routes/**/!(*index|*.spec).js']);
