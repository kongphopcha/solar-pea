

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
            sun=Math.round(PSH*365*Effal)
            $('#Hdts').val(commaSeparateNumber(sun))
            
        })})  
    $(document).ready(function() {
    
        $('.form-control').click(function(){
            PSH = parseFloat($('#PSH').val());
            sun=Math.round(PSH*365*Effal)   
            $('#Hdts').val(commaSeparateNumber(sun))
                
        })}) 
    
    
var data;
var datain;
var dataload;
var datainfo
var Pmaximum1;
var Pmaximum2;
$(document).ready(function() {
  
    $('.form-control').keyup(function(){
        if($('#Meter').val() == '1 เฟส'){Meter =0}
        else if($('#Meter').val() == '5(15), 1 เฟส'){Meter=15}
        else if($('#Meter').val() == '15(45), 1 เฟส'){Meter=45}
        else if($('#Meter').val() == '30(100), 1 เฟส'){Meter=100}
        
        Pmaximum1 = 0.8*220*Meter
      
    
    })   
});
$(document).ready(function() {
  
    $('.form-control').click(function(){
        if($('#Meter').val() == '1 เฟส'){Meter =0}
        else if($('#Meter').val() == '5(15), 1 เฟส'){Meter=15}
        else if($('#Meter').val() == '15(45), 1 เฟส'){Meter=45}
        else if($('#Meter').val() == '30(100), 1 เฟส'){Meter=100}
        
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
        datain = (JSON.parse($(this).val()));
      
       
    })
});    
$(document).ready(function() {
    $('#users').change(function(){
        dataload = (JSON.parse($(this).val()));
    })
});   

$(document).ready(function() {
    $('#nameproject9').change(function(){
        datainfo = (JSON.parse($(this).val()));
    })
});  

$(document).ready(function() {
    $('#nameproject9').change(function(){
        datainfouser = (JSON.parse(datainfo.user))
        datainfopvmodule = (JSON.parse(datainfo.PV_module))
        datainfoinv = (JSON.parse(datainfo.inv))
        
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
        
        if(time == 'หน่วยการใช้ไฟ 9.00-16.00 น.'){Unit9 = parseFloat($('#unit9').val())}
        else if(time == 'หน่วยการใช้ไฟต่อเดือน'){
            Unit9 = ((dataload.nine*peak)+(dataload.ten*peak)+(dataload.eleven*peak)+(dataload.twelve*peak)+(dataload.thirteen*peak)+(dataload.fourteen*peak)+(dataload.fifteen*peak)+(dataload.sixteen*peak))*7
            
                
            }
           
        
    })})
    $(document).ready(function() {
    
        $('.form-control').click(function(){
            time = $('#timeunit').val();
            unit_day = parseFloat($('#unit9').val())/31
            peak = unit_day/(dataload.one+dataload.two+dataload.three+dataload.four+dataload.five+dataload.six+dataload.seven+dataload.eight+dataload.nine+dataload.ten+dataload.eleven+dataload.twelve+dataload.thirteen+dataload.fourteen+dataload.fifteen+dataload.sixteen+dataload.seventeen+dataload.eighteen+dataload.nineteen+dataload.twenty+dataload.twenty_one+dataload.twenty_two+dataload.twenty_three+dataload.twenty_four)
            
            if(time == 'หน่วยการใช้ไฟ 9.00-16.00 น.'){Unit9 = parseFloat($('#unit9').val())}
            else if(time == 'หน่วยการใช้ไฟต่อเดือน'){
                Unit9 = ((dataload.nine*peak)+(dataload.ten*peak)+(dataload.eleven*peak)+(dataload.twelve*peak)+(dataload.thirteen*peak)+(dataload.fourteen*peak)+(dataload.fifteen*peak)+(dataload.sixteen*peak))*7
                
                    
                }
               
            
        })})
    


        var Pmax_pv
        $(document).ready(function() {
            
            $('.form-control').keyup(function(){
                Area = parseFloat($('#Area').val());
                
                Pmaximum2 = ((0.8*Area*data.Pmax)/(data.Length*data.width)) 
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
                    
                    Pmaximum2 = ((0.8*Area*data.Pmax)/(data.Length*data.width))  
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
                       
                        
                        if(Pmaximum1==0 && Pmaximum2==0 && selectunit==2){No_Pvs = Math.floor($('#Pmaximum').val()/data.Pmax);}
                        else{No_Pvs = Math.floor(Pmax_pv/data.Pmax);}
                        $('[name="No_Pvs"]').val(commaSeparateNumber(No_Pvs));
                        
                        
                    })
                });
                $(document).ready(function() {
                    $('.form-control').click(function(){
                       
                        
                        if(Pmaximum1==0 && Pmaximum2==0 && selectunit==2){No_Pvs = Math.floor($('#Pmaximum').val()/data.Pmax);}
                        else{No_Pvs = Math.floor(Pmax_pv/data.Pmax);}
                        $('[name="No_Pvs"]').val(commaSeparateNumber(No_Pvs));
                        
                        
                    })
                });
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
var Vstring_min

var Vcell_min

var Tem_max
var Tem_max2
//$(document).ready(function() {
  //  $('.form-control').keyup(function(){
    //    $('#dc_to_ac').val(Pmaximum/datain.Pinv_ac*Numberinv);
   // })})
$(document).ready(function() {
    $('.form-control').keyup(function(){
        Numberinv =$('#numberinv').val();
        
      
        //var Pvs_string=Math.round(No_Pvs/Max_strings);
        Tem_min=$('#Tem_min').val();
        Tem_max=$('#Tem_max').val();
        Tem_max2=$('#Tem_max2').val();
        Pv_stringmin = Math.floor((datain.MPP_Voltage_range_min+100)/data.Vmp);
        Vcell_min=data.Vmp*[1+(data.Temperature_Coefficient_of_Pmax/100)*(Tem_max-25)];
        Vstring_min =(Math.floor(Pvs1/string_real))*Vcell_min
        
        //Max_strings = Numberinv*String_array*datain.Number_of_independent_MPP_inputs
        Voc_maxpv = data.Voc*[1+(data.Temperature_Coefficient_of_Voc/100)*(Tem_min-25)];
        Pv_string = Math.floor((datain.MPP_Voltage_range_max)/data.Vmp);
        
        Voc_maxstring = Voc_maxpv*Pv_string
        
        
        
        //var No_min = Math.ceil(datain.Vinv_dcmin/Voc_max);
       // var No_max = Math.floor(datain.Vinv_dcmax/Vcell_min);
        //var Vocmax_string = Voc_max*Pvs_string;

        
       // if(String_array <= datain.Strings_per_MPP_input){String_array1 = String_array}
       // else if(String_array > datain.Strings_per_MPP_input){String_array1 = datain.Strings_per_MPP_input}
        
        $('#dc_to_ac').val((No_Pvs*data.Pmax/(datain.Pinv_ac*Numberinv)).toFixed(2));
        if (type == 'บ้านอยู่อาศัย' && Voc_maxstring < 600) {
                    
            Pv_string1=Pv_string
            
        } else if (type == 'บ้านอยู่อาศัย' && Voc_maxstring >=600) {
            Pv_string1 = Math.floor(600/Voc_maxpv)
            
        } else if (type == 'ไม่ใช่บ้านอยู่อาศัย' && Voc_maxstring <1000) {
            Pv_string1=Pv_string
            
        } else if (type == 'ไม่ใช่บ้านอยู่อาศัย' && Voc_maxstring >= 1000) {
            Pv_string1 = Math.floor(1000/Voc_maxpv)
           
        }
               
        
        })})  
        $(document).ready(function() {
            $('.form-control').click(function(){
                Numberinv =$('#numberinv').val();
                
               
                //var Pvs_string=Math.round(No_Pvs/Max_strings);
                Tem_min=$('#Tem_min').val();
                Tem_max=$('#Tem_max').val();
                Vcell_min=data.Vmp*[1+(data.Temperature_Coefficient_of_Pmax/100)*(Tem_max-25)];
                Vstring_min =(Math.floor(Pvs1/string_real))*Vcell_min
        
                //Max_strings = Numberinv*String_array*datain.Number_of_independent_MPP_inputs
                Voc_maxpv = data.Voc*[1+(data.Temperature_Coefficient_of_Voc/100)*(Tem_min-25)];
                Pv_string = Math.floor((datain.MPP_Voltage_range_max)/data.Vmp);
                Pv_stringmin = Math.floor((datain.MPP_Voltage_range_min+100)/data.Vmp);
                Voc_maxstring = Voc_maxpv*Pv_string
                
                
                
                //var No_min = Math.ceil(datain.Vinv_dcmin/Voc_max);
               // var No_max = Math.floor(datain.Vinv_dcmax/Vcell_min);
                //var Vocmax_string = Voc_max*Pvs_string;
        
                
               // if(String_array <= datain.Strings_per_MPP_input){String_array1 = String_array}
               // else if(String_array > datain.Strings_per_MPP_input){String_array1 = datain.Strings_per_MPP_input}
                
                $('#dc_to_ac').val((No_Pvs*data.Pmax/(datain.Pinv_ac*Numberinv)).toFixed(2));
                if (type == 'บ้านอยู่อาศัย' && Voc_maxstring < 600) {
                            
                    Pv_string1=Pv_string
                    
                } else if (type == 'บ้านอยู่อาศัย' && Voc_maxstring >=600) {
                    Pv_string1 = Math.floor(600/Voc_maxpv)
                    
                } else if (type == 'ไม่ใช่บ้านอยู่อาศัย' && Voc_maxstring <1000) {
                    Pv_string1=Pv_string
                    
                } else if (type == 'ไม่ใช่บ้านอยู่อาศัย' && Voc_maxstring >= 1000) {
                    Pv_string1 = Math.floor(1000/Voc_maxpv)
                   
                }
                       
                
                })})             
                var String_array;
                $(document).ready(function() {
                    $('.form-control').keyup(function(){
                        String_array = Math.floor(datain.Iinv_dcmax/data.Isc)
                       
                    })
                });
                $(document).ready(function() {
                    $('.form-control').click(function(){
                        String_array = Math.floor(datain.Iinv_dcmax/data.Isc)
                        
                    })
                });
                
                
                       
                var type
                $(document).ready(function() {
                    $('.form-control').keyup(function(){
                        type=$('#type').val()
                })})
                $(document).ready(function() {
                    $('.form-control').click(function(){
                        type=$('#type').val()    
                })})
                    
                       
                        
                $(document).ready(function() {
                    $('.form-control').keyup(function(){
                    
                        
                        Max_stringss = Math.round((datain.Pinv_dc*Numberinv)/(0.8*Pv_stringmin*data.Pmax))
                        $('#input_inv').val(datain.Number_of_independent_MPP_inputs);
                        $('#string_input').val(String_array);
                        $('#PV_stringmin').val(Pv_stringmin);
                        $('#PV_string').val(Pv_string1);
                        
                
                        if(Max_stringss > String_array*datain.Number_of_independent_MPP_inputs*Numberinv){
                            Max_strings =  String_array*datain.Number_of_independent_MPP_inputs*Numberinv
                        }
                        else if(Max_stringss <= String_array*datain.Number_of_independent_MPP_inputs*Numberinv){
                            Max_strings =Max_stringss
                        }
                
                       
                })})
                $(document).ready(function() {
                    $('.form-control').click(function(){
                    
                        
                        Max_stringss = Math.round((datain.Pinv_dc*Numberinv)/(0.8*Pv_stringmin*data.Pmax))
                        
                        $('#input_inv').val(datain.Number_of_independent_MPP_inputs);
                        $('#string_input').val(String_array);
                        $('#PV_stringmin').val(Pv_stringmin);
                        $('#PV_string').val(Pv_string1);
                
                        if(Max_stringss > String_array*datain.Number_of_independent_MPP_inputs*Numberinv){
                            Max_strings =  String_array*datain.Number_of_independent_MPP_inputs*Numberinv
                        }
                        else if(Max_stringss <= String_array*datain.Number_of_independent_MPP_inputs*Numberinv){
                            Max_strings =Max_stringss
                        }
                
                       
                })})
                $(document).ready(function() {
                    $('.form-control').keyup(function(){
                        Min_stringss = Math.round((datain.Pinv_dc*Numberinv)/(1.1*Pv_string1*data.Pmax))
                        if(Min_stringss != 0 ){
                            Min_strings =  Min_stringss
                        }
                        else if(Min_stringss == 0){
                            Min_strings = 1
                        }
                    })})
                    $(document).ready(function() {
                        $('.form-control').click(function(){
                            Min_stringss = Math.round((datain.Pinv_dc*Numberinv)/(1.1*Pv_string1*data.Pmax))
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
                        pv_suggestmax = Math.round((datain.Pinv_dc*Numberinv)/(0.8*data.Pmax))
                        pv_suggestmin = Math.round((datain.Pinv_dc*Numberinv)/(1.1*data.Pmax))
                    })})
                $(document).ready(function() {
                    $('.form-control').click(function(){
                        pv_suggestmax = Math.round((datain.Pinv_dc*Numberinv)/(0.8*data.Pmax))
                        pv_suggestmin = Math.round((datain.Pinv_dc*Numberinv)/(1.1*data.Pmax))
                })})
                var pv_suggestmin1
                var pv_suggestmax1
                $(document).ready(function() {
                    $('.form-control').keyup(function(){
                        if(pv_suggestmin <= Min_strings*(Pv_stringmin)){
                            if(Min_strings*(Pv_stringmin)<=No_Pvs){pv_suggestmin1 = Min_strings*(Pv_stringmin)}
                            else{pv_suggestmin1 = No_Pvs}}
                        else if(pv_suggestmin > Min_strings*(Pv_stringmin) && pv_suggestmin <= Max_strings*Pv_string1){
                           if(pv_suggestmin<=No_Pvs){pv_suggestmin1 = pv_suggestmin}
                           else{pv_suggestmin1 = No_Pvs}}
                          
                        else if(pv_suggestmin > Max_strings*Pv_string1){
                           if(Max_strings*Pv_string1<=No_Pvs){pv_suggestmin1 = Max_strings*Pv_string1}
                           else{pv_suggestmin1 = No_Pvs}}

                })})
                $(document).ready(function() {
                   $('.form-control').click(function(){
                       if(pv_suggestmin <= Min_strings*(Pv_stringmin)){
                           if(Min_strings*(Pv_stringmin)<=No_Pvs){pv_suggestmin1 = Min_strings*(Pv_stringmin)}
                           else{pv_suggestmin1 = No_Pvs}}
                       else if(pv_suggestmin > Min_strings*(Pv_stringmin) && pv_suggestmin <= Max_strings*Pv_string1){
                          if(pv_suggestmin<=No_Pvs){pv_suggestmin1 = pv_suggestmin}
                          else{pv_suggestmin1 = No_Pvs}}
                         
                       else if(pv_suggestmin > Max_strings*Pv_string1){
                          if(Max_strings*Pv_string1<=No_Pvs){pv_suggestmin1 = Max_strings*Pv_string1}
                          else{pv_suggestmin1 = No_Pvs}}

               })}) 
                $(document).ready(function() {
                    $('.form-control').keyup(function(){
                        if(pv_suggestmax <= Min_strings*(Pv_stringmin)){
                            if(Min_strings*(Pv_stringmin)>=No_Pvs){pv_suggestmax1 = Min_strings*(Pv_stringmin)}
                            else{pv_suggestmax1=No_Pvs}
                           }
                        else if(pv_suggestmax > Min_strings*(Pv_stringmin) && pv_suggestmax <= Max_strings*Pv_string1){
                           if(pv_suggestmax>=No_Pvs){pv_suggestmax1 = pv_suggestmax}
                           else{pv_suggestmax1=No_Pvs} 
                          }
                        else if(pv_suggestmax > Max_strings*Pv_string1){
                           if(Max_strings*Pv_string1>=No_Pvs){pv_suggestmax1 = Max_strings*Pv_string1}
                           else{pv_suggestmax1=No_Pvs} 
                          }
                       
                })})    
                $(document).ready(function() {
                   $('.form-control').click(function(){
                       if(pv_suggestmax <= Min_strings*(Pv_stringmin)){
                           if(Min_strings*(Pv_stringmin)>=No_Pvs){pv_suggestmax1 = Min_strings*(Pv_stringmin)}
                           else{pv_suggestmax1=No_Pvs}
                          }
                       else if(pv_suggestmax > Min_strings*(Pv_stringmin) && pv_suggestmax <= Max_strings*Pv_string1){
                          if(pv_suggestmax>=No_Pvs){pv_suggestmax1 = pv_suggestmax}
                          else{pv_suggestmax1=No_Pvs} 
                         }
                       else if(pv_suggestmax > Max_strings*Pv_string1){
                          if(Max_strings*Pv_string1>=No_Pvs){pv_suggestmax1 = Max_strings*Pv_string1}
                          else{pv_suggestmax1=No_Pvs} 
                         }
                      
               })})     
                      
                function process(){ 
                    $('#fuse0').html('FUSE : '+fuse0+''+' (A)'+' ขึ้นไป '+ fuse09)
                    $('#cbdco').html('CB DC : '+cbdc+''+' (AT)'+' ขึ้นไป')
                    $('#cbaco').html('CB INV. : '+cbac+''+' (AT)'+' ขึ้นไป')
                    $('#cbmdbo').html('CB MDB : '+cbact+''+' (AT)'+' ขึ้นไป')
                
      
                }




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


