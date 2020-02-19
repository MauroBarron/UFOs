// import the data form data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

// build Table function
// First clear out existing data
function buildTable(data){
   tbody.html("") 
};
// Loop thru each object in data
// append a row and cells for each value
// in each row
data.forEach((dataRow) => {
    //Append row to table body
    let row=tbody.append("tr")
    //Loop thru each field in dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});