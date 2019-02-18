// Smooth Scroll
$(document).ready(function(){
  $('.sidenav').sidenav();
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 700, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Testimonials Slider
$(document).ready(function(){
   $('.slider').slider({
     indicators: false,
     interval: 40000,
     height: 200
   });
 });

// Skills chart
var ctx = $("#bar-chartcanvas");

$(function(){
  var ctx = $("#bar-chartcanvas");

  var data = {
    labels: ["iOS", "Ruby", "Python", "Android", "Objective C"],
    datasets: [
      {
        label: "Skill",
        data: [5.8, 5, 4, 3.8, 3],
        backgroundColor: [
          '#4dc9f6',
          '#f67019',
          '#f53794',
          '#537bc4',
          '#58595b'
        ],
        borderColor: [
          "rgba(10,20,30,1)",
          "rgba(10,20,30,1)",
          "rgba(10,20,30,1)",
          "rgba(10,20,30,1)",
          "rgba(10,20,30,1)"
        ],
        borderWidth: 1
      }
    ]
  };

  //options
  var options = {
    responsive: true,
    tooltips: {enabled: false},
    title: {
      display: false,
      position: "top",
      text: "Bar Graph",
      fontSize: 18,
      fontColor: "#111"
    },
    legend: {
      display: false,
      position: "bottom",
      labels: {
        fontColor: "#333",
        fontSize: 16
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          display: true,
          mirror: true
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          userCallback: function(value, index, values) {
            // console.log(values, index);
            switch (index) {
              case 6: return "Noob";
              case 4: return "Amateur";
              case 2: return "Pro";
              case 0: return "Ninja";
            }
          }
        }
      }]
    }
  };

  //create Chart class object
  var chart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options
  });
});

// Contact form

var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

$(document).ready(function() {
  $('#afterEmail').hide();
  $('#contactName').hide();
  $('#contactEmail').hide();
  $('#contactMessage').hide();
  $('#name').click(function() {
    $('#contactName').hide();
  })
  $('#email').click(function() {
    $('#contactEmail').hide();
  })
  $('#message').click(function() {
    $('#contactMessage').hide();
  })
  $('#loader').hide();
  $('#sendMessage').click(function() {
    if ($('#name').val().length < 1) {
      console.log('Name is empty', $('#contactName').val().length);
      $('#contactName').show();
      return;
    }
    if (!$('#email').val().match(emailRegex)) {
      console.log('Email is invalid');
      $('#contactEmail').show();
      return;
    }
    if ($('#message').val().length < 1) {
      console.log('Message is empty');
      $('#contactMessage').show();
      return;
    }

    var data = {
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val()
    }

    $.ajax( {
      type: "POST",
      url: "include/sendEmail.php",
      data: data,
      dataType: 'json',
      beforeSend: function (xhr) {
        //do stuff progressing
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");
        $('#loader').show();
      },
      success: function (response) {
        console.log(response);
        $('#afterEmailMessage').text(response);
        $('#afterEmail').show();
        $('#beforeEmail').hide();
        $('#contact').css('height', '250px');
        $('#loader').hide();
      },
      error: function (e) {
        console.log('error: ' + JSON . stringify(e));
        $('#loader').hide();
      }
    });

  })
})

$('.quotes').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: "",
  nextArrow: ""
});

$( document ).ready(function() {
  $('.no-fouc').removeClass('no-fouc');
});
