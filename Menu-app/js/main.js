var JsonData = {
    status : 0,
    now : {
        agents : {
            active : 25,
            available : 3
        },
        calls : {
            active : 23, 
            onQueue : 0
        },
        averageTime : {
            handle : {
                time : "00:07:04",
                minutes : 7.07
            },
            wait : {
                time : "00:03:48",
                minutes : 3.76
            } 
        }
    },
    today : {
        agents : [ 12, 23, 34, 45, 56, 67, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        calls : [56, 89, 123, 245, 367, 459, 670, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        averageHandleTime : [ 7.2, 7.6, 5.6, 7.2, 6.5, 6.9, 5.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        averageWaitTime : [ 2.5, 3.4, 3.2, 4.5, 4.2, 4.7, 3.9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
};
//arryas
var hours = [];
var calls = [];

function init() {
    console.log('Initializing page');
    prepareCharts();
}

//get values and assign then to arrays
function prepareCharts() {
    console.log('Preparing charts...');
    //hours
    for(var h =0; h <= 24; h++) {
        hours.push(h + ': 00');
    }
    //calls
    calls = JsonData.today.calls;
    agents = JsonData.today.agents;
    average = JsonData.today.averageHandleTime;
    wait = JsonData.today.averageWaitTime;
    // calls = [10,1,4,2,11,11,5,9,9,12,8,11,0,0,0,0,0,0,0,0,0,0,0,0];
    // agents = [7,12,9,7,6,7,10,6,5,6,4,1,0,0,0,0,0,0,0,0,0,0,0,0];
    // average = [200, 201, 20, 14, 250, 180, 250, 480,250,510,620,200,0,0,0,0,0,0,0,0,0,0,0,0];
    // wait = [170, 200, 180, 110, 320, 34, 206, 59, 85, 50, 120,21,0,0,0,0,0,0,0,0,0,0,0,0];
    // console.log('Calls lenght: ',calls.length)
    // console.log('Agents lenght: ',agents.length)
    // console.log('Average lenght: ',average.length)
    // console.log('Wait lenght: ',wait.length)
    showCharts();

}

//show charts
function showCharts() {
    console.log('Showing charts...');
    console.log(hours + calls);
    console.log(JsonData);
    //calls chart
    drawColumnChart(
    {
        parentDiv : 'chart-calls',
        chartTitle : 'Calls',
        yAxis : {
            minValue : 0,
            title : 'Qty',
        },
        xAxis : {
            title : 'Hour',
            categories : hours,
            
        },
        values : [
            {
                data : calls
            },
        ],
    });

    // agents chart
    drawColumnChartAgents(
        {
            parentDiv : 'chart-agents',
            chartTitle : 'Agents',
            yAxis : {
                minValue : 0,
                title : 'Qty',
            },
            xAxis : {
                title : 'Hour',
                categories : hours,
            },
            values : [
                {
                    data : agents
                },
            ],
        });

    //average time calls    
    drawColumnChartaverage(
        {
            parentDiv : 'chart-average',
            chartTitle : 'Average Handle Time',
            yAxis : {
                minValue : 0,
                title : 'Calls',
            },
            xAxis : {
                title : 'Average Time',
                categories : hours,
            },
            values : [
                {
                    data : average
                },
            ],
    });   
    
    //average time handle    
    drawColumnChartHandle(
        {
            parentDiv : 'handle-time',
            chartTitle : 'Average Wait Time',
            yAxis : {
                minValue : 0,
                title : 'Calls',
            },
            xAxis : {
                title : 'Average Time',
                categories : hours,
            },
            values : [
                {
                    data : wait
                },
            ],
    });   
}
//draw column chart for calls
function drawColumnChart(settings) {
        for (var i = 0; i <= 4; i++) {
            console.log('Drawing column chart...');
            Highcharts.chart(settings.parentDiv, {
                chart : {
                    type : 'column',
                            styledMode: false
                },
                title : {
                    text : settings.chartTitle,
                    style : {
                        'font-size' : '10pt', //upper label
                        fontFamily : 'Verdana,sans-serif',
                        color : '#FFF'
                    }
                },
                yAxis : {
                    min : settings.yAxis.minValue,
                    className: 'highcharts-color-1',
                    title : {
                        text : settings.yAxis.title,
                        style : {
                            'font-size' : '10pt', //side label
                            color : '#FFF',
                            fontFamily: 'Verdana, sans-serif'
                        },
                    },
                },
                xAxis : {
                    categories : settings.xAxis.categories,
                    title : {
                        text : settings.xAxis.title,
                        style : {
                            'font-size' : '10pt', //bottom label
                            fontFamily : 'Verdana,sans-serif',
                            color : '#FFF',
                        }
                    },
                    labels :{
                        rotation: -90,
                        style : {
                            fontSize: '8pt',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                legend : {
                    enabled: false
                },
                series : settings.values, 
            });
            
        }
    
}

//draw column chart for agents
function drawColumnChartAgents(settingsAgents) {
    console.log('Drawing column chart...');
    Highcharts.chart(settingsAgents.parentDiv, {
        chart : {
            type : 'column'
        },
        title : {
            text : settingsAgents.chartTitle,
            style : {
                'font-size' : '10pt',
                fontFamily : 'Verdana,sans-serif',
                color : '#FFF'
            }
        },
        yAxis : {
            min : settingsAgents.yAxis.minValue,
            title : {
                text : settingsAgents.yAxis.title,
                style : {
                    'font-size' : '10pt',
                    fontFamily : 'Verdana,sans-serif',
                    color : '#FFF'
                },
            },
        },
        xAxis : {
            categories : settingsAgents.xAxis.categories,
            title : {
                text : settingsAgents.xAxis.title,
                style : {
                    'font-size' : '10pt',
                    fontFamily : 'Verdana,sans-serif',
                    color : '#FFF'
                }
            },
            labels :{
                rotation: -90,
                style : {
                    fontFamily : 'Verdana,sans-serif',
                    fontSize: '8pt'
                }
            }
        },
        credits: {
            enabled: false
        },
        legend : {
            enabled: false
        },
        series : settingsAgents.values, 
    });
}

//draw column chart for avaarge time
function drawColumnChartaverage(settingsaverage) {
    console.log('Drawing column chart...');
    Highcharts.chart(settingsaverage.parentDiv, {
        chart : {
            type : 'column'
        },
        title : {
            text : settingsaverage.chartTitle,
            style : {
                'font-size' : '10pt',
                fontFamily : 'Verdana,sans-serif',
                color : '#555'
            }
        },
        yAxis : {
            min : settingsaverage.yAxis.minValue,
            title : {
                text : settingsaverage.yAxis.title,
                style : {
                    'font-size' : '10pt',
                    fontFamily : 'Verdana,sans-serif',
                    color : '#999'
                },
            },
        },
        xAxis : {
            categories : settingsaverage.xAxis.categories,
            title : {
                text : settingsaverage.xAxis.title,
                style : {
                    'font-size' : '10pt',
                    fontFamily : 'Verdana,sans-serif',
                    color : '#999'
                }
            },
            labels :{
                rotation: -90,
                style : {
                    fontSize: '8pt',
                    fontFamily : 'Verdana,sans-serif'
                }
            }
        },
        credits: {
            enabled: false
        },
        legend : {
            enabled: false
        },
        color : '#111',
        series : settingsaverage.values, 
    });
}

//draw column chart for avaarge time
function drawColumnChartHandle(settingsHandle) {
    console.log('Drawing column chart...');
    Highcharts.chart(settingsHandle.parentDiv, {
        chart : {
            type : 'column'
        },
        title : {
            text : settingsHandle.chartTitle,
            style : {
                'font-size' : '10pt',
                fontFamily : 'Verdana,sans-serif',
                color : '#555'
            }
        },
        yAxis : {
            min : settingsHandle.yAxis.minValue,
            title : {
                text : settingsHandle.yAxis.title,
                style : {
                    'font-size' : '10pt',
                    fontFamily : 'Verdana,sans-serif',
                    color : '#999'
                },
            },
        },
        xAxis : {
            categories : settingsHandle.xAxis.categories,
            title : {
                text : settingsHandle.xAxis.title,
                style : {
                    'font-size' : '10pt',
                    fontFamily : 'Verdana,sans-serif',
                    color : '#999'
                }
            },
            labels :{
                rotation: -90,
                style : {
                    fontSize: '8pt',
                    fontFamily : 'Verdana,sans-serif'
                }
            }
        },
        credits: {
            enabled: false
        },
        legend : {
            enabled: false
        },
        series : settingsHandle.values, 
    });
}