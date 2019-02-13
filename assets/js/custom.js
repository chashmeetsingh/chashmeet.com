// Smooth Scroll
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
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
            console.log(values, index);
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