function process9(){
    if(datainfo.pvperstring/(Math.floor(datainfo.pvperstring)) == 1){
        pvperstring=datainfo.pvperstring+' (แผง) '
       
    }
    else{
        pvperstring=Math.floor(datainfo.pvperstring)+' - '+(Math.floor(datainfo.pvperstring)+1)+' (แผง) '
    }
    console.log(datainfo.pvperstring)
    $('#Description9').html(datainfo.des)
    $('#type9').html(datainfo.met)
    $('#users9').html(datainfouser.description)
    $('#timeunit9').html(datainfo.time_use + ' : ' + datainfo.unit + ' (หน่วย)')
    $('#bath19').html(datainfo.buy + ' (บาท) ')
    $('#bath29').html(datainfo.sale+ ' (บาท) ')
    $('#Tem_min9').html(datainfo.tem_min+ ' (°C) ')
    $('#Tem_max9').html(datainfo.tem_max+ ' (°C) ')
    $('#Tem_max99').html(datainfo.tem_max2+ ' (°C) ')
    $('#Province9').html(datainfo.province)
    $('#PSH9').html(datainfo.psh+ ' (ชั่วโมง) ')
    $('#Azimuth9').html(datainfo.azimuth+ ' (°) ')
    $('#Altitute9').html(datainfo.altitute+ ' (°) ')
    $('#Hdts9').html(datainfo.hdts+ ' (kWh/m^2/year) ')
    $('#PV_module9').html(datainfopvmodule.PV_module)
    $('#Pvs19').html(datainfo.No_Pvs+ ' (แผง) ')
    $('#Meter9').html(datainfo.meter)
    $('#Area9').html(datainfo.area+ ' (m^2) ')
    $('#inverter9').html(datainfoinv.Inverter)
    $('#numberinv9').html(datainfo.num_inv+ ' (เครื่อง) ')
    $('#string_real').html(datainfo.string+ ' (สตริง) ')
    $('#pv_string').html(pvperstring)
    $('#string_input').html(datainfo.string_input+ ' (สตริง) ')
    $('#minpvstring').html(datainfo.PV_Stringmin+ ' (แผง) ')
    $('#maxpvstring').html(datainfo.PV_String+ ' (แผง) ')
    $('#pmaxdc9').html(datainfo.Pmax_dc+ ' (W) ')
    $('#invest9').html(datainfo.invest10+ ' (บาท) ')
    $('#energy99').html(datainfo.energy10+ ' (หน่วย/ปี) ')
    $('#income9').html(datainfo.income10+ ' (บาท/ปี) ')
    $('#timegood9').html(datainfo.year10 + ' (ปี) ' + datainfo.month10+' (เดือน) ')

    $('#metstring').html(datainfo.how_wdc)
    $('#longstring').html(datainfo.distance_dc+ ' (m) ')
    $('#fuse9').html(datainfo.fuse+ ' (A) ')
    $('#wirestring').html(datainfo.pv1f_string+ ' (sq.mm.) ')
    $('#vdropstring9').html(datainfo.vdroppv+ ' (V) ')
    $('#pervdropstring9').html(datainfo.pervdroppv+ ' (%) ')
    $('#plossstring9').html(datainfo.plosspv+ ' (W) ')
    $('#perplossstring9').html(datainfo.perplosspv+ ' (%) ')
    $('#cbdcarray').html(datainfo.cbdc+ ' (AT) ')
    $('#wirearray').html(datainfo.pv1f_array+ ' (sq.mm.) ')
    $('#groundarray1').html(datainfo.groundpv1+ ' (sq.mm.) ')
    $('#groundarray2').html(datainfo.groundpv2+ ' (sq.mm.) ')
    $('#typewireinverter').html(datainfo.type_wac)
    $('#metinverter').html(datainfo.how_wac)
    $('#longinverter').html(datainfo.distance_ac+ ' (m) ')
    $('#cbinverter').html(datainfo.cbac+ ' (AT) ')
    $('#wireinverter').html(datainfo.wireac+ ' (sq.mm.) ')
    $('#groundinverter').html(datainfo.ground_inv+ ' (sq.mm.) ')
    $('#vdroparray9').html(datainfo.vdropac+ ' (V) ')
    $('#pervdroparray9').html(datainfo.pervdropac+ ' (%) ')
    $('#plossarray9').html(datainfo.plossac+ ' (W) ')
    $('#perplossarray9').html(datainfo.perplossac+ ' (%) ')
    $('#typewiremdb').html(datainfo.type_wmdb)
    $('#metmdb').html(datainfo.how_wacsolar)
    $('#longmdb').html(datainfo.distance_acsolar+ ' (m) ')
    $('#cbmdb').html(datainfo.cb_mdb+ ' (AT) ')
    $('#wiremdb').html(datainfo.wiremdb+ ' (sq.mm.) ')
    $('#groundmdb').html(datainfo.ground_mdb+ ' (sq.mm.) ')
    $('#vdropmdb9').html(datainfo.vdropmdb+ ' (V) ')
    $('#pervdropmdb9').html(datainfo.pervdropmdb+ ' (%) ')
    $('#plossmdb9').html(datainfo.plossmdb+ ' (W) ')
    $('#perplossmdb9').html(datainfo.perplossmdb+ ' (%) ')
    
    $('#image1').html(datainfopvmodule.PV_module+' : '+ datainfo.No_Pvs+ ' (แผง) ')
    $('#image2').html('แผงต่อสตริง : '+pvperstring)
    $('#image3').html('สตริงสูงสุดต่ออินพุต : '+ datainfo.string_input+ ' (สตริง) ')
    $('#image4').html('สตริงทั้งหมด : '+ datainfo.string+ ' (สตริง) ')
    $('#imgground1').html('สายดินที่โครงโลหะ : '+datainfo.groundpv1+ ' (sq.mm.) ')
    $('#imgground2').html('สายต่อหลักดิน : '+datainfo.groundpv2+ ' (sq.mm.) ')
    $('#image5').html('PV1-F : '+datainfo.pv1f_string+ ' (sq.mm.), '+datainfo.distance_dc+ ' (m) ')
    $('#image6').html(datainfo.how_wdc)
    $('#image7').html('FUSE: '+datainfo.fuse+ ' (A)'+', CB: '+datainfo.cbac+ ' (AT) ')
    $('#image8').html('PV1-F : '+datainfo.pv1f_array+ ' (sq.mm.)')
    $('#image9').html('จำนวน : '+datainfo.num_inv+ ' (เครื่อง) ')
    $('#image10').html('อินพุต : '+datainfoinv.Number_of_independent_MPP_inputs)
    $('#image11').html(datainfoinv.Inverter)
    $('#imgground3').html('สายดิน = '+datainfo.ground_inv+ ' (sq.mm.) ')
    $('#image12').html(datainfo.wireac+ ' (sq.mm.), '+datainfo.distance_ac+ ' (m), '+datainfo.how_wac)
    $('#image13').html(datainfo.type_wac)
    $('#image14').html('CB : '+datainfo.cbac+ ' (AT), '+'CB : '+datainfo.cb_mdb+ ' (AT) ')
    $('#imgground4').html('สายดิน = '+datainfo.ground_mdb+ ' (sq.mm.) ')
    $('#image15').html(datainfo.wiremdb+ ' (sq.mm.), '+datainfo.distance_acsolar+ ' (m), '+datainfo.how_wacsolar)
    $('#image16').html(datainfo.type_wmdb)
    
}

function process1(){
    $('#Pmax_dc').val(commaSeparateNumber(Math.round(Pmax1)))
    $('#invest10').val(commaSeparateNumber(invest1))
    $('#energy10').val(commaSeparateNumber(Math.round(energy)))
    $('#income10').val(commaSeparateNumber(Math.round(income)))
    $('#year10').val(years)
    $('#month10').val(monthss)

}



$(document).ready(function() {
    $('.form-control').keyup(function(){
        dc_ac2=(Pmax1/(datain.Pinv_ac*Numberinv)).toFixed(2)
        $('#dc_to_ac2').val(dc_ac2)
})})
$(document).ready(function() {
    $('.form-control').click(function(){
        dc_ac2=(Pmax1/(datain.Pinv_ac*Numberinv)).toFixed(2)
        $('#dc_to_ac2').val(dc_ac2)
})})




