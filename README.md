d3js-phantomjs-demo
===================

Sample demo to create png out of d3js charts in server side by using phantomjs server
                
                How to Use (For Windows)
            
                
1:Install phantomJS http://attester.ariatemplates.com/usage/phantom.html

2:Download this project zip and extract

3:Open command prompt , navigate to this project directory

4:run command "phantomjs server.js" , this will start the server ,if everything goes well you can see the following message "web server is running on port 9494"

5: post data using  "curl -X POST -d @testdata.json -H "Content-Type: application/json" localhost:9494"


Post Params
===================
6: post data should have "inFile" which specifies the html to load, "outFile" which specifies the name of png
,"data" for generating the chart(this will be passed as a parameter to chartBuilder function which is in html  ) and "returnSvg" is optional set true if you want svg as response (Note:this svg will have only inline css)
```javascript
{
"data":[4, 8, 15, 16, 23, 42],
"outFile":"chart.png",
"inFile":"sample-chart.html",
"returnSvg":true
}
```
To Add new charts
===================
7: so if you want to create new charts just make a copy of sample-chart.html , change the code in chartBuilder function,
make sure not change function name and not remove added scripts.

8: change the "inFile" in input data to match the new html.file 


For linux users
===================
9:  check server.js code line #9 url = 'file:///' + fs.absolute('./'+drawerPayload.inFile); you might have to change


