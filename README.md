https://design-automation.github.io/mobius-geospatial/

## Mobius 
[![Build Status](https://travis-ci.org/akshatamohanty/mobius-modeller.svg?branch=master)](https://travis-ci.org/akshatamohanty/mobius-modeller)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ed1412eb9a4549c59e5f08aace8c77f7)](https://www.codacy.com/app/akshatamohanty/mobius-modeller?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=akshatamohanty/mobius-modeller&amp;utm_campaign=Badge_Grade)

[![Waffle.io - Columns and their card count](https://badge.waffle.io/phtj/mobius-modeller.svg?columns=all)](https://waffle.io/phtj/mobius-modeller)


## Möbius Modeller
Möbius Modeller is a free and open-source web-application for parametric modelling. It runs in the Chrome browser.

![alt text](https://raw.githubusercontent.com/phtj/mobius-modeller/master/src/assets/img/mobius_screenshot.JPG)

### Visual Programming

In Möbius, users are provided with a set of visual programming tools to
define scripts for generating models. These tools integrate two types of
visual programming: flowcharts and procedures.
   

Flowcharts consist of nodes connected together with wires. Each node in the
flowchart has a set of input and output ports, and contains a small
procedure to perform some type of action.


Procedures consist of a sequence of lines of code. There are four types of
code lines: 1) variables assignments, 2) ‘for-each’ loops, 3) ‘if-else’
conditions, and 4) function calls.


Function calls are lines of code that call a particular function. Libraries
of different functions are provided. Additional libraries of functions can
be added at any stage.

User Interface

The Möbius Modeller user interface consists of four main viewports, with
one viewport on the left and three viewports on the right. The viewports
can be rearrange into any configuration. By default, the Output viewport is
on the right side, and the Flowchart, Procedure and Parameters viewports
are on the right side.


· The Flowchart viewports is for defining the flowcharts, consisting of
nodes connected with wires. Selecting one of the nodes in the Flowchart
viewport will change the contents of the other three viewports.


· The Procedure viewport is for defining the procedure inside each node.
The procedure that is shown is for the node selected in the Flowchart
viewport.


· The Parameters viewport is for setting the parameter values associated
with each node. The parameters that are shown are for the node selected in
the Flowchart viewport. This viewport also contain the green ‘Execute
Flowchart’ button, which will execute the flowchart using the specified
parameter values.


· The Output viewport is for viewing the output generated by executing the
script, as well as for viewing Help. The Output viewport has a number of
different viewers. The most basic viewer is the Text Viewer, which is for
viewing basic text. There is also an Output console, which is where various
messages (including error messages) get printed.
