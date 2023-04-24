import { drawCharts } from "./charts.js";

google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawCharts);

