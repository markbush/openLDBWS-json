function testService() {
  var service = getService_('rWKZWWQ3rfDe/GhVG3i1Rw==');
  var results = responseToJson_(service);
  Logger.log(JSON.stringify(results));
}

function getService_(service) {
  var body =
            '<ldb:GetServiceDetailsRequest>' +
                  '<ldb:serviceID>' + service + '</ldb:serviceID>' +
            '</ldb:GetServiceDetailsRequest>';

  return soap_(body, 'GetServiceDetails');
}
