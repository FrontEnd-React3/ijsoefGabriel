$(document).ready(function () {
  $("#radio1").click(() => {
    $("#beeldHorentje").show();
    $("#beeldPotje").hide();
  });
  $("#radio2").click(() => {
    $("#beeldHorentje").hide();
    $("#beeldPotje").show();
  });

  $("#btn1").click(() => {
    $("#check1, #check2, #check3").checked = false;
    $(
      ".aantal, #beeldHorentje, #beeldPotje, #chocoInput, #vanilleInput, #aardbeiInput"
    ).hide();
  });
});


$("#check2").click(() => {
  $(this).is(":checked")
    ? $(".aantal").classList.add("apear") : document.querySelector(".aantal").classList.remove("apear")
});


$("#check3").click(() => {
  $(this).is(":checked")
    ? $("#aardbeiInput").show()($("#aantalAardbei").s())
    : console.log("helaba3 ");
});
$("#check3").click(() => {
  !$(this).is(":checked")

  console.log("helaba ")
});


function checkboxclicker() {
  document.getElementById("aantalChoco").classList.toggle("apear");
  let checker = (document.querySelector("#check1").checked);
  let valueChoco = Number(document.getElementById("chocoInput").value);
  console.log("checkbox" + (checker))
  verschijner(checker)
  checker == false ? (valueChoco = 0) : valueChoco;

}



function verschijner(checkerdoorgever) {
  let checker1 = checkerdoorgever;
  let aantalChoco;
  let valueChoco = Number(document.getElementById("chocoInput").value);
  console.log("valueChoco" + valueChoco)
  console.log("checkbox2" + (checker1));

  valueChoco == 1 ? (aantalChoco = "bolletje") : (aantalChoco = "bolletjes");

  document.getElementById("h1").innerHTML =
    "Je hebt " + valueChoco + " " + aantalChoco + " chocolade ijs gekozen.";


  function smaakWeergave() {
    let valueVanille = Number(document.getElementById("vanilleInput").value);
    let valueAardbei = Number(document.getElementById("aardbeiInput").value);
    let sum = valueChoco + valueVanille + valueAardbei;
    let aantalVanille; let aantalAardbei; let totaalAantaal;


    valueVanille > 1
      ? (aantalVanille = "bolletjes") : valueVanille == 1
        ? (aantalVanille = "bolletje") : aantalVanille = "bolletje"


    if (valueAardbei > 1) {
      aantalAardbei = "bolletjes";
    } else if (valueAardbei == 1) {
      aantalAardbei = "bolletje";
    } else {
      aantalAardbei = "bolletje";
    }

    if (document.querySelector("#check1").checked == false) {
      alert("chocoInput")
    } else {
    }





    valueVanille == 0 ? document.querySelector("#h2").classList.add("disapear") : document.querySelector("#h2").classList.remove("disapear")
    valueAardbei == 0 ? document.querySelector("#h3").classList.add("disapear") : document.querySelector("#h3").classList.remove("disapear")


    sum > 1
      ? (totaalAantaal = "bolletjes") : (totaalAantaal = "bolletje");

    // $("#check3").click(() => {
    //   $(this).is(":unchecked")
    //     ? (alert("hey")) : (aardbeiValue == aardbeiValue);
    // });
    $("#check3").click(() => {
      !$(this).is(":checked")
    });



    document.getElementById("h2").innerHTML =
      "Je hebt " + valueVanille + " " + aantalVanille + " vanille ijs gekozen.";

    document.getElementById("h3").innerHTML =
      "Je hebt " + valueAardbei + " " + aantalAardbei + " aardbei ijs gekozen.";

    document.getElementById("h4").innerHTML =
      "Je hebt in totaal " + sum + " " + totaalAantaal + " ijs gekozen.";
  }
};