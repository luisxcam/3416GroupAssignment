google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart(data) {
    var data = google.visualization.arrayToDataTable([
        ['Products', 'Amount'],
        ['Available Products', 11],
        ['Used Products', 7]
    ]);
    var options = {
        title: 'Stock Details',
        pieHole: 0,
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}