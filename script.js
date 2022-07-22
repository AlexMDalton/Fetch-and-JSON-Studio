// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            let fullDiv = "";
            let sortedAstronauts = json.sort((a,b) => parseFloat(b.hoursInSpace) - parseFloat(a.hoursInSpace));
            for(let i=0; i < sortedAstronauts.length; i++){
                let fullSkill = "";
                for(let j=0; j < sortedAstronauts[i].skills.length; j++){
                    let tempSkill = ` ${sortedAstronauts[i].skills[j]}`;
                    fullSkill = fullSkill.concat(tempSkill);
                }
                let activeStatus;
                if(sortedAstronauts[i].active){
                    activeStatus = `<li class="active">`;
                } else {
                    activeStatus = `<li>`;
                }
                fullDiv += `
                <div class = "astronaut">
                    <div class = "bio">
                        <h3>${sortedAstronauts[i].firstName} ${sortedAstronauts[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${sortedAstronauts[i].hoursInSpace}</li>
                            ${activeStatus}Active: ${sortedAstronauts[i].active}</li>
                            <li>Skills: ${fullSkill}</li>
                        </ul>
                    </div>
                    <img class = "avatar" src = ${sortedAstronauts[i].picture}>
                </div>`;
            }
            container.innerHTML = `${fullDiv}
                <p>Number of Astronauts: ${json.length}`;
        });
    });
});