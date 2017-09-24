//dpd.users.get({key: query.key},function(results,error){})
dpd['user-data'].get({userId: query.userId},function(results,error){
    var reduced = results.reduce(function(acc,current){
        acc.push(current.data);
        return acc;
    },[])
    this.userData = reduced;
})