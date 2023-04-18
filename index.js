// Your code here

function createEmployeeRecord(array) {
        let employee = {}
        employee.firstName = array[0];
        employee.familyName = array[1];
        employee.title = array[2];
        employee.payPerHour = array[3];
        employee.timeInEvents = [];
        employee.timeOutEvents = [];


        return employee;
}

function createEmployeeRecords (arrayOfArrays) {
    let newArray = [];
    for (Element of arrayOfArrays){
        let employee = {}
        employee.firstName = Element[0];
        employee.familyName = Element[1];
        employee.title = Element[2];
        employee.payPerHour = Element[3];
        employee.timeInEvents = [];
        employee.timeOutEvents = [];
        newArray.push(employee);

    }
    return newArray;
}

function createTimeInEvent(recordObj, dateStamp){
        let timeInObj = {}
        timeInObj.type = "TimeIn";
        timeInObj.hour = parseInt(dateStamp.slice(11));
        timeInObj.date = dateStamp.slice(0,10);
        recordObj.timeInEvents.push(timeInObj);

        return recordObj;
        
}

function createTimeOutEvent(recordObj, dateStamp){
    let timeOutObj = {}
    timeOutObj.type = "TimeOut";
    timeOutObj.hour = parseInt(dateStamp.slice(11));
    timeOutObj.date = dateStamp.slice(0,10);
    recordObj.timeOutEvents.push(timeOutObj);

    return recordObj;
    
}

function hoursWorkedOnDate( recordObj, dateStamp){
    
            let timeInArray = recordObj.timeInEvents
            let timeOutArray = recordObj.timeOutEvents
            let dateObj = dateStamp.slice(0,10)

            let objIN = timeInArray.find(element => element.date === dateStamp);
            let objOut = timeOutArray.find(element => element.date === dateStamp);

            let hoursWorked = objOut.hour - objIN.hour
            hoursWorked = hoursWorked/100;
            
            return hoursWorked
}

function wagesEarnedOnDate (recordObj, dateStamp) {
        let payOnDate = hoursWorkedOnDate(recordObj, dateStamp) * recordObj.payPerHour
        return payOnDate;
}

function allWagesFor (recordObj) {
let wages = 0;
for ( let i = 0; i < recordObj.timeInEvents.length; i++){
    wages += wagesEarnedOnDate(recordObj, recordObj.timeInEvents[i].date);
}
return wages;
}

function calculatePayroll (eRecordsArray) {
    let payroll = 0 
    for (let i = 0; i < eRecordsArray.length; i++){
        payroll += allWagesFor(eRecordsArray[i]);
    }
    return payroll;
}