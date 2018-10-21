

//var cable = [];

//cable['300'] = '1';
//cable['300.5'] = '12222';






function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }      

var Moom;
$(document).ready(function() {
  
    $('.form-control').keyup(function(){
    Azimuth = parseFloat($('#Azimuth').val());
      
    if(Azimuth >= 0 && Azimuth <45){
        Moom = "N"}
    else if(Azimuth >= 315 && Azimuth <361){
        Moom = "N"}
    else if(Azimuth >= 45 && Azimuth <135){
        Moom = "E"}
    else if(Azimuth >= 135 && Azimuth <225){
        Moom = "S"}
    else if(Azimuth >= 225 && Azimuth <315){
        Moom = "W"}   
    else{Moom = "กรอกค่า 0° ถึง 360°"}   
    
     // $('#Hdts').val(5*365*((-0.000003*Azimuth*Azimuth)+(0.0011*Azimuth)+0.9));
    })   
});
$(document).ready(function() {
  
    $('.form-control').click(function(){
    Azimuth = parseFloat($('#Azimuth').val());
      
    if(Azimuth >= 0 && Azimuth <45){
        Moom = "N"}
    else if(Azimuth >= 315 && Azimuth <361){
        Moom = "N"}
    else if(Azimuth >= 45 && Azimuth <135){
        Moom = "E"}
    else if(Azimuth >= 135 && Azimuth <225){
        Moom = "S"}
    else if(Azimuth >= 225 && Azimuth <315){
        Moom = "W"}   
    else{Moom = "กรอกค่า 0° ถึง 360°"}   
    
     // $('#Hdts').val(5*365*((-0.000003*Azimuth*Azimuth)+(0.0011*Azimuth)+0.9));
    })   
});
var Effal;
var Altitute;
$(document).ready(function() {
    
    $('.form-control').keyup(function(){
        
    Altitute = parseFloat($('#Altitute').val());  
    
        if(Moom == "N"){
            Effal = ((-0.0063*Altitute)+1.0141)}
        else if(Moom == "W" || Moom == "E"){
            Effal = ((-0.00007*Altitute*Altitute)-(0.0005*Altitute)+1.0009)}
        else if(Moom == "S"){
            Effal = ((-0.0001*Altitute*Altitute)+(0.0031*Altitute)+0.9783)}
        
        
    })})    
    $(document).ready(function() {
    
        $('.form-control').click(function(){
            
        Altitute = parseFloat($('#Altitute').val());  
        
            if(Moom == "N"){
                Effal = ((-0.0063*Altitute)+1.0141)}
            else if(Moom == "W" || Moom == "E"){
                Effal = ((-0.00007*Altitute*Altitute)-(0.0005*Altitute)+1.0009)}
            else if(Moom == "S"){
                Effal = ((-0.0001*Altitute*Altitute)+(0.0031*Altitute)+0.9783)}
            
            
        })})    
var PSH
var sun
    $(document).ready(function() {
    
        $('.form-control').keyup(function(){
            PSH = parseFloat($('#PSH').val());
            sun = Math.round(PSH*365*Effal)
            $('#Hdts').val(commaSeparateNumber(sun))
            
        })})  
    $(document).ready(function() {
    
        $('.form-control').click(function(){
            PSH = parseFloat($('#PSH').val());
            sun = Math.round(PSH*365*Effal)   
            $('#Hdts').val(commaSeparateNumber(sun))
                
        })}) 
    
    
var data;
var datain3;
var dataload;
var Pmaximum1;
var Pmaximum2;
$(document).ready(function() {
  
    $('.form-control').click(function(){
        
        Meter = parseFloat($('#Meter').val());
        Pmaximum1 = 0.8*220*Meter
      
    
    })   
});
$(document).ready(function() {
  
    $('.form-control').keyup(function(){
        
        Meter = parseFloat($('#Meter').val());
        Pmaximum1 = 0.8*220*Meter
      
    
    })   
});
$(document).ready(function() {
    $('[name="PV_module"]').change(function(){
        data = (JSON.parse($(this).val()));
        
    })  
});
$(document).ready(function() {
    $('#inverter').change(function(){
        datain3 = (JSON.parse($(this).val()));      
    })   
});
$(document).ready(function() {
    $('#users').change(function(){
        dataload = (JSON.parse($(this).val()));
    })
});
var Area
var Pmaximum3
var selectunit
var Unit9

$(document).ready(function() {
    
    $('.form-control').keyup(function(){
        time = $('#timeunit').val();
        unit_day = parseFloat($('#unit9').val())/31
        peak = unit_day/(dataload.one+dataload.two+dataload.three+dataload.four+dataload.five+dataload.six+dataload.seven+dataload.eight+dataload.nine+dataload.ten+dataload.eleven+dataload.twelve+dataload.thirteen+dataload.fourteen+dataload.fifteen+dataload.sixteen+dataload.seventeen+dataload.eighteen+dataload.nineteen+dataload.twenty+dataload.twenty_one+dataload.twenty_two+dataload.twenty_three+dataload.twenty_four)
        
        if(time == 2){Unit9 = parseFloat($('#unit9').val())}
        else if(time == 1){
            Unit9 = ((dataload.nine*peak)+(dataload.ten*peak)+(dataload.eleven*peak)+(dataload.twelve*peak)+(dataload.thirteen*peak)+(dataload.fourteen*peak)+(dataload.fifteen*peak)+(dataload.sixteen*peak))*7
            
                
            }
            
        
    })})
    $(document).ready(function() {
    
        $('.form-control').click(function(){
            time = $('#timeunit').val();
            unit_day = parseFloat($('#unit9').val())/31
            peak = unit_day/(dataload.one+dataload.two+dataload.three+dataload.four+dataload.five+dataload.six+dataload.seven+dataload.eight+dataload.nine+dataload.ten+dataload.eleven+dataload.twelve+dataload.thirteen+dataload.fourteen+dataload.fifteen+dataload.sixteen+dataload.seventeen+dataload.eighteen+dataload.nineteen+dataload.twenty+dataload.twenty_one+dataload.twenty_two+dataload.twenty_three+dataload.twenty_four)
            
            if(time == 2){Unit9 = parseFloat($('#unit9').val())}
            else if(time == 1){
                Unit9 = ((dataload.nine*peak)+(dataload.ten*peak)+(dataload.eleven*peak)+(dataload.twelve*peak)+(dataload.thirteen*peak)+(dataload.fourteen*peak)+(dataload.fifteen*peak)+(dataload.sixteen*peak))*7
                
                    
                }
                
            
        })})
var Pmax_pv
$(document).ready(function() {
    
    $('.form-control').keyup(function(){
        Area = parseFloat($('#Area').val());
        
        Pmaximum2 = 0.8*(Area/data.Length)*data.Pmax 
        Pmaximum3 = (Unit9/$('#PSH').val())*1000
        selectunit = $('#selectunit').val()

        if(Pmaximum1==0 && Pmaximum2==0 && selectunit==2){$('#Pmaximum').val()}
        else if(Pmaximum1!=0 && Pmaximum2==0 && selectunit==2){Pmax_pv=Pmaximum1 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum1)))}
        else if(Pmaximum1!=0 && Pmaximum2!=0 && selectunit==2){
            if(Pmaximum1<=Pmaximum2){Pmax_pv=Pmaximum1 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum1)))}
            else if(Pmaximum1>=Pmaximum2){Pmax_pv=Pmaximum2 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum2)))}}
        else if(Pmaximum1!=0 && Pmaximum2==0 && selectunit==1){
            if(Pmaximum1<=Pmaximum3){Pmax_pv=Pmaximum1, $('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum1)))}
            else if(Pmaximum1>=Pmaximum3){Pmax_pv=Pmaximum3 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum3)))}}
        else if(Pmaximum1!=0 && Pmaximum2!=0 && selectunit==1){
            if(Pmaximum1<=Pmaximum2 && Pmaximum1<=Pmaximum3){Pmax_pv=Pmaximum1 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum1)))}
            else if(Pmaximum1>=Pmaximum2 && Pmaximum1>=Pmaximum3 && Pmaximum2>=Pmaximum3){Pmax_pv=Pmaximum3 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum3)))}
            else if(Pmaximum1>=Pmaximum2 && Pmaximum1>=Pmaximum3 && Pmaximum3>=Pmaximum2){Pmax_pv=Pmaximum2 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum2)))}
            else if(Pmaximum1>=Pmaximum2 && Pmaximum1<=Pmaximum3){Pmax_pv=Pmaximum2 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum2)))}
            else if(Pmaximum1<=Pmaximum2 && Pmaximum1>=Pmaximum3){Pmax_pv=Pmaximum3 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum3)))}}
        else if(Pmaximum1==0 && Pmaximum2!=0 && selectunit==1){
            if(Pmaximum2<=Pmaximum3){Pmax_pv=Pmaximum2 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum2)))}
            else if(Pmaximum2>=Pmaximum3){Pmax_pv=Pmaximum3 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum3)))}}
        
        else if(Pmaximum1==0 && Pmaximum2==0 && selectunit==1){
            Pmax_pv=Pmaximum3 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum3)))}
        else if(Pmaximum1==0 && Pmaximum2!=0 && selectunit==2){
            Pmax_pv=Pmaximum2 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum2)))}

       
    })})
    $(document).ready(function() {
    
        $('.form-control').click(function(){
            Area = parseFloat($('#Area').val());
            
            Pmaximum2 = 0.8*(Area/data.Length)*data.Pmax 
            Pmaximum3 = (Unit9/$('#PSH').val())*1000
            selectunit = $('#selectunit').val()
    
            if(Pmaximum1==0 && Pmaximum2==0 && selectunit==2){$('#Pmaximum').val()}
            else if(Pmaximum1!=0 && Pmaximum2==0 && selectunit==2){Pmax_pv=Pmaximum1 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum1)))}
            else if(Pmaximum1!=0 && Pmaximum2!=0 && selectunit==2){
                if(Pmaximum1<=Pmaximum2){Pmax_pv=Pmaximum1 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum1)))}
                else if(Pmaximum1>=Pmaximum2){Pmax_pv=Pmaximum2 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum2)))}}
            else if(Pmaximum1!=0 && Pmaximum2==0 && selectunit==1){
                if(Pmaximum1<=Pmaximum3){Pmax_pv=Pmaximum1, $('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum1)))}
                else if(Pmaximum1>=Pmaximum3){Pmax_pv=Pmaximum3 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum3)))}}
            else if(Pmaximum1!=0 && Pmaximum2!=0 && selectunit==1){
                if(Pmaximum1<=Pmaximum2 && Pmaximum1<=Pmaximum3){Pmax_pv=Pmaximum1 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum1)))}
                else if(Pmaximum1>=Pmaximum2 && Pmaximum1>=Pmaximum3 && Pmaximum2>=Pmaximum3){Pmax_pv=Pmaximum3 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum3)))}
                else if(Pmaximum1>=Pmaximum2 && Pmaximum1>=Pmaximum3 && Pmaximum3>=Pmaximum2){Pmax_pv=Pmaximum2 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum2)))}
                else if(Pmaximum1>=Pmaximum2 && Pmaximum1<=Pmaximum3){Pmax_pv=Pmaximum2 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum2)))}
                else if(Pmaximum1<=Pmaximum2 && Pmaximum1>=Pmaximum3){Pmax_pv=Pmaximum3 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum3)))}}
            else if(Pmaximum1==0 && Pmaximum2!=0 && selectunit==1){
                if(Pmaximum2<=Pmaximum3){Pmax_pv=Pmaximum2 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum2)))}
                else if(Pmaximum2>=Pmaximum3){Pmax_pv=Pmaximum3 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum3)))}}
            
            else if(Pmaximum1==0 && Pmaximum2==0 && selectunit==1){
                Pmax_pv=Pmaximum3 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum3)))}
            else if(Pmaximum1==0 && Pmaximum2!=0 && selectunit==2){
                Pmax_pv=Pmaximum2 ,$('#Pmaximum').val(commaSeparateNumber(Math.round(Pmaximum2)))}
    
           
        })})    




var No_Pvs;

$(document).ready(function() {
    $('.form-control').keyup(function(){
       
        No_Pvs = Math.floor(Pmax_pv/data.Pmax);
        
        $('[name="No_Pvs"]').val(commaSeparateNumber(No_Pvs));
        
        
    })
});
$(document).ready(function() {
    $('.form-control').click(function(){
        
        No_Pvs = Math.floor(Pmax_pv/data.Pmax);
        
        $('[name="No_Pvs"]').val(commaSeparateNumber(No_Pvs));
        
        
    })
}); 

