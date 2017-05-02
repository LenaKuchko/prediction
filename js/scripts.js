var result=0;
$(function () {
  $(".formOne").submit(function (event) {
    event.preventDefault();
    $("input:checkbox[name=lucky]:checked").each(function () {
      var luckyResponse = parseInt($(this).val());
      result+=luckyResponse;

    })
    $("input:checkbox[name=unlucky]:checked").each(function () {
      var unluckyResponse = parseInt($(this).val());
      result-=unluckyResponse;
    })
    console.log(result);
    if (result>=5) {
      $("#prediction").text("You are bound to win the next PowerBall. Buy it from our local gift shop!")
    } else if (result<=4&&result>=1) {
      $("#prediction").text("Try reading a horoscope? We got nothing good or bad here.")
    } else {
      $("#prediction").text("Buy a riot shield and hide under a fortified bridge. Burn incense. Pray to the Olympian gods.")
    }
    result=0;
  });
});
