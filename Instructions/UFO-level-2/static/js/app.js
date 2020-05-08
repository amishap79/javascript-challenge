// from data.js
var sightings = data;

d3.select("#country").on("change", () => {
    dateInput =  d3.event.target.value;
})

d3.select("#city").on("change", () => {
    cityInput =  d3.event.target.value;
})

d3.select("#state").on("change", () => {
    stateInput =  d3.event.target.value;
})

d3.select("#country").on("change", () => {
    countryInput =  d3.event.target.value;
})

d3.select("#shape").on("change", () => {
    shapeInput =  d3.event.target.value;
})

var tbody = d3.select("tbody");
var dateFilterBtn = d3.select("#filter-btn");

dateFilterBtn.on("click", function() {
    sightings.forEach((sighting) => {
        
        var dateInputText = d3.select("#datetime").property("value");
        var cityInputText = d3.select("#city").property("value");
        var stateInputText = d3.select("#state").property("value");
        var countryInputText = d3.select("#country").property("value");
        var shapeInputText = d3.select("#shape").property("value");
       
        if (Date.parse(sighting.datetime) == Date.parse(dateInputText)
            & (cityInputText == undefined | cityInputText == "" | sighting.city ==  cityInputText.toLocaleLowerCase())
            & (stateInputText == undefined | stateInputText == "" | sighting.state ==  stateInputText.toLocaleLowerCase())
            & (countryInputText == undefined | countryInputText == "" | sighting.country ==  countryInputText.toLocaleLowerCase())
            & (shapeInputText == undefined | shapeInputText == "" | sighting.shape ==  shapeInputText.toLocaleLowerCase())
            ) {
            var row = tbody.append("tr");
        
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        }
        
    });
    
});

