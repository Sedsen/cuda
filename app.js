var canvas = document.querySelectorAll(".chart");

canvas.forEach(function(canv) {
  canv.width = 160;
  canv.height = 160;
  var valeur = canv.getAttribute("data-value");
  var color = canv.getAttribute("data-color");
  var context = canv.getContext("2d");

  var rest = 100 - valeur;
  var dataChart = [
    {
      value: 100,
      color: color
    },
    {
      value: rest,
      color: "#DFE7ED"
    }
  ];
  var options = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: false,

    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth: 4,

    //The percentage of the chart that we cut out of the middle.
    percentageInnerCutout: 50,

    //Boolean - Whether we should animate the chart
    animation: true,

    //Number - Amount of animation steps
    animationSteps: 100,

    //String - Animation easing effect
    animationEasing: "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,

    //Function - Will fire on animation completion.
    onAnimationComplete: null
  };

  var doughnut = new Chart(context);
  doughnut.Doughnut(dataChart, options);
});