var Pmax1
var Pvs1
$(document).ready(function() {
    $('.form-control').keyup(function(){
        Pvs1 = parseFloat($('#Pvs1').val())
        Pmax1 = Pvs1*data.Pmax 
    })
});  
$(document).ready(function() {
    $('.form-control').click(function(){
        Pvs1 = parseFloat($('#Pvs1').val())
        Pmax1 = Pvs1*data.Pmax 
    })
});   
var invest1
$(document).ready(function() {
    $('.form-control').keyup(function(){
        Pvs1 = parseFloat($('#Pvs1').val())
        Pmax1 = Pvs1*data.Pmax
        if(Pmax1 <= 5000){invest = Pmax1*60}
        else if(Pmax1 > 5000 && Pmax1 <= 6000){invest = Pmax1*59}
        else if(Pmax1 > 6000 && Pmax1 <= 7000){invest = Pmax1*58}
        else if(Pmax1 > 7000 && Pmax1 <= 8000){invest = Pmax1*57}
        else if(Pmax1 > 8000 && Pmax1 <= 9000){invest = Pmax1*56}
        else if(Pmax1 > 9000 && Pmax1 <= 10000){invest = Pmax1*55.64}
        else if(Pmax1 > 10000 && Pmax1 <= 11000){invest = Pmax1*55.27}
        else if(Pmax1 > 11000 && Pmax1 <= 12000){invest = Pmax1*55}
        else if(Pmax1 > 12000 && Pmax1 <= 13000){invest = Pmax1*54.55}
        else if(Pmax1 > 13000 && Pmax1 <= 14000){invest = Pmax1*54.18}
        else if(Pmax1 > 14000 && Pmax1 <= 15000){invest = Pmax1*53.82}
        else if(Pmax1 > 15000 && Pmax1 <= 16000){invest = Pmax1*53.45}
        else if(Pmax1 > 16000 && Pmax1 <= 17000){invest = Pmax1*53.1}
        else if(Pmax1 > 17000 && Pmax1 <= 18000){invest = Pmax1*52.72}
        else if(Pmax1 > 18000 && Pmax1 <= 19000){invest = Pmax1*52.36}
        else if(Pmax1 > 19000 && Pmax1 <= 20000){invest = Pmax1*52}
        else if(Pmax1 > 20000 && Pmax1 <= 21000){invest = Pmax1*51.2}
        else if(Pmax1 > 21000 && Pmax1 <= 22000){invest = Pmax1*50.4}
        else if(Pmax1 > 22000 && Pmax1 <= 23000){invest = Pmax1*49.6}
        else if(Pmax1 > 23000 && Pmax1 <= 24000){invest = Pmax1*48.8}
        else if(Pmax1 > 24000 && Pmax1 <= 25999){invest = Pmax1*48}

        else if(Pmax1 > 25999 && Pmax1 <= 26000){invest = Pmax1*40}
        else if(Pmax1 > 26000 && Pmax1 <= 30000){invest = Pmax1*39.87}
        else if(Pmax1 > 30000 && Pmax1 <= 40000){invest = Pmax1*39.55}
        else if(Pmax1 > 40000 && Pmax1 <= 50000){invest = Pmax1*39.23}
        else if(Pmax1 > 50000 && Pmax1 <= 60000){invest = Pmax1*38.91}
        else if(Pmax1 > 60000 && Pmax1 <= 70000){invest = Pmax1*38.59}
        else if(Pmax1 > 70000 && Pmax1 <= 80000){invest = Pmax1*38.27}
        else if(Pmax1 > 80000 && Pmax1 <= 900000){invest = Pmax1*37.95}
        else if(Pmax1 > 90000 && Pmax1 <= 100000){invest = Pmax1*37.63}
        else if(Pmax1 > 100000 && Pmax1 <= 101000){invest = Pmax1*37.6}
        else if(Pmax1 > 101000 && Pmax1 <= 111000){invest = Pmax1*37.28}
        else if(Pmax1 > 111000 && Pmax1 <= 121000){invest = Pmax1*36.96}
        else if(Pmax1 > 121000 && Pmax1 <= 131000){invest = Pmax1*36.64}
        else if(Pmax1 > 131000 && Pmax1 <= 141000){invest = Pmax1*36.32}
        else if(Pmax1 > 141000 && Pmax1 <= 151000){invest = Pmax1*36}
        else if(Pmax1 > 151000 && Pmax1 <= 201000){invest = Pmax1*35.43}
        else if(Pmax1 > 201000 && Pmax1 <= 251000){invest = Pmax1*34.86}
        else if(Pmax1 > 251000 && Pmax1 <= 301000){invest = Pmax1*34.3}
        else if(Pmax1 > 301000 && Pmax1 <= 351000){invest = Pmax1*33.7}
        else if(Pmax1 > 351000 && Pmax1 <= 401000){invest = Pmax1*33.14}
        else if(Pmax1 > 401000 && Pmax1 <= 451000){invest = Pmax1*32.57}
        else if(Pmax1 > 451000 && Pmax1 <= 501000){invest = Pmax1*32}
        else if(Pmax1 > 501000){invest = Pmax1*32}
        invest1 = Math.round(invest)


        
    })})
    $(document).ready(function() {
        $('.form-control').click(function(){
            Pvs1 = parseFloat($('#Pvs1').val())
            Pmax1 = Pvs1*data.Pmax
            if(Pmax1 <= 5000){invest = Pmax1*60}
            else if(Pmax1 > 5000 && Pmax1 <= 6000){invest = Pmax1*59}
            else if(Pmax1 > 6000 && Pmax1 <= 7000){invest = Pmax1*58}
            else if(Pmax1 > 7000 && Pmax1 <= 8000){invest = Pmax1*57}
            else if(Pmax1 > 8000 && Pmax1 <= 9000){invest = Pmax1*56}
            else if(Pmax1 > 9000 && Pmax1 <= 10000){invest = Pmax1*55.64}
            else if(Pmax1 > 10000 && Pmax1 <= 11000){invest = Pmax1*55.27}
            else if(Pmax1 > 11000 && Pmax1 <= 12000){invest = Pmax1*55}
            else if(Pmax1 > 12000 && Pmax1 <= 13000){invest = Pmax1*54.55}
            else if(Pmax1 > 13000 && Pmax1 <= 14000){invest = Pmax1*54.18}
            else if(Pmax1 > 14000 && Pmax1 <= 15000){invest = Pmax1*53.82}
            else if(Pmax1 > 15000 && Pmax1 <= 16000){invest = Pmax1*53.45}
            else if(Pmax1 > 16000 && Pmax1 <= 17000){invest = Pmax1*53.1}
            else if(Pmax1 > 17000 && Pmax1 <= 18000){invest = Pmax1*52.72}
            else if(Pmax1 > 18000 && Pmax1 <= 19000){invest = Pmax1*52.36}
            else if(Pmax1 > 19000 && Pmax1 <= 20000){invest = Pmax1*52}
            else if(Pmax1 > 20000 && Pmax1 <= 21000){invest = Pmax1*51.2}
            else if(Pmax1 > 21000 && Pmax1 <= 22000){invest = Pmax1*50.4}
            else if(Pmax1 > 22000 && Pmax1 <= 23000){invest = Pmax1*49.6}
            else if(Pmax1 > 23000 && Pmax1 <= 24000){invest = Pmax1*48.8}
            else if(Pmax1 > 24000 && Pmax1 <= 25999){invest = Pmax1*48}
    
            else if(Pmax1 > 25999 && Pmax1 <= 26000){invest = Pmax1*40}
            else if(Pmax1 > 26000 && Pmax1 <= 30000){invest = Pmax1*39.87}
            else if(Pmax1 > 30000 && Pmax1 <= 40000){invest = Pmax1*39.55}
            else if(Pmax1 > 40000 && Pmax1 <= 50000){invest = Pmax1*39.23}
            else if(Pmax1 > 50000 && Pmax1 <= 60000){invest = Pmax1*38.91}
            else if(Pmax1 > 60000 && Pmax1 <= 70000){invest = Pmax1*38.59}
            else if(Pmax1 > 70000 && Pmax1 <= 80000){invest = Pmax1*38.27}
            else if(Pmax1 > 80000 && Pmax1 <= 900000){invest = Pmax1*37.95}
            else if(Pmax1 > 90000 && Pmax1 <= 100000){invest = Pmax1*37.63}
            else if(Pmax1 > 100000 && Pmax1 <= 101000){invest = Pmax1*37.6}
            else if(Pmax1 > 101000 && Pmax1 <= 111000){invest = Pmax1*37.28}
            else if(Pmax1 > 111000 && Pmax1 <= 121000){invest = Pmax1*36.96}
            else if(Pmax1 > 121000 && Pmax1 <= 131000){invest = Pmax1*36.64}
            else if(Pmax1 > 131000 && Pmax1 <= 141000){invest = Pmax1*36.32}
            else if(Pmax1 > 141000 && Pmax1 <= 151000){invest = Pmax1*36}
            else if(Pmax1 > 151000 && Pmax1 <= 201000){invest = Pmax1*35.43}
            else if(Pmax1 > 201000 && Pmax1 <= 251000){invest = Pmax1*34.86}
            else if(Pmax1 > 251000 && Pmax1 <= 301000){invest = Pmax1*34.3}
            else if(Pmax1 > 301000 && Pmax1 <= 351000){invest = Pmax1*33.7}
            else if(Pmax1 > 351000 && Pmax1 <= 401000){invest = Pmax1*33.14}
            else if(Pmax1 > 401000 && Pmax1 <= 451000){invest = Pmax1*32.57}
            else if(Pmax1 > 451000 && Pmax1 <= 501000){invest = Pmax1*32}
            else if(Pmax1 > 501000){invest = Pmax1*32}
            invest1 = Math.round(invest)
            
        })})



//$(document).ready(function() {
  
    //$('#numberinverter').click(function(){
      //  var numberinverter = $('#numberinverter').val();
      //  $('.inverter').html('');
      //  var inverterss = $('#inverters').val();
      //  var inverters = JSON.parse(inverterss);
        

        
      //  for(var i = 1;i<=numberinverter;i++){
      //      $('.inverter').prepend('อินเวอร์เตอร์ '+i+ ' <select id="number" type="text" class"inverter">')
            
       //         for(var j = 0;j<=inverters.length;j++){
         //           $('.inverter').append('<option value="'+inverters[j]+'">'+inverters[j].Inverter+'</option>')}
                   
         //   $('.inverter').append('</select>')    
    //}
//})})         
        
      
//var inverter = $('#numberinverter');
//$.each(datain, function(val, text) {
//    inverter.append(
 //       $('<option></option>').val(val).html(text)
  //  );
//});

//var myOptions = {
//    val1 : 'text1',
 //   val2 : 'text2'
//};
//var mySelect = $('.inverter');
//$.each(datain, function(val, text) {
  //  mySelect.append(
    //    $('<option></option>').val(val).html(text)
  //  );
//});
var Pinv_ac_min;
var Pinv_ac_max;
$(document).ready(function() {
  
    
    $('.form-control').keyup(function(){
        Pinv_ac_min=Math.round((data.Pmax*No_Pvs)/(1.2));
        $('#Pinv_ac_min').val(commaSeparateNumber(Pinv_ac_min));
      
    })
    $('.form-control').keyup(function(){
        Pinv_ac_max=Math.round((data.Pmax*No_Pvs)/(1.1));
        $('#Pinv_ac_max').val(commaSeparateNumber(Pinv_ac_max))

    })
    $('.form-control').click(function(){
        Pinv_ac_min=Math.round((data.Pmax*No_Pvs)/(1.2));
        $('#Pinv_ac_min').val(commaSeparateNumber(Pinv_ac_min));
      
    })
    $('.form-control').click(function(){
        Pinv_ac_max=Math.round((data.Pmax*No_Pvs)/(1.1));
        $('#Pinv_ac_max').val(commaSeparateNumber(Pinv_ac_max))

    })
}); 




        
    




var String_array;
$(document).ready(function() {
    $('.form-control').click(function(){
        String_array = Math.floor(datain3.Iinv_dcmax/data.Isc) 
    })
});
$(document).ready(function() {
    $('.form-control').keyup(function(){
        String_array = Math.floor(datain3.Iinv_dcmax/data.Isc) 
    })
});

var type
$(document).ready(function() {
    $('.form-control').click(function(){
        
            type=$('#type').val()
            
        
    })})
    $(document).ready(function() {
        $('.form-control').keyup(function(){
            
                type=$('#type').val()
                
            
        })})
    
    
//var No_max1;
var Pv_string1
//var String_array1
var Max_strings
var No_Pvsnew
var Numberinv
var string_min 
var No_pvmin 

var Voc_maxpv
var Pv_string
var Pv_stringmin
var Voc_maxstring

var Isc
var Vcell_min
var Vstring_min
//$(document).ready(function() {
  //  $('.form-control').keyup(function(){
    //    $('#dc_to_ac').val(Pmaximum/datain.Pinv_ac*Numberinv);
   // })})
$(document).ready(function() {
    $('.form-control').keyup(function(){
        Numberinv =$('#numberinv').val();
        
        Isc = 1.25*data.Isc*String_array
        //var Pvs_string=Math.round(No_Pvs/Max_strings);
        Tem_min=$('#Tem_min').val();
        Tem_max=$('#Tem_max').val();
        Vcell_min=data.Vmp*[1+(data.Temperature_Coefficient_of_Pmax/100)*(Tem_max-25)];
        

        //Max_strings = Numberinv*String_array*datain.Number_of_independent_MPP_inputs
        Voc_maxpv = data.Voc*[1+(data.Temperature_Coefficient_of_Voc/100)*(Tem_min-25)];
        Pv_string = Math.floor((datain3.MPP_Voltage_range_max)/data.Vmp);
        Pv_stringmin = Math.floor((datain3.MPP_Voltage_range_min+100)/data.Vmp);
        Voc_maxstring = Voc_maxpv*Pv_string
        
        
        //var No_min = Math.ceil(datain.Vinv_dcmin/Voc_max);
       // var No_max = Math.floor(datain.Vinv_dcmax/Vcell_min);
        //var Vocmax_string = Voc_max*Pvs_string;

        
       // if(String_array <= datain.Strings_per_MPP_input){String_array1 = String_array}
       // else if(String_array > datain.Strings_per_MPP_input){String_array1 = datain.Strings_per_MPP_input}
        
        
       $('#dc_to_ac').val((No_Pvs*data.Pmax/(datain3.Pinv_ac*Numberinv)).toFixed(2));
       if (type == 0 && Voc_maxstring < 600) {
                   
           Pv_string1=Pv_string
           
       } else if (type == 0 && Voc_maxstring >=600) {
           Pv_string1 = Math.floor(600/Voc_maxpv)
           
       } else if (type == 1 && Voc_maxstring <1000) {
           Pv_string1=Pv_string
           
       } else if (type == 1 && Voc_maxstring >= 1000) {
           Pv_string1 = Math.floor(1000/Voc_maxpv)
          
       }
               
        
        })}) 
        $(document).ready(function() {
            $('.form-control').click(function(){
                Numberinv =$('#numberinv').val();
                
                Isc = 1.25*data.Isc*String_array
                //var Pvs_string=Math.round(No_Pvs/Max_strings);
                Tem_min=$('#Tem_min').val();
                Tem_max=$('#Tem_max').val();
                Vcell_min=data.Vmp*[1+(data.Temperature_Coefficient_of_Pmax/100)*(Tem_max-25)];
                
        
                //Max_strings = Numberinv*String_array*datain.Number_of_independent_MPP_inputs
                Voc_maxpv = data.Voc*[1+(data.Temperature_Coefficient_of_Voc/100)*(Tem_min-25)];
                Pv_string = Math.floor((datain3.MPP_Voltage_range_max)/data.Vmp);
                Pv_stringmin = Math.floor((datain3.MPP_Voltage_range_min+100)/data.Vmp);
                Voc_maxstring = Voc_maxpv*Pv_string
                
                
                //var No_min = Math.ceil(datain.Vinv_dcmin/Voc_max);
               // var No_max = Math.floor(datain.Vinv_dcmax/Vcell_min);
                //var Vocmax_string = Voc_max*Pvs_string;
        
                
               // if(String_array <= datain.Strings_per_MPP_input){String_array1 = String_array}
               // else if(String_array > datain.Strings_per_MPP_input){String_array1 = datain.Strings_per_MPP_input}
                
                
               $('#dc_to_ac').val((No_Pvs*data.Pmax/(datain3.Pinv_ac*Numberinv)).toFixed(2));
               if (type == 0 && Voc_maxstring < 600) {
                           
                   Pv_string1=Pv_string
                   
               } else if (type == 0 && Voc_maxstring >=600) {
                   Pv_string1 = Math.floor(600/Voc_maxpv)
                   
               } else if (type == 1 && Voc_maxstring <1000) {
                   Pv_string1=Pv_string
                   
               } else if (type == 1 && Voc_maxstring >= 1000) {
                   Pv_string1 = Math.floor(1000/Voc_maxpv)
                  
               }
                       
                
                })}) 
$(document).ready(function() {
    $('.form-control').keyup(function(){
            
                
        Max_stringss = Math.round((datain3.Pinv_dc*Numberinv)/(0.8*Pv_stringmin*data.Pmax))
                
        
        $('#PV_string').val(Pv_string1);
        
        if(Max_stringss > String_array*datain3.Number_of_independent_MPP_inputs*Numberinv){
            Max_strings =  String_array*datain3.Number_of_independent_MPP_inputs*Numberinv
        }
        else if(Max_stringss <= String_array*datain3.Number_of_independent_MPP_inputs*Numberinv){
            Max_strings =Max_stringss
        }
})}) 
$(document).ready(function() {
    $('.form-control').click(function(){
            
                
        Max_stringss = Math.round((datain3.Pinv_dc*Numberinv)/(0.8*Pv_stringmin*data.Pmax))
                
        
        $('#PV_string').val(Pv_string1);
        
        if(Max_stringss > String_array*datain3.Number_of_independent_MPP_inputs*Numberinv){
            Max_strings =  String_array*datain3.Number_of_independent_MPP_inputs*Numberinv
        }
        else if(Max_stringss <= String_array*datain3.Number_of_independent_MPP_inputs*Numberinv){
            Max_strings =Max_stringss
        }
})}) 
$(document).ready(function() {
    $('.form-control').keyup(function(){
        Min_stringss = Math.round((datain3.Pinv_dc*Numberinv)/(1.1*Pv_string1*data.Pmax))
        if(Min_stringss != 0 ){
            Min_strings =  Min_stringss
        }
        else if(Min_stringss == 0){
            Min_strings = 1
        }
})})
$(document).ready(function() {
    $('.form-control').click(function(){
        Min_stringss = Math.round((datain3.Pinv_dc*Numberinv)/(1.1*Pv_string1*data.Pmax))
        if(Min_stringss != 0 ){
            Min_strings =  Min_stringss
        }
        else if(Min_stringss == 0){
            Min_strings = 1
        }
})})
var pv_suggestmax
var pv_suggestmin
$(document).ready(function() {
    $('.form-control').keyup(function(){
        pv_suggestmax = Math.round((datain3.Pinv_dc*Numberinv)/(0.8*data.Pmax))
        pv_suggestmin = Math.round((datain3.Pinv_dc*Numberinv)/(1.1*data.Pmax))
})})
$(document).ready(function() {
    $('.form-control').click(function(){
        pv_suggestmax = Math.round((datain3.Pinv_dc*Numberinv)/(0.8*data.Pmax))
        pv_suggestmin = Math.round((datain3.Pinv_dc*Numberinv)/(1.1*data.Pmax))
})})
var pv_suggestmin1
var pv_suggestmax1
$(document).ready(function() {
    $('.form-control').keyup(function(){
        if(pv_suggestmin <= Min_strings*(Pv_stringmin)){pv_suggestmin1 = Min_strings*(Pv_stringmin)}
        else if(pv_suggestmin > Min_strings*(Pv_stringmin) && pv_suggestmin <= Max_strings*Pv_string1){pv_suggestmin1 = pv_suggestmin}
        else if(pv_suggestmin > Max_strings*Pv_string1){pv_suggestmin1 = Max_strings*Pv_string1}
})})
$(document).ready(function() {
    $('.form-control').click(function(){
        if(pv_suggestmin <= Min_strings*(Pv_stringmin)){pv_suggestmin1 = Min_strings*(Pv_stringmin)}
        else if(pv_suggestmin > Min_strings*(Pv_stringmin) && pv_suggestmin <= Max_strings*Pv_string1){pv_suggestmin1 = pv_suggestmin}
        else if(pv_suggestmin > Max_strings*Pv_string1){pv_suggestmin1 = Max_strings*Pv_string1}
})})  
$(document).ready(function() {
    $('.form-control').keyup(function(){
        if(pv_suggestmax <= Min_strings*(Pv_stringmin)){pv_suggestmax1 = Min_strings*(Pv_stringmin)}
        else if(pv_suggestmax > Min_strings*(Pv_stringmin) && pv_suggestmax <= Max_strings*Pv_string1){pv_suggestmax1 = pv_suggestmax}
        else if(pv_suggestmax > Max_strings*Pv_string1){pv_suggestmax1 = Max_strings*Pv_string1}
})})    
$(document).ready(function() {
    $('.form-control').click(function(){
        if(pv_suggestmax <= Min_strings*(Pv_stringmin)){pv_suggestmax1 = Min_strings*(Pv_stringmin)}
        else if(pv_suggestmax > Min_strings*(Pv_stringmin) && pv_suggestmax <= Max_strings*Pv_string1){pv_suggestmax1 = pv_suggestmax}
        else if(pv_suggestmax > Max_strings*Pv_string1){pv_suggestmax1 = Max_strings*Pv_string1}
})})     
      
