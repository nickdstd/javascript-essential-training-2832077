/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);


const bottle = {
  bottlename: "Thermos",
  volume: 500,
  color: "yellow", 
isolation: {
  cold: 12,
  warm: 6,
},
};

console.log("The bottle inside of it:", bottle);




const bottle2 ={
  bottlename: "bike bottle",
  volume: 550,
  color:"yellow",
  isolation:{
    cold:"none",
    warm:"none",
  
  },
};

console.log("Or:",bottle2);


const auto ={
  tank: true,
  zündung: true,



  autoAnschalten: function (zündung, tank){
    if this.zündung = true && this.tank = true {
      console.log("")

    }
  }

}


autoAnschalten: function (zündung, benzin) {
this.autoAnschalten = this.
}