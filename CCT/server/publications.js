/*

*/
Meteor.publish('ActivitiesModel', function () {
   return ActivitiesModel.find({},{
   	limit: 4
   	//sort: {timeCreated: -1}
   }); 
}); 