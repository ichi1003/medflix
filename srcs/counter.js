if(!i2yesCounter){
  var i2yesCounter={
    render:function Get(g){
      var width = (g.s) ? 'width=' + g.s : '';
      var Tar='target=_blank';
      var f = '<a ' +Tar +' href="http://' + g.y + '.i2yes.com/">';
      f +='<img ' + width + ' border=0 src="https://' + g.y + '.i2yes.com/' + g.y + '.php?p=' + g.v + '_' + g.p + '&v=' + g.v + '&d=' + g.d + '&r=' + g.r + '&t=' + g.t + '&n=' + g.n + '" title="FREE Counter / i2yes.com" alt="FREE Counter / i2yes.com">';
      f +='</a>'; return f;
    }
  }; 
};