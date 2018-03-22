import { Component } from '@angular/core'
//@angular/core is a bundle that is mapped in a map in systemjs.config.js file

/*This is our main component and this component is the root component of our application.
 * This is the container for all the components in our app
 * Now we have to do the bootstraping, to do this we have to create a module<app.module.ts>
 * Highly Imp: We have to register components,services,modules,directives etc 
 */

/*@Component() lets Angular know that it is a Component class
 * template tells what kind of html to display, but how do you display in html file?
 * This is done using selector property, the name given to selector is 'events-app',
 * so you have to use this 'events-app' as a tag in the html file as shown <events-app></events-app>
 * In the above way we can pull this component to the HTML page
 */
@Component({
    selector:'events-app',
    template:`
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})
export class EventsAppComponent {
  
}