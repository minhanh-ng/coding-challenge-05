//Step 2
const employee = [
    {name: "Jim", hourlyRate: 40, hoursWorked: 30},
    {name: "Jane", hourlyRate: 60, hoursWorked: 40},
    {name: "Jay", hourlyRate: 100, hoursWorked: 100},
    {name: "Jone", hourlyRate: 30, hoursWorked: 40},
    {name: "June", hourlyRate: 50, hoursWorked: 60}
];
//Step 3: returns pay for up to 40 hours only.
function calculateBasePay(rate, hours) {
    const hoursWorked = Math.min(hours,40);
    return rate * hoursWorked
    };
//Step 4: returns 1.5x rate for hours over 40.
function calculateOvertimePay(rate, hours) {
    const overtimePay = Math.max(hours - 40, 0);
    return overtimePay * rate * 1.5
    };
//Step 5
function calculateTaxes(grossPay) {
    return grossPay * 0.15
};

//Calculate gross pay
function calculateGrossPay(rate, hours) {
    return calculateBasePay(rate, hours) + calculateOvertimePay(rate, hours)
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
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    }
};

//Step 7
for (let e of employee){
    console.log(processPayroll(e))
};
