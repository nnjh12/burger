# burger

## Preview Link
https://gentle-gorge-16249.herokuapp.com/

## Main functionality of this App
1. Users input the names of burgers they'd like to eat. It will be also added in data base. 
1. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
1. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
1. Whenever a user submits a burger's name or clicks "Devour it!" button, it will be updated in a database.

## File Structure
**Front-End**
1. main.handlebars: HTML skeleton
1. index.handlebars [VIEW]: HTML body skeleton using handlebars
1. public/assets/js/burger.js : Front-end javascript including ajax call

**Back-End**
1. connection.js : MySql connection setup
1. orm.js : ORM setup (require connection.js)
1. burger.js [MODEL] : Call the ORM functions using burger specific input (require orm.js)
1. burgers_controller.js [CONTROLLER] : Using burger model, set up for each router (require burger.js)
1. server.js : Express code (require burgers_controller.js)

```
  burger
    ├─config
    │  ├─connection.js
    │  └─orm.js
    ├─controllers
    │  └─burgers_controllers.js
    ├─db
    │  ├─schema.sql
    │  └─seeds.sql
    ├─models
    │  └─burger.js
    ├─public
    │  └─assets
    │      ├─css
    │      │  └─burger_style.css
    │      ├─img
    │      │  └─burger.jpg
    │      └─js
    │         └─burger.js
    └─views
       ├─layouts
       │   └─main.handlebars
       └─index.handlebars
```  

## Route
* / : Home route. Get data from MySql and display them via handlebars. (GET)
* /api/burgers : When user inserts or updates data, use this route. (PUT,POST)

## What I learned
**Front-End**
```
$.ajax({
  url: "router"
  type: "POST",
  data: { keys: values }
}).then(function () {
    location.reload();
  });
```
```
$.ajax("router",{
  type: "POST",
  data: { keys: values }
}).then(function () {
    location.reload();
  });
```
```
$.post("router",{ keys: values})
  .then(function () {
    location.reload();
  });
```
  * type
    * GET
    * POST
    * PUT
    * DELETE
  * data
    * for type of "POST" & "PUT"
    * format in object
  * location.reload() : refresh the current page

**Back-End**
```
router.get("router", function(req,res){
  ...
})
```
  * target
    * router
      ```
      var router = express.Router()
      ```
    * app
      ```
      var app = express()
      ```
  * method
    * get
    * post
    * put
    * delete
  * Request
    * req.body (What user post)
    * req.params (What user passed in route)
    * req.params.id (What user passed in route "/:id")
  * Response
    * res.sendFile(path.join(__dirname, "index.html")) : need to require "path"
    * res.end()
    * res.status(500).end()
    * res.redirect("route")
    * res.json(data)
    * res.render("handlebar Filename",{keys:values}) : handlebar specific code
  * Example 
    ```
    router.get("/", function (req, res) {
      burger.selectAll(function (data) {
        var handlebarObject = {
          SqlReturnedArray: data
        }
        res.render("index", handlebarObject);
      });
    });
    ```
**Database**
```
connection.query("query", function(err,res){
  ...
})
```
  * query
    * SELECT * FROM table_name
    * INSERT INTO table_name (col1,col2 ..) VALUES (val1,val2 ..)
    * UPDATE table_name SET col = new_val where col = val;
  * function(err,res)
    * always err in first argument, res in second argument.
