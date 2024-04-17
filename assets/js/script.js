// Add all required elements
const start_button = document.querySelector("#start_button");
const infomation = document.querySelector("#infomation");
const exit_btn = infomation.querySelector("#buttons");
const continue_btn = infomation.querySelector("#buttons");
const inputs = document.querySelector(".inputs")

// Activate start game button
start_button.onclick = ()=>{
    infomation.classList.add("activeInfo");
};

exit_btn.onclick = ()=>{
    infomation.classList.remove("activeInfo");
}

continue_btn.onclick = ()=>{
    infomation.classList.remove("activeInfo");
    guess-the-world.classList.add("activeQuess");
    showQuestions(0);
}