function process(){ 
    if(String_array >1){
    $('#cbdco').html(cbdc)
    $('#pv1fo').html(pv1f)
    $('#vdropdco').html(Vdrop_pv1f.toFixed(2))
    $('#pervdropdco').html(Per_vdroppv1f.toFixed(2))
    $('#plossdco').html(Ploss_pv1f.toFixed(2))
    $('#perplossdco').html(Per_plosspv1f.toFixed(2))
    $('#grounddco').html(grounddc)
    $('#fuse1').html('FUSE/String : ' + fuse + ' (AT)')
    $('#fuse2').html('DC FUSE/String ควรติดตั้งเมื่อมีสตริงต่อขนานกัน')

    $('#cbaco').html(cbac)
    $('#wireo').html(wireinv)
    $('#vdropaco').html(Vdrop_ac.toFixed(2))
    $('#pervdropaco').html(Per_vdropac.toFixed(2))
    $('#plossaco').html(Ploss_ac.toFixed(2))
    $('#perplossaco').html(Per_plossac.toFixed(2))
    $('#groundaco').html(groundinv)

    $('#cbmdbo').html(cbact)
    $('#wmdbo').html(wireinv2)
    $('#gmdbo').html(groundmdb1)
    }
    else if(String_array == 1){
        $('#cbdco').html(cbdc)
    $('#pv1fo').html(pv1f)
    $('#vdropdco').html(Vdrop_pv1f.toFixed(2))
    $('#pervdropdco').html(Per_vdroppv1f.toFixed(2))
    $('#plossdco').html(Ploss_pv1f.toFixed(2))
    $('#perplossdco').html(Per_plosspv1f.toFixed(2))
    $('#grounddco').html(grounddc)
 

    $('#cbaco').html(cbac)
    $('#wireo').html(wireinv)
    $('#vdropaco').html(Vdrop_ac.toFixed(2))
    $('#pervdropaco').html(Per_vdropac.toFixed(2))
    $('#plossaco').html(Ploss_ac.toFixed(2))
    $('#perplossaco').html(Per_plossac.toFixed(2))
    $('#groundaco').html(groundinv)

    $('#cbmdbo').html(cbact)
    $('#wmdbo').html(wireinv2)
    $('#gmdbo').html(groundmdb1)}
    


}
function process1(){
    $('#Pmax1').html(commaSeparateNumber(Math.round(Pmax1)))
    $('#invest').html(commaSeparateNumber(invest1))
    $('#year').html(years)
    $('#month').html(monthss)
    $('#energy').html(commaSeparateNumber(Math.round(energy)))
    $('#income').html(commaSeparateNumber(Math.round(income)))  
}
var fuse
$(document).ready(function() {
    $('.form-control').keyup(function(){   
        fu=1.25*data.Isc
        if(fu <= 1){fuse =1}
        else if(fu > 1 && fu <= 2){fuse =2}
        else if(fu > 2 && fu <= 3){fuse =3}
        else if(fu > 3 && fu <= 4){fuse =4}
        else if(fu > 4 && fu <= 5){fuse =5}
        else if(fu > 5 && fu <= 6){fuse =6}
        else if(fu > 6 && fu <= 8){fuse =8}
        else if(fu > 8 && fu <= 10){fuse =10}
        else if(fu > 10 && fu <= 12){fuse =12}
        else if(fu > 12 && fu <= 15){fuse =15}
        else if(fu > 15 && fu <= 20){fuse =20}
        
})})
$(document).ready(function() {
    $('.form-control').click(function(){   
        fu=1.25*data.Isc
        if(fu <= 1){fuse =1}
        else if(fu > 1 && fu <= 2){fuse =2}
        else if(fu > 2 && fu <= 3){fuse =3}
        else if(fu > 3 && fu <= 4){fuse =4}
        else if(fu > 4 && fu <= 5){fuse =5}
        else if(fu > 5 && fu <= 6){fuse =6}
        else if(fu > 6 && fu <= 8){fuse =8}
        else if(fu > 8 && fu <= 10){fuse =10}
        else if(fu > 10 && fu <= 12){fuse =12}
        else if(fu > 12 && fu <= 15){fuse =15}
        else if(fu > 15 && fu <= 20){fuse =20}
       
})})

$(document).ready(function() {
    $('.form-control').keyup(function(){
        dc_ac2=(Pmax1/(datain3.Pinv_ac*Numberinv)).toFixed(2)
        $('#dc_to_ac2').val(dc_ac2)
})})  
$(document).ready(function() {
    $('.form-control').click(function(){
        dc_ac2=(Pmax1/(datain3.Pinv_ac*Numberinv)).toFixed(2)
        $('#dc_to_ac2').val(dc_ac2)
})})  
var string_real
$(document).ready(function() {
    $('.form-control').keyup(function(){
        string_real=parseFloat($('#string_real').val())
        $('#pvperstring').val((Pvs1/string_real).toFixed(2))
    
})})
$(document).ready(function() {
    $('.form-control').click(function(){
        string_real=parseFloat($('#string_real').val())
        $('#pvperstring').val((Pvs1/string_real).toFixed(2))
    
})})
var ohm
var cbdc
// เลือก cbdc    
$(document).ready(function() {
    $('.form-control').keyup(function(){     
        Isc = 1.25*data.Isc*String_array  
    if(Isc<=5){cbdc=5}
    else if(Isc >5 && Isc<=10){cbdc=10}
    else if(Isc >10 && Isc<=13){cbdc=13}
    else if(Isc >13 && Isc<=15){cbdc=15}
    else if(Isc >15 && Isc<=16){cbdc=16}
    else if(Isc >16 && Isc<=20){cbdc=20}
    else if(Isc >20 && Isc<=25){cbdc=25}
    else if(Isc >25 && Isc<=30){cbdc=30}
    else if(Isc >30 && Isc<=32){cbdc=32}
    else if(Isc >32 && Isc<=40){cbdc=40}
    else if(Isc >40 && Isc<=50){cbdc=50}
    else if(Isc >50 && Isc<=63){cbdc=63}
})})     
$(document).ready(function() {
    $('.form-control').click(function(){     
        Isc = 1.25*data.Isc*String_array  
    if(Isc<=5){cbdc=5}
    else if(Isc >5 && Isc<=10){cbdc=10}
    else if(Isc >10 && Isc<=13){cbdc=13}
    else if(Isc >13 && Isc<=15){cbdc=15}
    else if(Isc >15 && Isc<=16){cbdc=16}
    else if(Isc >16 && Isc<=20){cbdc=20}
    else if(Isc >20 && Isc<=25){cbdc=25}
    else if(Isc >25 && Isc<=30){cbdc=30}
    else if(Isc >30 && Isc<=32){cbdc=32}
    else if(Isc >32 && Isc<=40){cbdc=40}
    else if(Isc >40 && Isc<=50){cbdc=50}
    else if(Isc >50 && Isc<=63){cbdc=63}
})})     
   

    

var metdc
var string_real
var cross
//ตัวคูณ dc

$(document).ready(function() {
    $('.form-control').keyup(function(){     
        string_real=parseFloat($('#string_real').val())
        metdc= $('#metdc').val()
        if(string_real == 1){cross = 1}
        else if(string_real == 2){cross = 0.8}
        else if(string_real == 3){cross = 0.7}
        else if(string_real == 4){cross = 0.65}
        else if(string_real == 5){cross = 0.6}
        else if(string_real == 6){cross = 0.57}
        else if(string_real == 7){cross = 0.54}
        else if(string_real == 8){cross = 0.52}
        else if(string_real == 9){cross = 0.5}
        else if(string_real >= 10 && string_real <=12){cross = 0.45}
        else if(string_real >=13 && string_real <=16){cross = 0.41}
        else if(string_real >=17 && string_real <=20){cross = 0.38}
        else if(string_real> 20 ){cross = 0.38}
        
    
    })})   
    $(document).ready(function() {
        $('.form-control').click(function(){     
            string_real=parseFloat($('#string_real').val())
            metdc= $('#metdc').val()
            if(string_real == 1){cross = 1}
            else if(string_real == 2){cross = 0.8}
            else if(string_real == 3){cross = 0.7}
            else if(string_real == 4){cross = 0.65}
            else if(string_real == 5){cross = 0.6}
            else if(string_real == 6){cross = 0.57}
            else if(string_real == 7){cross = 0.54}
            else if(string_real == 8){cross = 0.52}
            else if(string_real == 9){cross = 0.5}
            else if(string_real >= 10 && string_real <=12){cross = 0.45}
            else if(string_real >=13 && string_real <=16){cross = 0.41}
            else if(string_real >=17 && string_real <=20){cross = 0.38}
            else if(string_real> 20 ){cross = 0.38}
            
        
        })})   
    var Ipv
    //กระแสคูณลด dc
    $(document).ready(function() {
        $('.form-control').keyup(function(){ 
            if(metdc==1){Ipv=cbdc/cross}
            else if(metdc== 2 && string_real < 16){Ipv=cbdc}    
            
            else if(metdc==2 && string_real >= 16){Ipv=cbdc/cross}
            
        })})
        $(document).ready(function() {
            $('.form-control').click(function(){ 
                if(metdc==1){Ipv=cbdc/cross}
                else if(metdc== 2 && string_real < 16){Ipv=cbdc}    
                
                else if(metdc==2 && string_real >= 16){Ipv=cbdc/cross}
                
            })})
        var pv1f
        var Vdrop_pv1f
        var Per_vdroppv1f
        var Ploss_pv1f
        var Per_plosspv1f
    // ข้อมูล dc
    $(document).ready(function() {
        $('.form-control').keyup(function(){
            Vstring_min =Pv_stringmin*Vcell_min
    
    })})
    $(document).ready(function() {
        $('.form-control').click(function(){
            Vstring_min =Pv_stringmin*Vcell_min
    
    })})
    $(document).ready(function() {
        $('.form-control').keyup(function(){ 
            if(Ipv<=55){pv1f=4, ohm=(5.09*$('#PV_Inv').val())/1000}
            else if(Ipv >55 && Ipv<=70){pv1f=6, ohm=(3.39*$('#PV_Inv').val())/1000}
            else if(Ipv >70 && Ipv<=98){pv1f=10, ohm=(1.95*$('#PV_Inv').val())/1000}
            else if(Ipv >98 && Ipv<=132){pv1f=16, ohm=(1.24*$('#PV_Inv').val())/1000}
            else if(Ipv >132 && Ipv<=176){pv1f=25, ohm=(0.795*$('#PV_Inv').val())/1000}
             
            Vdrop_pv1f= 2*data.Imp*String_array*ohm
            Per_vdroppv1f = (100/Vstring_min)*Vdrop_pv1f
            Ploss_pv1f = 2*data.Imp*data.Imp*string_real*ohm
            Per_plosspv1f = (100*Ploss_pv1f)/Pmax1
          
    })})
    $(document).ready(function() {
        $('.form-control').click(function(){ 
            if(Ipv<=55){pv1f=4, ohm=(5.09*$('#PV_Inv').val())/1000}
            else if(Ipv >55 && Ipv<=70){pv1f=6, ohm=(3.39*$('#PV_Inv').val())/1000}
            else if(Ipv >70 && Ipv<=98){pv1f=10, ohm=(1.95*$('#PV_Inv').val())/1000}
            else if(Ipv >98 && Ipv<=132){pv1f=16, ohm=(1.24*$('#PV_Inv').val())/1000}
            else if(Ipv >132 && Ipv<=176){pv1f=25, ohm=(0.795*$('#PV_Inv').val())/1000}
             
            Vdrop_pv1f= 2*data.Imp*String_array*ohm
            Per_vdroppv1f = (100/Vstring_min)*Vdrop_pv1f
            Ploss_pv1f = 2*data.Imp*data.Imp*string_real*ohm
            Per_plosspv1f = (100*Ploss_pv1f)/Pmax1
           
    })})

    var grounddc
    // gorund dc ไม่ขึ้นกับสาย, cb
    $(document).ready(function() {
        $('.form-control').keyup(function(){
            cbdctotal =1.25*data.Isc*String_array*datain3.Number_of_independent_MPP_inputs
            
            if(cbdctotal <= 20){grounddc =2.5}
            else if(cbdctotal > 20 && cbdctotal<= 40){grounddc =4}
            else if(cbdctotal > 40 && cbdctotal<= 70){grounddc =6}
            else if(cbdctotal > 70 && cbdctotal<= 100){grounddc =10}
            else if(cbdctotal > 100 && cbdctotal<= 200){grounddc =16}
            else if(cbdctotal > 200 && cbdctotal<= 400){grounddc =25}
            else if(cbdctotal > 400 && cbdctotal<= 500){grounddc =35}
            else if(cbdctotal > 500 && cbdctotal<= 800){grounddc =50}
            else if(cbdctotal > 800 && cbdctotal<= 1000){grounddc =70}
            else if(cbdctotal > 1000 && cbdctotal<= 1250){grounddc =95}
            else if(cbdctotal > 1250 && cbdctotal<= 2000){grounddc =120}
            else if(cbdctotal > 2000 && cbdctotal<= 2500){grounddc =185}
            else if(cbdctotal > 2500 && cbdctotal<= 4000){grounddc =240}
            else if(cbdctotal > 4000 && cbdctotal<= 6000){grounddc =400}
            
    
         })})
         $(document).ready(function() {
            $('.form-control').click(function(){
                cbdctotal =1.25*data.Isc*String_array*datain3.Number_of_independent_MPP_inputs
                
                if(cbdctotal <= 20){grounddc =2.5}
                else if(cbdctotal > 20 && cbdctotal<= 40){grounddc =4}
                else if(cbdctotal > 40 && cbdctotal<= 70){grounddc =6}
                else if(cbdctotal > 70 && cbdctotal<= 100){grounddc =10}
                else if(cbdctotal > 100 && cbdctotal<= 200){grounddc =16}
                else if(cbdctotal > 200 && cbdctotal<= 400){grounddc =25}
                else if(cbdctotal > 400 && cbdctotal<= 500){grounddc =35}
                else if(cbdctotal > 500 && cbdctotal<= 800){grounddc =50}
                else if(cbdctotal > 800 && cbdctotal<= 1000){grounddc =70}
                else if(cbdctotal > 1000 && cbdctotal<= 1250){grounddc =95}
                else if(cbdctotal > 1250 && cbdctotal<= 2000){grounddc =120}
                else if(cbdctotal > 2000 && cbdctotal<= 2500){grounddc =185}
                else if(cbdctotal > 2500 && cbdctotal<= 4000){grounddc =240}
                else if(cbdctotal > 4000 && cbdctotal<= 6000){grounddc =400}
                
        
             })})
             var cbac
             // cb ac
             $(document).ready(function() {
                 $('.form-control').keyup(function(){  
                         Iinv = 1.25*datain3.Iinv_acmax
                         if(Iinv<=15){cbac=15}
                         else if(Iinv >15 && Iinv<=20){cbac=20}
                         else if(Iinv >20 && Iinv<=30){cbac=30}
                         else if(Iinv >30 && Iinv<=40){cbac=40}
                         else if(Iinv >40 && Iinv<=50){cbac=50}
                         else if(Iinv >50 && Iinv<=60){cbac=60}
                         else if(Iinv >60 && Iinv<=80){cbac=80}
                         else if(Iinv >80 && Iinv<=100){cbac=100}
                         else if(Iinv >100 && Iinv<=125){cbac=125}
                         else if(Iinv >125 && Iinv<=175){cbac=175}
                         else if(Iinv >175 && Iinv<=200){cbac=200}
                         else if(Iinv >200 && Iinv<=225){cbac=225}
                         else if(Iinv >225 && Iinv<=250){cbac=250}
             })})
            
             // cb ac
             $(document).ready(function() {
                 $('.form-control').click(function(){  
                         Iinv = 1.25*datain3.Iinv_acmax
                         if(Iinv<=15){cbac=15}
                         else if(Iinv >15 && Iinv<=20){cbac=20}
                         else if(Iinv >20 && Iinv<=30){cbac=30}
                         else if(Iinv >30 && Iinv<=40){cbac=40}
                         else if(Iinv >40 && Iinv<=50){cbac=50}
                         else if(Iinv >50 && Iinv<=60){cbac=60}
                         else if(Iinv >60 && Iinv<=80){cbac=80}
                         else if(Iinv >80 && Iinv<=100){cbac=100}
                         else if(Iinv >100 && Iinv<=125){cbac=125}
                         else if(Iinv >125 && Iinv<=175){cbac=175}
                         else if(Iinv >175 && Iinv<=200){cbac=200}
                         else if(Iinv >200 && Iinv<=225){cbac=225}
                         else if(Iinv >225 && Iinv<=250){cbac=250}
             })})
             var metac    
             var crossac    
             //ตัวคูณ ac
             $(document).ready(function() {
                 $('.form-control').keyup(function(){     
                     
                     metac= $('#metac').val()
                     if(Numberinv == 1){crossac = 1}
                     else if(Numberinv == 2){crossac = 0.8}
                     else if(Numberinv == 3){crossac = 0.7}
                     else if(Numberinv == 4){crossac = 0.65}
                     else if(Numberinv == 5){crossac = 0.6}
                     else if(Numberinv == 6){crossac = 0.57}
                     else if(Numberinv == 7){crossac = 0.54}
                     else if(Numberinv == 8){crossac = 0.52}
                     else if(Numberinv == 9){crossac = 0.5}
                     else if(Numberinv >= 10 && Numberinv <=12){crossac = 0.45}
                     else if(Numberinv >=13 && Numberinv <=16){crossac = 0.41}
                     else if(Numberinv >=17 && Numberinv <=20){crossac = 0.38}
                     else if(Numberinv > 20){crossac = 0.38}
                         
                     
                     })})
                     
                     $(document).ready(function() {
                         $('.form-control').click(function(){     
                             
                             metac= $('#metac').val()
                             if(Numberinv == 1){crossac = 1}
                             else if(Numberinv == 2){crossac = 0.8}
                             else if(Numberinv == 3){crossac = 0.7}
                             else if(Numberinv == 4){crossac = 0.65}
                             else if(Numberinv == 5){crossac = 0.6}
                             else if(Numberinv == 6){crossac = 0.57}
                             else if(Numberinv == 7){crossac = 0.54}
                             else if(Numberinv == 8){crossac = 0.52}
                             else if(Numberinv == 9){crossac = 0.5}
                             else if(Numberinv >= 10 && Numberinv <=12){crossac = 0.45}
                             else if(Numberinv >=13 && Numberinv <=16){crossac = 0.41}
                             else if(Numberinv >=17 && Numberinv <=20){crossac = 0.38}
                             else if(Numberinv > 20){crossac = 0.38}
                                 
                             
                             })})
