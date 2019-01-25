/* Part 2 */
/*Using a for loop to print the numbers from 1 to 20*/
for (var i = 1; i<21; i++){
    console.log(i)
}

/* Part 3 */
console.log('PART 3')
/* applying an empty variable called incex*/
var index;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (index=1; index < numbers.length; ++index) {
  /* index starts at 1, and will add 1 for each iteration. This will happen as long as
  index is less than the length of numbers.*/
    if (numbers[index]%3==0 && numbers[index]%5==0) {
        console.log('eplekake');
    /* by using numbers[index] we know which part of the array we want to print.
    And when the number in numbers is divisible by 3 and/or 5 it will print out
    eplekake/eple/kake after what it is divisble by. */
    } else if (numbers[index]%3==0) {
        console.log("eple");
    } else if (numbers[index]%5==0) {
        console.log("kake");
    } else {
        console.log(numbers[index]);
  /* if it's not divisble by either 3 or 5, it will print out the numbers */
    }
}

/* Part 4 */
/* declaring a constant named 'tittel' and gets the element in the id #title from html document*/
/* by using innerText it will add text content to an element */
const tittel = document.getElementById('title')
tittel.innerText = 'Hello, JavaScript';
/* it can also be done more easily without assigning it to a constant value with just:
document.getElementById('title').innerText='Hello, JavaScript'*/

/* Part 5 */
function changeDisplay() {
  document.getElementById('magic').style.display='none';
}
/*by using this different style.display and style.visibility after finding what
we want to change (the id magic), we can set it to what the tasks asks us to do
    */
function changeVisibility() {
  document.getElementById('magic').style.visibility='hidden';
  document.getElementById('magic').style.display='block';
}

function reset() {
  document.getElementById('magic').style.display="";
  document.getElementById('magic').style.visibility="";
}
/* the "" after style.display and visibility will set it back to default*/
/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

/* Use a for loop thats loops through all the elements in technologies, therefor
technologies.length. For each element in the array, we assign a variable called node
to create a new element 'LI', which refers to <li> in html. The variable textnode
create the text node with the elements in technologies, and for each loop it will be
given a value after where in the array the element is. Use appendChild and add the
textnode to links from node, and then get the element and place it where we can find
the id 'tech' in the html file.  */
for(i = 0; i < technologies.length; i++){
  var node = document.createElement('LI');
  var textnode = document.createTextNode(technologies[i]);
  node.appendChild(textnode);
  document.getElementById('tech').appendChild(node);
}