var fuse0
// เลือก cbdc    
$(document).ready(function() {
    $('.form-control').keyup(function(){    
        fu0 = 1.25*data.Isc
        if(fu0 <= 1){fuse0 =1}
        else if(fu0 > 1 && fu0 <= 2){fuse0 =2}
        else if(fu0 > 2 && fu0 <= 3){fuse0 =3}
        else if(fu0 > 3 && fu0 <= 4){fuse0 =4}
        else if(fu0 > 4 && fu0 <= 5){fuse0 =5}
        else if(fu0 > 5 && fu0 <= 6){fuse0 =6}
        else if(fu0 > 6 && fu0 <= 8){fuse0 =8}
        else if(fu0 > 8 && fu0 <= 10){fuse0 =10}
        else if(fu0 > 10 && fu0 <= 12){fuse0 =12}
        else if(fu0 > 12 && fu0 <= 15){fuse0 =15}
        else if(fu0 > 15 && fu0 <= 20){fuse0 =20}
        else if(fu0 > 20){fuse0 =fu0}
    
})})     
$(document).ready(function() {
    $('.form-control').keyup(function(){    
        fu0 = 1.25*data.Isc
        if(fu0 <= 1){fuse0 =1}
        else if(fu0 > 1 && fu0 <= 2){fuse0 =2}
        else if(fu0 > 2 && fu0 <= 3){fuse0 =3}
        else if(fu0 > 3 && fu0 <= 4){fuse0 =4}
        else if(fu0 > 4 && fu0 <= 5){fuse0 =5}
        else if(fu0 > 5 && fu0 <= 6){fuse0 =6}
        else if(fu0 > 6 && fu0 <= 8){fuse0 =8}
        else if(fu0 > 8 && fu0 <= 10){fuse0 =10}
        else if(fu0 > 10 && fu0 <= 12){fuse0 =12}
        else if(fu0 > 12 && fu0 <= 15){fuse0 =15}
        else if(fu0 > 15 && fu0 <= 20){fuse0 =20}
        else if(fu0 > 20){fuse0 =fu0}
    
})}) 
var fuse09
$(document).ready(function() {
    $('.form-control').keyup(function(){ 
        if(String_array == 1){fuse09 = '(ไม่จำเป็นต้องติดตั้ง)'}
        else{fuse09 = ''}
    })})
    $(document).ready(function() {
        $('.form-control').click(function(){ 
            if(String_array == 1){fuse09 = '(ไม่จำเป็นต้องติดตั้ง)'}
            else{fuse09 = ''}
        })})
var cbdc
    $(document).ready(function() {
        $('.form-control').keyup(function(){     
            Isc = 1.25*data.Isc*String_array  
            cbdc = Math.ceil(Isc)
       // if(Isc<=5){cbdc=5}
        //else if(Isc >5 && Isc<=10){cbdc=10}
       // else if(Isc >10 && Isc<=13){cbdc=13}
       // else if(Isc >13 && Isc<=15){cbdc=15}
       // else if(Isc >15 && Isc<=16){cbdc=16}
        //else if(Isc >16 && Isc<=20){cbdc=20}
       // else if(Isc >20 && Isc<=25){cbdc=25}
        //else if(Isc >25 && Isc<=30){cbdc=30}
       // else if(Isc >30 && Isc<=32){cbdc=32}
        //else if(Isc >32 && Isc<=40){cbdc=40}
        //else if(Isc >40 && Isc<=50){cbdc=50}
       // else if(Isc >50 && Isc<=63){cbdc=63}
        //else if(Isc > 63){cbdc =Isc}
    })})     

    $(document).ready(function() {
        $('.form-control').click(function(){     
            Isc = 1.25*data.Isc*String_array  
            cbdc = Math.ceil(Isc)
       // if(Isc<=5){cbdc=5}
       // else if(Isc >5 && Isc<=10){cbdc=10}
       // else if(Isc >10 && Isc<=13){cbdc=13}
       // else if(Isc >13 && Isc<=15){cbdc=15}
       // else if(Isc >15 && Isc<=16){cbdc=16}
       // else if(Isc >16 && Isc<=20){cbdc=20}
       // else if(Isc >20 && Isc<=25){cbdc=25}
       // else if(Isc >25 && Isc<=30){cbdc=30}
       // else if(Isc >30 && Isc<=32){cbdc=32}
       // else if(Isc >32 && Isc<=40){cbdc=40}
       // else if(Isc >40 && Isc<=50){cbdc=50}
       // else if(Isc >50 && Isc<=63){cbdc=63}
       // else if(Isc > 63){cbdc =Isc}
    })})
    var cbac
         $(document).ready(function() {
            $('.form-control').keyup(function(){  
                    Iinv = 1.25*datain.Iinv_acmax
                    cbac = Math.ceil(Iinv)
                   // if(Iinv<=15){cbac=15}
                    //else if(Iinv >15 && Iinv<=16){cbac=16}
                    ////else if(Iinv >16 && Iinv<=20){cbac=20}
                   // else if(Iinv >20 && Iinv<=25){cbac=25}
                   // else if(Iinv >25 && Iinv<=30){cbac=30}
                   // else if(Iinv >30 && Iinv<=32){cbac=32}
                   // else if(Iinv >32 && Iinv<=40){cbac=40}
                  //  else if(Iinv >40 && Iinv<=45){cbac=45}
                   // else if(Iinv >45 && Iinv<=50){cbac=50}
                   // else if(Iinv >50 && Iinv<=60){cbac=60}
                   // else if(Iinv >60 && Iinv<=63){cbac=63}
                   // else if(Iinv >63 && Iinv<=75){cbac=75}
                   // else if(Iinv >75 && Iinv<=80){cbac=80}
                  //  else if(Iinv >80 && Iinv<=100){cbac=100}
                  //  else if(Iinv >100 && Iinv<=125){cbac=125}
                   // else if(Iinv >125 && Iinv<=150){cbac=150}
                  // // else if(Iinv >150 && Iinv<=160){cbac=160}
                  //  else if(Iinv >160 && Iinv<=175){cbac=175}                  
                   // else if(Iinv >175 && Iinv<=200){cbac=200}
                   //// else if(Iinv >200 && Iinv<=225){cbac=225}
                   // else if(Iinv >225 && Iinv<=250){cbac=250}
                   // else if(Iinv >250){cbac=Iinv}
                    
        })})
        $(document).ready(function() {
            $('.form-control').click(function(){  
                    Iinv = 1.25*datain.Iinv_acmax
                    cbac = Math.ceil(Iinv)
                   // if(Iinv<=15){cbac=15}
                   // else if(Iinv >15 && Iinv<=16){cbac=16}
                   // else if(Iinv >16 && Iinv<=20){cbac=20}
                   // else if(Iinv >20 && Iinv<=25){cbac=25}
                   // else if(Iinv >25 && Iinv<=30){cbac=30}
                   // else if(Iinv >30 && Iinv<=32){cbac=32}
                   // else if(Iinv >32 && Iinv<=40){cbac=40}
                   // else if(Iinv >40 && Iinv<=45){cbac=45}
                   // else if(Iinv >45 && Iinv<=50){cbac=50}
                   // else if(Iinv >50 && Iinv<=60){cbac=60}
                   // else if(Iinv >60 && Iinv<=63){cbac=63}
                   // else if(Iinv >63 && Iinv<=75){cbac=75}
                   // else if(Iinv >75 && Iinv<=80){cbac=80}
                   // else if(Iinv >80 && Iinv<=100){cbac=100}
                   // else if(Iinv >100 && Iinv<=125){cbac=125}
                   //// else if(Iinv >125 && Iinv<=150){cbac=150}
                   // else if(Iinv >150 && Iinv<=160){cbac=160}
                   // else if(Iinv >160 && Iinv<=175){cbac=175}                  
                   // else if(Iinv >175 && Iinv<=200){cbac=200}
                   // else if(Iinv >200 && Iinv<=225){cbac=225}
                   //// else if(Iinv >225 && Iinv<=250){cbac=250}
                   // else if(Iinv >250){cbac=Iinv}
        })})
        var cbact
        $(document).ready(function() {
            $('.form-control').keyup(function(){  
                    Iinvt = 1.25*datain.Iinv_acmax*Numberinv
                    cbact = Math.ceil(Iinvt)
                   // if(Iinvt<=15){cbact=15}
                   // else if(Iinvt >15 && Iinvt<=16){cbact=16}
                  //  else if(Iinvt >16 && Iinvt<=20){cbact=20}
                   // else if(Iinvt >20 && Iinvt<=25){cbact=25}
                //    else if(Iinvt >25 && Iinvt<=30){cbact=30}
                 //   else if(Iinvt >30 && Iinvt<=32){cbact=32}
                 //   else if(Iinvt >32 && Iinvt<=40){cbact=40}
                 //   else if(Iinvt >40 && Iinvt<=45){cbact=45}
                 //   else if(Iinvt >45 && Iinvt<=50){cbact=50}
                 //   else if(Iinvt >50 && Iinvt<=60){cbact=60}
                 ////   else if(Iinvt >60 && Iinvt<=63){cbact=63}
                  //  else if(Iinvt >63 && Iinvt<=75){cbact=75}
                 ////   else if(Iinvt >75 && Iinvt<=80){cbact=80}
                //    else if(Iinvt >80 && Iinvt<=100){cbact=100}
                  //  else if(Iinvt >100 && Iinvt<=125){cbact=125}
                  //  else if(Iinvt >125 && Iinvt<=150){cbact=150}
                  //  else if(Iinvt >150 && Iinvt<=160){cbact=160}
                  //  else if(Iinvt >160 && Iinvt<=175){cbact=175}
                  //  else if(Iinvt >175 && Iinvt<=200){cbact=200}
                  //  else if(Iinvt >200 && Iinvt<=225){cbact=225}
                  //  else if(Iinvt >225 && Iinvt<=250){cbact=250}
                 //   else if(Iinvt>250){cbact=Iinvt}
                 
        })}) 
        $(document).ready(function() {
            $('.form-control').click(function(){  
                    Iinvt = 1.25*datain.Iinv_acmax*Numberinv
                    cbact = Math.ceil(Iinvt)
                  //  if(Iinvt<=15){cbact=15}
                  //  else if(Iinvt >15 && Iinvt<=16){cbact=16}
                  //  else if(Iinvt >16 && Iinvt<=20){cbact=20}
                  //  else if(Iinvt >20 && Iinvt<=25){cbact=25}
                  //  else if(Iinvt >25 && Iinvt<=30){cbact=30}
                  //  else if(Iinvt >30 && Iinvt<=32){cbact=32}
                 //   else if(Iinvt >32 && Iinvt<=40){cbact=40}
                 //   else if(Iinvt >40 && Iinvt<=45){cbact=45}
                 //   else if(Iinvt >45 && Iinvt<=50){cbact=50}
                 //   else if(Iinvt >50 && Iinvt<=60){cbact=60}
                //    else if(Iinvt >60 && Iinvt<=63){cbact=63}
                 //   else if(Iinvt >63 && Iinvt<=75){cbact=75}
                 //   else if(Iinvt >75 && Iinvt<=80){cbact=80}
                 //   else if(Iinvt >80 && Iinvt<=100){cbact=100}
                 //   else if(Iinvt >100 && Iinvt<=125){cbact=125}
                 //   else if(Iinvt >125 && Iinvt<=150){cbact=150}
                 //   else if(Iinvt >150 && Iinvt<=160){cbact=160}
                 //   else if(Iinvt >160 && Iinvt<=175){cbact=175}
                 //   else if(Iinvt >175 && Iinvt<=200){cbact=200}
                 //   else if(Iinvt >200 && Iinvt<=225){cbact=225}
                 //   else if(Iinvt >225 && Iinvt<=250){cbact=250}
                 //   else if(Iinvt>250){cbact=Iinvt}
        })})    
   // if(Isc<=5){cbdc=5}
    //else if(Isc >5 && Isc<=10){cbdc=10}
   // else if(Isc >10 && Isc<=13){cbdc=13}
   // else if(Isc >13 && Isc<=15){cbdc=15}
   // else if(Isc >15 && Isc<=16){cbdc=16}
   // else if(Isc >16 && Isc<=20){cbdc=20}
   // else if(Isc >20 && Isc<=25){cbdc=25}
   // else if(Isc >25 && Isc<=30){cbdc=30}
   // else if(Isc >30 && Isc<=32){cbdc=32}
   // else if(Isc >32 && Isc<=40){cbdc=40}
   // else if(Isc >40 && Isc<=50){cbdc=50}
   // else if(Isc >50 && Isc<=63){cbdc=63}
  


   

var crosstem
//ตัวคูณ dc
var cross
$(document).ready(function() {
    $('.form-control').keyup(function(){
        if(Tem_max <= 30){crosstem = 1}
        else if(Tem_max > 30 && Tem_max <=35){crosstem = 0.97}
        else if(Tem_max > 35 && Tem_max <=40){crosstem = 0.94}
        else if(Tem_max > 40 && Tem_max <=45){crosstem = 0.91}
        else if(Tem_max > 45 && Tem_max <=50){crosstem = 0.88}
        else if(Tem_max > 50 && Tem_max <=55){crosstem = 0.85}
        else if(Tem_max > 55 && Tem_max <=60){crosstem = 0.82}
        else if(Tem_max > 60 && Tem_max <=65){crosstem = 0.78}
        else if(Tem_max > 65 && Tem_max <=70){crosstem = 0.75}
        else if(Tem_max > 70 && Tem_max <=75){crosstem = 0.71}
        else if(Tem_max > 75 && Tem_max <=80){crosstem = 0.67}
        else if(Tem_max > 80 && Tem_max <=85){crosstem = 0.62}
        else if(Tem_max > 85 && Tem_max <=90){crosstem = 0.58}
        else if(Tem_max > 90){crosstem = 0.58}
        

    })})
    $(document).ready(function() {
        $('.form-control').click(function(){
            if(Tem_max <= 30){crosstem = 1}
            else if(Tem_max > 30 && Tem_max <=35){crosstem = 0.97}
            else if(Tem_max > 35 && Tem_max <=40){crosstem = 0.94}
            else if(Tem_max > 40 && Tem_max <=45){crosstem = 0.91}
            else if(Tem_max > 45 && Tem_max <=50){crosstem = 0.88}
            else if(Tem_max > 50 && Tem_max <=55){crosstem = 0.85}
            else if(Tem_max > 55 && Tem_max <=60){crosstem = 0.82}
            else if(Tem_max > 60 && Tem_max <=65){crosstem = 0.78}
            else if(Tem_max > 65 && Tem_max <=70){crosstem = 0.75}
            else if(Tem_max > 70 && Tem_max <=75){crosstem = 0.71}
            else if(Tem_max > 75 && Tem_max <=80){crosstem = 0.67}
            else if(Tem_max > 80 && Tem_max <=85){crosstem = 0.62}
            else if(Tem_max > 85 && Tem_max <=90){crosstem = 0.58}
            else if(Tem_max > 90){crosstem = 0.58}
            
    
        })})