var Iac
var wireac
// กระแสคูณลด
$(document).ready(function() {
    $('.form-control').keyup(function(){ 
        if(metac==1){Iac=cbac/crossac}
        else if(metac== 2 && Numberinv < 16){Iac=cbac}    
        else if(metac==2 && Numberinv >= 16){Iac=cbac/crossac}                
})})  
 
 $(document).ready(function() {
    $('.form-control').click(function(){ 
        if(metac==1){Iac=cbac/crossac}
        else if(metac== 2 && Numberinv < 16){Iac=cbac}    
        else if(metac==2 && Numberinv >= 16){Iac=cbac/crossac}                
})})  
var wireinv 
var Vdrop_ac
var Per_vdropac
var Ploss_ac
var Per_plossac
//สาย ac+ ข้อมูล ac
$(document).ready(function() {
    $('.form-control').keyup(function(){ 
        wireac = $('#wireac').val()
        if(wireac == 'thw'){
            
            if(Iac<=18){wireinv=2.5 ,vd=0.015}
            else if(Iac >18 && Iac<=24){wireinv=4 ,vd=0.0095}
            else if(Iac >24 && Iac<=31){wireinv=6,vd=0.0064}
            else if(Iac >31 && Iac<=44){wireinv=10,vd=0.0038}
            else if(Iac >44 && Iac<=59){wireinv=16,vd=0.0024}
            else if(Iac >59 && Iac<=77){wireinv=25,vd=0.00152}
            else if(Iac >77 && Iac<=96){wireinv=35,vd=0.00113}
            else if(Iac >96 && Iac<=117){wireinv=50,vd=0.00085}
            else if(Iac >117 && Iac<=149){wireinv=70,vd=0.00061}
            else if(Iac >149 && Iac<=180){wireinv=95,vd=0.00048}
            else if(Iac >180 && Iac<=208){wireinv=120,vd=0.0004}
            else if(Iac >208 && Iac<=228){wireinv=150,vd=0.00035}
            else if(Iac >228 && Iac<=258){wireinv=185,vd=0.00031}
            else if(Iac >258 && Iac<=301){wireinv=240,vd=0.00027}
            else if(Iac >301 && Iac<=343){wireinv=300,vd=0.00024}
            else if(Iac >343 && Iac<=406){wireinv=400,vd=0.00022}
            else if(Iac >406 && Iac<=464){wireinv=500,vd=0.0002}
}
        else if(wireac == 'thws'){
            if(Iac<=17){wireinv=2.5 ,vd=0.015}
            else if(Iac >17 && Iac<=23){wireinv=4 ,vd=0.0095}
            else if(Iac >23 && Iac<=30){wireinv=6,vd=0.0064}
            else if(Iac >30 && Iac<=40){wireinv=10,vd=0.0038}
            else if(Iac >40 && Iac<=54){wireinv=16,vd=0.0024}
            else if(Iac >54 && Iac<=70){wireinv=25,vd=0.0015}
            else if(Iac >70 && Iac<=86){wireinv=35,vd=0.0011}
            else if(Iac >86 && Iac<=103){wireinv=50,vd=0.0008}
            else if(Iac >103 && Iac<=130){wireinv=70,vd=0.00057}
            else if(Iac >130 && Iac<=156){wireinv=95,vd=0.00043}
            else if(Iac >156 && Iac<=179){wireinv=120,vd=0.00036}
            else if(Iac >179 && Iac<=196){wireinv=150,vd=0.00029}
            else if(Iac >196 && Iac<=222){wireinv=185,vd=0.00025}
            else if(Iac >222 && Iac<=258){wireinv=240,vd=0.00021}
            else if(Iac >258 && Iac<=295){wireinv=300,vd=0.00018}
        }
        
        else if(wireac == 'cv'){
            if(Iac<=25){wireinv=2.5 ,vd=0.016}
            else if(Iac >25 && Iac<=34){wireinv=4 ,vd=0.01}
            else if(Iac >34 && Iac<=44){wireinv=6,vd=0.0068}
            else if(Iac >44 && Iac<=60){wireinv=10,vd=0.004}
            else if(Iac >60 && Iac<=80){wireinv=16,vd=0.0025}
            else if(Iac >80 && Iac<=106){wireinv=25,vd=0.0016}
            else if(Iac >106 && Iac<=131){wireinv=35,vd=0.00117}
            else if(Iac >131 && Iac<=159){wireinv=50,vd=0.00091}
            else if(Iac >159 && Iac<=202){wireinv=70,vd=0.00065}
            else if(Iac >202 && Iac<=245){wireinv=95,vd=0.0005}
            else if(Iac >245 && Iac<=284){wireinv=120,vd=0.00042}
            else if(Iac >284 && Iac<=311){wireinv=150,vd=0.00037}
            else if(Iac >311 && Iac<=349){wireinv=185,vd=0.00032}
            else if(Iac >349 && Iac<=410){wireinv=240,vd=0.00027}
            else if(Iac >410 && Iac<=468){wireinv=300,vd=0.00024}
            else if(Iac >468 && Iac<=531){wireinv=400,vd=0.00022}
            else if(Iac >531 && Iac<=606){wireinv=500,vd=0.0002}
}

        else if(wireac == 'cvs'){
            
            if(Iac<=24){wireinv=2.5 ,vd=0.016}
            else if(Iac >27 && Iac<=32){wireinv=4 ,vd=0.01}
            else if(Iac >36 && Iac<=40){wireinv=6,vd=0.0068}
            else if(Iac >46 && Iac<=55){wireinv=10,vd=0.004}
            else if(Iac >63 && Iac<=73){wireinv=16,vd=0.0025}
            else if(Iac >83 && Iac<=96){wireinv=25,vd=0.0016}
            else if(Iac >108 && Iac<=116){wireinv=35,vd=0.00115}
            else if(Iac >133 && Iac<=140){wireinv=50,vd=0.00086}
            else if(Iac >159 && Iac<=177){wireinv=70,vd=0.0006}
            else if(Iac >201 && Iac<=212){wireinv=95,vd=0.00044}
            else if(Iac >241 && Iac<=244){wireinv=120,vd=0.00036}
            else if(Iac >278 && Iac<=273){wireinv=150,vd=0.00031}
            else if(Iac >304 && Iac<=309){wireinv=185,vd=0.00025}
            else if(Iac >349 && Iac<=362){wireinv=240,vd=0.00022}
            else if(Iac >418 && Iac<=414){wireinv=300,vd=0.00018}
}

        
        Vdrop_ac= vd*datain3.Iinv_acmax*$('#Inv_Mdb').val()
        Per_vdropac = (100/400)*Vdrop_ac
        Ploss_ac = 1.732*datain3.Iinv_acmax*Vdrop_ac
        Per_plossac = (100*Ploss_ac/datain3.Pinv_ac)
})}) 

$(document).ready(function() {
    $('.form-control').click(function(){ 
        wireac = $('#wireac').val()
        if(wireac == 'thw'){
            
            if(Iac<=18){wireinv=2.5 ,vd=0.015}
            else if(Iac >18 && Iac<=24){wireinv=4 ,vd=0.0095}
            else if(Iac >24 && Iac<=31){wireinv=6,vd=0.0064}
            else if(Iac >31 && Iac<=44){wireinv=10,vd=0.0038}
            else if(Iac >44 && Iac<=59){wireinv=16,vd=0.0024}
            else if(Iac >59 && Iac<=77){wireinv=25,vd=0.00152}
            else if(Iac >77 && Iac<=96){wireinv=35,vd=0.00113}
            else if(Iac >96 && Iac<=117){wireinv=50,vd=0.00085}
            else if(Iac >117 && Iac<=149){wireinv=70,vd=0.00061}
            else if(Iac >149 && Iac<=180){wireinv=95,vd=0.00048}
            else if(Iac >180 && Iac<=208){wireinv=120,vd=0.0004}
            else if(Iac >208 && Iac<=228){wireinv=150,vd=0.00035}
            else if(Iac >228 && Iac<=258){wireinv=185,vd=0.00031}
            else if(Iac >258 && Iac<=301){wireinv=240,vd=0.00027}
            else if(Iac >301 && Iac<=343){wireinv=300,vd=0.00024}
            else if(Iac >343 && Iac<=406){wireinv=400,vd=0.00022}
            else if(Iac >406 && Iac<=464){wireinv=500,vd=0.0002}
}
        else if(wireac == 'thws'){
            if(Iac<=17){wireinv=2.5 ,vd=0.015}
            else if(Iac >17 && Iac<=23){wireinv=4 ,vd=0.0095}
            else if(Iac >23 && Iac<=30){wireinv=6,vd=0.0064}
            else if(Iac >30 && Iac<=40){wireinv=10,vd=0.0038}
            else if(Iac >40 && Iac<=54){wireinv=16,vd=0.0024}
            else if(Iac >54 && Iac<=70){wireinv=25,vd=0.0015}
            else if(Iac >70 && Iac<=86){wireinv=35,vd=0.0011}
            else if(Iac >86 && Iac<=103){wireinv=50,vd=0.0008}
            else if(Iac >103 && Iac<=130){wireinv=70,vd=0.00057}
            else if(Iac >130 && Iac<=156){wireinv=95,vd=0.00043}
            else if(Iac >156 && Iac<=179){wireinv=120,vd=0.00036}
            else if(Iac >179 && Iac<=196){wireinv=150,vd=0.00029}
            else if(Iac >196 && Iac<=222){wireinv=185,vd=0.00025}
            else if(Iac >222 && Iac<=258){wireinv=240,vd=0.00021}
            else if(Iac >258 && Iac<=295){wireinv=300,vd=0.00018}
        }
        
        else if(wireac == 'cv'){
            if(Iac<=25){wireinv=2.5 ,vd=0.016}
            else if(Iac >25 && Iac<=34){wireinv=4 ,vd=0.01}
            else if(Iac >34 && Iac<=44){wireinv=6,vd=0.0068}
            else if(Iac >44 && Iac<=60){wireinv=10,vd=0.004}
            else if(Iac >60 && Iac<=80){wireinv=16,vd=0.0025}
            else if(Iac >80 && Iac<=106){wireinv=25,vd=0.0016}
            else if(Iac >106 && Iac<=131){wireinv=35,vd=0.00117}
            else if(Iac >131 && Iac<=159){wireinv=50,vd=0.00091}
            else if(Iac >159 && Iac<=202){wireinv=70,vd=0.00065}
            else if(Iac >202 && Iac<=245){wireinv=95,vd=0.0005}
            else if(Iac >245 && Iac<=284){wireinv=120,vd=0.00042}
            else if(Iac >284 && Iac<=311){wireinv=150,vd=0.00037}
            else if(Iac >311 && Iac<=349){wireinv=185,vd=0.00032}
            else if(Iac >349 && Iac<=410){wireinv=240,vd=0.00027}
            else if(Iac >410 && Iac<=468){wireinv=300,vd=0.00024}
            else if(Iac >468 && Iac<=531){wireinv=400,vd=0.00022}
            else if(Iac >531 && Iac<=606){wireinv=500,vd=0.0002}
}

        else if(wireac == 'cvs'){
            
            if(Iac<=24){wireinv=2.5 ,vd=0.016}
            else if(Iac >27 && Iac<=32){wireinv=4 ,vd=0.01}
            else if(Iac >36 && Iac<=40){wireinv=6,vd=0.0068}
            else if(Iac >46 && Iac<=55){wireinv=10,vd=0.004}
            else if(Iac >63 && Iac<=73){wireinv=16,vd=0.0025}
            else if(Iac >83 && Iac<=96){wireinv=25,vd=0.0016}
            else if(Iac >108 && Iac<=116){wireinv=35,vd=0.00115}
            else if(Iac >133 && Iac<=140){wireinv=50,vd=0.00086}
            else if(Iac >159 && Iac<=177){wireinv=70,vd=0.0006}
            else if(Iac >201 && Iac<=212){wireinv=95,vd=0.00044}
            else if(Iac >241 && Iac<=244){wireinv=120,vd=0.00036}
            else if(Iac >278 && Iac<=273){wireinv=150,vd=0.00031}
            else if(Iac >304 && Iac<=309){wireinv=185,vd=0.00025}
            else if(Iac >349 && Iac<=362){wireinv=240,vd=0.00022}
            else if(Iac >418 && Iac<=414){wireinv=300,vd=0.00018}
}

        
        Vdrop_ac= vd*datain3.Iinv_acmax*$('#Inv_Mdb').val()
        Per_vdropac = (100/400)*Vdrop_ac
        Ploss_ac = 1.732*datain3.Iinv_acmax*Vdrop_ac
        Per_plossac = (100*Ploss_ac/datain3.Pinv_ac)
})}) 
var groundinv
                 // ground ac
            $(document).ready(function() {
                $('.form-control').keyup(function(){
                    
                    
                    if(cbac <= 20){groundinv =2.5}
                    else if(cbac > 20 && cbac<= 40){groundinv =4}
                    else if(cbac > 40 && cbac<= 70){groundinv =6}
                    else if(cbac > 70 && cbac<= 100){groundinv =10}
                    else if(cbac > 100 && cbac<= 200){groundinv =16}
                    else if(cbac > 200 && cbac<= 400){groundinv =25}
                    else if(cbac > 400 && cbac<= 500){groundinv =35}
                    else if(cbac > 500 && cbac<= 800){groundinv =50}
                    else if(cbac > 800 && cbac<= 1000){groundinv =70}
                    else if(cbac > 1000 && cbac<= 1250){groundinv =95}
                    else if(cbac > 1250 && cbac<= 2000){groundinv =120}
                    else if(cbac > 2000 && cbac<= 2500){groundinv =185}
                    else if(cbac > 2500 && cbac<= 4000){groundinv =240}
                    else if(cbac > 4000 && cbac<= 6000){groundinv =400}
                   
            
                 })})
                 $(document).ready(function() {
                    $('.form-control').click(function(){
                        
                        
                        if(cbac <= 20){groundinv =2.5}
                        else if(cbac > 20 && cbac<= 40){groundinv =4}
                        else if(cbac > 40 && cbac<= 70){groundinv =6}
                        else if(cbac > 70 && cbac<= 100){groundinv =10}
                        else if(cbac > 100 && cbac<= 200){groundinv =16}
                        else if(cbac > 200 && cbac<= 400){groundinv =25}
                        else if(cbac > 400 && cbac<= 500){groundinv =35}
                        else if(cbac > 500 && cbac<= 800){groundinv =50}
                        else if(cbac > 800 && cbac<= 1000){groundinv =70}
                        else if(cbac > 1000 && cbac<= 1250){groundinv =95}
                        else if(cbac > 1250 && cbac<= 2000){groundinv =120}
                        else if(cbac > 2000 && cbac<= 2500){groundinv =185}
                        else if(cbac > 2500 && cbac<= 4000){groundinv =240}
                        else if(cbac > 4000 && cbac<= 6000){groundinv =400}
                       
                
                     })})
