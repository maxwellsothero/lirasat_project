'use strict';
$(document).ready(function() {
    // sale analyics start
    var charts1 = AmCharts.makeChart("sales-analytics", {
        "type": "serial",
        "theme": "light",
        "marginRight": 15,
        "marginLeft": 15,
        "autoMarginOffset": 20,
        "dataDateFormat": "YYYY-MM-DD",
        "valueAxes": [{
            "id": "v1",
            "axisAlpha": 0,
            "position": "left",
            "ignoreAxisWidth": true
        }],
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "graphs": [{
            "id": "g1",
            "balloon": {
                "drop": true,
                "adjustBorderColor": false,
                "color": "#ffffff",
                "type": "smoothedLine"
            },
            "fillAlphas": 0.3,
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "lineColor": "#9ccc65",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 3,
            "title": "red line",
            "useLineColorForBulletBorder": true,
            "valueField": "value",
            "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
        }],
        "chartCursor": {
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "zoomable": false,
            "valueZoomable": true,
            "valueLineAlpha": 0.5
        },
        "chartScrollbar": {
            "autoGridCount": true,
            "graph": "g1",
            "oppositeAxis": true,
            "scrollbarHeight": 40
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "export": {
            "enabled": true
        },
        "dataProvider": [{
            "date": "2012-07-27",
            "value": 13
        }, {
            "date": "2012-07-28",
            "value": 11
        }, {
            "date": "2012-07-29",
            "value": 15
        }, {
            "date": "2012-07-30",
            "value": 16
        }, {
            "date": "2012-07-31",
            "value": 18
        }, {
            "date": "2012-08-01",
            "value": 13
        }, {
            "date": "2012-08-02",
            "value": 22
        }, {
            "date": "2012-08-03",
            "value": 23
        }, {
            "date": "2012-08-04",
            "value": 20
        }, {
            "date": "2012-08-05",
            "value": 17
        }, {
            "date": "2012-08-06",
            "value": 16
        }, {
            "date": "2012-08-07",
            "value": 18
        }, {
            "date": "2012-08-08",
            "value": 21
        }, {
            "date": "2012-08-09",
            "value": 26
        }, {
            "date": "2012-08-10",
            "value": 24
        }, {
            "date": "2012-08-11",
            "value": 29
        }, {
            "date": "2012-08-12",
            "value": 32
        }, {
            "date": "2012-08-13",
            "value": 18
        }, {
            "date": "2012-08-14",
            "value": 24
        }, {
            "date": "2012-08-15",
            "value": 22
        }, {
            "date": "2012-08-16",
            "value": 18
        }, {
            "date": "2012-08-17",
            "value": 19
        }, {
            "date": "2012-08-18",
            "value": 14
        }, {
            "date": "2012-08-19",
            "value": 15
        }, {
            "date": "2012-08-20",
            "value": 12
        }, {
            "date": "2012-08-21",
            "value": 8
        }, {
            "date": "2012-08-22",
            "value": 9
        }, {
            "date": "2012-08-23",
            "value": 8
        }, {
            "date": "2012-08-24",
            "value": 7
        }, {
            "date": "2012-08-25",
            "value": 5
        }, {
            "date": "2012-08-26",
            "value": 11
        }, {
            "date": "2012-08-27",
            "value": 13
        }, {
            "date": "2012-08-28",
            "value": 18
        }, {
            "date": "2012-08-29",
            "value": 20
        }, {
            "date": "2012-08-30",
            "value": 29
        }, {
            "date": "2012-08-31",
            "value": 33
        }, {
            "date": "2012-09-01",
            "value": 42
        }, {
            "date": "2012-09-02",
            "value": 35
        }, {
            "date": "2012-09-03",
            "value": 31
        }, {
            "date": "2012-09-04",
            "value": 47
        }, {
            "date": "2012-09-05",
            "value": 52
        }, {
            "date": "2012-09-06",
            "value": 46
        }, {
            "date": "2012-09-07",
            "value": 41
        }, {
            "date": "2012-09-08",
            "value": 43
        }, {
            "date": "2012-09-09",
            "value": 40
        }, {
            "date": "2012-09-10",
            "value": 39
        }, {
            "date": "2012-09-11",
            "value": 34
        }, {
            "date": "2012-09-12",
            "value": 29
        }, {
            "date": "2012-09-13",
            "value": 34
        }, {
            "date": "2012-09-14",
            "value": 37
        }, {
            "date": "2012-09-15",
            "value": 42
        }, {
            "date": "2012-09-16",
            "value": 49
        }, {
            "date": "2012-09-17",
            "value": 46
        }, {
            "date": "2012-09-18",
            "value": 47
        }, {
            "date": "2012-09-19",
            "value": 55
        }, {
            "date": "2012-09-20",
            "value": 59
        }, {
            "date": "2012-09-21",
            "value": 58
        }, {
            "date": "2012-09-22",
            "value": 57
        }, {
            "date": "2012-09-23",
            "value": 61
        }, {
            "date": "2012-09-24",
            "value": 59
        }, {
            "date": "2012-09-25",
            "value": 67
        }, {
            "date": "2012-09-26",
            "value": 65
        }, {
            "date": "2012-09-27",
            "value": 61
        }, {
            "date": "2012-09-28",
            "value": 66
        }, {
            "date": "2012-09-29",
            "value": 69
        }, {
            "date": "2012-09-30",
            "value": 71
        }, {
            "date": "2012-10-01",
            "value": 67
        }, {
            "date": "2012-10-02",
            "value": 63
        }, {
            "date": "2012-10-03",
            "value": 46
        }, {
            "date": "2012-10-04",
            "value": 32
        }, {
            "date": "2012-10-05",
            "value": 21
        }, {
            "date": "2012-10-06",
            "value": 18
        }, {
            "date": "2012-10-07",
            "value": 21
        }, {
            "date": "2012-10-08",
            "value": 28
        }, {
            "date": "2012-10-09",
            "value": 27
        }, {
            "date": "2012-10-10",
            "value": 36
        }, {
            "date": "2012-10-11",
            "value": 33
        }, {
            "date": "2012-10-12",
            "value": 31
        }, {
            "date": "2012-10-13",
            "value": 30
        }, {
            "date": "2012-10-14",
            "value": 34
        }, {
            "date": "2012-10-15",
            "value": 38
        }, {
            "date": "2012-10-16",
            "value": 37
        }, {
            "date": "2012-10-17",
            "value": 44
        }, {
            "date": "2012-10-18",
            "value": 49
        }, {
            "date": "2012-10-19",
            "value": 53
        }, {
            "date": "2012-10-20",
            "value": 57
        }, {
            "date": "2012-10-21",
            "value": 60
        }, {
            "date": "2012-10-22",
            "value": 61
        }, {
            "date": "2012-10-23",
            "value": 69
        }, {
            "date": "2012-10-24",
            "value": 67
        }, {
            "date": "2012-10-25",
            "value": 72
        }, {
            "date": "2012-10-26",
            "value": 77
        }, {
            "date": "2012-10-27",
            "value": 75
        }, {
            "date": "2012-10-28",
            "value": 70
        }, {
            "date": "2012-10-29",
            "value": 72
        }, {
            "date": "2012-10-30",
            "value": 70
        }, {
            "date": "2012-10-31",
            "value": 72
        }, {
            "date": "2012-11-01",
            "value": 73
        }, {
            "date": "2012-11-02",
            "value": 67
        }, {
            "date": "2012-11-03",
            "value": 68
        }, {
            "date": "2012-11-04",
            "value": 65
        }, {
            "date": "2012-11-05",
            "value": 71
        }, {
            "date": "2012-11-06",
            "value": 75
        }, {
            "date": "2012-11-07",
            "value": 74
        }, {
            "date": "2012-11-08",
            "value": 71
        }, {
            "date": "2012-11-09",
            "value": 76
        }, {
            "date": "2012-11-10",
            "value": 77
        }, {
            "date": "2012-11-11",
            "value": 81
        }, {
            "date": "2012-11-12",
            "value": 83
        }, {
            "date": "2012-11-13",
            "value": 80
        }, {
            "date": "2012-11-14",
            "value": 81
        }, {
            "date": "2012-11-15",
            "value": 87
        }, {
            "date": "2012-11-16",
            "value": 82
        }, {
            "date": "2012-11-17",
            "value": 86
        }, {
            "date": "2012-11-18",
            "value": 80
        }, {
            "date": "2012-11-19",
            "value": 87
        }, {
            "date": "2012-11-20",
            "value": 83
        }, {
            "date": "2012-11-21",
            "value": 85
        }, {
            "date": "2012-11-22",
            "value": 84
        }, {
            "date": "2012-11-23",
            "value": 82
        }, {
            "date": "2012-11-24",
            "value": 73
        }, {
            "date": "2012-11-25",
            "value": 71
        }, {
            "date": "2012-11-26",
            "value": 75
        }, {
            "date": "2012-11-27",
            "value": 79
        }, {
            "date": "2012-11-28",
            "value": 70
        }, {
            "date": "2012-11-29",
            "value": 73
        }, {
            "date": "2012-11-30",
            "value": 61
        }, {
            "date": "2012-12-01",
            "value": 62
        }, {
            "date": "2012-12-02",
            "value": 66
        }, {
            "date": "2012-12-03",
            "value": 65
        }, {
            "date": "2012-12-04",
            "value": 73
        }, {
            "date": "2012-12-05",
            "value": 79
        }, {
            "date": "2012-12-06",
            "value": 78
        }, {
            "date": "2012-12-07",
            "value": 78
        }, {
            "date": "2012-12-08",
            "value": 78
        }, {
            "date": "2012-12-09",
            "value": 74
        }, {
            "date": "2012-12-10",
            "value": 73
        }, {
            "date": "2012-12-11",
            "value": 75
        }, {
            "date": "2012-12-12",
            "value": 70
        }, {
            "date": "2012-12-13",
            "value": 77
        }, {
            "date": "2012-12-14",
            "value": 67
        }, {
            "date": "2012-12-15",
            "value": 62
        }, {
            "date": "2012-12-16",
            "value": 64
        }, {
            "date": "2012-12-17",
            "value": 61
        }, {
            "date": "2012-12-18",
            "value": 59
        }, {
            "date": "2012-12-19",
            "value": 53
        }, {
            "date": "2012-12-20",
            "value": 54
        }, {
            "date": "2012-12-21",
            "value": 56
        }, {
            "date": "2012-12-22",
            "value": 59
        }, {
            "date": "2012-12-23",
            "value": 58
        }, {
            "date": "2012-12-24",
            "value": 55
        }, {
            "date": "2012-12-25",
            "value": 52
        }, {
            "date": "2012-12-26",
            "value": 54
        }, {
            "date": "2012-12-27",
            "value": 50
        }, {
            "date": "2012-12-28",
            "value": 50
        }, {
            "date": "2012-12-29",
            "value": 51
        }, {
            "date": "2012-12-30",
            "value": 52
        }, {
            "date": "2012-12-31",
            "value": 58
        }, {
            "date": "2013-01-01",
            "value": 60
        }, {
            "date": "2013-01-02",
            "value": 67
        }, {
            "date": "2013-01-03",
            "value": 64
        }, {
            "date": "2013-01-04",
            "value": 66
        }, {
            "date": "2013-01-05",
            "value": 60
        }, {
            "date": "2013-01-06",
            "value": 63
        }, {
            "date": "2013-01-07",
            "value": 61
        }, {
            "date": "2013-01-08",
            "value": 60
        }, {
            "date": "2013-01-09",
            "value": 65
        }, {
            "date": "2013-01-10",
            "value": 75
        }, {
            "date": "2013-01-11",
            "value": 77
        }, {
            "date": "2013-01-12",
            "value": 78
        }, {
            "date": "2013-01-13",
            "value": 70
        }, {
            "date": "2013-01-14",
            "value": 70
        }, {
            "date": "2013-01-15",
            "value": 73
        }, {
            "date": "2013-01-16",
            "value": 71
        }, {
            "date": "2013-01-17",
            "value": 74
        }, {
            "date": "2013-01-18",
            "value": 78
        }, {
            "date": "2013-01-19",
            "value": 85
        }, {
            "date": "2013-01-20",
            "value": 82
        }, {
            "date": "2013-01-21",
            "value": 83
        }, {
            "date": "2013-01-22",
            "value": 88
        }, {
            "date": "2013-01-23",
            "value": 85
        }, {
            "date": "2013-01-24",
            "value": 85
        }, {
            "date": "2013-01-25",
            "value": 80
        }, {
            "date": "2013-01-26",
            "value": 87
        }, {
            "date": "2013-01-27",
            "value": 84
        }, {
            "date": "2013-01-28",
            "value": 83
        }, {
            "date": "2013-01-29",
            "value": 84
        }, {
            "date": "2013-01-30",
            "value": 81
        }]
    });
    // sale analyics end
    setTimeout(function() {
        charts1.zoomToIndexes(Math.round(charts1.dataProvider.length * 0.45), Math.round(charts1.dataProvider.length * 0.6));
    }, 800);
    // sale analyics end
    // allocation map start
    var map = AmCharts.makeChart("allocation-map", {
        "type": "map",
        "theme": "light",
        "colorSteps": 10,
        "dataProvider": {
            "map": "usaLow",
            "areas": [{
                "id": "US-AL",
                "value": 4447100
            }, {
                "id": "US-AK",
                "value": 626932
            }, {
                "id": "US-AZ",
                "value": 5130632
            }, {
                "id": "US-AR",
                "value": 2673400
            }, {
                "id": "US-CA",
                "value": 33871648
            }, {
                "id": "US-CO",
                "value": 4301261
            }, {
                "id": "US-CT",
                "value": 3405565
            }, {
                "id": "US-DE",
                "value": 783600
            }, {
                "id": "US-FL",
                "value": 15982378
            }, {
                "id": "US-GA",
                "value": 8186453
            }, {
                "id": "US-HI",
                "value": 1211537
            }, {
                "id": "US-ID",
                "value": 1293953
            }, {
                "id": "US-IL",
                "value": 12419293
            }, {
                "id": "US-IN",
                "value": 6080485
            }, {
                "id": "US-IA",
                "value": 2926324
            }, {
                "id": "US-KS",
                "value": 2688418
            }, {
                "id": "US-KY",
                "value": 4041769
            }, {
                "id": "US-LA",
                "value": 4468976
            }, {
                "id": "US-ME",
                "value": 1274923
            }, {
                "id": "US-MD",
                "value": 5296486
            }, {
                "id": "US-MA",
                "value": 6349097
            }, {
                "id": "US-MI",
                "value": 9938444
            }, {
                "id": "US-MN",
                "value": 4919479
            }, {
                "id": "US-MS",
                "value": 2844658
            }, {
                "id": "US-MO",
                "value": 5595211
            }, {
                "id": "US-MT",
                "value": 902195
            }, {
                "id": "US-NE",
                "value": 1711263
            }, {
                "id": "US-NV",
                "value": 1998257
            }, {
                "id": "US-NH",
                "value": 1235786
            }, {
                "id": "US-NJ",
                "value": 8414350
            }, {
                "id": "US-NM",
                "value": 1819046
            }, {
                "id": "US-NY",
                "value": 18976457
            }, {
                "id": "US-NC",
                "value": 8049313
            }, {
                "id": "US-ND",
                "value": 642200
            }, {
                "id": "US-OH",
                "value": 11353140
            }, {
                "id": "US-OK",
                "value": 3450654
            }, {
                "id": "US-OR",
                "value": 3421399
            }, {
                "id": "US-PA",
                "value": 12281054
            }, {
                "id": "US-RI",
                "value": 1048319
            }, {
                "id": "US-SC",
                "value": 4012012
            }, {
                "id": "US-SD",
                "value": 754844
            }, {
                "id": "US-TN",
                "value": 5689283
            }, {
                "id": "US-TX",
                "value": 20851820
            }, {
                "id": "US-UT",
                "value": 2233169
            }, {
                "id": "US-VT",
                "value": 608827
            }, {
                "id": "US-VA",
                "value": 7078515
            }, {
                "id": "US-WA",
                "value": 5894121
            }, {
                "id": "US-WV",
                "value": 1808344
            }, {
                "id": "US-WI",
                "value": 5363675
            }, {
                "id": "US-WY",
                "value": 493782
            }]
        },

        "areasSettings": {
            "autoZoom": true
        },
        "export": {
            "enabled": true
        }

    });
    var chart = AmCharts.makeChart("allocation-chart", {
        "type": "pie",
        "startDuration": 0,
        "theme": "light",
        "labelRadius": 0,
        "pullOutRadius": 0,
        "labelText": "",
        "colorField": "color",
        "legend": {
            // "enabled":false,
        },
        "innerRadius": "70%",
        "dataProvider": [{
            "country": "Lithuania",
            "litres": 501.9,
            "color": "#85C5E3"
        }, {
            "country": "Czech Republic",
            "litres": 301.9,
            "color": "#6AA3C4"
        }, {
            "country": "Ireland",
            "litres": 201.1,
            "color": "#6097B9"
        }, {
            "country": "india",
            "litres": 220.1,
            "color": "#4E81A4"
        }],
        "valueField": "litres",
    });
    // allocation map end
    // pageview and prod sale end
    floatchart()
    $(window).on('resize', function() {
        floatchart();
    });
    $('#mobile-collapse').on('click', function() {
        setTimeout(function() {
            floatchart();
        }, 700);
    });

});

function floatchart() {
    //flot options
    var options = {
        legend: {
            show: false
        },
        series: {
            label: "",
            curvedLines: {
                active: true,
                nrSplinePoints: 20
            },
        },
        tooltip: {
            show: true,
            content: "x : %x | y : %y"
        },
        grid: {
            hoverable: true,
            borderWidth: 0,
            labelMargin: 0,
            axisMargin: 0,
            minBorderMargin: 0,
        },
        yaxis: {
            min: 0,
            max: 30,
            color: 'transparent',
            font: {
                size: 0,
            }
        },
        xaxis: {
            color: 'transparent',
            font: {
                size: 0,
            }
        }
    };

    $.plot($("#app-sale1"), [{
        data: [
            [0, 18],
            [20, 10],
            [35, 20],
            [50, 10],
            [65, 27],
            [75, 15],
            [90, 20],
        ],
        color: "#ff5252",
        lines: {
            show: true,
            fill: false,
            lineWidth: 3
        },
        points: {
            show: false
        },
        //curve the line  (old pre 1.0.0 plotting function)
        curvedLines: {
            apply: true,
        }
    }], options);
    $.plot($("#app-sale2"), [{
        data: [
            [0, 10],
            [20, 25],
            [35, 27],
            [50, 10],
            [65, 20],
            [75, 10],
            [90, 18],
        ],
        color: "#448aff",
        lines: {
            show: true,
            fill: false,
            lineWidth: 3
        },
        points: {
            show: false
        },
        //curve the line  (old pre 1.0.0 plotting function)
        curvedLines: {
            apply: true,
        }
    }], options);
    $.plot($("#app-sale4"), [{
        data: [
            [0, 10],
            [20, 25],
            [35, 27],
            [50, 10],
            [65, 20],
            [75, 10],
            [90, 18],
        ],
        color: "#9ccc65",
        lines: {
            show: true,
            fill: false,
            lineWidth: 3
        },
        points: {
            show: false
        },
        //curve the line  (old pre 1.0.0 plotting function)
        curvedLines: {
            apply: true,
        }
    }], options);
    //real-time update
    $(function() {
        // We use an inline data source in the example, usually data would
        // be fetched from a server
        var data = [],
            totalPoints = 300;

        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // Do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }
                data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }
            return res;
        }
        // Set up the control widget
        var updateInterval = 30;
        $("#updateInterval").val(updateInterval).change(function() {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                if (updateInterval < 1) {
                    updateInterval = 1;
                } else if (updateInterval > 2000) {
                    updateInterval = 2000;
                }
                $(this).val("" + updateInterval);
            }
        });
        var plot = $.plot("#realtime-profit", [getRandomData()], {

            lines: {
                show: true,
                fill: true,
                lineWidth: 1,
                borderWidth: 0,
            },
            shadowSize: 5,
            highlightColor: "rgba(0,0,0,0.5)",
            points: {
                show: true,
                radius: 0,
                fill: true,
                fillColor: '#fff'
            },
            curvedLines: {
                apply: false,
            },
            legend: {
                show: false
            },
            series: {
                label: "",
                color: "#66bb6a",
                curvedLines: {
                    active: true,
                    nrSplinePoints: 20
                },
            },
            tooltip: {
                show: true,
                content: "x : %x | y : %y"
            },
            grid: {
                hoverable: true,
                borderWidth: 0,
                minBorderMargin: 0,
            },
            yaxis: {
                min: 0,
                max: 100,
            },
            xaxis: {
                font: {
                    size: 0,
                }
            }
        });

        function update() {
            plot.setData([getRandomData()]);
            // Since the axes don't change, we don't need to call plot.setupGrid()
            plot.draw();
            setTimeout(update, updateInterval);
        }
        update();
    });
}
