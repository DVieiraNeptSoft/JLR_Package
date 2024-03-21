var warehouseData = xhr.responseJSON;

for (let i = 0; i < warehouseData.length; i++) {
    genericObj = {
        text: warehouseData[i].warehouseName,
        id: warehouseData[i].warehouseID,
        ref: "sap-icon://fa-solid/warehouse",
        nodes: []
    };

    genericArray.push(genericObj);
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

apigetDepartmentWareHouse(options);