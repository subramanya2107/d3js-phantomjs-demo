d3js-phantomjs-demo
===================

Sample demo to create png out of d3js charts in server side by using phantomjs server
                
                How to Use (For Windows)
1:Install phantomJS http://attester.ariatemplates.com/usage/phantom.html

2:Download this project zip and extract

3:Open command prompt , navigate to this project directory

4:run command "phantomjs server.js" , this will start the server ,if everything goes well you can see the following message "web server is running on port 9494"

5: post data using  "curl -X POST -d @testdata.json -H "Content-Type: application/json" localhost:9494"

6: post data should have "inFile" which specifies the html to load, "outFile" which specifies the name of png
and data for generating the chart

7: so if you want to create new charts just make a copy of sample-chart.html , change the code in chartBuilder function,
make sure not change function name and not remove added scripts.

8: change the "inFile" in inupt data to match the new html.file 

