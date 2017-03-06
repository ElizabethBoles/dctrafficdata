

 module.exports = function parseFile(inputFile) {
 //this function breaks down the file and alows me to export it "module.exports"

  let filesystem = require('fs');
  //node requires for doing terminal commands

  let contentsOfTheFile = filesystem.readFileSync(inputFile);
  //with out this you get a buffering message

  let stringValue = contentsOfTheFile.toString();
  //it's storing the contents of the file that has been converted into a string
  //to a string value/ first array
  let rows = stringValue.split('\n');
  //spliting the rows a

  let parsedRows = [];
  //second array created
  rows.forEach( function printRows(row) {
    //loop "foreach"
    parsedRows.push(row.split(','));
    //pushing data into the array parsed rows and splitting it on the ,
  });
  console.log(parsedRows);
  //
  return parsedRows;
  //
}

// parseFile();

// parseFile('./traffic-data/simple_data/parking_feb_2016.csv');
//console.log(module.exports('./traffic-data/simple_data/parking_feb_2016.csv');
