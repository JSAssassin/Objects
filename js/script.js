var person = {
    name: 'Tashi',
    country: 'Bhutan',
    skills: ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}
var message = "<p>Hello, my name is " + person.name + ".</p>";
message += "<p> I'm from " + person.country + ".</p>";
person.name = "Unicorn";
message += "<p> But, I wish my name was " + person.name + ".</p>";
message += "<p> I have " + person.skills.length + " skills: ";
message += person.skills.join(', ') + "</p>";


print(message);