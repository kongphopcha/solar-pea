$(document).ready(function() {
    
    head = $('#description').val()
    x1=parseFloat($('#one').val())
    x2=parseFloat($('#two').val())
    x3=parseFloat($('#three').val())
    x4=parseFloat($('#four').val())
    x5=parseFloat($('#five').val())
    x6=parseFloat($('#six').val())
    x7=parseFloat($('#seven').val())
    x8=parseFloat($('#eight').val())
    x9=parseFloat($('#nine').val())
    x10=parseFloat($('#ten').val())
    x11=parseFloat($('#eleven').val())
    x12=parseFloat($('#twelve').val())
    x13=parseFloat($('#thirteen').val())
    x14=parseFloat($('#fourteen').val())
    x15=parseFloat($('#fifteen').val())
    x16=parseFloat($('#sixteen').val())
    x17=parseFloat($('#seventeen').val())
    x18=parseFloat($('#eighteen').val())
    x19=parseFloat($('#nineteen').val())
    x20=parseFloat($('#twenty').val())
    x21=parseFloat($('#twenty_one').val())
    x22=parseFloat($('#twenty_two').val())
    x23=parseFloat($('#twenty_three').val())
    x24=parseFloat($('#twenty_four').val())
   

    var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title:{
        text: head
    },
    axisY:{
        includeZero: false
    },
    data: [{        
        type: "line",       
        dataPoints: [
            { y: x24},
            { y: x1},
            { y: x2 },
            { y: x3 },
            { y: x4 },
            { y: x5 },
            { y: x6 },
            { y: x7 },
            { y: x8 },
            { y: x9 , indexLabel: "9.00 น.",markerColor: "red", markerType: "triangle" },
            { y: x10 },
            { y: x11 },
            { y: x12 },
            { y: x13 },
            { y: x14 },
            { y: x15 },
            { y: x16 , indexLabel: "16.00 น.",markerColor: "red", markerType: "triangle" },
            { y: x17 },
            { y: x18 },
            { y: x19 },
            { y: x20 },
            { y: x21 },
            { y: x22 },
            { y: x23 }
           
      
        ]
    }]
    });
    chart.render();

})


 