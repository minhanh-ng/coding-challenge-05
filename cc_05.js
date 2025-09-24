const employee = [
    {name: "Jim", hourlyRate: 40, hoursWorked: 30},
    {name: "Jane", hourlyRate: 60, hoursWorked: 40},
    {name: "Jay", hourlyRate: 100, hoursWorked: 20},
    {name: "Jone", hourlyRate: 30, hoursWorked: 40},
    {name: "June", hourlyRate: 50, hoursWorked: 60}
];

function calculateBasePay(rate, hours) {
    if (hours <= 40) {
        return rate * hours
    }
};

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return hours * (rate * 1.5)
    }
};

function calculateTaxes(grossPay) {
    return grossPay * (1-0.15)
};

const employeeName = employee.name
function processPayroll(employee) {
    return {
        employee,
        calculateBasePay,
        calculateOvertimePay,
        calculateGrossPay,
        calculateTaxes
    }
}