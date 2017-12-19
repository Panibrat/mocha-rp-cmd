class Adapter {
  static setLaunch(launchId){
    console.log("+++++++++++++ADAPTER++++++++++ WAS", this.launchId);
    this.launchId = launchId;
    console.log("+++++++++++++ADAPTER++++++++++ IS", this.launchId);
  }
  static getLaunch() {
    return  this.launchId;
  }
  static clearLaunch() {
    this.launchId = null;
  }
}

Adapter.launchId = 'qwe123asd12345';


//var adapter = new Adapter();

module.exports.adapter = new Adapter();



// function Adapter(id) {
//   this.launchId = id;
// }
//
// Adapter.prototype.getLaunch =  function(){
//     return this.launchId;
//   };
// Adapter.prototype.clearLaunch = function(){
//     this.launchId = null;
//   };
// Adapter.prototype.setLaunchId = function(id){
//     this.launchId = id;
//   };
//
// var adapter = new Adapter('q123123asdxcvdgfhet23568kgndgw425hnfgdheh4568u');
//
//
// console.log("CLASS:", adapter.getLaunch());
//
//
// module.exports = {adapter};




// class Adapter {
//     constructor(id) {
//       this.launchId = id;
//     }
//
//     static setLaunch(launchId){
//     console.log("+++++++++++++A-D-A-P-T-E-R WAS", this.launchId);
//     this.launchId = launchId;
//     console.log("+++++++++++++A-D-A-P-T-E-R setLaunch", this.launchId);
//   }
//   static getLaunch() {
//     return  this.launchId;
//   }
// static clearLaunch() {
//     this.launchId = null;
//   }
// }
//
// let adapt = new Adapter("0987");
//
// console.log("CLASS:", adapt.getLaunch());
//
// module.exports.adapt = adapt;
