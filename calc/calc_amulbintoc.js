(function(exports){
exports.calculate = function (data){
   if (data==null) {
      data = {};
   }
   var isxok = true;
   var isbok = true;
   var a = data['a'];
   if (typeof a !='number') {
      isaok = false;
   }
   var b = data['b'];
   if (typeof b !='number') {
      isbok = false;
   }
   var c = null;
   var msg = null;
   if (isaok && isbok) {
      c = a*b;    
      msg="The product of "+a+" and "+b+" is "+c;
   } else {
      msg="Please provide parameters a and b which are numbers. Unable to perform calculation with parameters a="+(!isaok ? "'" : "")+a+(!isaok ? "'" : "")+" and b="+(!isbok ? "'" : "")+b+(!isbok ? "'" : "");
   }      
   data['c']=c; 
   data['message']=msg;
   return JSON.stringify(data);
}
})(typeof exports === 'undefined'? this['calc']={}: exports);