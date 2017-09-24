dpd.userdata.get({userId: query.userId},function(results,error){
    var reduced = results.reduce(function(acc,current){
        acc.push(current.data);
        return acc;
    },[]);
    this.userData = reduced;
});