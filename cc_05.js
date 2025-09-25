const employee = [
    {name: "Jim", hourlyRate: 40, hoursWorked: 30},
    {name: "Jane", hourlyRate: 60, hoursWorked: 40},
    {name: "Jay", hourlyRate: 100, hoursWorked: 20},
    {name: "Jone", hourlyRate: 30, hoursWorked: 40},
    {name: "June", hourlyRate: 50, hoursWorked: 60}
];

function calculateBasePay(rate, hours) {
    const hoursWorked = Math.min(hours,40);
    return rate * hoursWorked
    };

function calculateOvertimePay(rate, hours) {
    const OvertimePay = Math.max(hours - 40);
    return overtimePay * rate * 1.5
    };

function calculateTaxes(grossPay) {
    return grossPay * 0.15
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