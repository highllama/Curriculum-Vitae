let i = 0;
let txt = "\n<Hello>\n Nice to \n  meet you!\n</Hello> \n";

let speed = 80;
let executions = 0;

let container = document.getElementById("heroCode1");

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heroCode1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
console.log(executions);
typeWriter();
