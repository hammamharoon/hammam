$(document).ready(function () {
  $("h1").animate(
    {
      opacity: "100%",
    },
    3000,
    function () {
      $("h1").fadeOut(3000);
    }
  );
});
