if(!internal){
    dpd.users.get({key: query.key}, function(results,error){
        cancelUnless(results.length,"Key is not valid",401);
        query.userId = results[0].id;
    })
}