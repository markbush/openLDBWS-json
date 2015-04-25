function testDepartures() {
  var departures = getDepartures_('GTW', 10);
  var results = responseToJson_(departures);
  Logger.log(JSON.stringify(results));
}

function getDepartures_(station, numRows) {
  var body =
            '<ldb:GetDepartureBoardRequest>' +
                  '<ldb:numRows>' + numRows + '</ldb:numRows>' +
                  '<ldb:crs>' + station + '</ldb:crs>' +
            '</ldb:GetDepartureBoardRequest>';

  return soap_(body, 'GetDepartureBoard');
}
