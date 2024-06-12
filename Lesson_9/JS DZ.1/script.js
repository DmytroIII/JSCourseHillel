let company = {
  sales: [{name: 'John', salary: 1000},{name: 'Alise', salary: 600}],
  development: {
    web: [{name: 'Peter', salary:2000}, {name: 'Alex', salary:1800}],
    internals: [{name:'Jack', salary: 1300}],
  }
};

function getSummSalary (company) {
  let result = 0;
  for (key in company) {
   if (Array.isArray(company[key])) {
    for (value of company[key]) {
       result += value.salary;
    } }
      else {
        result += getSummSalary(company[key])  
      }
   } 
return result;
}
console.log(getSummSalary(company));