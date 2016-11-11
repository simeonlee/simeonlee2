import React, { Component } from 'react'
import d3 from 'd3'
import 'd3-cloud'

export default class WordCloud extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.initD3();
  }

  render() {
    return (
      <div className="wordcloud"></div>
    )
  }

  initD3() {
    var fill = d3.scale.category20b();

    var w = window.innerWidth;
    var h = window.innerHeight;

    var max;
    var fontSize;

    var layout = d3.layout.cloud()
      .timeInterval(Infinity)
      .size([w, h])
      .fontSize(function(d) {
        return fontSize(+d.value);
      })
      .text(function(d) {
        return d.key;
      })
      .on('end', draw);

    var svg = d3.select('#vis')
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    var vis = svg
      .append('g')
      .attr('transform', 'translate(' + [w >> 1, h >> 1] + ')');

    update();

    window.onresize = function(event) {
      update();
    };

    function draw(data, bounds) {
      var w = window.innerWidth;
      var h = window.innerHeight;

      svg
        .attr('width', w)
        .attr('height', h);

      scale = bounds ? Math.min(
        w / Math.abs(bounds[1].x - w / 2),
        w / Math.abs(bounds[0].x - w / 2),
        h / Math.abs(bounds[1].y - h / 2),
        h / Math.abs(bounds[0].y - h / 2)) / 2 : 1;

      var text = vis.selectAll('text')
        .data(data, function(d) {
          return d.text.toLowerCase();
        });

      text
        .transition().duration(1000)
        .attr('transform', function(d) {
          return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
        })
        .style('font-size', function(d) {
          return d.size + 'px';
        });

      text
        .enter().append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', function(d) {
          return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
        })
        .style('font-size', function(d) {
          return d.size + 'px';
        })
        .style('opacity', 1e-6)
        .transition()
        .duration(1000)
        .style('opacity', 1);

      text
        .style('font-family', function(d) {
          return d.font;
        })
        .style('fill', function(d) {
          return fill(d.text.toLowerCase());
        })
        .text(function(d) {
          return d.text;
        });

      vis
        .transition()
        .attr('transform', 'translate(' + [w >> 1, h >> 1] + ')scale(' + scale + ')');
    }

    function update() {
      layout.font('helvetica').spiral('archimedean');
      fontSize = d3.scale['sqrt']().range([10, 100]);
      if (tags.length) {
        fontSize.domain([+tags[tags.length - 1].value || 1, +tags[0].value]);
      }
      layout.stop().words(tags).start();
    }
  }
}