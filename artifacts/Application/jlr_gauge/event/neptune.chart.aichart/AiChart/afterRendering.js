const chartOptions = {
    chart: {
        type: "column",
        backgroundColor: "#f7f7f7",
        plotBorderColor: "#cccccc",
        plotBorderWidth: 1,
        borderRadius: 5,
    },
    title: {
        text: "General Temperature for UK 2024",
        style: {
            color: "#333333",
            fontSize: "18px",
            fontWeight: "bold",
        },
    },
    xAxis: {
        categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        labels: {
            style: {
                color: "#333333",
            },
        },
    },
    yAxis: {
        title: {
            text: "Temperature (°C)",
            style: {
                color: "#333333",
            },
        },
        labels: {
            style: {
                color: "#333333",
            },
        },
    },
    legend: {
        enabled: false,
    },
    credits: {
        enabled: false,
    },
    series: [
        {
            name: "Temperature",
            data: [5, 6, 8, 12, 15, 18, 20, 19, 16, 12, 8, 6],
            color: "#66b3ff",
        },
    ],
};

Highcharts.chart("AiChart", chartOptions);
