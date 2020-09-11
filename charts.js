        // Load google charts
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);

        // Draw the chart and set the chart values
        function drawChart() {
            let data = google.visualization.arrayToDataTable([
                ['Task', 'total bought'],
                ['Milk', 105],
                ['Eggs', 90],
                ['Bread', 79],
                ['Oil', 60],
                ['Soda', 28]
            ]);
            let sales = google.visualization.arrayToDataTable([
                ['Task', 'daily sales'],
                ['Monday', 7000],
                 ['Tuesday', 12070],
                ['Wednesday', 9450],
                ['Thursday', 6015],
                ['Friday', 13045],
                ['Saturday', 5805],



            ]);
            let stock=google.visualization.arrayToDataTable([
                 ['Task', 'stock remaining'],
                ['Milk', 45],
                ['Eggs', 80],
                ['Bread', 25],
                ['Oil', 40],
                ['Toilet paper',20],

            ]);
            let bonus=google.visualization.arrayToDataTable([
                ['TASK','target for bonus'],
                ['sales reached',56],
                ['percentage left to reach target',44]
            ]);

    options1={'title': 'popular products this week', 'width': 400, 'height': 350, 'backgroundColor': "#FFF4" };            
         sales_options={'title': 'daily sales', 'width': 710, 'height': 350, 'backgroundColor': "#FFF4" };
          stock_options={'title':'stock remaining','width':300,'height':'auto','backgroundColor': "#FFF4" };
        bonus_options={'title':'target for bonus',pieHole: 0.4,'width':300,'height':'auto','backgroundColor': "#FFF4" };

            // Display the chart inside the <div> element with id="piechart"
            let chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options1);
            let chart1 = new google.visualization.PieChart(document.getElementById('bonus-chart'));
            chart1.draw(bonus, bonus_options);
            let chart2 = new google.visualization.LineChart(document.getElementById('linechart'));
            chart2.draw(sales, sales_options)
             let chart4= new google.visualization.LineChart(document.getElementById('barchart'));
            chart4.draw(data, options1);
            let chart3=new google.visualization.BarChart(document.getElementById('stock-chart'));
            chart3.draw(stock,stock_options)
        }