//รวมอินเวอร์เคอร์
// cb mdb
var cbact
$(document).ready(function() {
    $('.form-control').keyup(function(){  
            Iinvt = 1.25*datain3.Iinv_acmax*Numberinv
            if(Iinvt<=15){cbact=15}
            else if(Iinvt >15 && Iinvt<=20){cbact=20}
            else if(Iinvt >20 && Iinvt<=30){cbact=30}
            else if(Iinvt >30 && Iinvt<=40){cbact=40}
            else if(Iinvt >40 && Iinvt<=50){cbact=50}
            else if(Iinvt >50 && Iinvt<=60){cbact=60}
            else if(Iinvt >60 && Iinvt<=80){cbact=80}
            else if(Iinvt >80 && Iinvt<=100){cbact=100}
            else if(Iinvt >100 && Iinvt<=125){cbact=125}
            else if(Iinvt >125 && Iinvt<=175){cbact=175}
            else if(Iinvt >175 && Iinvt<=200){cbact=200}
            else if(Iinvt >200 && Iinvt<=225){cbact=225}
            else if(Iinvt >225 && Iinvt<=250){cbact=250}
})}) 
$(document).ready(function() {
    $('.form-control').click(function(){  
            Iinvt = 1.25*datain3.Iinv_acmax*Numberinv
            if(Iinvt<=15){cbact=15}
            else if(Iinvt >15 && Iinvt<=20){cbact=20}
            else if(Iinvt >20 && Iinvt<=30){cbact=30}
            else if(Iinvt >30 && Iinvt<=40){cbact=40}
            else if(Iinvt >40 && Iinvt<=50){cbact=50}
            else if(Iinvt >50 && Iinvt<=60){cbact=60}
            else if(Iinvt >60 && Iinvt<=80){cbact=80}
            else if(Iinvt >80 && Iinvt<=100){cbact=100}
            else if(Iinvt >100 && Iinvt<=125){cbact=125}
            else if(Iinvt >125 && Iinvt<=175){cbact=175}
            else if(Iinvt >175 && Iinvt<=200){cbact=200}
            else if(Iinvt >200 && Iinvt<=225){cbact=225}
            else if(Iinvt >225 && Iinvt<=250){cbact=250}
})})    
var wireinv2
// สาย mdb
$(document).ready(function() {
    $('.form-control').keyup(function(){    
        if(wireac == 'thw'){
            if(cbact<=18){wireinv2=2.5 ,vd=0.015}
            else if(cbact >18 && cbact<=24){wireinv2=4 ,vd=0.0095}
            else if(cbact >24 && cbact<=31){wireinv2=6,vd=0.0064}
            else if(cbact >31 && cbact<=44){wireinv2=10,vd=0.0038}
            else if(cbact >44 && cbact<=59){wireinv2=16,vd=0.0024}
            else if(cbact >59 && cbact<=77){wireinv2=25,vd=0.00152}
            else if(cbact >77 && cbact<=96){wireinv2=35,vd=0.00113}
            else if(cbact >96 && cbact<=117){wireinv2=50,vd=0.00085}
            else if(cbact >117 && cbact<=149){wireinv2=70,vd=0.00061}
            else if(cbact >149 && cbact<=180){wireinv2=95,vd=0.00048}
            else if(cbact >180 && cbact<=208){wireinv2=120,vd=0.0004}
            else if(cbact >208 && cbact<=228){wireinv2=150,vd=0.00035}
            else if(cbact >228 && cbact<=258){wireinv2=185,vd=0.00031}
            else if(cbact >258 && cbact<=301){wireinv2=240,vd=0.00027}
            else if(cbact >301 && cbact<=343){wireinv2=300,vd=0.00024}
            else if(cbact >343 && cbact<=406){wireinv2=400,vd=0.00022}
            else if(cbact >406 && cbact<=464){wireinv2=500,vd=0.0002}
            
}      
        else if(wireac == 'thws'){
            if(cbact<=17){wireinv=2.5 ,vd=0.015}
            else if(cbact >17 && cbact<=23){wireinv2=4 ,vd=0.0095}
            else if(cbact >23 && cbact<=30){wireinv2=6,vd=0.0064}
            else if(cbact >30 && cbact<=40){wireinv2=10,vd=0.0038}
            else if(cbact >40 && cbact<=54){wireinv2=16,vd=0.0024}
            else if(cbact >54 && cbact<=70){wireinv2=25,vd=0.0015}
            else if(cbact >70 && cbact<=86){wireinv2=35,vd=0.0011}
            else if(cbact >86 && cbact<=103){wireinv2=50,vd=0.0008}
            else if(cbact >103 && cbact<=130){wireinv2=70,vd=0.00057}
            else if(cbact >130 && cbact<=156){wireinv2=95,vd=0.00043}
            else if(cbact >156 && cbact<=179){wireinv2=120,vd=0.00036}
            else if(cbact >179 && cbact<=196){wireinv2=150,vd=0.00029}
            else if(cbact >196 && cbact<=222){wireinv2=185,vd=0.00025}
            else if(cbact >222 && cbact<=258){wireinv2=240,vd=0.00021}
            else if(cbact >258 && cbact<=295){wireinv2=300,vd=0.00018}
            
}
        else if(wireac == 'cv'){
            if(cbact<=28){wireinv2=2.5 ,vd=0.019}
            else if(cbact >28 && cbact<=38){wireinv2=4 ,vd=0.012}
            else if(cbact >38 && cbact<=49){wireinv2=6,vd=0.0079}
            else if(cbact >49 && cbact<=68){wireinv2=10,vd=0.0047}
            else if(cbact >68 && cbact<=91){wireinv2=16,vd=0.0029}
            else if(cbact >91 && cbact<=121){wireinv2=25,vd=0.00185}
            else if(cbact >121 && cbact<=149){wireinv2=35,vd=0.00137}
            else if(cbact >149 && cbact<=180){wireinv2=50,vd=0.00104}
            else if(cbact >180 && cbact<=230){wireinv2=70,vd=0.00075}
            else if(cbact >230 && cbact<=278){wireinv2=95,vd=0.00058}
            else if(cbact >278 && cbact<=322){wireinv2=120,vd=0.00049}
            else if(cbact >322 && cbact<=358){wireinv2=150,vd=0.00042}
            else if(cbact >358 && cbact<=409){wireinv2=185,vd=0.00037}
            else if(cbact >409 && cbact<=480){wireinv2=240,vd=0.00032}
            else if(cbact >480 && cbact<=549){wireinv2=300,vd=0.00028}
            else if(cbact >549 && cbact<=622){wireinv2=400,vd=0.00025}
            else if(cbact >622 && cbact<=713){wireinv2=500,vd=0.00023}
}
        else if(wireac == 'cvs'){
            if(cbact<=24){wireinv2=2.5 ,vd=0.016}
            else if(cbact >27 && cbact<=32){wireinv2=4 ,vd=0.01}
            else if(cbact >36 && cbact<=40){wireinv2=6,vd=0.0068}
            else if(cbact >46 && cbact<=55){wireinv2=10,vd=0.004}
            else if(cbact >63 && cbact<=73){wireinv2=16,vd=0.0025}
            else if(cbact >83 && cbact<=96){wireinv2=25,vd=0.0016}
            else if(cbact >108 && cbact<=116){wireinv2=35,vd=0.00115}
            else if(cbact >133 && cbact<=140){wireinv2=50,vd=0.00086}
            else if(cbact >159 && cbact<=177){wireinv2=70,vd=0.0006}
            else if(cbact >201 && cbact<=212){wireinv2=95,vd=0.00044}
            else if(cbact >241 && cbact<=244){wireinv2=120,vd=0.00036}
            else if(cbact >278 && cbact<=273){wireinv2=150,vd=0.00031}
            else if(cbact >304 && cbact<=309){wireinv2=185,vd=0.00025}
            else if(cbact >349 && cbact<=362){wireinv2=240,vd=0.00022}
            else if(cbact >418 && cbact<=414){wireinv2=300,vd=0.00018}
            
}
    })})      

$(document).ready(function() {
    $('.form-control').click(function(){    
            if(wireac == 'thw'){
                if(cbact<=18){wireinv2=2.5 ,vd=0.015}
                else if(cbact >18 && cbact<=24){wireinv2=4 ,vd=0.0095}
                else if(cbact >24 && cbact<=31){wireinv2=6,vd=0.0064}
                else if(cbact >31 && cbact<=44){wireinv2=10,vd=0.0038}
                else if(cbact >44 && cbact<=59){wireinv2=16,vd=0.0024}
                else if(cbact >59 && cbact<=77){wireinv2=25,vd=0.00152}
                else if(cbact >77 && cbact<=96){wireinv2=35,vd=0.00113}
                else if(cbact >96 && cbact<=117){wireinv2=50,vd=0.00085}
                else if(cbact >117 && cbact<=149){wireinv2=70,vd=0.00061}
                else if(cbact >149 && cbact<=180){wireinv2=95,vd=0.00048}
                else if(cbact >180 && cbact<=208){wireinv2=120,vd=0.0004}
                else if(cbact >208 && cbact<=228){wireinv2=150,vd=0.00035}
                else if(cbact >228 && cbact<=258){wireinv2=185,vd=0.00031}
                else if(cbact >258 && cbact<=301){wireinv2=240,vd=0.00027}
                else if(cbact >301 && cbact<=343){wireinv2=300,vd=0.00024}
                else if(cbact >343 && cbact<=406){wireinv2=400,vd=0.00022}
                else if(cbact >406 && cbact<=464){wireinv2=500,vd=0.0002}
                
    }      
            else if(wireac == 'thws'){
                if(cbact<=17){wireinv=2.5 ,vd=0.015}
                else if(cbact >17 && cbact<=23){wireinv2=4 ,vd=0.0095}
                else if(cbact >23 && cbact<=30){wireinv2=6,vd=0.0064}
                else if(cbact >30 && cbact<=40){wireinv2=10,vd=0.0038}
                else if(cbact >40 && cbact<=54){wireinv2=16,vd=0.0024}
                else if(cbact >54 && cbact<=70){wireinv2=25,vd=0.0015}
                else if(cbact >70 && cbact<=86){wireinv2=35,vd=0.0011}
                else if(cbact >86 && cbact<=103){wireinv2=50,vd=0.0008}
                else if(cbact >103 && cbact<=130){wireinv2=70,vd=0.00057}
                else if(cbact >130 && cbact<=156){wireinv2=95,vd=0.00043}
                else if(cbact >156 && cbact<=179){wireinv2=120,vd=0.00036}
                else if(cbact >179 && cbact<=196){wireinv2=150,vd=0.00029}
                else if(cbact >196 && cbact<=222){wireinv2=185,vd=0.00025}
                else if(cbact >222 && cbact<=258){wireinv2=240,vd=0.00021}
                else if(cbact >258 && cbact<=295){wireinv2=300,vd=0.00018}
                
    }
            else if(wireac == 'cv'){
                if(cbact<=28){wireinv2=2.5 ,vd=0.019}
                else if(cbact >28 && cbact<=38){wireinv2=4 ,vd=0.012}
                else if(cbact >38 && cbact<=49){wireinv2=6,vd=0.0079}
                else if(cbact >49 && cbact<=68){wireinv2=10,vd=0.0047}
                else if(cbact >68 && cbact<=91){wireinv2=16,vd=0.0029}
                else if(cbact >91 && cbact<=121){wireinv2=25,vd=0.00185}
                else if(cbact >121 && cbact<=149){wireinv2=35,vd=0.00137}
                else if(cbact >149 && cbact<=180){wireinv2=50,vd=0.00104}
                else if(cbact >180 && cbact<=230){wireinv2=70,vd=0.00075}
                else if(cbact >230 && cbact<=278){wireinv2=95,vd=0.00058}
                else if(cbact >278 && cbact<=322){wireinv2=120,vd=0.00049}
                else if(cbact >322 && cbact<=358){wireinv2=150,vd=0.00042}
                else if(cbact >358 && cbact<=409){wireinv2=185,vd=0.00037}
                else if(cbact >409 && cbact<=480){wireinv2=240,vd=0.00032}
                else if(cbact >480 && cbact<=549){wireinv2=300,vd=0.00028}
                else if(cbact >549 && cbact<=622){wireinv2=400,vd=0.00025}
                else if(cbact >622 && cbact<=713){wireinv2=500,vd=0.00023}
    }
            else if(wireac == 'cvs'){
                if(cbact<=24){wireinv2=2.5 ,vd=0.016}
                else if(cbact >27 && cbact<=32){wireinv2=4 ,vd=0.01}
                else if(cbact >36 && cbact<=40){wireinv2=6,vd=0.0068}
                else if(cbact >46 && cbact<=55){wireinv2=10,vd=0.004}
                else if(cbact >63 && cbact<=73){wireinv2=16,vd=0.0025}
                else if(cbact >83 && cbact<=96){wireinv2=25,vd=0.0016}
                else if(cbact >108 && cbact<=116){wireinv2=35,vd=0.00115}
                else if(cbact >133 && cbact<=140){wireinv2=50,vd=0.00086}
                else if(cbact >159 && cbact<=177){wireinv2=70,vd=0.0006}
                else if(cbact >201 && cbact<=212){wireinv2=95,vd=0.00044}
                else if(cbact >241 && cbact<=244){wireinv2=120,vd=0.00036}
                else if(cbact >278 && cbact<=273){wireinv2=150,vd=0.00031}
                else if(cbact >304 && cbact<=309){wireinv2=185,vd=0.00025}
                else if(cbact >349 && cbact<=362){wireinv2=240,vd=0.00022}
                else if(cbact >418 && cbact<=414){wireinv2=300,vd=0.00018}
                
    }
        })}) 
        var groundmdb1
        // ground mdb
        $(document).ready(function() {
            $('.form-control').keyup(function(){
                
             if(cbact <= 20 && cbacs!=0){groundmdb1 =2.5}
             else if(cbact > 20 && cbact<= 40){groundmdb1 =4}
             else if(cbact > 40 && cbact<= 70){groundmdb1 =6}
             else if(cbact > 70 && cbact<= 100){groundmdb1 =10}
             else if(cbact > 100 && cbact<= 200){groundmdb1 =16}
             else if(cbact > 200 && cbact<= 400){groundmdb1 =25}
             else if(cbact > 400 && cbact<= 500){groundmdb1 =35}
             else if(cbact > 500 && cbact<= 800){groundmdb1 =50}
             else if(cbact > 800 && cbact<= 1000){groundmdb1 =70}
             else if(cbact > 1000 && cbact<= 1250){groundmdb1 =95}
             else if(cbact > 1250 && cbact<= 2000){groundmdb1 =120}
             else if(cbact > 2000 && cbact<= 2500){groundmdb1 =185}
             else if(cbact > 2500 && cbact<= 4000){groundmdb1 =240}
             else if(cbact > 4000 && cbact<= 6000){groundmdb1 =400}
                
         
             })})
             $(document).ready(function() {
                 $('.form-control').click(function(){
                     
                     
                     if(cbact <= 20 && cbacs!=0){groundmdb1 =2.5}
                     else if(cbact > 20 && cbact<= 40){groundmdb1 =4}
                     else if(cbact > 40 && cbact<= 70){groundmdb1 =6}
                     else if(cbact > 70 && cbact<= 100){groundmdb1 =10}
                     else if(cbact > 100 && cbact<= 200){groundmdb1 =16}
                     else if(cbact > 200 && cbact<= 400){groundmdb1 =25}
                     else if(cbact > 400 && cbact<= 500){groundmdb1 =35}
                     else if(cbact > 500 && cbact<= 800){groundmdb1 =50}
                     else if(cbact > 800 && cbact<= 1000){groundmdb1 =70}
                     else if(cbact > 1000 && cbact<= 1250){groundmdb1 =95}
                     else if(cbact > 1250 && cbact<= 2000){groundmdb1 =120}
                     else if(cbact > 2000 && cbact<= 2500){groundmdb1 =185}
                     else if(cbact > 2500 && cbact<= 4000){groundmdb1 =240}
                     else if(cbact > 4000 && cbact<= 6000){groundmdb1 =400}
              
                  })})
