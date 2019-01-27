var mongoose    =require("mongoose");
var Campground  =require("./models/campground");
var comment     =require("./models/comment");


var data = [
{
name:"Vashistha",
image:"https://images.unsplash.com/photo-1468956398224-6d6f66e22c35?ixlib=rb-0.3.5&s=ceb1121831b576d6483acb67f8c10d35&auto=format&fit=crop&w=500&q=60",
discription:"Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as  a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities. Camping can be enjoyed through all four seasons."
},
{
name:"Vishwamitra",
image:"https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d95171e276fbd03de651f9aecb64b53d&auto=format&fit=crop&w=750&q=80",
discription:"Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities. Camping can be enjoyed through all four seasons."
},
{
name:"Kashyapa",
image:"https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffdbb5e90a2c129258d4540ef0f29d06&auto=format&fit=crop&w=750&q=80",
discription:"Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities. Camping can be enjoyed through all four seasons."
},

{
name:"Atiri",
image:"https://images.unsplash.com/photo-1486082570281-d942af5c39b7?ixlib=rb-0.3.5&s=c64bd8c13d331948149baf2a7e2ebf30&auto=format&fit=crop&w=500&q=60",
discription:"Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities. Camping can be enjoyed through all four seasons."
}
    ]

function seedDB(){
    // remove all campground
    Campground.remove({}, function(err){
    // if(err){
    //     console.log(err)
    // }
    // console.log("removed campground");
    // // data for new campground
    // data.forEach(function(seed){
    // Campground.create(seed, function(err, campground){
    //     if(err){
    //         console.log(err)
            
    //     }else{
    //         console.log("added a campground")
    //         // create a comment
    //         comment.create(
    //             {
    //             text:"this place is great but i wish there was internet",
    //             auther:"Homer"
    //           }, function(err,comment){
    //               if(err){
    //                   console.log(err)
    //               }else{
    //                   campground.comments.push(comment);
    //                   campground.save();
    //                   console.log("created new comment")
    //               }
    //           });
    //     }
    // });
//   });
  });

}
module.exports=seedDB;
