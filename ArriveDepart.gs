function testArrivalsDepartures() {
  var arrivalsDepartures = getArrivalsDepartures_('MYB', 5);
  var results = responseToJson_(arrivalsDepartures);
  Logger.log(JSON.stringify(results));
}

function getArrivalsDepartures_(station, numRows) {
  var body =
            '<ldb:GetArrivalDepartureBoardRequest>' +
                  '<ldb:numRows>' + numRows + '</ldb:numRows>' +
                  '<ldb:crs>' + station + '</ldb:crs>' +
            '</ldb:GetArrivalDepartureBoardRequest>';

  return soap_(body, 'GetArrivalDepartureBoard');
}
