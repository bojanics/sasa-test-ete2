(function(exports){
exports.calculate = function (data){
   if (data==null) {
      data = {};
   }
   var isxok = true;
   var isyok = true;
   var x = data['a'];
   if (typeof x !='number') {
      isxok = false;
   }
   var y = data['b'];
   if (typeof y !='number') {
      isyok = false;
   }
   var z = null;
   var msg = null;
   if (isxok && isyok) {
      z = x*y;    
      msg="The product of "+x+" and "+y+" is "+z;
   } else {
      msg="Please provide parameters x and y which are numbers. Unable to perform calculation with parameters x="+(!isxok ? "'" : "")+x+(!isxok ? "'" : "")+" and y="+(!isyok ? "'" : "")+y+(!isyok ? "'" : "");
   }      
   data['c']=z; 
   data['message']=msg;
   return JSON.stringify(data);
}
})(typeof exports === 'undefined'? this['calc']={}: exports);