$(document).ready(function() {
    $('.form-control').keyup(function(){
        string_real=parseFloat($('#string_real').val())
        metdc= $('#metdc').val()
        if(metdc == 'ท่อร้อยสาย' || metdc == 'Wireway'){
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
        }
        else if(metdc == 'วางบนรางชิดกัน (ไม่ซ้อนแถว)'){
            if(string_real == 1){cross = 0}
            else if(string_real == 2){cross = 0.87}
            else if(string_real == 3){cross = 0.81}
            else if(string_real == 4){cross = 0.78}
            else if(string_real > 4 && string_real <=6){cross = 0.75}
            else if(string_real > 6 && string_real <=8){cross = 0.74}
            else if(string_real > 8 && string_real <=10){cross = 0.73}
            else if(string_real > 10 && string_real <=16){cross = 0.72}
            else if(string_real > 16 && string_real <=20){cross = 0.71}
            else if(string_real> 20 ){cross = 0.71}
           
        }
        else if(metdc == 'วางบนรางชิดกัน (ซ้อนแถว)'){
            if(string_real == 1){cross = 0}
            else if(string_real == 2){cross = 0}
            else if(string_real == 3){cross = 0}
            else if(string_real == 4){cross = 0.71}
            else if(string_real > 4 && string_real <=6){cross = 0.58}
            else if(string_real > 6 && string_real <=8){cross = 0.52}
            else if(string_real > 8 && string_real <=10){cross = 0.48}
            else if(string_real > 10 && string_real <=16){cross = 0.41}
            else if(string_real > 16 && string_real <=20){cross = 0.38}
            else if(string_real> 20 ){cross = 0.38}
        }
})})  
$(document).ready(function() {
    $('.form-control').click(function(){
        string_real=parseFloat($('#string_real').val())
        metdc= $('#metdc').val()
        if(metdc == 'ท่อร้อยสาย' || metdc == 'Wireway'){
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
        }
        else if(metdc == 'วางบนรางชิดกัน (ไม่ซ้อนแถว)'){
            if(string_real == 1){cross = 0}
            else if(string_real == 2){cross = 0.87}
            else if(string_real == 3){cross = 0.81}
            else if(string_real == 4){cross = 0.78}
            else if(string_real > 4 && string_real <=6){cross = 0.75}
            else if(string_real > 6 && string_real <=8){cross = 0.74}
            else if(string_real > 8 && string_real <=10){cross = 0.73}
            else if(string_real > 10 && string_real <=16){cross = 0.72}
            else if(string_real > 16 && string_real <=20){cross = 0.71}
            else if(string_real> 20 ){cross = 0.71}
           
        }
        else if(metdc == 'วางบนรางชิดกัน (ซ้อนแถว)'){
            if(string_real == 1){cross = 0}
            else if(string_real == 2){cross = 0}
            else if(string_real == 3){cross = 0}
            else if(string_real == 4){cross = 0.71}
            else if(string_real > 4 && string_real <=6){cross = 0.58}
            else if(string_real > 6 && string_real <=8){cross = 0.52}
            else if(string_real > 8 && string_real <=10){cross = 0.48}
            else if(string_real > 10 && string_real <=16){cross = 0.41}
            else if(string_real > 16 && string_real <=20){cross = 0.38}
            else if(string_real> 20 ){cross = 0.38}
        }
})})       

var string_real
$(document).ready(function() {
    $('.form-control').keyup(function(){
        string_real=parseFloat($('#string_real').val())
        if(cross == 0){$('#pvperstring').val('ควรเลือกวิธีเดินสาย PV1-F แบบอื่น')}
        else{$('#pvperstring').val((Pvs1/string_real).toFixed(2))}
    
})})
$(document).ready(function() {
    $('.form-control').click(function(){
        string_real=parseFloat($('#string_real').val())
        if(cross == 0){$('#pvperstring').val('ควรเลือกวิธีเดินสาย PV1-F แบบอื่น')}
        else{$('#pvperstring').val((Pvs1/string_real).toFixed(2))}
    
})})    

var Ipv
var fuse00
//กระแสคูณลด dc
$(document).ready(function() {
    $('.form-control').keyup(function(){ 
        if($('#fuse00').val() == '-'){fuse00 = 1.25*data.Isc}
        else{fuse00 =$('#fuse00').val()}
    })})
    $(document).ready(function() {
        $('.form-control').click(function(){ 
            if($('#fuse00').val() == '-'){fuse00 = 1.25*data.Isc}
            else{fuse00 =$('#fuse00').val()}
        })})
$(document).ready(function() {
    $('.form-control').keyup(function(){ 
        
        metdc= $('#metdc').val()
        if(metdc=='ท่อร้อยสาย' || metdc=='วางบนรางชิดกัน (ไม่ซ้อนแถว)' || metdc=='วางบนรางชิดกัน (ซ้อนแถว)'){Ipv=fuse00/(cross*crosstem)}
        else if(metdc== 'Wireway' && string_real < 16){Ipv=fuse00/crosstem}    
        else if(metdc=='Wireway' && string_real >= 16){Ipv=fuse00/(cross*crosstem)}    
})})
$(document).ready(function() {
    $('.form-control').click(function(){ 
        
        metdc= $('#metdc').val()
        if(metdc=='ท่อร้อยสาย' || metdc=='วางบนรางชิดกัน (ไม่ซ้อนแถว)' || metdc=='วางบนรางชิดกัน (ซ้อนแถว)'){Ipv=fuse00/(cross*crosstem)}
        else if(metdc== 'Wireway' && string_real < 16){Ipv=fuse00/crosstem}    
        else if(metdc=='Wireway' && string_real >= 16){Ipv=fuse00/(cross*crosstem)}    
})})
 
        
    // ข้อมูล dc

    
    $(document).ready(function() {
        $('#fuse00').click(function(){ 
            if(Ipv<=55 && Ipv != 0){pv1f=4}
            else if(Ipv >55 && Ipv<=70){pv1f=6}
            else if(Ipv >70 && Ipv<=98){pv1f=10}
            else if(Ipv >98 && Ipv<=132){pv1f=16}
            else if(Ipv >132 && Ipv<=176){pv1f=25}
          
            $('#pv1f_select00').val(pv1f)
            
    })})
 
    
    
  
    $(document).ready(function() {
        $('#pv1f_select002').click(function(){
            pv1fs002=$('#pv1f_select002').val()
            if(pv1fs002 == 4){ohmpv002=(5.09*$('#PV_Inv').val())/1000}
            else if(pv1fs002 == 6){ohmpv002=(3.39*$('#PV_Inv').val())/1000}
            else if(pv1fs002 == 10){ohmpv002=(1.95*$('#PV_Inv').val())/1000}
            else if(pv1fs002 == 16){ohmpv002=(1.24*$('#PV_Inv').val())/1000}
            else if(pv1fs002 == 25){ohmpv002=(0.795*$('#PV_Inv').val())/1000}

            Vdrop_pv002= 2*data.Imp*String_array*ohmpv002
            Per_vdroppv002 = (100/Vstring_min)*Vdrop_pv002 
            Ploss_pv002 = 2*data.Imp*data.Imp*ohmpv002
            Per_plosspv002 = (100*Ploss_pv002*string_real)/Pmax1
            $('#Vdrop_pv002_select').val(Vdrop_pv002.toFixed(2))
            $('#Per_vdroppv002_select').val(Per_vdroppv002.toFixed(2))
            $('#Ploss_pv002_select').val(Ploss_pv002.toFixed(2))
            $('#Per_plosspv002f_select').val(Per_plosspv002.toFixed(2))
        })})  
        
            
//เลือกสายไฟdc
var cross2
var Ipvs1
var pv1fs1
var cbdcs

$(document).ready(function() {
    $('.form-control').keyup(function(){
        
        cbdcs=$('#pv1f_select').val()
            
            if(datain.Number_of_independent_MPP_inputs == 1){cross2 = 1}
            else if(datain.Number_of_independent_MPP_inputs == 2){cross2 = 0.8}
            else if(datain.Number_of_independent_MPP_inputs == 3){cross2 = 0.7}
            else if(datain.Number_of_independent_MPP_inputs == 4){cross2 = 0.65}
            else if(datain.Number_of_independent_MPP_inputs == 5){cross2 = 0.6}
            else if(datain.Number_of_independent_MPP_inputs == 6){cross2 = 0.57}
            else if(datain.Number_of_independent_MPP_inputs == 7){cross2 = 0.54}
            else if(datain.Number_of_independent_MPP_inputs == 8){cross2 = 0.52}
            else if(datain.Number_of_independent_MPP_inputs == 9){cross2 = 0.5}
            else if(datain.Number_of_independent_MPP_inputs >= 10 && datain.Number_of_independent_MPP_inputs <=12){cross2 = 0.45}
            else if(datain.Number_of_independent_MPP_inputs >=13 && datain.Number_of_independent_MPP_inputs <=16){cross2 = 0.41}
            else if(datain.Number_of_independent_MPP_inputs >=17 && datain.Number_of_independent_MPP_inputs <=20){cross2 = 0.38}
            else if(datain.Number_of_independent_MPP_inputs> 20 ){cross2 = 0.38}
            
            Ipvs1 = cbdcs/(cross2*crosstem)
})})
$(document).ready(function() {
    $('.form-control').click(function(){
        
        cbdcs=$('#pv1f_select').val()
           
            if(datain.Number_of_independent_MPP_inputs == 1){cross2 = 1}
            else if(datain.Number_of_independent_MPP_inputs == 2){cross2 = 0.8}
            else if(datain.Number_of_independent_MPP_inputs == 3){cross2 = 0.7}
            else if(datain.Number_of_independent_MPP_inputs == 4){cross2 = 0.65}
            else if(datain.Number_of_independent_MPP_inputs == 5){cross2 = 0.6}
            else if(datain.Number_of_independent_MPP_inputs == 6){cross2 = 0.57}
            else if(datain.Number_of_independent_MPP_inputs == 7){cross2 = 0.54}
            else if(datain.Number_of_independent_MPP_inputs == 8){cross2 = 0.52}
            else if(datain.Number_of_independent_MPP_inputs == 9){cross2 = 0.5}
            else if(datain.Number_of_independent_MPP_inputs >= 10 && datain.Number_of_independent_MPP_inputs <=12){cross2 = 0.45}
            else if(datain.Number_of_independent_MPP_inputs >=13 && datain.Number_of_independent_MPP_inputs <=16){cross2 = 0.41}
            else if(datain.Number_of_independent_MPP_inputs >=17 && datain.Number_of_independent_MPP_inputs <=20){cross2 = 0.38}
            else if(datain.Number_of_independent_MPP_inputs> 20 ){cross2 = 0.38}
            
            Ipvs1 = cbdcs/(cross2*crosstem)
})})
  
    $(document).ready(function() {
        $('#pv1f_select').keyup(function(){
            if(Ipvs1<=55 && Ipvs1 != 0){pv1fs1=4}
            else if(Ipvs1 >55 && Ipvs1<=70){pv1fs1=6}
            else if(Ipvs1 >70 && Ipvs1<=98){pv1fs1=10}
            else if(Ipvs1 >98 && Ipvs1<=132){pv1fs1=16}
            else if(Ipvs1 >132 && Ipvs1<=176){pv1fs1=25}
            
            $('#pv1f_select1').val(pv1fs1)
        })})

$(document).ready(function() {
    $('#pv1f_select').keyup(function(){
       
   
    if(cbdcs <= 40 && cbdcs != 0){ground1 =4}
    else if(cbdcs > 40 && cbdcs<= 70){ground1 =6}
    else if(cbdcs > 70 && cbdcs<= 100){ground1 =10}
    else if(cbdcs > 100 && cbdcs<= 200){ground1 =16}
    else if(cbdcs > 200 && cbdcs<= 400){ground1 =25}
    else if(cbdcs > 400 && cbdcs<= 500){ground1 =35}
    else if(cbdcs > 500 && cbdcs<= 800){ground1 =50}
    else if(cbdcs > 800 && cbdcs<= 1000){ground1 =70}
    else if(cbdcs > 1000 && cbdcs<= 1250){ground1 =95}
    else if(cbdcs > 1250 && cbdcs<= 2000){ground1 =120}
    else if(cbdcs > 2000 && cbdcs<= 2500){ground1 =185}
    else if(cbdcs > 2500 && cbdcs<= 4000){ground1 =240}
    else if(cbdcs > 4000 && cbdcs<= 6000){ground1 =400}
    $('#groundpv1').val(ground1)

    })})        
   
