# About this repo

This Repository is for the Working with JavaScript Modules Pluralsight course.

## Notes

- IIFE = Immediately Invoked Function Expression. When this wrap code, and this code is called in somewhere, its going to run the code and its not going to share anything outside of its scope. `(()=>{})();`
- Modules are Singletons. When you export something from a module, every other thing that imports that module gets the same instance of it.
- Exports are static.
- Modules are filed-based. One module per file.

## Export modules

- **Named Export:** You have to know the name of the things you have exported to import them.

```
// Directly
export const someConst = 0;
export function someFunc () {};
// As a list
export { someConst, someFunc as func };
```

- **Default Export:** When you export a file, this is the default thing it gets.

```
export default function anotherFunc () {};
export default const anotherCONST = 1;
// As a list with Named Exports
export { anotherFunc as default, anotherCONST };
```

- **Aggregating Modules:** Something we will want to do, its make sure our modules are compact and they're tight, but at the same time we dont wanna have to import a whole bunch of different things.

```
export { somethingToExport } from "./someFileToExport.js";
```

## Import modules

- **Allow modules:**

```
<script src="js/app.js" type="module"></script>
```

- **Default Imports:**

```
import anyName from "./fileToImport.js";
```

- **Named Imports:**

```
import { someFunc as func, errorMessage } from "./fileToImport.js"; // Specific named import
import * as someName from "./fileToImport.js"; // This way will let you to import everything thats being exporting from the file, and call as you want
```