//เลือกสายไฟdc
var Ipvs1
var pv1fs1
$(document).ready(function() {
    $('.form-control').click(function(){
        cbdcs=$('#pv1f_select').val()
        if(metdc==1){Ipvs1=cbdcs/cross}
        else if(metdc== 2 && string_real < 16){Ipvs1=cbdcs}    
        
        else if(metdc==2 && string_real >= 16){Ipvs1=cbdcs/cross}
})}) 
$(document).ready(function() {
    $('.form-control').keyup(function(){
        cbdcs=$('#pv1f_select').val()
        if(metdc==1){Ipvs1=cbdcs/cross}
        else if(metdc== 2 && string_real < 16){Ipvs1=cbdcs}    
        
        else if(metdc==2 && string_real >= 16){Ipvs1=cbdcs/cross}
})})    
    $(document).ready(function() {
        $('.form-control').click(function(){
            if(Ipvs1<=55 && Ipvs1 != 0){pv1fs1=4}
            else if(Ipvs1 >55 && Ipvs1<=70){pv1fs1=6}
            else if(Ipvs1 >70 && Ipvs1<=98){pv1fs1=10}
            else if(Ipvs1 >98 && Ipvs1<=132){pv1fs1=16}
            else if(Ipvs1 >132 && Ipvs1<=176){pv1fs1=25}
            $('#pv1f_select1').val(pv1fs1)
        })})  
        $(document).ready(function() {
            $('.form-control').keyup(function(){
                if(Ipvs1<=55 && Ipvs1 != 0){pv1fs1=4}
                else if(Ipvs1 >55 && Ipvs1<=70){pv1fs1=6}
                else if(Ipvs1 >70 && Ipvs1<=98){pv1fs1=10}
                else if(Ipvs1 >98 && Ipvs1<=132){pv1fs1=16}
                else if(Ipvs1 >132 && Ipvs1<=176){pv1fs1=25}
                $('#pv1f_select1').val(pv1fs1)
            })})     
    var pv1fs2
    var Per_plosspv1fs1
    $(document).ready(function() {
        $('.form-control').click(function(){
            pv1fs2=$('#pv1f_select2').val()
            if(pv1fs2 == 4){ohmpv1fs1=(5.09*$('#PV_Inv').val())/1000}
            else if(pv1fs2 == 6){ohmpv1fs1=(3.39*$('#PV_Inv').val())/1000}
            else if(pv1fs2 == 10){ohmpv1fs1=(1.95*$('#PV_Inv').val())/1000}
            else if(pv1fs2 == 16){ohmpv1fs1=(1.24*$('#PV_Inv').val())/1000}
            else if(pv1fs2 == 25){ohmpv1fs1=(0.795*$('#PV_Inv').val())/1000}

            Vdrop_pv1fs1= 2*data.Imp*String_array*ohmpv1fs1
            Per_vdroppv1fs1 = (100/Vstring_min)*Vdrop_pv1fs1
            Ploss_pv1fs1 = 2*data.Imp*data.Imp*string_real*ohm
            Per_plosspv1fs1 = (100*Ploss_pv1fs1)/Pmax1
           
            $('#Vdrop_pv1f_select').val(Vdrop_pv1fs1.toFixed(2))
            $('#Per_vdroppv1f_select').val(Per_vdroppv1fs1.toFixed(2))
            $('#Ploss_pv1f_select').val(Ploss_pv1fs1.toFixed(2))
            $('#Per_plosspv1f_select').val(Per_plosspv1fs1.toFixed(2))
        })})  
        $(document).ready(function() {
            $('.form-control').keyup(function(){
                pv1fs2=$('#pv1f_select2').val()
                if(pv1fs2 == 4){ohmpv1fs1=(5.09*$('#PV_Inv').val())/1000}
                else if(pv1fs2 == 6){ohmpv1fs1=(3.39*$('#PV_Inv').val())/1000}
                else if(pv1fs2 == 10){ohmpv1fs1=(1.95*$('#PV_Inv').val())/1000}
                else if(pv1fs2 == 16){ohmpv1fs1=(1.24*$('#PV_Inv').val())/1000}
                else if(pv1fs2 == 25){ohmpv1fs1=(0.795*$('#PV_Inv').val())/1000}
    
                Vdrop_pv1fs1= 2*data.Imp*String_array*ohmpv1fs1
                Per_vdroppv1fs1 = (100/Vstring_min)*Vdrop_pv1fs1
                Ploss_pv1fs1 = 2*data.Imp*data.Imp*string_real*ohm
                Per_plosspv1fs1 = (100*Ploss_pv1fs1)/Pmax1
                $('#Vdrop_pv1f_select').val(Vdrop_pv1fs1.toFixed(2))
                $('#Per_vdroppv1f_select').val(Per_vdroppv1fs1.toFixed(2))
                $('#Ploss_pv1f_select').val(Ploss_pv1fs1.toFixed(2))
                $('#Per_plosspv1f_select').val(Per_plosspv1fs1.toFixed(2))
            })})  

//ท่อร้อยสายpv1f
var areatotaldc
$(document).ready(function() {
    $('.form-control').click(function(){
        if(pv1fs2 == 4){areapv1f = 24.64}
        else if(pv1fs2 == 6){areapv1f = 29.24}
        else if(pv1fs2 == 10){areapv1f = 40.73}
        else if(pv1fs2 == 16){areapv1f = 63.64}
        else if(pv1fs2 == 25){areapv1f = 89.96}
        areatotaldc = (2*string_real*areapv1f)+grounddc
            })}) 
            $(document).ready(function() {
                $('.form-control').keyup(function(){
                    if(pv1fs2 == 4){areapv1f = 24.64}
                    else if(pv1fs2 == 6){areapv1f = 29.24}
                    else if(pv1fs2 == 10){areapv1f = 40.73}
                    else if(pv1fs2 == 16){areapv1f = 63.64}
                    else if(pv1fs2 == 25){areapv1f = 89.96}
                    areatotaldc = (2*string_real*areapv1f)+grounddc
                        })}) 
$(document).ready(function() {
    $('.form-control').click(function(){
        if(metdc==1){pipe = (areatotaldc/0.4).toFixed(2)}
        else if(metdc==2){pipe = (areatotaldc/0.2).toFixed(2)}
        $('#pipe_way1').val(pipe)
    })}) 
    $(document).ready(function() {
        $('.form-control').keyup(function(){
            if(metdc==1){pipe = (areatotaldc/0.4).toFixed(2)}
            else if(metdc==2){pipe = (areatotaldc/0.2).toFixed(2)}
            $('#pipe_way1').val(pipe)
        })})     

     




// เลือกสายinv.
var Iacs1
var wireinvs1
var cbacs
var Per_plossacs2
$(document).ready(function() {
    $('.form-control').click(function(){
        cbacs=$('#cb_invs').val()
        if(metac==1){Iacs1=cbacs/crossac}
        else if(metac== 2 && Numberinv < 16){Iacs1=cbacs}    
        else if(metac==2 && Numberinv >= 16){Iacs1=cbacs/crossac}   
             
})})  
$(document).ready(function() {
    $('.form-control').keyup(function(){
        cbacs=$('#cb_invs').val()
        if(metac==1){Iacs1=cbacs/crossac}
        else if(metac== 2 && Numberinv < 16){Iacs1=cbacs}    
        else if(metac==2 && Numberinv >= 16){Iacs1=cbacs/crossac}        
})})    
    
    
$(document).ready(function() {
    $('.form-control').click(function(){ 
     
        if(wireac == 'thw'){
            if(Iacs1<=18 && Iacs1!=0){wireinvs1=2.5}
            else if(Iacs1 >18 && Iacs1<=24){wireinvs1=4}
            else if(Iacs1 >24 && Iacs1<=31){wireinvs1=6}
            else if(Iacs1 >31 && Iacs1<=44){wireinvs1=10}
            else if(Iacs1 >44 && Iacs1<=59){wireinvs1=16}
            else if(Iacs1 >59 && Iacs1<=77){wireinvs1=25}
            else if(Iacs1 >77 && Iacs1<=96){wireinvs1=35}
            else if(Iacs1 >96 && Iacs1<=117){wireinvs1=50}
            else if(Iacs1 >117 && Iacs1<=149){wireinvs1=70}
            else if(Iacs1 >149 && Iacs1<=180){wireinvs1=95}
            else if(Iacs1 >180 && Iacs1<=208){wireinvs1=120}
            else if(Iacs1 >208 && Iacs1<=228){wireinvs1=150}
            else if(Iacs1 >228 && Iacs1<=258){wireinvs1=185}
            else if(Iacs1 >258 && Iacs1<=301){wireinvs1=240}
            else if(Iacs1 >301 && Iacs1<=343){wireinvs1=300}
            else if(Iacs1 >343 && Iacs1<=406){wireinvs1=400}
            else if(Iacs1 >406 && Iacs1<=464){wireinvs1=500}
            else if(Iacs1 >464){wireinvs1=500}
                
        }
        else if(wireac == 'thws'){
            if(Iacs1<=17 && Iacs1!=0){wireinvs1=2.5 }
            else if(Iacs1 >17 && Iacs1<=23){wireinvs1=4}
            else if(Iacs1 >23 && Iacs1<=30){wireinvs1=6}
            else if(Iacs1 >30 && Iacs1<=40){wireinvs1=10}
            else if(Iacs1 >40 && Iacs1<=54){wireinvs1=16}
            else if(Iacs1 >54 && Iacs1<=70){wireinvs1=25}
            else if(Iacs1 >70 && Iacs1<=86){wireinvs1=35}
            else if(Iacs1 >86 && Iacs1<=103){wireinvs1=50}
            else if(Iacs1 >103 && Iacs1<=130){wireinvs1=70}
            else if(Iacs1 >130 && Iacs1<=156){wireinvs1=95}
            else if(Iacs1 >156 && Iacs1<=179){wireinvs1=120}
            else if(Iacs1 >179 && Iacs1<=196){wireinvs1=150}
            else if(Iacs1 >196 && Iacs1<=222){wireinvs1=185}
            else if(Iacs1 >222 && Iacs1<=258){wireinvs1=240}
            else if(Iacs1 >258 && Iacs1<=295){wireinvs1=300}
            else if(Iacs1 >295){wireinvs1=300}
                
        }
            
        else if(wireac == 'cv'){
            if(Iacs1<=25 && Iacs1!=0){wireinvs1=2.5}
            else if(Iacs1 >25 && Iacs1<=34){wireinvs1=4}
            else if(Iacs1 >34 && Iacs1<=44){wireinvs1=6}
            else if(Iacs1 >44 && Iacs1<=60){wireinvs1=10}
            else if(Iacs1 >60 && Iacs1<=80){wireinvs1=16}
            else if(Iacs1 >80 && Iacs1<=106){wireinvs1=25}
            else if(Iacs1 >106 && Iacs1<=131){wireinvs1=35}
            else if(Iacs1 >131 && Iacs1<=159){wireinvs1=50}
            else if(Iacs1 >159 && Iacs1<=202){wireinvs1=70}
            else if(Iacs1 >202 && Iacs1<=245){wireinvs1=95}
            else if(Iacs1 >245 && Iacs1<=284){wireinvs1=120}
            else if(Iacs1 >284 && Iacs1<=311){wireinvs1=150}
            else if(Iacs1 >311 && Iacs1<=349){wireinvs1=185}
            else if(Iacs1 >349 && Iacs1<=410){wireinvs1=240}
            else if(Iacs1 >410 && Iacs1<=468){wireinvs1=300}
            else if(Iacs1 >468 && Iacs1<=531){wireinvs1=400}
            else if(Iacs1 >531 && Iacs1<=606){wireinvs1=500}
            else if(Iacs1 >606){wireinvs1=500}
                
        }
    
        else if(wireac == 'cvs'){
            if(Iacs1<=24 && Iacs1!=0){wireinvs1=2.5}
            else if(Iacs1 >27 && Iacs1<=32){wireinvs1=4}
            else if(Iacs1 >36 && Iacs1<=40){wireinvs1=6}
            else if(Iacs1 >46 && Iacs1<=55){wireinvs1=10}
            else if(Iacs1 >63 && Iacs1<=73){wireinvs1=16}
            else if(Iacs1 >83 && Iacs1<=96){wireinvs1=25}
            else if(Iacs1 >108 && Iacs1<=116){wireinvs1=35}
            else if(Iacs1 >133 && Iacs1<=140){wireinvs1=50}
            else if(Iacs1 >159 && Iacs1<=177){wireinvs1=70}
            else if(Iacs1 >201 && Iacs1<=212){wireinvs1=95}
            else if(Iacs1 >241 && Iacs1<=244){wireinvs1=120}
            else if(Iacs1 >278 && Iacs1<=273){wireinvs1=150}
            else if(Iacs1 >304 && Iacs1<=309){wireinvs1=185}
            else if(Iacs1 >349 && Iacs1<=362){wireinvs1=240}
            else if(Iacs1 >418 && Iacs1<=414){wireinvs1=300}
            else if(Iacs1 >414){wireinvs1=300}
                
                
        }
   
        $('#wire_invs').val(wireinvs1)
})}) 
$(document).ready(function() {
    $('.form-control').keyup(function(){ 
     
        if(wireac == 'thw'){
            if(Iacs1<=18 && Iacs1!=0){wireinvs1=2.5}
            else if(Iacs1 >18 && Iacs1<=24){wireinvs1=4}
            else if(Iacs1 >24 && Iacs1<=31){wireinvs1=6}
            else if(Iacs1 >31 && Iacs1<=44){wireinvs1=10}
            else if(Iacs1 >44 && Iacs1<=59){wireinvs1=16}
            else if(Iacs1 >59 && Iacs1<=77){wireinvs1=25}
            else if(Iacs1 >77 && Iacs1<=96){wireinvs1=35}
            else if(Iacs1 >96 && Iacs1<=117){wireinvs1=50}
            else if(Iacs1 >117 && Iacs1<=149){wireinvs1=70}
            else if(Iacs1 >149 && Iacs1<=180){wireinvs1=95}
            else if(Iacs1 >180 && Iacs1<=208){wireinvs1=120}
            else if(Iacs1 >208 && Iacs1<=228){wireinvs1=150}
            else if(Iacs1 >228 && Iacs1<=258){wireinvs1=185}
            else if(Iacs1 >258 && Iacs1<=301){wireinvs1=240}
            else if(Iacs1 >301 && Iacs1<=343){wireinvs1=300}
            else if(Iacs1 >343 && Iacs1<=406){wireinvs1=400}
            else if(Iacs1 >406 && Iacs1<=464){wireinvs1=500}
            else if(Iacs1 >464){wireinvs1=500}
                
        }
        else if(wireac == 'thws'){
            if(Iacs1<=17 && Iacs1!=0){wireinvs1=2.5 }
            else if(Iacs1 >17 && Iacs1<=23){wireinvs1=4}
            else if(Iacs1 >23 && Iacs1<=30){wireinvs1=6}
            else if(Iacs1 >30 && Iacs1<=40){wireinvs1=10}
            else if(Iacs1 >40 && Iacs1<=54){wireinvs1=16}
            else if(Iacs1 >54 && Iacs1<=70){wireinvs1=25}
            else if(Iacs1 >70 && Iacs1<=86){wireinvs1=35}
            else if(Iacs1 >86 && Iacs1<=103){wireinvs1=50}
            else if(Iacs1 >103 && Iacs1<=130){wireinvs1=70}
            else if(Iacs1 >130 && Iacs1<=156){wireinvs1=95}
            else if(Iacs1 >156 && Iacs1<=179){wireinvs1=120}
            else if(Iacs1 >179 && Iacs1<=196){wireinvs1=150}
            else if(Iacs1 >196 && Iacs1<=222){wireinvs1=185}
            else if(Iacs1 >222 && Iacs1<=258){wireinvs1=240}
            else if(Iacs1 >258 && Iacs1<=295){wireinvs1=300}
            else if(Iacs1 >295){wireinvs1=300}
                
        }
            
        else if(wireac == 'cv'){
            if(Iacs1<=25 && Iacs1!=0){wireinvs1=2.5}
            else if(Iacs1 >25 && Iacs1<=34){wireinvs1=4}
            else if(Iacs1 >34 && Iacs1<=44){wireinvs1=6}
            else if(Iacs1 >44 && Iacs1<=60){wireinvs1=10}
            else if(Iacs1 >60 && Iacs1<=80){wireinvs1=16}
            else if(Iacs1 >80 && Iacs1<=106){wireinvs1=25}
            else if(Iacs1 >106 && Iacs1<=131){wireinvs1=35}
            else if(Iacs1 >131 && Iacs1<=159){wireinvs1=50}
            else if(Iacs1 >159 && Iacs1<=202){wireinvs1=70}
            else if(Iacs1 >202 && Iacs1<=245){wireinvs1=95}
            else if(Iacs1 >245 && Iacs1<=284){wireinvs1=120}
            else if(Iacs1 >284 && Iacs1<=311){wireinvs1=150}
            else if(Iacs1 >311 && Iacs1<=349){wireinvs1=185}
            else if(Iacs1 >349 && Iacs1<=410){wireinvs1=240}
            else if(Iacs1 >410 && Iacs1<=468){wireinvs1=300}
            else if(Iacs1 >468 && Iacs1<=531){wireinvs1=400}
            else if(Iacs1 >531 && Iacs1<=606){wireinvs1=500}
            else if(Iacs1 >606){wireinvs1=500}
                
        }
    
        else if(wireac == 'cvs'){
            if(Iacs1<=24 && Iacs1!=0){wireinvs1=2.5}
            else if(Iacs1 >27 && Iacs1<=32){wireinvs1=4}
            else if(Iacs1 >36 && Iacs1<=40){wireinvs1=6}
            else if(Iacs1 >46 && Iacs1<=55){wireinvs1=10}
            else if(Iacs1 >63 && Iacs1<=73){wireinvs1=16}
            else if(Iacs1 >83 && Iacs1<=96){wireinvs1=25}
            else if(Iacs1 >108 && Iacs1<=116){wireinvs1=35}
            else if(Iacs1 >133 && Iacs1<=140){wireinvs1=50}
            else if(Iacs1 >159 && Iacs1<=177){wireinvs1=70}
            else if(Iacs1 >201 && Iacs1<=212){wireinvs1=95}
            else if(Iacs1 >241 && Iacs1<=244){wireinvs1=120}
            else if(Iacs1 >278 && Iacs1<=273){wireinvs1=150}
            else if(Iacs1 >304 && Iacs1<=309){wireinvs1=185}
            else if(Iacs1 >349 && Iacs1<=362){wireinvs1=240}
            else if(Iacs1 >418 && Iacs1<=414){wireinvs1=300}
            else if(Iacs1 >414){wireinvs1=300}
                
                
        }
   
        $('#wire_invs').val(wireinvs1)
})}) 
    $(document).ready(function() {
        $('.form-control').click(function(){
            wireacs2=$('#wire_ac_select').val()
        if(wireac == 'thw'){
          
            if(wireacs2==0){vd=0, areawireac=0}
            else if(wireacs2==2.5){vd=0.015}//, areawireac=11.94
            else if(wireacs2==4){vd=0.095}//, areawireac=15.21
            else if(wireacs2==6){vd=0.0064}//, areawireac=19.63
            else if(wireacs2==10){vd=0.0038}//, areawireac=32.17
            else if(wireacs2==16){vd=0.0024}
            else if(wireacs2==25){vd=0.00151}
            else if(wireacs2==35){vd=0.00113}
            else if(wireacs2==50){vd=0.00085}
            else if(wireacs2==70){vd=0.00061}
            else if(wireacs2==95){vd=0.00048}
            else if(wireacs2==120){vd=0.0004}
            else if(wireacs2==150){vd=0.00035}
            else if(wireacs2==185){vd=0.00031}
            else if(wireacs2==240){vd=0.00027}
            else if(wireacs2==300){vd=0.00024}
            else if(wireacs2==400){vd=0.00022}
            else if(wireacs2==500){vd=0.0002}
}
        else if(wireac == 'thws'){
            
            if(wireacs2==0){vd=0}
            else if(wireacs2==2.5){vd=0.015}
            else if(wireacs2==4){vd=0.0095}
            else if(wireacs2==6){vd=0.0064}
            else if(wireacs2==10){vd=0.0038}
            else if(wireacs2==16){vd=0.0024}
            else if(wireacs2==25){vd=0.0015}
            else if(wireacs2==35){vd=0.0011}
            else if(wireacs2==50){vd=0.0008}
            else if(wireacs2==70){vd=0.00057}
            else if(wireacs2==95){vd=0.00043}
            else if(wireacs2==120){vd=0.00036}
            else if(wireacs2==150){vd=0.00029}
            else if(wireacs2==185){vd=0.00025}
            else if(wireacs2==240){vd=0.00021}
            else if(wireacs2==300){vd=0.00018}
        }
        
        else if(wireac == 'cv'){

            if(wireacs2==0){vd=0}
            else if(wireacs2==2.5){vd=0.016}
            else if(wireacs2==4){vd=0.01}
            else if(wireacs2==6){vd=0.0068}
            else if(wireacs2==10){vd=0.004}
            else if(wireacs2==16){vd=0.0025}
            else if(wireacs2==25){vd=0.0016}
            else if(wireacs2==35){vd=0.00117}
            else if(wireacs2==50){vd=0.00091}
            else if(wireacs2==70){vd=0.00065}
            else if(wireacs2==95){vd=0.0005}
            else if(wireacs2==120){vd=0.00042}
            else if(wireacs2==150){vd=0.00037}
            else if(wireacs2==185){vd=0.00032}
            else if(wireacs2==240){vd=0.00027}
            else if(wireacs2==300){vd=0.00024}
            else if(wireacs2==400){vd=0.00022}
            else if(wireacs2==500){vd=0.0002}
}

        else if(wireac == 'cvs'){
     
            if(wireacs2==0){vd=0}
            else if(wireacs2==2.5){vd=0.016}
            else if(wireacs2==4){vd=0.01}
            else if(wireacs2==6){vd=0.0068}
            else if(wireacs2==10){vd=0.0004}
            else if(wireacs2==16){vd=0.0025}
            else if(wireacs2==25){vd=0.0016}
            else if(wireacs2==35){vd=0.00115}
            else if(wireacs2==50){vd=0.00086}
            else if(wireacs2==70){vd=0.0006}
            else if(wireacs2==95){vd=0.00044}
            else if(wireacs2==120){vd=0.00036}
            else if(wireacs2==150){vd=0.00031}
            else if(wireacs2==185){vd=0.00025}
            else if(wireacs2==240){vd=0.00022}
            else if(wireacs2==300){vd=0.00018}
}

        
        Vdrop_acs2= vd*datain3.Iinv_acmax*$('#Inv_Mdb').val()
        Per_vdropacs2 = (100/400)*Vdrop_acs2
        Ploss_acs2 = 1.732*datain3.Iinv_acmax*Vdrop_acs2
        Per_plossacs2 = (100*Ploss_acs2/datain3.Pinv_ac)
        $('#Vdrop_ac_select').val(Vdrop_acs2.toFixed(2))
        $('#Per_vdropac_select').val(Per_vdropacs2.toFixed(2))
        $('#Ploss_ac_select').val(Ploss_acs2.toFixed(2))
        $('#Per_plossac_select').val(Per_plossacs2.toFixed(2))
})}) 
$(document).ready(function() {
    $('.form-control').keyup(function(){
        wireacs2=$('#wire_ac_select').val()
    if(wireac == 'thw'){
      
        if(wireacs2==0){vd=0, areawireac=0}
        else if(wireacs2==2.5){vd=0.015}//, areawireac=11.94
        else if(wireacs2==4){vd=0.095}//, areawireac=15.21
        else if(wireacs2==6){vd=0.0064}//, areawireac=19.63
        else if(wireacs2==10){vd=0.0038}//, areawireac=32.17
        else if(wireacs2==16){vd=0.0024}
        else if(wireacs2==25){vd=0.00151}
        else if(wireacs2==35){vd=0.00113}
        else if(wireacs2==50){vd=0.00085}
        else if(wireacs2==70){vd=0.00061}
        else if(wireacs2==95){vd=0.00048}
        else if(wireacs2==120){vd=0.0004}
        else if(wireacs2==150){vd=0.00035}
        else if(wireacs2==185){vd=0.00031}
        else if(wireacs2==240){vd=0.00027}
        else if(wireacs2==300){vd=0.00024}
        else if(wireacs2==400){vd=0.00022}
        else if(wireacs2==500){vd=0.0002}
}
    else if(wireac == 'thws'){
        
        if(wireacs2==0){vd=0}
        else if(wireacs2==2.5){vd=0.015}
        else if(wireacs2==4){vd=0.0095}
        else if(wireacs2==6){vd=0.0064}
        else if(wireacs2==10){vd=0.0038}
        else if(wireacs2==16){vd=0.0024}
        else if(wireacs2==25){vd=0.0015}
        else if(wireacs2==35){vd=0.0011}
        else if(wireacs2==50){vd=0.0008}
        else if(wireacs2==70){vd=0.00057}
        else if(wireacs2==95){vd=0.00043}
        else if(wireacs2==120){vd=0.00036}
        else if(wireacs2==150){vd=0.00029}
        else if(wireacs2==185){vd=0.00025}
        else if(wireacs2==240){vd=0.00021}
        else if(wireacs2==300){vd=0.00018}
    }
    
    else if(wireac == 'cv'){

        if(wireacs2==0){vd=0}
        else if(wireacs2==2.5){vd=0.016}
        else if(wireacs2==4){vd=0.01}
        else if(wireacs2==6){vd=0.0068}
        else if(wireacs2==10){vd=0.004}
        else if(wireacs2==16){vd=0.0025}
        else if(wireacs2==25){vd=0.0016}
        else if(wireacs2==35){vd=0.00117}
        else if(wireacs2==50){vd=0.00091}
        else if(wireacs2==70){vd=0.00065}
        else if(wireacs2==95){vd=0.0005}
        else if(wireacs2==120){vd=0.00042}
        else if(wireacs2==150){vd=0.00037}
        else if(wireacs2==185){vd=0.00032}
        else if(wireacs2==240){vd=0.00027}
        else if(wireacs2==300){vd=0.00024}
        else if(wireacs2==400){vd=0.00022}
        else if(wireacs2==500){vd=0.0002}
}

    else if(wireac == 'cvs'){
 
        if(wireacs2==0){vd=0}
        else if(wireacs2==2.5){vd=0.016}
        else if(wireacs2==4){vd=0.01}
        else if(wireacs2==6){vd=0.0068}
        else if(wireacs2==10){vd=0.0004}
        else if(wireacs2==16){vd=0.0025}
        else if(wireacs2==25){vd=0.0016}
        else if(wireacs2==35){vd=0.00115}
        else if(wireacs2==50){vd=0.00086}
        else if(wireacs2==70){vd=0.0006}
        else if(wireacs2==95){vd=0.00044}
        else if(wireacs2==120){vd=0.00036}
        else if(wireacs2==150){vd=0.00031}
        else if(wireacs2==185){vd=0.00025}
        else if(wireacs2==240){vd=0.00022}
        else if(wireacs2==300){vd=0.00018}
}

    
    Vdrop_acs2= vd*datain3.Iinv_acmax*$('#Inv_Mdb').val()
    Per_vdropacs2 = (100/400)*Vdrop_acs2
    Ploss_acs2 = 1.732*datain3.Iinv_acmax*Vdrop_acs2
    Per_plossacs2 = (100*Ploss_acs2/datain3.Pinv_ac)
    $('#Vdrop_ac_select').val(Vdrop_acs2.toFixed(2))
    $('#Per_vdropac_select').val(Per_vdropacs2.toFixed(2))
    $('#Ploss_ac_select').val(Ploss_acs2.toFixed(2))
    $('#Per_plossac_select').val(Per_plossacs2.toFixed(2))
})}) 
$(document).ready(function() {
    $('.form-control').click(function(){
            if(cbacs <= 20 && cbacs!=0){groundinvs2 =2.5}
            else if(cbacs > 20 && cbacs<= 40){groundinvs2 =4}
            else if(cbacs > 40 && cbacs<= 70){groundinvs2 =6}
            else if(cbacs > 70 && cbacs<= 100){groundinvs2 =10}
            else if(cbacs > 100 && cbacs<= 200){groundinvs2 =16}
            else if(cbacs > 200 && cbacs<= 400){groundinvs2 =25}
            else if(cbacs > 400 && cbacs<= 500){groundinvs2 =35}
            else if(cbacs > 500 && cbacs<= 800){groundinvs2 =50}
            else if(cbacs > 800 && cbacs<= 1000){groundinvs2 =70}
            else if(cbacs > 1000 && cbacs<= 1250){groundinvs2 =95}
            else if(cbacs > 1250 && cbacs<= 2000){groundinvs2 =120}
            else if(cbacs > 2000 && cbacs<= 2500){groundinvs2 =185}
            else if(cbacs > 2500 && cbacs<= 4000){groundinvs2 =240}
            else if(cbacs > 4000 && cbacs<= 6000){groundinvs2 =400}
            $('#ground_inv').val(groundinvs2) 
    })})
    $(document).ready(function() {
        $('.form-control').keyup(function(){
                if(cbacs <= 20 && cbacs!=0){groundinvs2 =2.5}
                else if(cbacs > 20 && cbacs<= 40){groundinvs2 =4}
                else if(cbacs > 40 && cbacs<= 70){groundinvs2 =6}
                else if(cbacs > 70 && cbacs<= 100){groundinvs2 =10}
                else if(cbacs > 100 && cbacs<= 200){groundinvs2 =16}
                else if(cbacs > 200 && cbacs<= 400){groundinvs2 =25}
                else if(cbacs > 400 && cbacs<= 500){groundinvs2 =35}
                else if(cbacs > 500 && cbacs<= 800){groundinvs2 =50}
                else if(cbacs > 800 && cbacs<= 1000){groundinvs2 =70}
                else if(cbacs > 1000 && cbacs<= 1250){groundinvs2 =95}
                else if(cbacs > 1250 && cbacs<= 2000){groundinvs2 =120}
                else if(cbacs > 2000 && cbacs<= 2500){groundinvs2 =185}
                else if(cbacs > 2500 && cbacs<= 4000){groundinvs2 =240}
                else if(cbacs > 4000 && cbacs<= 6000){groundinvs2 =400}
                $('#ground_inv').val(groundinvs2) 
        })})
   


            



var energy  
var eff  
$(document).ready(function() {
    $('.form-control').keyup(function(){
        eff = (((100-Per_plosspv1fs1)*datain3.Efficiency*(100-Per_plossacs2))/1000000)*0.9
        energy = (eff*Pmax1*sun)/1000
                    
})})  
$(document).ready(function() {
    $('.form-control').click(function(){
        eff = (((100-Per_plosspv1fs1)*datain3.Efficiency*(100-Per_plossacs2))/1000000)*0.9
        energy = (eff*Pmax1*sun)/1000
                    
})})    
    
var income
$(document).ready(function() {
    $('.form-control').keyup(function(){
        // ประหยัดสูงสุด เพราะไม่รู้พฤติกรรม
             
        eff = (((100-Per_plosspv1fs1)*datain3.Efficiency*(100-Per_plossacs2))/1000000)*0.9
        energy = (eff*Pmax1*sun)/1000

        income1 = 0.94*energy*$('#bath1').val()
        income2 = 0.06*energy*$('#bath2').val()
        income3 = energy*$('#bath1').val()
        income4 = energy*$('#bath2').val()
        income5 = Unit9*365*$('#bath1').val()
        income6 = (energy-(Unit9*365))*$('#bath2').val()
             
        
           // var income1 = $('#unit9').val()*$('#bath1').val()*365
            //var income2 = ($('#energy').val()-$('#unit9').val()*365)*$('#bath2').val()
           // income = income1 + income2
           // $('#income').val(income)
            
           // console.log(income1)
          //  console.log(income2)
          //  console.log(income)
    
        if(selectunit ==1){
            income = income1+income2
            }
        else if(selectunit ==2){
            Penergymax = Effal*eff*Pmax1
            Punit9max = (Unit9/7)*1000
            if(Punit9max <= 0.05*Penergymax){
                income =(0.09*income3)+(0.91*income4)
                }
            else if(Punit9max > 0.05*Penergymax && Punit9max <= 0.1*Penergymax){
                income = 0.163*income3+0.837*income4
               } 
            else if(Punit9max > 0.1*Penergymax && Punit9max <= 0.15*Penergymax){
                income = 0.23*income3+0.77*income4
               }
            else if(Punit9max > 0.15*Penergymax && Punit9max <= 0.2*Penergymax){
                income = 0.294*income3+0.705*income4
               }
            else if(Punit9max > 0.2*Penergymax && Punit9max <= 0.25*Penergymax){
                income = 0.357*income3+0.643*income4
               }
            else if(Punit9max > 0.25*Penergymax && Punit9max <= 0.3*Penergymax){
                income = 0.42*income3+0.58*income4
               }
            else if(Punit9max > 0.3*Penergymax && Punit9max <= 0.35*Penergymax){
                income = 0.48*income3+0.52*income4
               }
            else if(Punit9max > 0.35*Penergymax && Punit9max <= 0.4*Penergymax){
                income = 0.53*income3+0.469*income4
               }
            else if(Punit9max > 0.4*Penergymax && Punit9max <= 0.45*Penergymax){
                income = 0.59*income3+0.41*income4
               }
            else if(Punit9max > 0.45*Penergymax && Punit9max <= 0.5*Penergymax){
                income = 0.642*income3+0.357*income4
               }
            else if(Punit9max > 0.5*Penergymax && Punit9max <= 0.55*Penergymax){
                income = 0.693*income3+0.307*income4
               } 
            else if(Punit9max > 0.55*Penergymax && Punit9max <= 0.6*Penergymax){
                income = 0.743*income3+0.257*income4
               }
            else if(Punit9max > 0.6*Penergymax && Punit9max <= 0.65*Penergymax){
                income = 0.786*income3+0.213*income4
               }
            else if(Punit9max > 065*Penergymax && Punit9max <= 0.7*Penergymax){
                income = 0.83*income3+0.169*income4
               }
            else if(Punit9max > 0.75*Penergymax && Punit9max <= 0.8*Penergymax){
                income = 0.869*income3+0.131*income4
               }
            else if(Punit9max > 0.8*Penergymax && Punit9max <= 0.85*Penergymax){
                income = 0.907*income3+0.093*income4
               }
            else if(Punit9max > 0.85*Penergymax && Punit9max <= 0.9*Penergymax){
                income = 0.940*income3+0.06*income4
               }
            else if(Punit9max > 0.9*Penergymax && Punit9max <= 0.95*Penergymax){
                income = 0.969*income3+0.03*income4
               }
            else if(Punit9max > 0.95*Penergymax && Punit9max <= 1*Penergymax){
                income = 0.989*income3+0.01*income4
               }
            else if(Punit9max > 1*Penergymax){
                income = income3
               }
            
               

            
        }
        
    })})
    $(document).ready(function() {
        $('.form-control').click(function(){
            // ประหยัดสูงสุด เพราะไม่รู้พฤติกรรม
                 
            
            income1 = 0.94*energy*$('#bath1').val()
            income2 = 0.06*energy*$('#bath2').val()
            income3 = energy*$('#bath1').val()
            income4 = energy*$('#bath2').val()
            income5 = Unit9*365*$('#bath1').val()
            income6 = (energy-(Unit9*365))*$('#bath2').val()
                 
        
               // var income1 = $('#unit9').val()*$('#bath1').val()*365
                //var income2 = ($('#energy').val()-$('#unit9').val()*365)*$('#bath2').val()
               // income = income1 + income2
               // $('#income').val(income)
                
               // console.log(income1)
              //  console.log(income2)
              //  console.log(income)
        
            if(selectunit ==1){
                income = income1+income2
                }
            else if(selectunit ==2){
                Penergymax = Effal*eff*Pmax1
                Punit9max = (Unit9/7)*1000
                if(Punit9max <= 0.05*Penergymax){
                    income =(0.09*income3)+(0.91*income4)
                    }
                else if(Punit9max > 0.05*Penergymax && Punit9max <= 0.1*Penergymax){
                    income = 0.163*income3+0.837*income4
                   } 
                else if(Punit9max > 0.1*Penergymax && Punit9max <= 0.15*Penergymax){
                    income = 0.23*income3+0.77*income4
                   }
                else if(Punit9max > 0.15*Penergymax && Punit9max <= 0.2*Penergymax){
                    income = 0.294*income3+0.705*income4
                   }
                else if(Punit9max > 0.2*Penergymax && Punit9max <= 0.25*Penergymax){
                    income = 0.357*income3+0.643*income4
                   }
                else if(Punit9max > 0.25*Penergymax && Punit9max <= 0.3*Penergymax){
                    income = 0.42*income3+0.58*income4
                   }
                else if(Punit9max > 0.3*Penergymax && Punit9max <= 0.35*Penergymax){
                    income = 0.48*income3+0.52*income4
                   }
                else if(Punit9max > 0.35*Penergymax && Punit9max <= 0.4*Penergymax){
                    income = 0.53*income3+0.469*income4
                   }
                else if(Punit9max > 0.4*Penergymax && Punit9max <= 0.45*Penergymax){
                    income = 0.59*income3+0.41*income4
                   }
                else if(Punit9max > 0.45*Penergymax && Punit9max <= 0.5*Penergymax){
                    income = 0.642*income3+0.357*income4
                   }
                else if(Punit9max > 0.5*Penergymax && Punit9max <= 0.55*Penergymax){
                    income = 0.693*income3+0.307*income4
                   } 
                else if(Punit9max > 0.55*Penergymax && Punit9max <= 0.6*Penergymax){
                    income = 0.743*income3+0.257*income4
                   }
                else if(Punit9max > 0.6*Penergymax && Punit9max <= 0.65*Penergymax){
                    income = 0.786*income3+0.213*income4
                   }
                else if(Punit9max > 065*Penergymax && Punit9max <= 0.7*Penergymax){
                    income = 0.83*income3+0.169*income4
                   }
                else if(Punit9max > 0.75*Penergymax && Punit9max <= 0.8*Penergymax){
                    income = 0.869*income3+0.131*income4
                   }
                else if(Punit9max > 0.8*Penergymax && Punit9max <= 0.85*Penergymax){
                    income = 0.907*income3+0.093*income4
                   }
                else if(Punit9max > 0.85*Penergymax && Punit9max <= 0.9*Penergymax){
                    income = 0.940*income3+0.06*income4
                   }
                else if(Punit9max > 0.9*Penergymax && Punit9max <= 0.95*Penergymax){
                    income = 0.969*income3+0.03*income4
                   }
                else if(Punit9max > 0.95*Penergymax && Punit9max <= 1*Penergymax){
                    income = 0.989*income3+0.01*income4
                   }
                else if(Punit9max > 1*Penergymax){
                    income = income3
                   }
                
                   
    
                
            }
        })})
var years
var monthss
$(document).ready(function() {
       
    $('.form-control').keyup(function(){
        if(selectunit ==1){
            year = Math.floor(invest1/(income1+income2))
            month = invest1/(income1+income2)-Math.floor(invest1/(income1+income2))
            months = Math.round(12*month)
            if(months<12){
                years = year
                monthss = months               
            }
            else if(months>=12){
                years = year+1
                monthss = 0                
            }                
            }
        else if(selectunit ==2){
            if(energy<=Unit9*365){
                year = Math.floor(invest1/(income3+income4))
                month = invest1/(income3+income4)-Math.floor(invest1/(income3+income4))
                months = Math.round(12*month)
            if(months<12){
                years = year
                monthss = months             
            }
            else if(months>=12){
                years = year+1
                monthss = 0  
            }
            }
        else if(energy>Unit9*365){
            year = Math.floor(invest1/(income5+income6))
            month = invest1/(income5+income6)-Math.floor(invest1/(income5+income6))
            months = Math.round(12*month)
            if(months<12){
                years = year
                monthss = months               
            }
            else if(months>=12){
                years = year+1
                monthss = 0
            }
            }}
        })})
        $(document).ready(function() {
       
            $('.form-control').click(function(){
                if(selectunit ==1){
                    year = Math.floor(invest1/(income1+income2))
                    month = invest1/(income1+income2)-Math.floor(invest1/(income1+income2))
                    months = Math.round(12*month)
                    if(months<12){
                        years = year
                        monthss = months               
                    }
                    else if(months>=12){
                        years = year+1
                        monthss = 0                
                    }                
                    }
                else if(selectunit ==2){
                    if(energy<=Unit9*365){
                        year = Math.floor(invest1/(income3+income4))
                        month = invest1/(income3+income4)-Math.floor(invest1/(income3+income4))
                        months = Math.round(12*month)
                    if(months<12){
                        years = year
                        monthss = months             
                    }
                    else if(months>=12){
                        years = year+1
                        monthss = 0  
                    }
                    }
                else if(energy>Unit9*365){
                    year = Math.floor(invest1/(income5+income6))
                    month = invest1/(income5+income6)-Math.floor(invest1/(income5+income6))
                    months = Math.round(12*month)
                    if(months<12){
                        years = year
                        monthss = months               
                    }
                    else if(months>=12){
                        years = year+1
                        monthss = 0
                    }
                    }}
                })})
//$(document).ready(function() {
  //  $('.form-control').keyup(function(){
    //    $('#energy').val(($('#Hdts').val()*Pmax1*0.8)/1000)
    //})})  
//$(document).ready(function() {
  //  $('.form-control').click(function(){
    //    $('#energy').val(($('#Hdts').val()*Pmax1*0.8)/1000)
    //})})    
    
    
  
  


//$(document).ready(function() {
  
//    $('[name="PV_module"]').change(function(){
//        data = (JSON.parse($(this).val()));
        //console.log($(this));
//parseFloat
        //alert(cable[data.Pmax]);
//    })
    
//  });

  //JSON.parse
  // test



$(document).ready(function() {
   
    $('.form-control').mouseup(function(){
    
        Province = $('#Province').val();
    
    if (Province == 1) {
        $('#PSH').val(4.79);
    
    }else if (Province == 2) {
        $('#PSH').val(4.84);
    }else if (Province == 3) {
        $('#PSH').val(4.90);
    }else if (Province == 4) {
        $('#PSH').val(4.88);
    }else if (Province == 5) {
        $('#PSH').val(4.94);
    }else if (Province == 6) {
        $('#PSH').val(4.92);
    }else if (Province == 7) {
        $('#PSH').val(4.94);
    }else if (Province == 8) {
        $('#PSH').val(4.94);
    }else if (Province == 9) {
        $('#PSH').val(5.05);
    }else if (Province == 10) {
        $('#PSH').val(5.05);
    }else if (Province == 11) {
        $('#PSH').val(4.91);
    }else if (Province == 12) {
        $('#PSH').val(4.90);
    }else if (Province == 13) {
        $('#PSH').val(4.88);
    }else if (Province == 14) {
        $('#PSH').val(5.03);
    }else if (Province == 15) {
        $('#PSH').val(4.65);
    }else if (Province == 16) {
        $('#PSH').val(5.03);
    }else if (Province == 17) {
        $('#PSH').val(5.05);
    }else if (Province == 18) {
        $('#PSH').val(4.94);
    }else if (Province == 19) {
        $('#PSH').val(5.18);
    }else if (Province == 20) {
        $('#PSH').val(5.23);
    }else if (Province == 21) {
        $('#PSH').val(4.86);
    }else if (Province == 22) {
        $('#PSH').val(4.96);
    }else if (Province == 23) {
        $('#PSH').val(5.19);
    }else if (Province == 24) {
        $('#PSH').val(5.18);
    }else if (Province == 25) {
        $('#PSH').val(4.91);
    }else if (Province == 26) {
        $('#PSH').val(4.91);
    }else if (Province == 27) {
        $('#PSH').val(4.91);
    }else if (Province == 28) {
        $('#PSH').val(5.06);
    }else if (Province == 29) {
        $('#PSH').val(5.18);
    }else if (Province == 30) {
        $('#PSH').val(4.79);
    }else if (Province == 31) {
        $('#PSH').val(5.19);
    }else if (Province == 32) {
        $('#PSH').val(5.01);
    } else if (Province == 33) {
        $('#PSH').val(5.14);
    }else if (Province == 34) {
        $('#PSH').val(4.76);
    }else if (Province == 35) {
        $('#PSH').val(5.14);
    }else if (Province == 36) {
        $('#PSH').val(5.19);
    }else if (Province == 37) {
        $('#PSH').val(5.19);
    }else if (Province == 38) {
        $('#PSH').val(5.18);
    }else if (Province == 39) {
        $('#PSH').val(5.05);
    }else if (Province == 40) {
        $('#PSH').val(4.89);
    }else if (Province == 41) {
        $('#PSH').val(5.19);
    }else if (Province == 42) {
        $('#PSH').val(5.14);
    }else if (Province == 43) {
        $('#PSH').val(4.66);
    }else if (Province == 44) {
        $('#PSH').val(5.14);
    }else if (Province == 45) {
        $('#PSH').val(5.19);
    }else if (Province == 46) {
        $('#PSH').val(4.93);
    }else if (Province == 47) {
        $('#PSH').val(4.89);
    }else if (Province == 48) {
        $('#PSH').val(5.01);
    }else if (Province == 49) {
        $('#PSH').val(5.19);
    }else if (Province == 50) {
        $('#PSH').val(4.76);
    }else if (Province == 51) {
        $('#PSH').val(4.79);
    }else if (Province == 52) {
        $('#PSH').val(4.95);
    }else if (Province == 53) {
        $('#PSH').val(4.95);
    }else if (Province == 54) {
        $('#PSH').val(4.79);
    }else if (Province == 55) {
        $('#PSH').val(5.01);
    }else if (Province == 56) {
        $('#PSH').val(5.23);
    }else if (Province == 57) {
        $('#PSH').val(4.95);
    }else if (Province == 58) {
        $('#PSH').val(4.89);
    }else if (Province == 59) {
        $('#PSH').val(4.74);
    }else if (Province == 60) {
        $('#PSH').val(4.59);
    }else if (Province == 61) {
        $('#PSH').val(4.61);
    }else if (Province == 62) {
        $('#PSH').val(4.66);
    }else if (Province == 63) {
        $('#PSH').val(5.19);
    }else if (Province == 64) {
        $('#PSH').val(4.64);
    }else if (Province == 65) {
        $('#PSH').val(5.17);
    }else if (Province == 66) {
        $('#PSH').val(4.75);
    }else if (Province == 67) {
        $('#PSH').val(4.90);
    }else if (Province == 68) {
        $('#PSH').val(4.90);
    }else if (Province == 69) {
        $('#PSH').val(5.19);
    }else if (Province == 70) {
        $('#PSH').val(4.75);
    }else if (Province == 71) {
        $('#PSH').val(5.43);
    }else if (Province == 72) {
        $('#PSH').val(5.02);
    }else if (Province == 73) {
        $('#PSH').val(5.32);
    }else if (Province == 74) {
        $('#PSH').val(4.75);
    }else if (Province == 75) {
        $('#PSH').val(4.75);
    }else if (Province == 76) {
        $('#PSH').val(4.90);
    }
})})