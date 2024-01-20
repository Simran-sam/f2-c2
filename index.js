let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    //Write your code here , just console.log
    arr.forEach((employee) => {
        if (employee.profession === "developer"){
          console.log(employee);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    //Write your code here, just console.log
    const newEmployee = {id:4, name:"susan", age:"20", profession:"intern"};
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    let array = arr.filter((e) => e.profession != "admin");
    console.log(array);
};
console.log(filterArray);
  
  function concatenateArray() {
    //Write your code here, just console.log
    //Write your code here, just console.log
    const newArray = [
        { id: 4, name: 'fzn', age: 23, profession: ' front end developer' },
        { id: 5, name: 'smrn', age: 22, profession: 'java developer' },
        { id: 6, name: 'adnn', age: 25, profession: ' backend developer' },
    ];
    arr = arr.concat(newArray);
    console.log(arr);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }