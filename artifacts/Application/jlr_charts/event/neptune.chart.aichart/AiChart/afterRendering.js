const chartOptions = {
    credits: {
        enabled: false,
    },
    chart: {
        type: "pie",
    },
    title: {
        text: "Overall Performance of 3 Warehouses",
    },
    series: [
        {
            name: "Performance",
            data: [
                {
                    name: "Warehouse London",
                    y: 60,
                },
                {
                    name: "Warehouse Madrid",
                    y: 30,
                },
                {
                    name: "Warehouse Munich",
                    y: 10,
                },
            ],
        },
    ],
};

Highcharts.chart("AiChart", chartOptions);
