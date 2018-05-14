var friends = require('../data/friends.js');

module.exports = function(app){

  app.get('/api/friends', function(req,res){
    res.json(friends);
  });

  app.post('/api/friends', function(req,res){
    let scoreSheet = req.body.scores;
    let compatibility = 0;
    let bestMatchCompat = 10000000;
    let theMatch;

    for(let i = 0; i < friends.length; i++){
      let compatibility = 0;

      for(let k = 0; k < scores.length; j++){
        compatibility += (Math.abs(parseInt(friendList[i].scoreSheet[j]) - parseInt(newFriendScores[k])));

        if(compatibility < bestMatchCompat){
            bestMatchCompat = compatibility;
            theMatch = i;
        }
      }

    }

    friends.push(req.body);
    
    res.json(theMatch);
  });
};