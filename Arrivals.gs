function testArrivals() {
  var arrivals = getArrivals_('MYB', 5);
  var results = responseToJson_(arrivals);
  Logger.log(JSON.stringify(results));
}

function getArrivals_(station, numRows) {
  var body =
            '<ldb:GetArrivalBoardRequest>' +
                  '<ldb:numRows>' + numRows + '</ldb:numRows>' +
                  '<ldb:crs>' + station + '</ldb:crs>' +
            '</ldb:GetArrivalBoardRequest>';

  return soap_(body, 'GetArrivalBoard');
}
