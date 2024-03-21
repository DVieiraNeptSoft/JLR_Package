// var table = modeltableTaskSummary.getData();

// var order = ["CLI (623)", "IBF (623)", "PUT (623)", "INO (623)", "PSL (623)", "INO (623)"];

// // Sort the model based on the order array
// table.sort(function(a, b) {
//   var indexA = order.indexOf(a.taskCode);
//   var indexB = order.indexOf(b.taskCode);
//   return indexA - indexB;
// });

// modeltableTaskSummary.setData(table)

// // Output the sorted model
// console.log(table);

// Single Field Sort
const oSorter = new sap.ui.model.Sorter("fromDateTime", false, false);
const binding = tableColleagueDetail.getBinding("items");
binding.sort(oSorter);

var model = modeltableColleagueDetail.oData;

for (let i = 0; i < model.length; i++) {
    model[i].fromDateTime = formatDateTime(model[i].fromDateTime);
    model[i].toDateTime = formatDateTime(model[i].toDateTime);
}

modeltableColleagueDetail.setData(model);