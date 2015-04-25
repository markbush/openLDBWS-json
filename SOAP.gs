var TOKEN = 'YOUR OpenLDBWS TOKEN HERE';
var URL = 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb6.asmx';

function soap_(body, action) {
  var sr =
    '<?xml version="1.0"?>' +
    '<soap:Envelope ' +
        'xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ' +
        'xmlns:ldb="http://thalesgroup.com/RTTI/2014-02-20/ldb/" ' +
        'xmlns:typ="http://thalesgroup.com/RTTI/2010-11-01/ldb/commontypes">' +
        '<soap:Header>' +
            '<typ:AccessToken>' +
              '<typ:TokenValue>' + TOKEN + '</typ:TokenValue>' +
            '</typ:AccessToken>' +
        '</soap:Header>' +
        '<soap:Body>' +
            body +
        '</soap:Body>' +
    '</soap:Envelope>';

  var headers = {
    'SOAPAction': 'http://thalesgroup.com/RTTI/2012-01-13/ldb/' + action
  };
  var options = {
    'contentType': 'text/xml; charset=utf-8',
    'method': 'post',
    'headers': headers,
    'payload': sr,
    'muteHttpExceptions': true
  };

  var response = UrlFetchApp.fetch(URL, options);
  return response.getContentText();
}
