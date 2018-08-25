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
      z = x+y;    
      msg="The sum of "+x+" and "+y+" is "+z;
   } else {
      msg="Please provide parameters x and y which are numbers. Unable to perform calculation with parameters x="+(!isxok ? "'" : "")+x+(!isxok ? "'" : "")+" and y="+(!isyok ? "'" : "")+y+(!isyok ? "'" : "");
   }      
   data['c']=z; 
   data['message']=msg;
   data['xlew_1']='xlew_1';
   data['Xlew_2']='Xlew_2';
   data['XLEW_3']='xLEW_3';
   data['xLEw_4']='xLEw_4';
   data['xlew_5']='xlew_5';
   data['xlew_6']={'a':3,'b':'dd'};
   data['xlew_7']=[{'a':3,'b':'dd'},{'a':33333,'b':'dddddd'}];
   return JSON.stringify(data);
}
})(typeof exports === 'undefined'? this['calc']={}: exports);
