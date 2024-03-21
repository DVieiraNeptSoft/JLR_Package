var departmentData = xhr.responseJSON;

for (let i = 0; i < genericArray.length; i++) {
    genericObj = {};
    
    var filteredArray = departmentData.filter((item) => item.warehouseID === genericArray[i].id);

    for (let a = 0; a < filteredArray.length; a++) {
        genericObj = {
            text: filteredArray[a].departmentName,
            id: filteredArray[a].departmentID,
            ref: "sap-icon://fa-regular/building",
            nodes: [],
        };

        genericArray[i].nodes.push(genericObj);
    }
}

genericArray.sort((a, b) => a.id - b.id);

console.log(genericArray);

var options = {
    parameters: {
        "where": "", // Optional 
        "select": "", // Optional 
        "take": "", // Optional 
        "skip": "", // Optional 
        "order": "" // Optional 
    }
};

apigetTeam(options);