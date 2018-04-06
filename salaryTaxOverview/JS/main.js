//this will tell user a greeting based on the time of the day.

let fernando = new Date();
let hourNow = fernando.getHours();
let greeting;

if (hourNow > 18 ) {
    greeting = 'Good Evening';
}
else if (hourNow > 12) {
    greeting = 'Good Afternoon';
}
else if (hourNow > 0 ) {
    greeting = 'Good Morning';
} 
else {
    greeting = 'Welcome!';
}

document.getElementById("greeting").innerHTML = greeting;




//Add Funtionality to make calculations.

    var event1 = document.getElementById("button1");
        event1.addEventListener('click',calc,false);
            
        var userinput1, bonus, p20Var, p40Var, netVar, netMVar, netWVar, output;

        
        var netWVar;     
    
    function calc(){
        
            
            
            userinput1 = parseInt(document.getElementById("input1").value); 
                       
            
            var e = document.getElementById("input2");
            var bonusOutput = parseFloat(e.options[e.selectedIndex].value);
            
            
            userinput1 = parseInt(document.getElementById("input1").value); 
            bonus = userinput1 * bonusOutput;
            console.log(bonus);
            p20Var =  parseInt(document.getElementById("p20Value").value);
            p40Var =  parseInt(document.getElementById("p40Value").value);
            netVar =  parseInt(document.getElementById("netValue").value);
            netMVar =  parseInt(document.getElementById("netMValue").value);
            netWVar =  parseInt(document.getElementById("netWValue").value);
        
        
            
        
        if (isNaN(userinput1) == true){
            
            userinput1 = 0; 
            bonus = 0;
           
        }
                
       
        if (userinput1 <= 11509){
            output = userinput1;
        }
        else{
            output = userinput1; 
        }
        
            p20Var = output * 0.2;
            p40Var = output * 0.4;
        
        if (userinput1 < 11509){
            p20Var = null;
        }
        
        if (userinput1 < 45000) {
            netVar = output - p20Var;
            p40Var = null;
        }
        else if (userinput1 <= 11509){
            netVar = 11509;
        }
        
        else{
            netVar = output - p40Var;
        }
        
        var netMVar = netVar / (12);
        var r1 = netMVar.toFixed(2);
        
        var netWVar = netVar / (52);
        var r2 = netWVar.toFixed(2);
            
        
        document.getElementById("grossValue").innerHTML = "&pound" + userinput1;
        document.getElementById("freeValue").innerHTML = "&pound" + 11509;
        document.getElementById("p20Value").innerHTML = "&pound" + p20Var;
        document.getElementById("p40Value").innerHTML = "&pound" + p40Var;
        document.getElementById("netValue").innerHTML = "&pound" + netVar;
        
        document.getElementById("netMValue").innerHTML = "&pound" + r1 ;
        
        document.getElementById("netWValue").innerHTML = "&pound" + r2 ;
        
        document.getElementById("bonusValue").innerHTML = "&pound" + bonus ;
     
        chartsummary ("pie");   
      
    }

    

    function chartsummary (charttype) {

            var chartTypeSelected = charttype;


            var chart = new CanvasJS.Chart("chartContainer", {
                theme: "theme2",//theme1
                title:{
                    text: "Salary Breakdown"             
                },
                animationEnabled: true,   
                data: [              
                {

                    type: chartTypeSelected,
                    dataPoints: [
                        /*{ label: "Gross Salary",  y: userinput1 },*/
                        { label: "Tax Free", y: 11509 },
                        { label: "Tax @ 20%", y: p20Var  },
                        { label: "Net Annual Salary",  y: netVar  },
                        { label: "Tax @ 40%",  y: p40Var  }
                        
                    ]
                }
                ]
            });
            chart.render();
        }

            
        function chartsummary2 (charttype) {

            var chartTypeSelected = charttype;
            var userinput2, p20Var2, p40Var2, netVar2, output2;

               userinput2 = userinput1 + bonus;
               output2 = userinput2 - 11509;
               p20Var2 = output2 * 0.2;
               p40Var2 = output2 * 0.4;
               netVar2 = output2;


            var chart = new CanvasJS.Chart("chartContainer2", {
                theme: "theme2",//theme1
                title:{
                    text: "Salary Breakdown With Bonus"             
                },
                animationEnabled: true,   // change to true
                data: [              
                {
                    // Change type to "bar", "area", "spline", "pie",etc.
                    type: chartTypeSelected,
                    dataPoints: [
                        /*{ label: "Gross Salary",  y: userinput2 },*/
                        { label: "Tax Free", y: 11509 },
                        { label: "Tax @ 20%", y: p20Var2  },
                        { label: "Tax @ 40%",  y: p40Var2  },
                        { label: "Net Annual Salary",  y: netVar2  }
                    ]
                }
                ]
            });
            chart.render();
        }


        var event3 = document.getElementById("bar");
        event3.addEventListener('click',barChart,false);
    function barChart (){
        chartsummary("bar");
        
    }

        var event4 = document.getElementById("pie");
        event4.addEventListener('click',pieChart,false);
    function pieChart (){
        chartsummary("pie");
        
    }

        var event5 = document.getElementById("line");
        event5.addEventListener('click',lineChart,false);
    function lineChart (){
        chartsummary("line");
        
    }

        var event6 = document.getElementById("area");
        event6.addEventListener('click',areaChart,false);
    function areaChart (){
        chartsummary("area");
        
    }

     var event3 = document.getElementById("bar2");
        event3.addEventListener('click',barChart2,false);
    function barChart2 (){
        chartsummary2 ("bar");
        
    }

        var event4 = document.getElementById("pie2");
        event4.addEventListener('click',pieChart2,false);
    function pieChart2 (){
        chartsummary2 ("pie");
        
    }

        var event5 = document.getElementById("line2");
        event5.addEventListener('click',lineChart2,false);
    function lineChart2 (){
        chartsummary2 ("line");
        
    }

        var event6 = document.getElementById("area2");
        event6.addEventListener('click',areaChart2,false);
    function areaChart2 (){
        chartsummary2 ("area");
        
    }

    
        
        var event7 = document.getElementById("button2");
        event7.addEventListener('click',calc2,false);
    function calc2 (){
      
        var e = document.getElementById("input2");
        var bonusOutput = parseFloat(e.options[e.selectedIndex].value);
        bonus = userinput1 * bonusOutput;
        console.log(bonus);
        document.getElementById("bonusValue").innerHTML = "&pound," + bonus;
        chartsummary2 ("pie");
        
    }























