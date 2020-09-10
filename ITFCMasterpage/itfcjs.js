function dispES() {
  $("#eservices_submenu").show();
  // $(".content").addClass("overlay");
  // $('#esvs').css({" background-color":"rgb(166, 87, 130)", "color":" white"}  )
  // $("#icon2").attr("src", "iconwhite/file-text (2).svg");
  // $("#side-icon2").css("padding-top", "24px");
  // $("#side-icon2").addClass("bgmain");
}
$(document).mouseup(function (e) {
  if ($(e.target).closest("#eservices_submenu").length === 0) {
    $("#eservices_submenu").hide();
    $(".content").removeClass("overlay");
    $("#icon2").attr("src", "icons/file-text.svg");
    $("#side-icon2").css("padding-top", "37px");
    $("#side-icon2").removeClass("bgmain");
  }
});

function displayinfo() {
  $("#inf").show();
}

$(document).mouseup(function (e) {
  if ($(e.target).closest("#inf").length === 0) {
    $("#inf").hide();
  }
});

function displaynotif() {
  $("#notif").show();
}

$(document).mouseup(function (e) {
  if ($(e.target).closest("#notif").length === 0) {
    $("#notif").hide();
  }
});

function dispsearch() {
  $("#navsearch").show();
  $("#navsearchicn").hide();
}

function dispsearchicn() {
  $("#navsearch").hide();
  $("#navsearchicn").show();
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// $(document).on('click', '.main-menu  li  a', function () {
//   $(".main-menu  li  a").removeClass("mainmenu-active");
//   $(this).addClass("mainmenu-active");
// });
