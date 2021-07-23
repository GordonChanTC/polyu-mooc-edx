# MOOC EDX
## File Structure
```
/
|-component_a
| |-component_a.css     # CSS 
| |-component_a.js      # JS
| |-component_a.html    # Template html of component
|
|-component_b
| |-component_b.css
| |-component_b.js
| |-component_b.html
|
...
```
- Components are stored seperately 

## Usage
To use a component, include following lines into edx
* CSS
``` HTML
<!-- replace "component" to component name in href -->
<link rel="stylesheet" href="https://gordonchantc.github.io/polyu-mooc-edx/compoent/component.css">
```
* JS
``` HTML
<!-- replace "component" to component name in src -->
<script src="https://gordonchantc.github.io/polyu-mooc-edx/compoent/component.js"></script>
```
* HTML

Just copy template code 

## Coding Style
* CSS
    * all classes/ids follow the naming: `m-<component_name>-<class_name>`
        * it is used to prevent conflicts with css from edx

* JS
    * use **ES6** (arrow function)
    * all functions follow the naming: `mComponentNameFunctionName`
    * use **camel case**
    * functions/variables start with **small letter**, constants start with **capital letter**
    * edx has already included **jQuery**, feel free to use it

* HTML
    * it's free ~~~~~~~~~~~~