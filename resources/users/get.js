if(query.key.length && this.key == query.key && this.id){
    me = this;
}
cancelUnless(me && (isMe(this.id) || me.isAdmin), 'Access denied', 401);

hide('isAdmin')
hide('password')