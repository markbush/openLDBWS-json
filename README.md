# openLDBWS-json
Google Apps Script interface to wrap the OpenLDBWS SOAP service with JSON

You can easily create your own JSON wrapper for the OpenLDBWS SOAP service using this project.  Create a new script in Google Drive and add the code.  You can put it all into one file, but I find it better to split it up like it is in this project as that makes it easier to manage.

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

Some trains can have multiple origins and/or destinations because trains can split or join.  I have not seen an example of this, so the results of this application won't be able to handle those correctly.  If this is important for you and you find one of these trains, you should be able to update the code in ToJSON.gs in the same way as the "service" and "callingPoint" items.
