//Step 1
const employee = [
    {name: "Jim", hourlyRate: 40, hoursWorked: 30},
    {name: "Jane", hourlyRate: 60, hoursWorked: 40},
    {name: "Jay", hourlyRate: 100, hoursWorked: 20},
    {name: "Jone", hourlyRate: 30, hoursWorked: 40},
    {name: "June", hourlyRate: 50, hoursWorked: 60}
];
//Step 2
function calculateBasePay(rate, hours) {
    const hoursWorked = Math.min(hours,40);
    return rate * hoursWorked
    };
//Step 3
function calculateOvertimePay(rate, hours) {
    const overtimePay = Math.max(hours - 40, 0);
    return overtimePay * rate * 1.5
    };
//Step 4
function calculateTaxes(grossPay) {
    return grossPay * 0.15
};

//Step 5
function calculateGrossPay(rate, hours) {
    return calculateBasePay (rate, hours) + calculateOvertimePay(rate, hours)
};

//Step 6
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = grossPay - calculateTaxes(grossPay);
    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    }
};

//Step 7
for (let e of employee){
    console.log(processPayroll(e))
};
