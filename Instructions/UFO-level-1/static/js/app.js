// from data.js
var sightings = data;

d3.select("#datetime").on("change", () => {
    dateInput =  d3.event.target.value;
})

var tbody = d3.select("tbody");
var dateFilterBtn = d3.select("#filter-btn");

dateFilterBtn.on("click", function() {
    sightings.forEach((sighting) => {
        
        var dateInputText = d3.select("#datetime").property("value");
        var sightingDate = sighting.datetime;
       
        if (Date.parse(sightingDate) == Date.parse(dateInputText) ) {
            var row = tbody.append("tr");
        
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        }
        
    });
    
});


