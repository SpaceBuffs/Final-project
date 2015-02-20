# Database:
Meteor has a database everywhere approach, which means we have the same  API to query the database on the client as well as on the server. when we  query the database on the client, we are only able to access the data that we  published to a client...

####Setting up a collection
```javascript
Activity = new Mongo.collection('activity')
```
####Handy Mongo commands:
---------------------
Mongo.Collection is the API used to query the database and it comes with the following basic methods: 

1. insert: This method is used to insert documents into the database
2. update: This method is used to update documents or parts of them 
3. upsert: This method is used to insert or update documents or parts of them
4. remove: This method is used to delete documents from the database
5. find: This method is used to query the database for documents 
6. findOne: This method is used to return only the first matched document 

console on browser and typing the following command to see the collections:
    
```javascript
Posts.find().fetch();
```
...
example

[take a look how sirra and heather did the acctivity collections](CCT/collections/collections.js)

if we keep the autopublish and insecure core packages added to our project by default. The autopublish package automatically publishes all documents to every client, whereas the insecure package allows every client to update database records by its _id field. this means every client can manipulate our database.    

To access the data on the client, we need to tell the server to publish it to subscribing clients. [so, we need a file called publications.js inside the server](CCT/server/publications.js) folder, example 
```javascript
// publish all the data 
Meteor.publish('something', function () {  
   return FromCollection.find(); 
}); 


// you can also publish part of the data 
Meteor.publish('something', function () {  
   return FromCollection.find({},{
       limit: 2,    
       sort: {timeCreated: -1}
   }); 
}); 

```
The Meteor.publish function will create a publication called something and return a cursor with all the data from the FromCollection collection in that publication. what you need now is to tell the client to subscribe to this publication
by creating a file called subscriptions.js inside the client folder with the following content:
```javascript
   Meteor.subscribe('something');
   
##### Ref: 
1. [Explore Meteor Packages](https://atmospherejs.com/)
2. [iron-router](https://github.com/iron-meteor/iron-router)
3. [Filtering data with publish and subscribe](https://www.meteor.com/try/11)
4. [ Web Apps with Meteor](http://www.smashingmagazine.com/2013/06/13/build-app-45-minutes-meteor/)

timeline ref:

Here is how to do timeline in html and js 

(http://simile.mit.edu/timeline/docs/create-timelines.html)

```
# CCT

Collaborative Campaign Tool
GRAVITEAM by SPACEBUFFS

CU BOULDER '14-'15 Sr. Design Projects
A Proof of Concept for JPL

GraviTeam
A major difficulty among international scientists is finding a collaborative, social interface where scientists from all over the world can share ideas and design space mission experiments. Our solution is a web based application that uses technology and social media to allow for cross-world communication, design, and experimentation.
SpaceBuffs
SpaceBuffs is made up of 6 senior students studying Computer Science Engineering at CU Boulder: Hope Sanford, Sierra Flynn, Heather Dykstra, Josh Weaver, Semere Ghebrechristos, and Chris Acuna.

Version 2.01
1/25/2015
