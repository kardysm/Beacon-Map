if(query.key.length && this.key == query.key && this.id){
    me = this;
}
cancelUnless(me && (isMe(this.id) || me.isAdmin), 'Access denied', 401);

dpd['user-data'].del({userId: this.id}, function(res,err){})