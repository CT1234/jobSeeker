/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': 'HomeController.homepage',
  'get /dashboard': 'HomeController.dashboard',

  'get /login': {
    view: 'login'
  },
    'get   /publicProfile': 'publicProfileController.showPublic',
     'get  /publicProfile/show':           'publicProfileController.showUser',
     'post /publicProfile/show': 'publicProfileController.showUser',
  'post /login': 'UserController.login',
  '/logout': 'UserController.logout',
  'get /signup': 'UserController.new',
  'post /signup': 'UserController.signup',
  'post /user/update': 'UserController.update',

  'post /user/resume': 'ResumeController.create',
   
  'post /user/profilePic': 'ProfilePicController.create',
  'post /user/coverletter': 'CoverLetterController.create',
  'get /user/resume/:id': 'ResumeController.show',
  'get /user/coverletter/:id': 'CoverLetterController.show',
  'get /user/profilePic/:id': 'ProfilePicController.show',
  'delete /user/profilePic/:id': 'ProfilePicController.destroy',
  'delete /user/resume/:id': 'ResumeController.destroy',
  'delete /user/coverletter/:id': 'CoverLetterController.destroy',
  
  'get /job/applications': 'JobController.applications',
  'get /job/new': 'JobController.new',
  'post /job/create' : 'JobController.create',

  'put /user/resume/:id': 'ResumeController.update',
  'put /user/coverletter/:id': 'CoverLetterController.update'
  
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
};
