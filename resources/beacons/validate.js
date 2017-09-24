function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function isString(s){
    return typeof s === 'string' || s instanceof String;
}

if(!isNumeric(this.latlng.lat) || !isNumeric(this.latlng.lng) ){
    error('latlng','LatLng coordinates are not properly formatted');
} else {
    if(this.latlng.lat < -90){
        this.latlng.lat = -90;
    } else if(this.latlng.lat > 90){
        this.latlng.lat = 90;
    }
    
    if(this.latlng.lng < -180){
        this.latlng.lng += 360;
    } else if(this.latlng.lng > 180){
        this.latlng.lng -= 360;
    }
    
    if(Object.keys(this.latlng).length > 2){
        this.latlng = {
            'lat': this.latlng.lat,
            'lng': this.latlng.lng
        }
    }
}

var protocol = ['Eddystone','iBeacon'];
if(isString(this.beacon.protocol) && protocol.indexOf(this.beacon.protocol) >= 0){
    if(this.beacon.protocol == protocol[0] && Buffer.byteLength(this.beacon.uid, 'utf8') == 16){
        if(Object.keys(this.beacon).length > 2){
            this.beacon = {
                'protocol': this.beacon.protocol,
                'uid': this.beacon.uid
            }
        }
    } else if(this.beacon.protocol == protocol[1] && Buffer.byteLength(this.beacon.uuid, 'utf8') == 16
    && this.beacon.major >=0 && this.beacon.major <= 65535
    && this.beacon.minor >=0 && this.beacon.minor <= 65535){
        if(Object.keys(this.beacon).length > 4){
            this.beacon = {
                'protocol': this.beacon.protocol,
                'uid': this.beacon.uid,
                'major': this.beacon.major,
                'minor': this.beacon.minor
            }
        }
    } else {
        error('beacon','Beacon is not properly formatted');
    }
}

