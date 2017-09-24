if(query.key.length && this.key == query.key && this.id){
    me = this;
}
cancelUnless(me && (isMe(this.id) || me.isAdmin), 'Access denied', 401);

dpd.userdata.get({userId: this.id},function(results,error){
    this.customData = results;
});

hide('isAdmin');
hide('password');