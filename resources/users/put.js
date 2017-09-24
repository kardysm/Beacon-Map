protect('isAdmin')
protect('id')
protect('createdAt')
protect('username')

cancelIf(isMe(this.id) || this.isAdmin, 'Access denied', 401);

hide('password')
hide('isAdmin')
