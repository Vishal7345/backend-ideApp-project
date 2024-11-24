const idea_controller=require("../controllers/idea.controllers")

/**
 * route for 
 * 127.0.0.1:8000/ideaApp/v1/ideas here:127.0.0.1 'this part indicate the machine ie.laptop or your device.'
 * 8000 indicate port number 
 * 8000/ideaApp/v1/ideas 'this portion called UrI THAT need handle '
 */

module.exports=(app)=>{ //this the way to connect app  to the  route
    
    app.get("/ideaApp/api/v1/ideas",idea_controller.getAllIdeas)
 

}