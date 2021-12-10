function main(parameter){
    output=[];
    if (parameter[1]!='None'){
    var msgbody='<p>There is an error at process '+parameter[1]+'</p>';
    output[1]=msgbody;
   	output[2]=1;
    output[3]=parameter[1];
	}
    return output;
}


