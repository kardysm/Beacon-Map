dpd.userdata.get({userId: query.userId, beaconId: this.id},function(results,error){
    var reduced = results.reduce(function(acc,current){
        acc.push(current.data);
        return acc;
    },[]);
    this.userData = reduced;
});

