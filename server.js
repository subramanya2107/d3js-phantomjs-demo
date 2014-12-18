var port, server, service, page, url,svgDrawer
fs = require('fs');
port = 9494;
server = require('webserver').create();
page = require('webpage').create();

service = server.listen(port, function (request, response) {
 var drawerPayload = null;
	try{
		drawerPayload=JSON.parse(request.post);
	}catch(e){
	 	response.statusCode = 417;
		response.write("Error : Invalid Input JSON");
		response.close();
		return;
	}
url = 'file:///' + fs.absolute('./'+drawerPayload.inFile);
page.open(url, function (status) {
	 if(status=="success"){
		var chartSVG=page.evaluate(function(data){
			$("body").on( "click", data, chartBuilder );
			$("body").click();
			return $("#chart-container").html();
		}, drawerPayload.data);
		
		page.render(drawerPayload.outFile);
		response.statusCode = 200;
	if(drawerPayload.returnSvg)
			response.write(chartSVG);
		else
			response.write(true);
	}else{
		response.statusCode = 404;
		response.write("Not Found"+url);
	}
	response.close();
	return;
  });
page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item) {
        console.log('  ', item.file, ':', item.line);
    })
	response.statusCode = 417;
	response.write("Error : "+msg);
	response.close();
	return;
}
});
if (service) {
	console.log('Web server running on port ' + port);
} else {
	console.log('Error: Could not create web server listening on port ' + port);
	phantom.exit();
}
