// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by exit-locations.js.
import { name as packageName } from "meteor/igoandtrace:exit-locations";

// Write your tests here!
// Here is an example.
Tinytest.add('exit-locations - example', function (test) {
  test.equal(packageName, "exit-locations");
});
