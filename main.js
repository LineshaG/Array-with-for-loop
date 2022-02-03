var student_array = [];
function submit() {
    var display_array = [];
    for (i = 1; i<=4; i++)
    { 
        var name= document.getElementById("name_of_the_student_"+i).value;
        student_array.push(name);
    }
    var lenght = student_array.length;
    for (j = 0; j < lenght; j++) 
    {
    display_array.push("<h4>Name = "+student_array[j]+"</h4>"); 
    }
    document.getElementById("display_name_with_commas").innerHTML = display_array;
    var remove_comma = display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_comma;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
    student_array.sort();
    var lenght = student_array.length;
    var display_array = [];
    for (j = 0; j < lenght; j++) 
    {
    display_array.push("<h4>Name = "+student_array[j]+"</h4>"); 
    }
    document.getElementById("display_name_with_commas").innerHTML = display_array;
    var remove_comma = display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_comma;

}
function update() {
    document.getElementById("display_name_without_commas").innerHTML = student_array;
}