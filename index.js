var recipes = new Object();

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
   obj[key] = value
  return obj
}

function deleteFromObjectsByKey (object, key) {
var obj = { foo: 'bar' }
var newObj = Object.assign({}, obj)
}
