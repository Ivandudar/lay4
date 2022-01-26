$(document).ready(function(){
    function screenClass() {
        var count = $("#owl-slider > div").length;
        if($(window).innerWidth() < 850 || count > 3) {
            var owl = $("#owl-slider");
            owl.owlCarousel({
                loop: true,
                margin: 0,
                items: 3,
                responsive : {
                    0 : {
                        items: 1
                    },
                    600 : {
                        items: 2,
                    },
                    850 : {
                        items: 3,
                    }
                },
                center: false,
                dots: true,
                nav: false,
                touchDrag  : true,
                mouseDrag  : true,
                autoplay:true,
                autoplayTimeout:4000,
                autoplayHoverPause:true,
                animateIn: "fadeIn",
                animateOut: "fadeOut"
            });
        } else {
            $('#owl-slider').removeClass('owl-carousel');
            $('#owl-slider').removeClass('owl-theme');
            $('#owl-slider').addClass('row');
            $('#owl-slider > .item').addClass('col-md-4');
        }
    }
    screenClass();
    var owl = $("#owl-feedback");
    owl.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        center: true,
        dots: true,
        nav: false,
        touchDrag  : true,
        mouseDrag  : true,
        autoplay:false,
        autoplayTimeout: 10000,
        autoplayHoverPause:true,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    });
    var owl = $("#owl-mentors");
    owl.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        center: true,
        dots: true,
        nav: false,
        touchDrag  : true,
        mouseDrag  : true,
        autoplay:true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    });
// Validation form functions
    $("#submit").click(function() {
        let name= $(".name").val();
        let suname= $(".suname").val();
        let telephone= $(".phone").val();
        let interrest = $(".interested_in").val();
        let email= $(".email").val();
        let nameReg = /^[a-zA-Z\u0401\u0451\u0410-\u044f]{2,40}$/;
        let interrestReg = /^[a-zA-Z\u0401\u0451\u0410-\u044f]{2,40}$/;
        let sunameReg = /^[a-zA-Z\u0401\u0451\u0410-\u044f]{2,40}$/;
        let regMail = /^\S+@\S+\.\S+$/;
        let regPhone = /^[0-9\-\+]{9,15}$/;
        let errorname = [];
        let errorsuname = [];
        let errorphone = [];
        let errorinterest = [];
        let errormail = [];
        if (name==null || name=="" || name.search(nameReg)){
            $("#name").addClass("novalid_input");
            errorname[0] = 1;
        } else {
            $("#name").removeClass("novalid_input");
            errorname[0] = 0;
        }
        if(telephone.search(regPhone)){
            $("#phone").addClass("novalid_input");
            errorphone[0] = 1;
        } else {
            $("#phone").removeClass("novalid_input");
            errorphone[0] = 0;
        }
        if(suname==null || suname=="" || suname.search(sunameReg)){
            $("#suname").addClass("novalid_input");
            errorsuname[0] = 1;
        } else {
            $("#suname").removeClass("novalid_input");
            errorsuname[0] = 0;
        }
        if (email.search(regMail)) {
            $("#email").addClass("novalid_input");
            errormail[0] = 1;
        } else {
            $("#email").removeClass("novalid_input");
            errormail[0] = 0;
        }if(interrest==null || interrest=="" || interrest.search(interrestReg)){
            $(".interested_in").addClass("novalid_input");
            errorinterest[0] = 1;
        } else {
            $(".interested_in").removeClass("novalid_input");
            errorinterest[0] = 0;
        } if (!$('input.agree').is(':checked')) {
            $(".check_label").addClass("red");
        } else {
            $(".check_label").removeClass("red");
        }
        if (errorname[0] != 1 && errorphone[0] != 1 && errormail[0] != 1) {
            $(".email").removeClass("novalid_input");
            $(".name").removeClass("novalid_input");
            $(".suname").removeClass("novalid_input");
            $(".phone").removeClass("novalid_input");
            $(".interested_in").removeClass("novalid_input");
            $(".check_label").removeClass("red");
            return true;
        }
    });







  function animated(){
    const counters = document.querySelectorAll('.value');
    const speed = 7000;
    counters.forEach( counter => {
      const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;

        const time = value / speed;
        if(data < value) {
          console.log(value);
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 10);
        }else{
          counter.innerText = value;
        }

      }
      animate();
    });
  }
  var block_show = null;

  function scrollTracking(){
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.stat_inside').offset().top;
    var eh = $('.stat_inside').outerHeight();

    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
      if (block_show == null || block_show == false) {
        console.log('Блок active в области видимости');
      }
      block_show = true;
      animated();
    } else {
      if (block_show == null || block_show == true) {
        console.log('Блок active скрыт');
      }
      block_show = false;
    }
  }

  $(window).scroll(function(){
    scrollTracking();
  });

  $(document).ready(function(){
    scrollTracking();
  });


});
