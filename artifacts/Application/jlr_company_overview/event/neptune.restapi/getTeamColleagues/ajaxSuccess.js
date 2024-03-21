var teamColleagueData = xhr.responseJSON;

for (let i = 0; i < genericArray.length; i++) {
    //Warehouse
    genericObj = {};

    // var filteredDepartmentArray = genericArray[i].nodes.filter((departmentitem) => departmentitem.id === genericArray[i].id);

    for (let a = 0; a < genericArray[i].nodes.length; a++) {
        //Department

        // var filteredTeamArray = teamData.filter(
        //     (item) => item.departmentID === genericArray[i].nodes[a].id
        // );

        for (let b = 0; b < genericArray[i].nodes[a].nodes.length; b++) {
            //Team

            var filteredTeamColleagueArray = teamColleagueData.filter(
                (item) => item.teamID === genericArray[i].nodes[a].nodes[b].id
            );

            for (let c = 0; c < filteredTeamColleagueArray.length; c++) {}

            genericObj = {
                text: filteredTeamColleagueArray[b].colleagueName,
                id: filteredTeamColleagueArray[b].colleagueID,
                ref: "sap-icon://person-placeholder"
            };

            genericArray[i].nodes[a].nodes[b].nodes.push(genericObj);
        }
    }
}

genericArray.sort((a, b) => a.id - b.id);

console.log(genericArray);

modelTree.setData(genericArray);

// debugger;