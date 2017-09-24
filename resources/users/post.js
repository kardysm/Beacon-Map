this.isAdmin = false;
hide('isAdmin');
hide('password');

require('crypto').randomBytes(24, function(err, buffer) {
  var token = buffer.toString('hex');
  dpd.email.post({
  to      : this.email,
  subject : 'Beacon Mapper registration',
  text    : [
      this.username,
      '',
      'Thank you for registering for Beacon Mapper!',
      'Your API key:',
      token
  ].join('\n')
}, function ( err, results ) {
    if(!err){
        this.key = token;
    }
});
});



this.createdAt = Date.now();
