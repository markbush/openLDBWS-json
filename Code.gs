var TOKEN = 'YOUR OpenLDBWS TOKEN HERE';
var URL = 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb6.asmx';

function doGet(request) {
  var query = request.parameters.q;
  var results = {'error': 'Unknown query: ' + query};
  if (query == 'departures') {
    var station = request.parameters.station;
    var departures = getDepartures_(station, 10);
    var results = responseToJson_(departures);
  } else if (query == 'arrivals') {
    var station = request.parameters.station;
    var arrivals = getArrivals_(station, 10);
    var results = responseToJson_(arrivals);
  } else if (query == 'arrivalsDepartures') {
    var station = request.parameters.station;
    var arrivalsDepartures = getArrivalsDepartures_(station, 10);
    var results = responseToJson_(arrivalsDepartures);
  } else if (query == 'service') {
    var service = request.parameters.service;
    var serviceDetails = getService_(service, 10);
    var results = responseToJson_(serviceDetails);
  }
  return ContentService.createTextOutput(JSON.stringify(results))
    .setMimeType(ContentService.MimeType.JSON);
}
