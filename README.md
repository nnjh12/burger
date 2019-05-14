# burger

## Preview Link
https://gentle-gorge-16249.herokuapp.com/

## Main functionality of this App
1. Users input the names of burgers they'd like to eat. It will be also added in data base. 
1. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
1. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
1. Whenever a user submits a burger's name or clicks "Devour it!" button, it will be updated in a database.

## File Structure
Back-End
1. connection.js : MySql connection setup
1. orm.js : ORM setup (require connection.js)
1. burger.js [MODEL] : Call the ORM functions using burger specific input (require orm.js)
1. burgers_controller.js [CONTROLLER] : Using burger model, set up for each router (require burger.js)
1. server.js : Express code (require burgers_controller.js)

Front-End
1. main.handlebars: HTML skeleton
1. index.handlebars [VIEW]: HTML body skeleton using handlebars
1. public/assets/js/burger.js : Front-end javascript including ajax call

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

## Front-end process


## Back-end process
