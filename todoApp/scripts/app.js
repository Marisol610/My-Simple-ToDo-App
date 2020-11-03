var exchangeRate = 21; //this variable can be outside because it doesnt need anything fom the functiones below


function addTodo() {
    var text = $("#todoText").val(); //read the text
    console.log(text);
    $("#todoText").val(''); // clear the input field


    // create an li with the text
    var li = "<li>"+ text +"</li>";
    $("#pendingList").append(li);

    //focus on the input
    $("#todoText").focus();

}
function init() {
    // catch event

    $("#btnAdd").click(addTodo);

}














// set the text on the input
////var input=document.getElementById("todoText");
//input.value = "Hello there";

//$("#todoText").val("Hello there");// it will wrtite what you put in the parameters

//console.log($("#todoText").val());// it will read if you dont't put parameters

//$("#todoText").val("");//clear text

/**SELECTORS
 * # id
 * . class name
 * DIV tag
 * input
 */


// event that gets executed only after the browsers finishes rendering all the HTML
//pass a function sname
window.onload = init;