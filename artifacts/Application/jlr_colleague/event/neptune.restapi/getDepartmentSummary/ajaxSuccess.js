var table = modeltableDeparmentSummary.getData();

// var order = ["CLI", "CLO", "IBF", "INO", "PSL", "PUT"];
var order = ["Indirect", "Fork"];

// Sort the model based on the order array
table.sort(function(a, b) {
  var indexA = order.indexOf(a.type);
  var indexB = order.indexOf(b.type);
  return indexA - indexB;
});

modeltableDeparmentSummary.setData(table)

// Output the sorted model
console.log(table);