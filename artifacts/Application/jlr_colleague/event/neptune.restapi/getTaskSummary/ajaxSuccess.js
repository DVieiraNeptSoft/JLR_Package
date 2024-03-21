var table = modeltableTaskSummary.getData();

var order = ["CLI", "CLO", "IBF", "INO", "PSL", "PUT"];

// Sort the model based on the order array
table.sort(function(a, b) {
  var indexA = order.indexOf(a.taskCode);
  var indexB = order.indexOf(b.taskCode);
  return indexA - indexB;
});

modeltableTaskSummary.setData(table)

// Output the sorted model
console.log(table);