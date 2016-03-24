$(document).ready(function() {



  //Name variables//

  var optiTitle = $("#optimind").text();
  var pTitle = $("#piracetam").text();
  var crTitle = $("#creatine").text();
  var supTitle = $("#supp").text();

  var optiPrice = parseInt($(".opti-price").text());
  var pPrice = parseInt($(".p-price").text());
  var crPrice = parseInt($(".cr-price").text());
  var supPrice = parseInt($(".sup-price").text());



  $("#addtocart").click(function(event){
      event.preventDefault();
      var optiQuantity = parseInt($("#product1").val());
      var pQuantity = parseInt($("#product2").val());
      var crQuantity = parseInt($("#product3").val());
      var supQuantity = parseInt($("#product4").val());



      // These are the price variables


      //totals

      var optiTotal = (optiPrice * optiQuantity).toString();
      var pTotal = (pPrice * pQuantity).toString();
      var crTotal = (crPrice * crQuantity).toString();
      var supTotal = (supPrice * supQuantity).toString();


      if (optiQuantity > 0 && (isNaN(optiQuantity) === false)){
        console.log(isNaN(optiQuantity));
        $(".optimind").text(optiTitle);
        $("#one").show();
        console.log("showing the li");
        $(".opti-total").text(optiTotal);
        console.log("wheres the total?");

      }
      if (pQuantity > 0 && (isNaN(pQuantity) === false)){
        console.log(isNaN(optiQuantity));
        $(".piracetam").text(pTitle);
        $("#two").show();
        $(".p-total").text(pTotal);

    }
      if (crQuantity > 0 && (isNaN(crQuantity) === false)){
        console.log(isNaN(optiQuantity));
        $(".creatine").text(crTitle);
        $("#three").show();
        $(".cr-total").text(crTotal);

    }
      if (supQuantity > 0 && (isNaN(supQuantity) === false)){
      console.log(isNaN(optiQuantity));
      $(".supp").text(supTitle);
      $("#four").show();
      $(".sup-total").text(supTotal);

    }

  });

  $("#press-total").click(function(event){
      event.preventDefault();
      var optiTotal = parseInt($(".opti-total").text());
      var pTotal = parseInt($(".p-total").text());
      var crTotal = parseInt($(".cr-total").text());
      var supTotal = parseInt($(".sup-total").text());
      var totalArray = [optiTotal, pTotal, crTotal, supTotal];
      var total= 0;
      var sum = [];

      totalArray.forEach(function (total){
        if (isNaN(total) !== true){
          sum.push(total);
        }
      });
      console.log(sum);

      $.each(sum, function(){
         total += this;
      });

      $("#total").text(total);

  });

});
