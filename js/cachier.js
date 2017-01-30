/**
  KASSENMASCHINE

  - hat einen Betrag Geld in der Kasse,

  - es kann ein Betrag eingezahlt werden

  - es kann ein Betrag rausgenommen werden, NUR WENN DER BETRAG IN DER KASSE IST

  - man kann sich den Betrag in der Kasse anzeigen lassen
*/

function KassenMaschine() {
  var kasse = 0;


  this.addCash = function (cash) {
    kasse += cash;
  }





  this.removeCash = function (cash) {

    if (kasse < cash){
      console.log("Kassenbetrag zu niedrig!");
      return;
    }

    kasse -= cash;
  }


  this.print = function(){
    console.log(kasse);
  }


}

var kassenMaschine = new KassenMaschine();
kassenMaschine.addCash(1000);
kassenMaschine.print();
kassenMaschine.removeCash(400);
kassenMaschine.print();
