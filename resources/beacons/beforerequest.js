function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


query.boundsError = false;
if(typeof query.id === 'undefined' && ctx.req.method === 'GET'){
    var areBoundsNumeric = isNumeric(query.minLat) 
    && isNumeric(query.maxLat)
    && isNumeric(query.minLng)
    && isNumeric(query.maxLng);
    if(areBoundsNumeric){
        var isLatRangeValid = query.minLat < 90 
        && query.minLat < query.maxLat
        && query.maxLat > -90;
        
        query.minLng += 180;
        query.minLng %= 360;
        query.minLng -= 180;
        
        query.maxLng += 180;
        query.maxLng %= 360;
        query.maxLng -= 180;
        
        var isLngRangeValid = query.minLng < 180 
        && query.minLng < query.maxLng
        && query.maxLng > -180;
    }
    cancelUnless(areBoundsNumeric && isLatRangeValid && isLngRangeValid,'LatLng bounds contain invalid data',400)
    
    
    query.latlng = {lat: {$gte: query.minLat, $lte: query.maxLat}, lng: {$gte: query.minLng, $lte: query.maxLng}};
}

if(!internal){
    dpd.users.get({key: query.key}, function(results,error){
        cancelUnless(results.length,"Key is not valid",401);
        query.userId = results[0].id;
    });
}