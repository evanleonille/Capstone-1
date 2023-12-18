
document.getElementById('switchChartPie').addEventListener('click', function() {
    document.getElementById('pieChartContainer').style.display = 'none';
    document.getElementById('barChartContainer').style.display = 'block';
});

document.getElementById('switchChartBar').addEventListener('click', function() {
    document.getElementById('barChartContainer').style.display = 'none';
    document.getElementById('pieChartContainer').style.display = 'block';
});