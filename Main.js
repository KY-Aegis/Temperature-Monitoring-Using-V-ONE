function main(parameter){
    output=[];
     var arr = parameter[1];//store data from the latest sql table
     var checkarr=parameter[2];//store data from the outdated sql table to crosscheck with the updated one
     var arr1=[];//array to convert the columns to rows for the first database
     var arr2=[];//array to store the second database
     var finarr=[];//array to store the final value that will be passed to the esql
     var timeconver=0;//variable to convert the time format to prevent error in the eqsl
     var arr3=[];
     //loop to pass the data from the columns to row in the database
     arr.data.forEach(function(v){//for each row in the database
        timeconver=v.Time_Stamp;//store timestamp value in this variable
        timeconver=timeconver.substr(0,19);//get the variable index from 0 to 19 because there is a continuation after that that causes an error in the esql
        arr1.push({"Name":"Air_Circulation_Fan_1_Trip","Stat":Number(v.Air_Circulation_Fan_1_Trip),"Timer":timeconver});
        arr1.push({"Name":"Air_Circulation_Fan_2_Trip","Stat":Number(v.Air_Circulation_Fan_2_Trip),"Timer":timeconver});
        arr1.push({"Name":"Burner_High_Fire","Stat":Number(v.Burner_High_Fire),"Timer":timeconver});
        arr1.push({"Name":"Circ_Pump_Trip_Tank1","Stat":Number(v.Circ_Pump_Trip_Tank1),"Timer":timeconver});
        arr1.push({"Name":"Circ_Pump_Trip_Tank2","Stat":Number(v.Circ_Pump_Trip_Tank2),"Timer":timeconver});
        arr1.push({"Name":"Circ_Pump_Trip_Tank3","Stat":Number(v.Circ_Pump_Trip_Tank3),"Timer":timeconver});
        arr1.push({"Name":"Circ_Pump_Trip_Tank4","Stat":Number(v.Circ_Pump_Trip_Tank4),"Timer":timeconver});
        arr1.push({"Name":"Cond_Tank2_Sensor_Fault","Stat":Number(v.Cond_Tank2_Sensor_Fault),"Timer":timeconver});
        arr1.push({"Name":"Cond_Tank4_Sensor_Fault","Stat":Number(v.Cond_Tank4_Sensor_Fault),"Timer":timeconver});
        arr1.push({"Name":"Conv_Inv_trip","Stat":Number(v.Conv_Inv_trip),"Timer":timeconver});
        arr1.push({"Name":"Conveyor_Overspeed","Stat":Number(v.Conveyor_Overspeed),"Timer":timeconver});
        arr1.push({"Name":"Conveyor_Underspeed","Stat":Number(v.Conveyor_Underspeed),"Timer":timeconver});
        arr1.push({"Name":"Curing_Enter_Detect_Fault","Stat":Number(v.Curing_Enter_Detect_Fault),"Timer":timeconver});
        arr1.push({"Name":"Curing_Exit_Detect_Fault","Stat":Number(v.Curing_Exit_Detect_Fault),"Timer":timeconver});
        arr1.push({"Name":"Curing_Temp_Abnormal","Stat":Number(v.Curing_Temp_Abnormal),"Timer":timeconver});
        arr1.push({"Name":"Date_7","Stat":Number(v.Date_7),"Timer":timeconver});
        arr1.push({"Name":"DryOff_Enter_Detect_Fault","Stat":Number(v.DryOff_Enter_Detect_Fault),"Timer":timeconver});
        arr1.push({"Name":"DryOff_Exit_Detect_Fault","Stat":Number(v.DryOff_Exit_Detect_Fault),"Timer":timeconver});
        arr1.push({"Name":"DryOff_Temp_Abnormal","Stat":Number(v.DryOff_Temp_Abnormal),"Timer":timeconver});
        arr1.push({"Name":"High_level_Tank1","Stat":Number(v.High_level_Tank1),"Timer":timeconver});
        arr1.push({"Name":"High_level_Tank2","Stat":Number(v.High_level_Tank2),"Timer":timeconver});
        arr1.push({"Name":"High_level_Tank3","Stat":Number(v.High_level_Tank3),"Timer":timeconver});
        arr1.push({"Name":"High_level_Tank4","Stat":Number(v.High_level_Tank4),"Timer":timeconver});
        arr1.push({"Name":"LD_Enter_Detect_Fault","Stat":Number(v.LD_Enter_Detect_Fault),"Timer":timeconver});
        arr1.push({"Name":"Low_Level_Tank1","Stat":Number(v.Low_Level_Tank1),"Timer":timeconver});
        arr1.push({"Name":"Low_Level_Tank2","Stat":Number(v.Low_Level_Tank2),"Timer":timeconver});
        arr1.push({"Name":"Low_Level_Tank3","Stat":Number(v.Low_Level_Tank3),"Timer":timeconver});
        arr1.push({"Name":"Low_Level_Tank4","Stat":Number(v.Low_Level_Tank4),"Timer":timeconver});
        arr1.push({"Name":"PH_Tank1_Sensor_Fault","Stat":Number(v.PH_Tank1_Sensor_Fault),"Timer":timeconver});
        arr1.push({"Name":"PH_Tank3_Sensor_Fault","Stat":Number(v.PH_Tank3_Sensor_Fault),"Timer":timeconver});
        arr1.push({"Name":"PLC_Battery_Low_Voltage","Stat":Number(v.PLC_Battery_Low_Voltage),"Timer":timeconver});
        arr1.push({"Name":"PT_Enter_Detect_Fault","Stat":Number(v.PT_Enter_Detect_Fault),"Timer":timeconver});
        arr1.push({"Name":"PT_Exit_Detect_Fault","Stat":Number(v.PT_Exit_Detect_Fault),"Timer":timeconver});
        arr1.push({"Name":"PT_Inlet_Extraction_Fan_Trip","Stat":Number(v.PT_Inlet_Extraction_Fan_Trip),"Timer":timeconver});
        arr1.push({"Name":"PT_Outlet_Extraction_Fan_Trip","Stat":Number(v.PT_Outlet_Extraction_Fan_Trip),"Timer":timeconver});
        arr1.push({"Name":"Spray_Booth_Suction_Fan_1_Trip","Stat":Number(v.Spray_Booth_Suction_Fan_1_Trip),"Timer":timeconver});
        arr1.push({"Name":"Spray_Booth_Suction_Fan_2_Trip","Stat":Number(v.Spray_Booth_Suction_Fan_2_Trip),"Timer":timeconver});
        arr1.push({"Name":"Spray_Enter_Detect_Fault","Stat":Number(v.Spray_Enter_Detect_Fault),"Timer":timeconver});
        arr1.push({"Name":"Spray_Exit_Detect_Fault","Stat":Number(v.Spray_Exit_Detect_Fault),"Timer":timeconver});
        arr1.push({"Name":"Time_Stamp","Stat":Number(v.Time_Stamp),"Timer":timeconver});
        arr1.push({"Name":"UnLD_Exit_Detect_Fault","Stat":Number(v.UnLD_Exit_Detect_Fault),"Timer":timeconver});
        arr1.push({"Name":"Unauthorize_Loading","Stat":Number(v.Unauthorize_Loading),"Timer":timeconver});
        arr1.push({"Name":"Weigher1_Sensor_Fault","Stat":Number(v.Weigher1_Sensor_Fault),"Timer":timeconver});
        arr1.push({"Name":"Weigher2_Sensor_Fault","Stat":Number(v.Weigher2_Sensor_Fault),"Timer":timeconver});
        arr1.push({"Name":"Wet_paint_Detect_Fault","Stat":Number(v.Wet_paint_Detect_Fault),"Timer":timeconver});
        arr1.push({"Name":"LdTimeOver","Stat":Number(v.LdTimeOver),"Timer":timeconver});
        arr1.push({"Name":"PtTimeOver","Stat":Number(v.PtTimeOver),"Timer":timeconver});
        arr1.push({"Name":"PtDryOffTimeOver","Stat":Number(v.PtDryOffTimeOver),"Timer":timeconver});
        arr1.push({"Name":"DryOffTimeOver","Stat":Number(v.DryOffTimeOver),"Timer":timeconver});
        arr1.push({"Name":"DryOffBoothTimeOver","Stat":Number(v.DryOffBoothTimeOver),"Timer":timeconver});
        arr1.push({"Name":"BoothTimeOver","Stat":Number(v.BoothTimeOver),"Timer":timeconver});
        arr1.push({"Name":"BoothCuringTimeOver","Stat":Number(v.BoothCuringTimeOver),"Timer":timeconver});
        arr1.push({"Name":"CuringTimeOver","Stat":Number(v.CuringTimeOver),"Timer":timeconver});
        arr1.push({"Name":"UnLdTimeOver","Stat":Number(v.CuringTimeOver),"Timer":timeconver});
     });
	//loop to pass the data from the columns to row in the database
	
    //loop to store the second database
    checkarr.data.forEach(function(v){//for each row in the second database
        timeconver=v.Time_Stamp;//store timestamp in this variable
        timeconver=timeconver.substr(0,19);//get the variable index from 0 to 19 because there is a continuation after that that causes an error in the esql
        arr2.push({"Name":v.Machine_Name, "Stat":v.Stats,"Timer":timeconver});//push the entire row into the array
    });
	//loop to store the second database
    
    //loop to check for the array if the wall input and the database column name matches
    for (var a=0;a<arr1.length;a++){//loop for the number of items in array 1
        for (var b=0;b<arr2.length;b++){//loop for the number of items in array 2
        	if (arr1[a].Name==arr2[b].Name && arr1[a].Stat!=arr2[b].Stat && arr1[a].Stat==1 && arr2[b].Stat==0 && arr1[a].Timer!=arr2[b].Timer){
                
                finarr.push({"Name":arr1[a].Name}); //push the entire data into the array where the values will be data from the first database
                break;//break the loop to prevent any duplicates
            }
           
     	}
    }
    for (var c=0;c<arr1.length;c++){
        if (arr1[c].Name!='Date_7' && arr1[c].Name!='Time_Stamp'){
            arr3.push({"Name":arr1[c].Name,"Stat":arr1[c].Stat,"Timer":arr1[c].Timer});
        }
       
    }
   output[1]=JSON.stringify(finarr);//push the data to the output using json stringify as ESQL only accepts json data
   output[2]=JSON.stringify(arr3); 
   output[3]=JSON.stringify(arr2); 
   output[4]=JSON.stringify(arr1); 
   return output;
}