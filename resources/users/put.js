protect('isAdmin')
protect('id')
protect('createdAt')
protect('username')

cancelIf(isMe(this.id) || this.isAdmin, 'Access denied', 401);

require('crypto').randomBytes(24, function(err, buffer) {
  var token = buffer.toString('hex');
  this.key = token;
})

hide('password')
hide('isAdmin')
