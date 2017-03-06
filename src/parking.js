let data = require('./parseCSV.js');

function parkingAnalysis() {
  let parking = data('./traffic-data/simple_data/parking_feb_2016.csv');
 // . go into my current directory / = go more in
 //creating a variable using the function i've created called data
 //insirting my actual file in the data bubble

//What was the most common violation type for a parking ticket?
  let frequency = {};
    //empty object to help find frequency
//------------------------------------------------------------------------------

//then make a for each loop
  parking.forEach( function properties(row){
  //function requires 3 parts you're gunna be a function say function/ name the
  //function / give your function an argument contained withing ()

  //What was the most common violation type for a parking ticket?
  // console.log('logs out the row', row[9]);
    if(!frequency[row[9]]) {
  //ifs require ()arguement and in the ()it needs to say what you need to happen
  //if this do this else do this
  //give the index 9 in my row the following if frequency is falsey/undefined - !
      frequency[row[9]] = 1;
    } else {
  //if frequency is defined add 1 to itself
      frequency[row[9]] = frequency[row[9]] +1;
  //can you do ++ here?
  //{made a for each loop that goes through the file and gives you a violation
  //{type and count from index 9
    }
  //------------------------------------------------------------------------------

  });

  //How many different types of parking tickets were issued?
  //What was the most common violation type for a parking ticket?
  let individualViolationCode = Object.keys(frequency);
  //setting a new variable for the type of violation
  //object.keys = whats pulling only the type from my frequency
  let mostCommonViolation = {
    violationName : 'default',
    violationCount : 0
    //^ = placeholder that i'll fill through the foreach
  };
  //holding on to a set of "default values" that associate with the properties
  //im trying to find
  individualViolationCode.forEach( function commonViolation(parkingCode){
    if(frequency[parkingCode] > mostCommonViolation.violationCount) {
      mostCommonViolation.violationCount = frequency[parkingCode];
      //this connects the frequency created above and over rides the violationCount
      //defined in my most common violation object
      mostCommonViolation.violationName = parkingCode;
      //this line over rides the default violation name with the parking code
      //i defined
    }
  });

  //How many different types of parking tickets were issued?
  
  //------------------------------------------------------------------------------
  //What was the most common violation type for a parking ticket?
  let parkingViolation = mostCommonViolation.violationName;
  //simplification step
  console.log('What was the most common violation type for a parking ticket?', parkingViolation);
  //------------------------------------------------------------------------------
}

parkingAnalysis();
//need this to call function and have it show up in iterm - make it work





















//want to target all the data in the violationcode which is in column 9

// console.log(parking [0][9]);

   //return answerObject; //an object is a container of properties with their values
// parkingAnalysis();

//For any given year and month of parking data, provide the following analysis:

//How many different types of parking tickets were issued?
