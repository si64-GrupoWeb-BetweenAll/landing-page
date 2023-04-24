export {drawCharts}

function drawCharts() {
    drawAxisTickColors()
}

function drawAxisTickColors() {

    const data = google.visualization.arrayToDataTable([
        ['City', '2022 Usuarios', '2023 Usuarios'],
        ['Pueblo Libre', 8175, 8008],
        ['Miraflores', 3792, 3694],
        ['San Isidro', 2695, 2896],
        ['La Molina', 2099, 1953],
        ['Surco', 1526, 1517]
    ]);

    const options = {
        title: 'Usuarios de algunos distritos de Lima',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Usuarios',
            minValue: 0,
            textStyle: {
                bold: true,
                fontSize: 12,
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: true,
                fontSize: 18,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            title: 'Distrito',
            textStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            },
            titleTextStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            }
        }
    };

    const chart = new google.visualization.BarChart(document.getElementById('axis_tick_div'));
    chart.draw(data, options);

    $(window).resize(function () {
        chart.draw(data, options);
    });

}
