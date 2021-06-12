/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
 function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.slice(0,5)=== "hello"){
    hello(text);
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'list\n'){
    list();
  }
  else if (text.split(' ')[0].trim() === 'add'){
    add(text.split(' ')[1]);
  }
  else if(text.slice(0,6) === 'remove'){
    remove(text.slice(6));
  }
  else if(text.slice(0,4)==='edit'){
    edit(text.slice(5));
  }
  else{
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text.trim() + '!');
}

/** lists all the possible commands 
 * @returns {void}
*/
function help(){
  console.log('\npossible command lines : \nhello --> says hello!\nhello (your text) --> says hello (your text)!\nquit --> quits the application\nexit --> exits the application\nlist --> shows a list of tasks\nadd --> allows to add tasks\nremove --> allows to remove tasks\nedit --> edits the task',)
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

function add (text){
  console.log(text.trim() + 'x');
}

let arraylist= ["Task1", " Task2", " Task3"]
done = [true, false];
function list() {
  for (var i = 0; i < arraylist.length; i++) {
    if (done[i] == true) {
      console.log(i + 1 + " - " + "[✓] " + arraylist[i]);
    }
    else {
      console.log(i + 1 + " - " + "[ ] " + arraylist[i]);
    }
  }
}

  function add (text){
arraylist.push(text);
  
}
  function remove(text) {
  if (arraylist.length <= text) {
    console.log("Error. You entered a number greater than length of the list");
  } 
  else {
    arraylist.splice(text + 1, 1);
  }
  }
  function edit (text){
    if(text == ""){
      console.log("Error. You can't edit anything");
    }
    else if(text.charAt(0) == parseInt('1')){
      var tex=text.slice(2);
      arraylist.splice(0,1,text);
    }
    else if(typeof text.charAt(0) === "string"){
        arraylist.pop();
        arraylist.push(text);
    }
  }
// The following line starts the application

startApp("Rania Ismaeil")