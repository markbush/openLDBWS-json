# openLDBWS-json
Google Apps Script interface to wrap the OpenLDBWS SOAP service with JSON

You can easily create your own JSON wrapper for the OpenLDBWS SOAP service using this project.  Create a new script in Google Drive and add the code.  You can put it all into one file, but I find it better to split it up like it is in this project as that makes it easier to manage.

You need to obtain your own token to make use of the OpenLDBWS service and add this to the Code.gs file.  You can get a token by visiting the National Rail developer support page:

http://www.nationalrail.co.uk/46391.aspx

Once you have saved the code, publish it (Publish->Deploy as web app) and note the URL that has been created.  This will be of the form:

https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec

All the calls require you to supply CRS codes for the stations.  You will need to be able to provide these, however I have included a CSV file in this project containing these codes along with GPS coordinates.

To get a list of departures from a station:

https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec?q=departures&station=PAD

To get arrivals:

https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec?q=arrivals&station=PAD

For combined arrivals and departures:

https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec?q=arrivalsDepartures&station=PAD

For details on a specific service:

https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec?q=service&service=rWKZWWQ3rfDe/GhVG3i1Rw==

Note:

The following keys produce lists: service, callingPoint, location.

service: this represents the list of services requested for a station

callingPoint: this is the list of stations the train has called at or is due to call at

location: trains can have multiple origins and destinations as they can split and join
