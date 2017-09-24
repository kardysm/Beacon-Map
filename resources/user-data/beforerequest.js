var usersCondition = internal ? query.userId : {key: query.key};
dpd.users.get(usersCondition, function(results,error){
    cancelUnless(results.length,"Key is not valid",401);
    query.userId = this.userId = results[0].id;
})