$(document).ready(function() {
    $('#pv1f_select').keyup(function(){
        ground2 = 1.25*data.Isc*string_real
       
        if(ground2 <= 100 && ground2 != 0){ground11 =10}
        else if(ground2 > 100 && ground2<= 200){ground11 =16}
        else if(ground2 > 200 && ground2<= 400){ground11 =25}
        else if(ground2 > 400 && ground2<= 500){ground11 =35}
        else if(ground2 > 500 && ground2<= 800){ground11 =50}
        else if(ground2 > 800 && ground2<= 1000){ground11 =70}
        else if(ground2 > 1000 && ground2<= 1250){ground11 =95}
        else if(ground2 > 1250 && ground2<= 2000){ground11=120}
        else if(ground2 > 2000 && ground2<= 2500){ground11 =185}
        else if(ground2 > 2500 && ground2<= 4000){ground11 =240}
        else if(ground2 > 4000 && ground2<= 6000){ground11 =400}
        $('#groundpv2').val(ground11)
    })})
   
// เลือกสายinv.
   
        var crossac    
        //ตัวคูณ ac
        $(document).ready(function() {
            $('.form-control').keyup(function(){     
            
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
var crossteminv
var wireac
 
$(document).ready(function() {
    
    $('.form-control').keyup(function(){
        wireac = $('#wireac').val()
        if(wireac == 'สายไฟหุ้มฉนวน PVC (1 แกน)' || wireac == 'สายไฟหุ้มฉนวน PVC (หลายแกน)'){
            if(Tem_max2 <= 15){crossteminv = 1.34}
            else if(Tem_max2 > 15 && Tem_max2 <=20){crossteminv = 1.29}
            else if(Tem_max2 > 20 && Tem_max2 <=25){crossteminv = 1.22}
            else if(Tem_max2 > 25 && Tem_max2 <=30){crossteminv = 1.15}
            else if(Tem_max2 > 30 && Tem_max2 <=35){crossteminv = 1.08}
            else if(Tem_max2 > 35 && Tem_max2 <=40){crossteminv = 1}
            else if(Tem_max2 > 40 && Tem_max2 <=45){crossteminv = 0.91}
            else if(Tem_max2 > 45 && Tem_max2 <=50){crossteminv = 0.82}
            else if(Tem_max2 > 50 && Tem_max2 <=55){crossteminv = 0.7}
            else if(Tem_max2 > 55 && Tem_max2 <=60){crossteminv = 0.57}
            else if(Tem_max2 > 60){crossteminv = 0.57}
            
        }
        else if(wireac == 'สายไฟหุ้มฉนวน XLPE (1 แกน)' || wireac == 'สายไฟหุ้มฉนวน XLPE (หลายแกน)'){
            if(Tem_max2 <= 15){crossteminv = 1.23}
            else if(Tem_max2 > 15 && Tem_max2 <=20){crossteminv = 1.19}
            else if(Tem_max2 > 20 && Tem_max2 <=25){crossteminv = 1.14}
            else if(Tem_max2 > 25 && Tem_max2 <=30){crossteminv = 1.1}
            else if(Tem_max2 > 30 && Tem_max2 <=35){crossteminv = 1.05}
            else if(Tem_max2 > 35 && Tem_max2 <=40){crossteminv = 1}
            else if(Tem_max2 > 40 && Tem_max2 <=45){crossteminv = 0.96}
            else if(Tem_max2 > 45 && Tem_max2 <=50){crossteminv = 0.9}
            else if(Tem_max2 > 50 && Tem_max2 <=55){crossteminv = 0.84}
            else if(Tem_max2 > 55 && Tem_max2 <=60){crossteminv = 0.78}            
            else if(Tem_max2 > 60 && Tem_max2 <=65){crossteminv = 0.71}
            else if(Tem_max2 > 65 && Tem_max2 <=70){crossteminv = 0.64}
            else if(Tem_max2 > 70 && Tem_max2 <=75){crossteminv = 0.55}
            else if(Tem_max2 > 75 && Tem_max2 <=80){crossteminv = 0.45}
            else if(Tem_max2 > 80){crossteminv = 0.45}
        }

    })})
    $(document).ready(function() {
       
        $('.form-control').click(function(){
            wireac = $('#wireac').val()
            if(wireac == 'สายไฟหุ้มฉนวน PVC (1 แกน)' || wireac == 'สายไฟหุ้มฉนวน PVC (หลายแกน)'){
                if(Tem_max2 <= 15){crossteminv = 1.34}
                else if(Tem_max2 > 15 && Tem_max2 <=20){crossteminv = 1.29}
                else if(Tem_max2 > 20 && Tem_max2 <=25){crossteminv = 1.22}
                else if(Tem_max2 > 25 && Tem_max2 <=30){crossteminv = 1.15}
                else if(Tem_max2 > 30 && Tem_max2 <=35){crossteminv = 1.08}
                else if(Tem_max2 > 35 && Tem_max2 <=40){crossteminv = 1}
                else if(Tem_max2 > 40 && Tem_max2 <=45){crossteminv = 0.91}
                else if(Tem_max2 > 45 && Tem_max2 <=50){crossteminv = 0.82}
                else if(Tem_max2 > 50 && Tem_max2 <=55){crossteminv = 0.7}
                else if(Tem_max2 > 55 && Tem_max2 <=60){crossteminv = 0.57}
                else if(Tem_max2 > 60){crossteminv = 0.57}
                
            }
            else if(wireac == 'สายไฟหุ้มฉนวน XLPE (1 แกน)' || wireac == 'สายไฟหุ้มฉนวน XLPE (หลายแกน)'){
                if(Tem_max2 <= 15){crossteminv = 1.23}
                else if(Tem_max2 > 15 && Tem_max2 <=20){crossteminv = 1.19}
                else if(Tem_max2 > 20 && Tem_max2 <=25){crossteminv = 1.14}
                else if(Tem_max2 > 25 && Tem_max2 <=30){crossteminv = 1.1}
                else if(Tem_max2 > 30 && Tem_max2 <=35){crossteminv = 1.05}
                else if(Tem_max2 > 35 && Tem_max2 <=40){crossteminv = 1}
                else if(Tem_max2 > 40 && Tem_max2 <=45){crossteminv = 0.96}
                else if(Tem_max2 > 45 && Tem_max2 <=50){crossteminv = 0.9}
                else if(Tem_max2 > 50 && Tem_max2 <=55){crossteminv = 0.84}
                else if(Tem_max2 > 55 && Tem_max2 <=60){crossteminv = 0.78}            
                else if(Tem_max2 > 60 && Tem_max2 <=65){crossteminv = 0.71}
                else if(Tem_max2 > 65 && Tem_max2 <=70){crossteminv = 0.64}
                else if(Tem_max2 > 70 && Tem_max2 <=75){crossteminv = 0.55}
                else if(Tem_max2 > 75 && Tem_max2 <=80){crossteminv = 0.45}
                else if(Tem_max2 > 80){crossteminv = 0.45}
            }
    
        })})

         
var Iacs1
var wireinvs1
var cbacs
var Per_plossacs2
var metac
$(document).ready(function() {
    $('.form-control').keyup(function(){
        metac=$('#metac').val()
        cbacs=$('#cb_invs').val()
        if(metac=='ท่อร้อยสาย'){Iacs1=cbacs/(crossac*crossteminv)}
        else if(metac== 'Wireway' && Numberinv < 16){Iacs1=cbacs/crossteminv}    
        else if(metac=='Wireway' && Numberinv >= 16){Iacs1=cbacs/(crossac*crossteminv)}        
    })})    
    $(document).ready(function() {
        $('.form-control').click(function(){
            metac=$('#metac').val()
            cbacs=$('#cb_invs').val()
            if(metac=='ท่อร้อยสาย'){Iacs1=cbacs/(crossac*crossteminv)}
            else if(metac== 'Wireway' && Numberinv < 16){Iacs1=cbacs/crossteminv}    
            else if(metac=='Wireway' && Numberinv >= 16){Iacs1=cbacs/(crossac*crossteminv)}        
        })})   
    
    
    $(document).ready(function() {
        $('#cb_invs').keyup(function(){ 
            wireac = $('#wireac').val()
            if(wireac == 'สายไฟหุ้มฉนวน PVC (1 แกน)'){
                if(Iacs1<=21 && Iacs1!=0){wireinvs1=2.5}
                else if(Iacs1 >21 && Iacs1<=28){wireinvs1=4}
                else if(Iacs1 >28 && Iacs1<=36){wireinvs1=6}
                else if(Iacs1 >36 && Iacs1<=50){wireinvs1=10}
                else if(Iacs1 >50 && Iacs1<=66){wireinvs1=16}
                else if(Iacs1 >66 && Iacs1<=88){wireinvs1=25}
                else if(Iacs1 >88 && Iacs1<=109){wireinvs1=35}
                else if(Iacs1 >109 && Iacs1<=131){wireinvs1=50}
                else if(Iacs1 >131 && Iacs1<=167){wireinvs1=70}
                else if(Iacs1 >167 && Iacs1<=202){wireinvs1=95}
                else if(Iacs1 >202 && Iacs1<=234){wireinvs1=120}
                else if(Iacs1 >234 && Iacs1<=261){wireinvs1=150}
                else if(Iacs1 >261 && Iacs1<=297){wireinvs1=185}
                else if(Iacs1 >297 && Iacs1<=348){wireinvs1=240}
                else if(Iacs1 >348 && Iacs1<=398){wireinvs1=300}
                else if(Iacs1 >398 && Iacs1<=475){wireinvs1=400}
                else if(Iacs1 >475 && Iacs1<=545){wireinvs1=500}
                
    }
            else if(wireac == 'สายไฟหุ้มฉนวน PVC (หลายแกน)'){
                if(Iacs1<=20 && Iacs1!=0){wireinvs1=2.5}
                else if(Iacs1 >20 && Iacs1<=26){wireinvs1=4}
                else if(Iacs1 >26 && Iacs1<=33){wireinvs1=6}
                else if(Iacs1 >33 && Iacs1<=45){wireinvs1=10}
                else if(Iacs1 >45 && Iacs1<=60){wireinvs1=16}
                else if(Iacs1 >60 && Iacs1<=78){wireinvs1=25}
                else if(Iacs1 >78 && Iacs1<=97){wireinvs1=35}
                else if(Iacs1 >97 && Iacs1<=116){wireinvs1=50}
                else if(Iacs1 >116 && Iacs1<=146){wireinvs1=70}
                else if(Iacs1 >146 && Iacs1<=175){wireinvs1=95}
                else if(Iacs1 >175 && Iacs1<=202){wireinvs1=120}
                else if(Iacs1 >202 && Iacs1<=224){wireinvs1=150}
                else if(Iacs1 >224 && Iacs1<=256){wireinvs1=185}
                else if(Iacs1 >256 && Iacs1<=299){wireinvs1=240}
                else if(Iacs1 >299 && Iacs1<=343){wireinvs1=300}
              
            }
            
            else if(wireac == 'สายไฟหุ้มฉนวน XLPE (1 แกน)'){
                if(Iacs1<=28 && Iacs1!=0){wireinvs1=2.5}
                else if(Iacs1 >28 && Iacs1<=38){wireinvs1=4}
                else if(Iacs1 >38 && Iacs1<=49){wireinvs1=6}
                else if(Iacs1 >49 && Iacs1<=68){wireinvs1=10}
                else if(Iacs1 >68 && Iacs1<=91){wireinvs1=16}
                else if(Iacs1 >91 && Iacs1<=121){wireinvs1=25}
                else if(Iacs1 >121 && Iacs1<=149){wireinvs1=35}
                else if(Iacs1 >149 && Iacs1<=180){wireinvs1=50}
                else if(Iacs1 >180 && Iacs1<=230){wireinvs1=70}
                else if(Iacs1 >230 && Iacs1<=278){wireinvs1=95}
                else if(Iacs1 >278 && Iacs1<=322){wireinvs1=120}
                else if(Iacs1 >322 && Iacs1<=358){wireinvs1=150}
                else if(Iacs1 >358 && Iacs1<=409){wireinvs1=185}
                else if(Iacs1 >409 && Iacs1<=480){wireinvs1=240}
                else if(Iacs1 >480 && Iacs1<=549){wireinvs1=300}
                else if(Iacs1 >549 && Iacs1<=622){wireinvs1=400}
                else if(Iacs1 >622 && Iacs1<=713){wireinvs1=500}
              
    }
    
            else if(wireac == 'สายไฟหุ้มฉนวน XLPE (หลายแกน)'){
                if(Iacs1<=27 && Iacs1!=0){wireinvs1=2.5 ,vd=0.019}
                else if(Iacs1 >27 && Iacs1<=36){wireinvs1=4}
                else if(Iacs1 >36 && Iacs1<=46){wireinvs1=6}
                else if(Iacs1 >46 && Iacs1<=63){wireinvs1=10}
                else if(Iacs1 >63 && Iacs1<=83){wireinvs1=16}
                else if(Iacs1 >83 && Iacs1<=108){wireinvs1=25}
                else if(Iacs1 >108 && Iacs1<=133){wireinvs1=35}
                else if(Iacs1 >133 && Iacs1<=159){wireinvs1=50}
                else if(Iacs1 >159 && Iacs1<=201){wireinvs1=70}
                else if(Iacs1 >201 && Iacs1<=241){wireinvs1=95}
                else if(Iacs1 >241 && Iacs1<=278){wireinvs1=120}
                else if(Iacs1 >278 && Iacs1<=304){wireinvs1=150}
                else if(Iacs1 >304 && Iacs1<=349){wireinvs1=185}
                else if(Iacs1 >349 && Iacs1<=418){wireinvs1=240}
                else if(Iacs1 >418 && Iacs1<=484){wireinvs1=300}
               
    }
    $('#wire_invs').val(wireinvs1)
        })})

        var groundinvs2
        $(document).ready(function() {
            $('#cb_invs').keyup(function(){
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
        $('#wire_ac_select').click(function(){
            wireinvs11 = $('#wire_ac_select').val()
            wireac = $('#wireac').val()
        if(wireac == 'สายไฟหุ้มฉนวน PVC (1 แกน)'){
            if(wireinvs11==0){vd=0, areawireac=0}
            else if(wireinvs11==2.5){vd=0.018}//, areawireac=11.94
            else if(wireinvs11==4){vd=0.011}//, areawireac=15.21
            else if(wireinvs11==6){vd=0.0073}//, areawireac=19.63
            else if(wireinvs11==10){vd=0.0044}//, areawireac=32.17
            else if(wireinvs11==16){vd=0.0028}
            else if(wireinvs11==25){vd=0.00181}
            else if(wireinvs11==35){vd=0.00133}
            else if(wireinvs11==50){vd=0.001}
            else if(wireinvs11==70){vd=0.00071}
            else if(wireinvs11==95){vd=0.00056}
            else if(wireinvs11==120){vd=0.00048}
            else if(wireinvs11==150){vd=0.00041}
            else if(wireinvs11==185){vd=0.00036}
            else if(wireinvs11==240){vd=0.0003}
            else if(wireinvs11==300){vd=0.00027}
            else if(wireinvs11==400){vd=0.00025}
            else if(wireinvs11==500){vd=0.00023}
}
        else if(wireac == 'สายไฟหุ้มฉนวน PVC (หลายแกน)'){
            if(wireinvs11==0){vd=0}
            else if(wireinvs11==2.5){vd=0.018}
            else if(wireinvs11==4){vd=0.011}
            else if(wireinvs11==6){vd=0.0073}
            else if(wireinvs11==10){vd=0.0044}
            else if(wireinvs11==16){vd=0.0028}
            else if(wireinvs11==25){vd=0.00175}
            else if(wireinvs11==35){vd=0.00125}
            else if(wireinvs11==50){vd=0.00093}
            else if(wireinvs11==70){vd=0.00065}
            else if(wireinvs11==95){vd=0.00049}
            else if(wireinvs11==120){vd=0.00041}
            else if(wireinvs11==150){vd=0.00034}
            else if(wireinvs11==185){vd=0.00029}
            else if(wireinvs11==240){vd=0.00024}
            else if(wireinvs11==300){vd=0.00021}
        }
        
        else if(wireac == 'สายไฟหุ้มฉนวน XLPE (1 แกน)'){
            if(wireinvs11==0){vd=0}
            else if(wireinvs11==2.5){vd=0.019}
            else if(wireinvs11==4){vd=0.012}
            else if(wireinvs11==6){vd=0.0079}
            else if(wireinvs11==10){vd=0.0047}
            else if(wireinvs11==16){vd=0.0029}
            else if(wireinvs11==25){vd=0.00185}
            else if(wireinvs11==35){vd=0.00137}
            else if(wireinvs11==50){vd=0.00104}
            else if(wireinvs11==70){vd=0.00075}
            else if(wireinvs11==95){vd=0.00058}
            else if(wireinvs11==120){vd=0.00049}
            else if(wireinvs11==150){vd=0.00042}
            else if(wireinvs11==185){vd=0.00037}
            else if(wireinvs11==240){vd=0.00032}
            else if(wireinvs11==300){vd=0.00028}
            else if(wireinvs11==400){vd=0.00025}
            else if(wireinvs11==500){vd=0.00023}
}

        else if(wireac == 'สายไฟหุ้มฉนวน XLPE (หลายแกน)'){
            if(wireinvs11==0){vd=0}
            else if(wireinvs11==2.5){vd=0.019}
            else if(wireinvs11==4){vd=0.012}
            else if(wireinvs11==6){vd=0.0079}
            else if(wireinvs11==10){vd=0.0047}
            else if(wireinvs11==16){vd=0.0029}
            else if(wireinvs11==25){vd=0.00185}
            else if(wireinvs11==35){vd=0.00135}
            else if(wireinvs11==50){vd=0.00099}
            else if(wireinvs11==70){vd=0.00068}
            else if(wireinvs11==95){vd=0.00052}
            else if(wireinvs11==120){vd=0.00042}
            else if(wireinvs11==150){vd=0.00035}
            else if(wireinvs11==185){vd=0.0003}
            else if(wireinvs11==240){vd=0.00024}
            else if(wireinvs11==300){vd=0.00021}
}

        
        Vdrop_acs2= vd*datain.Iinv_acmax*$('#Inv_Mdb').val()
        Per_vdropacs2 = (100/230)*Vdrop_acs2
        Ploss_acs2 = datain.Iinv_acmax*Vdrop_acs2
        Per_plossacs2 = (100*Ploss_acs2/datain.Pinv_ac)
        $('#Vdrop_ac_select').val(Vdrop_acs2.toFixed(2))
        $('#Per_vdropac_select').val(Per_vdropacs2.toFixed(2))
        $('#Ploss_ac_select').val(Ploss_acs2.toFixed(2))
        $('#Per_plossac_select').val(Per_plossacs2.toFixed(2))
})}) 


var crossteminv2
var wiremdb
 
$(document).ready(function() {
    
    $('.form-control').keyup(function(){
        Tem_max2=$('#Tem_max2').val();
        wiremdb = $('#wiremdb').val()
       
        if(wiremdb == 'สายไฟหุ้มฉนวน PVC (1 แกน)' || wiremdb == 'สายไฟหุ้มฉนวน PVC (หลายแกน)'){
            if(Tem_max2 <= 15){crossteminv2 = 1.34}
            else if(Tem_max2 > 15 && Tem_max2 <=20){crossteminv2 = 1.29}
            else if(Tem_max2 > 20 && Tem_max2 <=25){crossteminv2 = 1.22}
            else if(Tem_max2 > 25 && Tem_max2 <=30){crossteminv2 = 1.15}
            else if(Tem_max2 > 30 && Tem_max2<=35){crossteminv2 = 1.08}
            else if(Tem_max2 > 35 && Tem_max2<=40){crossteminv2 = 1}
            else if(Tem_max2 > 40 && Tem_max2 <=45){crossteminv2 = 0.91}
            else if(Tem_max2 > 45 && Tem_max2<=50){crossteminv2 = 0.82}
            else if(Tem_max2 > 50 && Tem_max2 <=55){crossteminv2 = 0.7}
            else if(Tem_max2 > 55 && Tem_max2 <=60){crossteminv2 = 0.57}
            else if(Tem_max2 > 60){crossteminv2 = 0.57}
            
        }
        else if(wiremdb == 'สายไฟหุ้มฉนวน XLPE (1 แกน)' || wiremdb == 'สายไฟหุ้มฉนวน XLPE (หลายแกน)'){
            if(Tem_max2 <= 15){crossteminv2 = 1.23}
            else if(Tem_max2 > 15 && Tem_max2 <=20){crossteminv2 = 1.19}
            else if(Tem_max2 > 20 && Tem_max2 <=25){crossteminv2 = 1.14}
            else if(Tem_max2 > 25 && Tem_max2 <=30){crossteminv2 = 1.1}
            else if(Tem_max2 > 30 && Tem_max2 <=35){crossteminv2 = 1.05}
            else if(Tem_max2 > 35 && Tem_max2 <=40){crossteminv2 = 1}
            else if(Tem_max2 > 40 && Tem_max2 <=45){crossteminv2 = 0.96}
            else if(Tem_max2 > 45 && Tem_max2 <=50){crossteminv2 = 0.9}
            else if(Tem_max2 > 50 && Tem_max2 <=55){crossteminv2 = 0.84}
            else if(Tem_max2 > 55 && Tem_max2 <=60){crossteminv2 = 0.78}            
            else if(Tem_max2 > 60 && Tem_max2 <=65){crossteminv2 = 0.71}
            else if(Tem_max2 > 65 && Tem_max2 <=70){crossteminv2 = 0.64}
            else if(Tem_max2 > 70 && Tem_max2 <=75){crossteminv2 = 0.55}
            else if(Tem_max2 > 75 && Tem_max2 <=80){crossteminv2 = 0.45}
            else if(Tem_max2 > 80){crossteminv2 = 0.45}
        }

    })})
    $(document).ready(function() {
    
        $('.form-control').click(function(){
            Tem_max2=$('#Tem_max2').val();
            wiremdb = $('#wiremdb').val()
            if(wiremdb == 'สายไฟหุ้มฉนวน PVC (1 แกน)' || wiremdb == 'สายไฟหุ้มฉนวน PVC (หลายแกน)'){
                if(Tem_max2 <= 15){crossteminv2 = 1.34}
                else if(Tem_max2 > 15 && Tem_max2 <=20){crossteminv2 = 1.29}
                else if(Tem_max2 > 20 && Tem_max2 <=25){crossteminv2 = 1.22}
                else if(Tem_max2 > 25 && Tem_max2 <=30){crossteminv2 = 1.15}
                else if(Tem_max2 > 30 && Tem_max2 <=35){crossteminv2 = 1.08}
                else if(Tem_max2 > 35 && Tem_max2 <=40){crossteminv2 = 1}
                else if(Tem_max2 > 40 && Tem_max2 <=45){crossteminv2 = 0.91}
                else if(Tem_max2 > 45 && Tem_max2 <=50){crossteminv2 = 0.82}
                else if(Tem_max2 > 50 && Tem_max2 <=55){crossteminv2 = 0.7}
                else if(Tem_max2 > 55 && Tem_max2 <=60){crossteminv2 = 0.57}
                else if(Tem_max2 > 60){crossteminv2 = 0.57}
                
            }
            else if(wiremdb == 'สายไฟหุ้มฉนวน XLPE (1 แกน)' || wiremdb == 'สายไฟหุ้มฉนวน XLPE (หลายแกน)'){
                if(Tem_max2 <= 15){crossteminv2 = 1.23}
                else if(Tem_max2 > 15 && Tem_max2 <=20){crossteminv2 = 1.19}
                else if(Tem_max2 > 20 && Tem_max2 <=25){crossteminv2 = 1.14}
                else if(Tem_max2 > 25 && Tem_max2 <=30){crossteminv2 = 1.1}
                else if(Tem_max2 > 30 && Tem_max2 <=35){crossteminv2 = 1.05}
                else if(Tem_max2 > 35 && Tem_max2 <=40){crossteminv2 = 1}
                else if(Tem_max2 > 40 && Tem_max2 <=45){crossteminv2 = 0.96}
                else if(Tem_max2 > 45 && Tem_max2 <=50){crossteminv2 = 0.9}
                else if(Tem_max2 > 50 && Tem_max2 <=55){crossteminv2 = 0.84}
                else if(Tem_max2 > 55 && Tem_max2 <=60){crossteminv2 = 0.78}            
                else if(Tem_max2 > 60 && Tem_max2 <=65){crossteminv2 = 0.71}
                else if(Tem_max2 > 65 && Tem_max2 <=70){crossteminv2 = 0.64}
                else if(Tem_max2 > 70 && Tem_max2 <=75){crossteminv2 = 0.55}
                else if(Tem_max2 > 75 && Tem_max2 <=80){crossteminv2 = 0.45}
                else if(Tem_max2 > 80){crossteminv2 = 0.45}
            }
    
        })})

var Imdb

var cbacmdb

var metmdb
$(document).ready(function() {
    $('.form-control').keyup(function(){
        metmdb=$('#metacsolar').val()
        cbacmdb=$('#cb_mdb').val()
        wiremdb = $('#wiremdb').val()
        if(metmdb=='ท่อร้อยสาย'){Imdb=cbacmdb/crossteminv2}
        else if(metmdb== 'Wireway' && Numberinv < 16){Imdb=cbacmdb/crossteminv2}    
        else if(metmdb=='Wireway' && Numberinv >= 16){Imdb=cbacmdb/crossteminv2}   

         
    })})    
    $(document).ready(function() {
        $('.form-control').click(function(){
            metmdb=$('#metacsolar').val()
            cbacmdb=$('#cb_mdb').val()
            wiremdb = $('#wiremdb').val()
            if(metmdb=='ท่อร้อยสาย'){Imdb=cbacmdb/crossteminv2}
            else if(metmdb== 'Wireway' && Numberinv < 16){Imdb=cbacmdb/crossteminv2}    
            else if(metmdb=='Wireway' && Numberinv >= 16){Imdb=cbacmdb/crossteminv2}  
  
        })})   
    
 
var wireinvs111
$(document).ready(function() {
    $('.form-control').click(function(){ 
        wiremdb = $('#wiremdb').val()
        
        if(wiremdb == 'ไม่มีตู้ AC Solar'){
        
            $('#acsolar_Mdb').val(0)
            
            $('#cb_mdb').val(0)
            $('#wire_mdb').val(0)
            $('#wire_mdb_select').val(0)
            $('#ground_mdb').val(0)
            $('#Vdrop_mdb_select').val(0)
            $('#Per_vdropmdb_select').val(0)
            $('#Ploss_mdb_select').val(0)
            $('#Per_plossmdb_select').val(0)
        }
        else if(wiremdb == 'สายไฟหุ้มฉนวน PVC (1 แกน)'){
            if(Imdb==0){wireinvs111=0}
            else if(Imdb<=21 && Imdb!=0){wireinvs111=2.5}
            else if(Imdb >21 && Imdb<=28){wireinvs111=4}
            else if(Imdb >28 && Imdb<=36){wireinvs111=6}
            else if(Imdb >36 && Imdb<=50){wireinvs111=10}
            else if(Imdb >50 && Imdb<=66){wireinvs111=16}
            else if(Imdb >66 && Imdb<=88){wireinvs111=25}
            else if(Imdb >88 && Imdb<=109){wireinvs111=35}
            else if(Imdb >109 && Imdb<=131){wireinvs111=50}
            else if(Imdb >131 && Imdb<=167){wireinvs111=70}
            else if(Imdb >167 && Imdb<=202){wireinvs111=95}
            else if(Imdb >202 && Imdb<=234){wireinvs111=120}
            else if(Imdb >234 && Imdb<=261){wireinvs111=150}
            else if(Imdb >261 && Imdb<=297){wireinvs111=185}
            else if(Imdb >297 && Imdb<=348){wireinvs111=240}
            else if(Imdb >348 && Imdb<=398){wireinvs111=300}
            else if(Imdb >398 && Imdb<=475){wireinvs111=400}
            else if(Imdb >475 && Imdb<=545){wireinvs111=500}
            else if(Imdb >545){wireinvs111=500}
}
        else if(wiremdb == 'สายไฟหุ้มฉนวน PVC (หลายแกน)'){
            if(Imdb==0){wireinvs111=0}
            else if(Imdb<=21 && Imdb!=0){wireinvs111=2.5}
            else if(Imdb >20 && Imdb<=26){wireinvs111=4}
            else if(Imdb >26 && Imdb<=33){wireinvs111=6}
            else if(Imdb >33 && Imdb<=45){wireinvs111=10}
            else if(Imdb >45 && Imdb<=60){wireinvs111=16}
            else if(Imdb >60 && Imdb<=78){wireinvs111=25}
            else if(Imdb >78 && Imdb<=97){wireinvs111=35}
            else if(Imdb >97 && Imdb<=116){wireinvs111=50}
            else if(Imdb >116 && Imdb<=146){wireinvs111=70}
            else if(Imdb >146 && Imdb<=175){wireinvs111=95}
            else if(Imdb >175 && Imdb<=202){wireinvs111=120}
            else if(Imdb >202 && Imdb<=224){wireinvs111=150}
            else if(Imdb >224 && Imdb<=256){wireinvs111=185}
            else if(Imdb >256 && Imdb<=299){wireinvs111=240}
            else if(Imdb >299 && Imdb<=343){wireinvs111=300}
            else if(Imdb >343){wireinvs111=300}
        }
        
        else if(wiremdb == 'สายไฟหุ้มฉนวน XLPE (1 แกน)'){
            if(Imdb==0){wireinvs111=0}
            else if(Imdb<=21 && Imdb!=0){wireinvs111=2.5}
            else if(Imdb >28 && Imdb<=38){wireinvs111=4}
            else if(Imdb >38 && Imdb<=49){wireinvs111=6}
            else if(Imdb >49 && Imdb<=68){wireinvs111=10}
            else if(Imdb >68 && Imdb<=91){wireinvs111=16}
            else if(Imdb >91 && Imdb<=121){wireinvs111=25}
            else if(Imdb >121 && Imdb<=149){wireinvs111=35}
            else if(Imdb >149 && Imdb<=180){wireinvs111=50}
            else if(Imdb >180 && Imdb<=230){wireinvs111=70}
            else if(Imdb >230 && Imdb<=278){wireinvs111=95}
            else if(Imdb >278 && Imdb<=322){wireinvs111=120}
            else if(Imdb >322 && Imdb<=358){wireinvs111=150}
            else if(Imdb >358 && Imdb<=409){wireinvs111=185}
            else if(Imdb >409 && Imdb<=480){wireinvs111=240}
            else if(Imdb >480 && Imdb<=549){wireinvs111=300}
            else if(Imdb >549 && Imdb<=622){wireinvs111=400}
            else if(Imdb >622 && Imdb<=713){wireinvs111=500}
            else if(Imdb >713){wireinvs111=500}
}

        else if(wiremdb == 'สายไฟหุ้มฉนวน XLPE (หลายแกน)'){
            if(Imdb==0){wireinvs111=0}
            else if(Imdb<=21 && Imdb!=0){wireinvs111=2.5}
            else if(Imdb >27 && Imdb<=36){wireinvs111=4}
            else if(Imdb >36 && Imdb<=46){wireinvs111=6}
            else if(Imdb >46 && Imdb<=63){wireinvs111=10}
            else if(Imdb >63 && Imdb<=83){wireinvs111=16}
            else if(Imdb >83 && Imdb<=108){wireinvs111=25}
            else if(Imdb >108 && Imdb<=133){wireinvs111=35}
            else if(Imdb >133 && Imdb<=159){wireinvs111=50}
            else if(Imdb >159 && Imdb<=201){wireinvs111=70}
            else if(Imdb >201 && Imdb<=241){wireinvs111=95}
            else if(Imdb >241 && Imdb<=278){wireinvs111=120}
            else if(Imdb >278 && Imdb<=304){wireinvs111=150}
            else if(Imdb >304 && Imdb<=349){wireinvs111=185}
            else if(Imdb >349 && Imdb<=418){wireinvs111=240}
            else if(Imdb >418 && Imdb<=484){wireinvs111=300}
            else if(Imdb >484){wireinvs111=300}
}
$('#wire_mdb').val(wireinvs111)
})}) 
$(document).ready(function() {
    $('.form-control').keyup(function(){ 
        wiremdb = $('#wiremdb').val()
        
        if(wiremdb == 'ไม่มีตู้ AC Solar'){
        
            $('#acsolar_Mdb').val(0)
            $('#metacsolar').val(0)
            $('#cb_mdb').val(0)
            $('#wire_mdb').val(0)
            $('#wire_mdb_select').val(0)
            $('#ground_mdb').val(0)
            $('#Vdrop_mdb_select').val(0)
            $('#Per_vdropmdb_select').val(0)
            $('#Ploss_mdb_select').val(0)
            $('#Per_plossmdb_select').val(0)
        }
        else if(wiremdb == 'สายไฟหุ้มฉนวน PVC (1 แกน)'){
            if(Imdb==0){wireinvs111=0}
            else if(Imdb<=21 && Imdb!=0){wireinvs111=2.5}
            else if(Imdb >21 && Imdb<=28){wireinvs111=4}
            else if(Imdb >28 && Imdb<=36){wireinvs111=6}
            else if(Imdb >36 && Imdb<=50){wireinvs111=10}
            else if(Imdb >50 && Imdb<=66){wireinvs111=16}
            else if(Imdb >66 && Imdb<=88){wireinvs111=25}
            else if(Imdb >88 && Imdb<=109){wireinvs111=35}
            else if(Imdb >109 && Imdb<=131){wireinvs111=50}
            else if(Imdb >131 && Imdb<=167){wireinvs111=70}
            else if(Imdb >167 && Imdb<=202){wireinvs111=95}
            else if(Imdb >202 && Imdb<=234){wireinvs111=120}
            else if(Imdb >234 && Imdb<=261){wireinvs111=150}
            else if(Imdb >261 && Imdb<=297){wireinvs111=185}
            else if(Imdb >297 && Imdb<=348){wireinvs111=240}
            else if(Imdb >348 && Imdb<=398){wireinvs111=300}
            else if(Imdb >398 && Imdb<=475){wireinvs111=400}
            else if(Imdb >475 && Imdb<=545){wireinvs111=500}
            else if(Imdb >545){wireinvs111=500}
}
        else if(wiremdb == 'สายไฟหุ้มฉนวน PVC (หลายแกน)'){
            if(Imdb==0){wireinvs111=0}
            else if(Imdb<=21 && Imdb!=0){wireinvs111=2.5}
            else if(Imdb >20 && Imdb<=26){wireinvs111=4}
            else if(Imdb >26 && Imdb<=33){wireinvs111=6}
            else if(Imdb >33 && Imdb<=45){wireinvs111=10}
            else if(Imdb >45 && Imdb<=60){wireinvs111=16}
            else if(Imdb >60 && Imdb<=78){wireinvs111=25}
            else if(Imdb >78 && Imdb<=97){wireinvs111=35}
            else if(Imdb >97 && Imdb<=116){wireinvs111=50}
            else if(Imdb >116 && Imdb<=146){wireinvs111=70}
            else if(Imdb >146 && Imdb<=175){wireinvs111=95}
            else if(Imdb >175 && Imdb<=202){wireinvs111=120}
            else if(Imdb >202 && Imdb<=224){wireinvs111=150}
            else if(Imdb >224 && Imdb<=256){wireinvs111=185}
            else if(Imdb >256 && Imdb<=299){wireinvs111=240}
            else if(Imdb >299 && Imdb<=343){wireinvs111=300}
            else if(Imdb >343){wireinvs111=300}
        }
        
        else if(wiremdb == 'สายไฟหุ้มฉนวน XLPE (1 แกน)'){
            if(Imdb==0){wireinvs111=0}
            else if(Imdb<=21 && Imdb!=0){wireinvs111=2.5}
            else if(Imdb >28 && Imdb<=38){wireinvs111=4}
            else if(Imdb >38 && Imdb<=49){wireinvs111=6}
            else if(Imdb >49 && Imdb<=68){wireinvs111=10}
            else if(Imdb >68 && Imdb<=91){wireinvs111=16}
            else if(Imdb >91 && Imdb<=121){wireinvs111=25}
            else if(Imdb >121 && Imdb<=149){wireinvs111=35}
            else if(Imdb >149 && Imdb<=180){wireinvs111=50}
            else if(Imdb >180 && Imdb<=230){wireinvs111=70}
            else if(Imdb >230 && Imdb<=278){wireinvs111=95}
            else if(Imdb >278 && Imdb<=322){wireinvs111=120}
            else if(Imdb >322 && Imdb<=358){wireinvs111=150}
            else if(Imdb >358 && Imdb<=409){wireinvs111=185}
            else if(Imdb >409 && Imdb<=480){wireinvs111=240}
            else if(Imdb >480 && Imdb<=549){wireinvs111=300}
            else if(Imdb >549 && Imdb<=622){wireinvs111=400}
            else if(Imdb >622 && Imdb<=713){wireinvs111=500}
            else if(Imdb >713){wireinvs111=500}
}

        else if(wiremdb == 'สายไฟหุ้มฉนวน XLPE (หลายแกน)'){
            if(Imdb==0){wireinvs111=0}
            else if(Imdb<=21 && Imdb!=0){wireinvs111=2.5}
            else if(Imdb >27 && Imdb<=36){wireinvs111=4}
            else if(Imdb >36 && Imdb<=46){wireinvs111=6}
            else if(Imdb >46 && Imdb<=63){wireinvs111=10}
            else if(Imdb >63 && Imdb<=83){wireinvs111=16}
            else if(Imdb >83 && Imdb<=108){wireinvs111=25}
            else if(Imdb >108 && Imdb<=133){wireinvs111=35}
            else if(Imdb >133 && Imdb<=159){wireinvs111=50}
            else if(Imdb >159 && Imdb<=201){wireinvs111=70}
            else if(Imdb >201 && Imdb<=241){wireinvs111=95}
            else if(Imdb >241 && Imdb<=278){wireinvs111=120}
            else if(Imdb >278 && Imdb<=304){wireinvs111=150}
            else if(Imdb >304 && Imdb<=349){wireinvs111=185}
            else if(Imdb >349 && Imdb<=418){wireinvs111=240}
            else if(Imdb >418 && Imdb<=484){wireinvs111=300}
            else if(Imdb >484){wireinvs111=300}
}
$('#wire_mdb').val(wireinvs111)
})}) 

var groundmdb1
// ground mdb
$(document).ready(function() {
   $('#cb_mdb').keyup(function(){
    if(cbacmdb == 0){groundmdb1=0}   
    else if(cbacmdb <= 20 && cbacmdb!=0){groundmdb1 =2.5}
    else if(cbacmdb > 20 && cbacmdb<= 40){groundmdb1 =4}
    else if(cbacmdb > 40 && cbacmdb<= 70){groundmdb1 =6}
    else if(cbacmdb > 70 && cbacmdb<= 100){groundmdb1 =10}
    else if(cbacmdb > 100 && cbacmdb<= 200){groundmdb1 =16}
    else if(cbacmdb > 200 && cbacmdb<= 400){groundmdb1 =25}
    else if(cbacmdb > 400 && cbacmdb<= 500){groundmdb1 =35}
    else if(cbacmdb > 500 && cbacmdb<= 800){groundmdb1 =50}
    else if(cbacmdb > 800 && cbacmdb<= 1000){groundmdb1 =70}
    else if(cbacmdb > 1000 && cbacmdb<= 1250){groundmdb1 =95}
    else if(cbacmdb > 1250 && cbacmdb<= 2000){groundmdb1 =120}
    else if(cbacmdb > 2000 && cbacmdb<= 2500){groundmdb1 =185}
    else if(cbacmdb > 2500 && cbacmdb<= 4000){groundmdb1 =240}
    else if(cbacmdb > 4000 && cbacmdb<= 6000){groundmdb1 =400}
    $('#ground_mdb').val(groundmdb1)   

    })})
    $(document).ready(function() {
        $('.form-control').click(function(){
            wireinvs2 = $('#wire_mdb_select').val()
            wiremdb = $('#wiremdb').val()
        if(wiremdb == 'สายไฟหุ้มฉนวน PVC (1 แกน)'){
            if(wireinvs2==0){vd=0, areawireac=0}
            else if(wireinvs2==2.5){vd=0.018}//, areawireac=11.94
            else if(wireinvs2==4){vd=0.011}//, areawireac=15.21
            else if(wireinvs2==6){vd=0.0073}//, areawireac=19.63
            else if(wireinvs2==10){vd=0.0044}//, areawireac=32.17
            else if(wireinvs2==16){vd=0.0028}
            else if(wireinvs2==25){vd=0.00181}
            else if(wireinvs2==35){vd=0.00133}
            else if(wireinvs2==50){vd=0.001}
            else if(wireinvs2==70){vd=0.00071}
            else if(wireinvs2==95){vd=0.00056}
            else if(wireinvs2==120){vd=0.00048}
            else if(wireinvs2==150){vd=0.00041}
            else if(wireinvs2==185){vd=0.00036}
            else if(wireinvs2==240){vd=0.0003}
            else if(wireinvs2==300){vd=0.00027}
            else if(wireinvs2==400){vd=0.00025}
            else if(wireinvs2==500){vd=0.00023}
}
        else if(wiremdb == 'สายไฟหุ้มฉนวน PVC (หลายแกน)'){
            if(wireinvs2==0){vd=0}
            else if(wireinvs2==2.5){vd=0.018}
            else if(wireinvs2==4){vd=0.011}
            else if(wireinvs2==6){vd=0.0073}
            else if(wireinvs2==10){vd=0.0044}
            else if(wireinvs2==16){vd=0.0028}
            else if(wireinvs2==25){vd=0.00175}
            else if(wireinvs2==35){vd=0.00125}
            else if(wireinvs2==50){vd=0.00093}
            else if(wireinvs2==70){vd=0.00065}
            else if(wireinvs2==95){vd=0.00049}
            else if(wireinvs2==120){vd=0.00041}
            else if(wireinvs2==150){vd=0.00034}
            else if(wireinvs2==185){vd=0.00029}
            else if(wireinvs2==240){vd=0.00024}
            else if(wireinvs2==300){vd=0.00021}
        }
        
        else if(wiremdb == 'สายไฟหุ้มฉนวน XLPE (1 แกน)'){
            if(wireinvs2==0){vd=0}
            else if(wireinvs2==2.5){vd=0.019}
            else if(wireinvs2==4){vd=0.012}
            else if(wireinvs2==6){vd=0.0079}
            else if(wireinvs2==10){vd=0.0047}
            else if(wireinvs2==16){vd=0.0029}
            else if(wireinvs2==25){vd=0.00185}
            else if(wireinvs2==35){vd=0.00137}
            else if(wireinvs2==50){vd=0.00104}
            else if(wireinvs2==70){vd=0.00075}
            else if(wireinvs2==95){vd=0.00058}
            else if(wireinvs2==120){vd=0.00049}
            else if(wireinvs2==150){vd=0.00042}
            else if(wireinvs2==185){vd=0.00037}
            else if(wireinvs2==240){vd=0.00032}
            else if(wireinvs2==300){vd=0.00028}
            else if(wireinvs2==400){vd=0.00025}
            else if(wireinvs2==500){vd=0.00023}
}

        else if(wiremdb == 'สายไฟหุ้มฉนวน XLPE (หลายแกน)'){
            if(wireinvs2==0){vd=0}
            else if(wireinvs2==2.5){vd=0.019}
            else if(wireinvs2==4){vd=0.012}
            else if(wireinvs2==6){vd=0.0079}
            else if(wireinvs2==10){vd=0.0047}
            else if(wireinvs2==16){vd=0.0029}
            else if(wireinvs2==25){vd=0.00185}
            else if(wireinvs2==35){vd=0.00135}
            else if(wireinvs2==50){vd=0.00099}
            else if(wireinvs2==70){vd=0.00068}
            else if(wireinvs2==95){vd=0.00052}
            else if(wireinvs2==120){vd=0.00042}
            else if(wireinvs2==150){vd=0.00035}
            else if(wireinvs2==185){vd=0.0003}
            else if(wireinvs2==240){vd=0.00024}
            else if(wireinvs2==300){vd=0.00021}
}

        
        Vdrop_mdbs2= vd*datain.Iinv_acmax*Numberinv*$('#acsolar_Mdb').val()
        Per_vdropmdbs2 = (100/230)*Vdrop_mdbs2
        Ploss_mdbs2 = datain.Iinv_acmax*Numberinv*Vdrop_mdbs2
        Per_plossmdbs2 = (100*Ploss_mdbs2/(datain.Pinv_ac*Numberinv))
        $('#Vdrop_mdb_select').val(Vdrop_mdbs2.toFixed(2))
        $('#Per_vdropmdb_select').val(Per_vdropmdbs2.toFixed(2))
        $('#Ploss_mdb_select').val(Ploss_mdbs2.toFixed(2))
        $('#Per_plossmdb_select').val(Per_plossmdbs2.toFixed(2))
})}) 



   
         var energy  
         var eff  
         $(document).ready(function() {
             $('.form-control').keyup(function(){
                 eff = (((100-Per_plosspv002)*datain.Efficiency*(100-Per_plossacs2)*(100-Per_plossmdbs2))/100000000)*0.9
                 energy = (eff*Pmax1*sun)/1000
                 
             })})  
         $(document).ready(function() {
             $('.form-control').click(function(){
                eff = (((100-Per_plosspv002)*datain.Efficiency*(100-Per_plossacs2)*(100-Per_plossmdbs2))/100000000)*0.9
                 energy = (eff*Pmax1*sun)/1000
                 
             })})    
         var income
         
         $(document).ready(function() {
             $('.form-control').keyup(function(){
                 // ประหยัดสูงสุด เพราะไม่รู้พฤติกรรม
                      
                 eff = (((100-Per_plosspv1fs1)*datain.Efficiency*(100-Per_plossacs2))/1000000)*0.9
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
           
           
   




$(document).ready(function() {
   
    $('.form-control').mouseup(function(){
    
        Province = $('#Province').val();
    
    if (Province == 'เชียงใหม่') {
        $('#PSH').val(4.79);
    
    } else if (Province == 'เชียงราย') {
        $('#PSH').val(4.84);
    }else if (Province == 'น่าน') {
        $('#PSH').val(4.90);
    }else if (Province == 'พะเยา') {
        $('#PSH').val(4.88);
    }else if (Province == 'แพร่') {
        $('#PSH').val(4.94);
    }else if (Province == 'แม่ฮ่องสอน') {
        $('#PSH').val(4.92);
    }else if (Province == 'ลำปาง') {
        $('#PSH').val(4.94);
    }else if (Province == 'ลำพูน') {
        $('#PSH').val(4.94);
    }else if (Province == 'อุตรดิตถ์') {
        $('#PSH').val(5.05);
    }else if (Province == 'กาฬสินธุ์') {
        $('#PSH').val(5.05);
    }else if (Province == 'ขอนแก่น') {
        $('#PSH').val(4.91);
    }else if (Province == 'ชัยภูมิ') {
        $('#PSH').val(4.90);
    }else if (Province =='นครพนม' ) {
        $('#PSH').val(4.88);
    }else if (Province == 'นครราชสีมา') {
        $('#PSH').val(5.03);
    }else if (Province == 'บึงกาฬ') {
        $('#PSH').val(4.65);
    }else if (Province == 'บุรีรัมย์') {
        $('#PSH').val(5.03);
    }else if (Province == 'มหาสารคาม') {
        $('#PSH').val(5.05);
    }else if (Province == 'มุกดาหาร') {
        $('#PSH').val(4.94);
    }else if (Province == 'ยโสธร') {
        $('#PSH').val(5.18);
    }else if (Province == 'ร้อยเอ็ด') {
        $('#PSH').val(5.23);
    }else if (Province == 'เลย') {
        $('#PSH').val(4.86);
    }else if (Province == 'สกลนคร') {
        $('#PSH').val(4.96);
    }else if (Province == 'สุรินทร์') {
        $('#PSH').val(5.19);
    }else if (Province == 'ศรีสะเกษ') {
        $('#PSH').val(5.18);
    }else if (Province == 'หนองคาย') {
        $('#PSH').val(4.91);
    }else if (Province == 'หนองบัวลำภู') {
        $('#PSH').val(4.91);
    }else if (Province == 'อุดรธานี') {
        $('#PSH').val(4.91);
    }else if (Province == 'อุบลราชธานี') {
        $('#PSH').val(5.06);
    }else if (Province == 'อำนาจเจริญ') {
        $('#PSH').val(5.18);
    }else if (Province == 'กำแพงเพชร') {
        $('#PSH').val(4.79);
    }else if (Province == 'ชัยนาท') {
        $('#PSH').val(5.19);
    }else if (Province == 'นครนายก') {
        $('#PSH').val(5.01);
    } else if (Province == 'นครปฐม') {
        $('#PSH').val(5.14);
    }else if (Province == 'นครสวรรค์') {
        $('#PSH').val(4.76);
    }else if (Province == 'นนทบุรี') {
        $('#PSH').val(5.14);
    }else if (Province == 'ปทุมธานี') {
        $('#PSH').val(5.19);
    }else if (Province == 'พระนครศรีอยุธยา') {
        $('#PSH').val(5.19);
    }else if (Province == 'พิจิตร') {
        $('#PSH').val(5.18);
    }else if (Province == 'พิษณุโลก') {
        $('#PSH').val(5.05);
    }else if (Province == 'เพชรบูรณ์') {
        $('#PSH').val(4.89);
    }else if (Province == 'ลพบุรี') {
        $('#PSH').val(5.19);
    }else if (Province == 'สมุทรปราการ') {
        $('#PSH').val(5.14);
    }else if (Province == 'สมุทรสงคราม') {
        $('#PSH').val(4.66);
    }else if (Province == 'สมุทรสาคร') {
        $('#PSH').val(5.14);
    }else if (Province == 'สิงห์บุรี') {
        $('#PSH').val(5.19);
    }else if (Province == 'สุโขทัย') {
        $('#PSH').val(4.93);
    }else if (Province == 'สุพรรณบุรี') {
        $('#PSH').val(4.89);
    }else if (Province == 'สระบุรี') {
        $('#PSH').val(5.01);
    }else if (Province == 'อ่างทอง') {
        $('#PSH').val(5.19);
    }else if (Province == 'อุทัยธานี') {
        $('#PSH').val(4.76);
    }else if (Province == 'จันทบุรี') {
        $('#PSH').val(4.79);
    }else if (Province == 'ฉะเชิงเทรา') {
        $('#PSH').val(4.95);
    }else if (Province == 'ชลบุรี') {
        $('#PSH').val(4.95);
    }else if (Province == 'ตราด') {
        $('#PSH').val(4.79);
    }else if (Province == 'ปราจีนบุรี') {
        $('#PSH').val(5.01);
    }else if (Province == 'ระยอง') {
        $('#PSH').val(5.23);
    }else if (Province == 'สระแก้ว') {
        $('#PSH').val(4.95);
    }else if (Province == 'กาญจนบุรี') {
        $('#PSH').val(4.89);
    }else if (Province == 'ตาก') {
        $('#PSH').val(4.74);
    }else if (Province == 'ประจวบคีรีขันธ์') {
        $('#PSH').val(4.59);
    }else if (Province == 'เพชรบุรี') {
        $('#PSH').val(4.61);
    }else if (Province == 'ราชบุรี') {
        $('#PSH').val(4.66);
    }else if (Province =='กระบี่') {
        $('#PSH').val(5.19);
    }else if (Province == 'ชุมพร') {
        $('#PSH').val(4.64);
    }else if (Province == 'ตรัง') {
        $('#PSH').val(5.17);
    }else if (Province == 'นครศรีธรรมราช') {
        $('#PSH').val(4.75);
    }else if (Province == 'นราธิวาส') {
        $('#PSH').val(4.90);
    }else if (Province == 'ปัตตานี') {
        $('#PSH').val(4.90);
    }else if (Province == 'พังงา') {
        $('#PSH').val(5.19);
    }else if (Province == 'พัทลุง') {
        $('#PSH').val(4.75);
    }else if (Province == 'ภูเก็ต') {
        $('#PSH').val(5.43);
    }else if (Province =='ระนอง' ) {
        $('#PSH').val(5.02);
    }else if (Province == 'สตูล') {
        $('#PSH').val(5.32);
    }else if (Province == 'สงขลา') {
        $('#PSH').val(4.75);
    }else if (Province == 'สุราษฎร์ธานี') {
        $('#PSH').val(4.75);
    }else if (Province == 'ยะลา') {
        $('#PSH').val(4.90);
    }
})})

