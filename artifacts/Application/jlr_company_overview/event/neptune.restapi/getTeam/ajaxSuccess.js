var teamData = xhr.responseJSON;

for (let i = 0; i < genericArray.length; i++) {
    genericObj = {};

    // var filteredDepartmentArray = genericArray[i].nodes.filter((departmentitem) => departmentitem.id === genericArray[i].id);

    for (let a = 0; a < genericArray[i].nodes.length; a++) {
        var filteredTeamArray = teamData.filter(
            (item) => item.departmentID === genericArray[i].nodes[a].id
        );

        for (let b = 0; b < filteredTeamArray.length; b++) {
            genericObj = {
                text: filteredTeamArray[b].teamName,
                id: filteredTeamArray[b].teamID,
                ref: "sap-icon://work-history",
                nodes: [],
            };

            genericArray[i].nodes[a].nodes.push(genericObj);
        }
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

apigetTeamColleagues(options);