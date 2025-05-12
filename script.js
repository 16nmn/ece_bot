const timetable = {
    "Monday": "LIC-LAB G1 - 10AM to 11:40AM, LCS- 11:40AM to 12:30PM, CNS - 12:30PM to 1:20PM,DSP-LAB G2 - 2:20PM to 3:10PM,LIC - 4PM to 5PM",
    "Tuesday": "LIC - 10AM, LCS - 10:50AM, CNS - 11:40AM,PSP - 12:30PM",
    "Wednesday": "M&M LAB G1 -10AM, LCS - 11:40AM, DSP -12:30PM, PSP - 2:20PM, GATE GUIDANCE -3:10PM, M&M - 4PM ",
    "Thursday": "DSP - 10AM, LIC -10:50AM, DSP LAB G1 - 11:40AM, GATE GUIDANCE - 4PM", 
    "Friday": "PSP - 10AM, DSP - 10:50AM, M&M -11:40AM, LCS - 12:30PM, TPO INTERACTION- 2:20PM, MATLAB - 3:10PM, CNS - 4PM",
    "Saturday":"LIC LAB G2 -10AM, M&M - 11:40AM, M&M LAB G2 - 3:10PM"
    
};

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;
    
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="message user">${userInput}</div>`;

    let response = "I didn't understand that. Please ask about a specific day.";
    
    if (timetable[userInput]) {
        response = `Your timetable for ${userInput}: ${timetable[userInput]}`;
    }

    setTimeout(() => {
        chatBox.innerHTML += `<div class="message bot">${response}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    document.getElementById("user-input").value = "";
}
