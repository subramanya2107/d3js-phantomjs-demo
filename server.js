var port, server, service, page, url,svgDrawer
fs = require('fs');
port = 9494;
server = require('webserver').create();
page = require('webpage').create();

service = server.listen(port, function (request, response) {
var drawerPayload = JSON.parse(request.post);
url = 'file:///' + fs.absolute('./'+drawerPayload.inFile);
page.open(url, function (status) {
    page.evaluate(function(data){
		$("body").on( "click", data, chartBuilder );
		$("body").click();
	}, drawerPayload.data);
	page.render(drawerPayload.outFile);
    response.statusCode = 200;
	response.write(true);
	response.close();
  });

});
if (service) {
	console.log('Web server running on port ' + port);
} else {
	console.log('Error: Could not create web server listening on port ' + port);
	phantom.exit();
}
