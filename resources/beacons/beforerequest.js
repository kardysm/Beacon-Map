dpd.users.get({'key':query.key}, function(results){
    cancelIf(results.length,"Key is not valid",401);
    delete query.key;
})