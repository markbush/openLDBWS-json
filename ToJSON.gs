function responseToJson_(response) {
  var xml = XmlService.parse(response);
  return xmlToJson_(xml.getRootElement());
}

function xmlToJson_(element) {
  var result = {};
  var children = element.getChildren();
  if (children.length == 0) {
    result = element.getValue();
  } else {
    for (var i=0; i<children.length; i++) {
      var child = children[i];
      var name = child.getName();
      var value = xmlToJson_(child);
      if (name == 'service' || name == 'callingPointList' || name == 'callingPoint' || name == 'location') {
        if (typeof result[name] === "undefined") {
          result[name] = [];
        }
        result[name].push(value);
      } else {
        result[name] = value;
      }
    }
  }
  return result;
}
