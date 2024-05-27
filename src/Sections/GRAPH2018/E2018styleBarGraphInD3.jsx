import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const E2018styleBarGraphInD3 = () => {
  

    useEffect(() => {
        const n = 6; // Number of layers
        const m = 26; // Number of samples per layer

        const margins = { top: 20, right: 110, bottom: 100, left: 75 };
        const width = 1500 - margins.left - margins.right;
        const height = 500 - margins.top - margins.bottom;

        const svg = d3.select("#chart-svg").append("svg")
            .attr("width", width + margins.left + margins.right)
            .attr("height", height + margins.top + margins.bottom)
            .append("g")
            .attr("transform", "translate(" + margins.left + "," + margins.top + ")");

        d3.csv("HEALTH_PROC_20052024121907852.csv").then(function (data) {
            console.log(data);

            const headers = ["AUS","AUT","BEL","CAN","CZE","FRA","DEU","GRC","IRL","ITA","JPN","KOR","LUX","MEX","NLD","NZL","NOR","POL","PRT","SVK","ESP"];

            const stack = d3.stack()
                .keys(headers)
                .order(d3.stackOrderNone)
                .offset(d3.stackOffsetNone);

            const layers = stack(data);

            const yStackMax = d3.max(layers, function (layer) { return d3.max(layer, function (d) { return d[1]; }); });

            const xScale = d3.scaleBand()
                .domain(data.map(function (d) { return d.Country; }))
                .rangeRound([2, width])
                .padding(0.15);

            const y = d3.scaleLinear()
                .domain([0, yStackMax])
                .range([height, 0]);

            const color = d3.scaleOrdinal()
                .domain(headers)
                .range(["#98ABC5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ed7092","#2ace54", "#d9d028", "#1f7606", "#319fa3", "#a76bc0", "#646efa", "#7e7322", "#836b6d", "#a14b3f", "#e23dd6", "#83bb33", "#f0fc54", "#113a8a", "#a76ca7"]);

            const xAxis = d3.axisBottom(xScale)
                .tickSize(0)
                .tickPadding(6);

            const yAxis = d3.axisLeft(y)
                .tickFormat(d3.format(".2s"));

            const layer = svg.selectAll(".layer")
                .data(layers)
                .enter().append("g")
                .attr("class", "layer")
                .style("fill", function (d, i) { return color(i); });

            const rect = layer.selectAll("rect")
                .data(function (d) { return d; })
                .enter().append("rect")
                .attr("x", function (d) { return xScale(d.data.Country); })
                .attr("y", height)
                .attr("width", xScale.bandwidth())
                .attr("height", 0);

            rect.transition()
                .delay(function (d, i) { return i * 100; })
                .attr("y", function (d) { return y(d[1]); })
                .attr("height", function (d) { return y(d[0]) - y(d[1]); });

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
                .selectAll("text").style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("transform", function (d) {
                    return "rotate(-45)";
                });

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("x", -150)
                .attr("y", -70)
                .attr("dy", ".75em")
                .style("text-anchor", "end")
                .text("# of campaigns");

            const legend = svg.selectAll(".legend")
                .data(headers.slice().reverse())
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function (d, i) { return "translate(-20," + i * 20 + ")"; });

            legend.append("rect")
                .attr("x", width +30)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", color);

            legend.append("text")
                .attr("x", width +60)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "start")
                .text(function (d) { return d; });
        });
    }, []);

    return (
        <div>
            <h3>Style Bar Graph in 2018</h3>
            <div className="row">
                <div className="large-12 columns text-center">
                    <div id="chart-svg"></div>
                </div>
            </div>
        </div>
    );
};

export default E2018styleBarGraphInD3;
