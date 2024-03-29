/*
A new custom route for our custom page. 
Browse to http://localhost:3000/my-custom-route to see it.
*/

import { addRoute, getComponent } from 'meteor/vulcan:core';

//addRoute({name: "myCustomRoute", path: "/my-custom-route", component: getComponent("MyCustomPage")});

addRoute({name: "aboutRoute", path: "/about", component: getComponent("About")});
addRoute({name: "guideRoute", path: "/guide", component: getComponent("Guide")});
addRoute({name: "relatedRoute", path: "/related", component: getComponent("RelatedDocuments")});
