$(document).ready(function () {
  // AOS.init();

  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".myNavbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "0.8");
    } else {
      $(".myNavbar").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".header-slider").length) {
    $(".header-slider").slick({
      arrows: true,
      dots: true,
      rtl: currentDir == "rtl" ? true : false,
    });
  }

  if ($(".coFounders-slider").length) {
    $(".coFounders-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".event-slider").length) {
    $(".event-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 2,
      autoplay: true,
      arrows: true,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".clients-slider").length) {
    $(".clients-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".mycustom-select").length) {
    $(".mycustom-select .title").click(function () {
      $(this).siblings().slideToggle();
      $(".selectList").not($(this).siblings()).slideUp();
    });
  }

  $("body,html").on("click", function (e) {
    var container = $(".mycustom-select .title,.mycustom-select .title *"),
      Sub = $(".selectList");

    if (!$(e.target).is(container)) {
      Sub.slideUp();
    }
  });

  $(".selectList li").each((index, item) => {
    // console.log($(item))
    $(item).change(function () {
      let cityName = $(item).attr("value");
      $(this).closest(".mycustom-select-parent").find(".title").text(cityName);
      $(this)
        .closest(".mycustom-select-parent")
        .find(".cityInput")
        .val(cityName);
      $(this)
        .closest(".mycustom-select-parent")
        .find(".cityInput")
        .attr("value", cityName);
      console.log($(".cityInput").attr("value"));
    });
  });

  $(".sidenav li.NesteListParent").click(function () {
    $(this).children("ul").slideToggle();
    $(this).children("i").toggleClass("iMenue");
  });

  if ($(".upload-file").length) {
    $("body").on("change", ".custom-file-input ", function (e) {
      var fileName = e.target.files[0].name;
      $(this).siblings(".custom-file-label").text(fileName);
      $(this)
        .closest(".upload-file")
        .siblings(".delelteFile")
        .fadeIn(500)
        .css("display", "inline-block");
    });
  }

  if ($(".delete-pic").length) {
    let fileLabel = $(".delete-pic")
      .closest(".upload-file")
      .find(".custom-file-label")
      .text();
    $(".delete-pic").click(function () {
      // $(this).fadeOut(500);
      $(this).closest(".upload-file").find(".custom-file-input").val("");
      $(this)
        .closest(".upload-file")
        .find(".custom-file-label")
        .text(fileLabel);
      $(this)
        .closest(".upload-file")
        .find(".pic")
        .css("background-image", "unset");
      $(this)
        .closest(".upload-file")
        .find(".pic")
        .css("background-color", "#f1f1f1");
    });
  }

  if ($(".delete-bank").length) {
    let fileLabel = $(".delete-bank")
      .closest(".upload-file")
      .find(".custom-file-label")
      .text();
    $(".delete-bank").click(function () {
      // $(this).fadeOut(500);
      $(this).closest(".upload-file").find(".custom-file-input").val("");
      $(this)
        .closest(".upload-file")
        .find(".custom-file-label")
        .text(fileLabel);
      $(this)
        .closest(".upload-file")
        .find(".pic")
        .css("background-image", "unset");
      $(this)
        .closest(".upload-file")
        .find(".pic")
        .css("background-color", "#f1f1f1");
    });
  }

  if ($(".delete-btn").length) {
    let fileLabel = $(".delete-btn")
      .closest(".upload-file")
      .find(".custom-file-label")
      .text();
    $(".delete-btn").click(function () {
      // $(this).fadeOut(500);
      $(this).closest(".upload-file").find(".custom-file-input").val("");
      $(this)
        .closest(".upload-file")
        .find(".custom-file-label")
        .text(fileLabel);
    });
  }

  if ($(".upload-file").length) {
    $(document).on("change", ".personal-img-file", function () {
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

      if (/^image/.test(files[0].type)) {
        // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file

        reader.onloadend = function () {
          // set image data as background of div
          //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
          uploadFile
            .closest(".personal-img")
            .find(".pic")
            .css("background-image", "url(" + this.result + ")");
          $(".personal-img-validation-delete").css("display", "block");
        };
      }
    });
  }

  if ($("#datepicker").length) {
    $("#datepicker").datepicker();
  }

  if ($(".example").length) {
    $(".example").htmlNumberSpinner();
  }

  if ($(".productSlider").length) {
    $(".productSlider").slick({
      arrows: true,
    });
  }

  if ($(".evaluation-slider").length) {
    $(".evaluation-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".store-slider").length) {
    $(".store-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      // navElement: ["<img src='../images/dd.png'>","<img src='../images/ddd.png'>"],
      dots: false,
      navText: ["<img src='ddd.png'>","<img src='dd.png'>"],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-400px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}

// const splash = document.querySelector(".splash");

// document.addEventListener("DOMContentLoaded", (e) => {
//   setTimeout(() => {
//     splash.classList.add("displayNone");
//   });
// });
