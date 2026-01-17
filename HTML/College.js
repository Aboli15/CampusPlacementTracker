let collegesContainer = document.getElementById("colleges-container");
let allColleges;

let callCollegesFromApi = async () =>{
    allColleges = await getColleges();
    console.log(allColleges);
    displayColleges(allColleges);
}
callCollegesFromApi();

let displayColleges = async (colleges)=>{
    collegesContainer.innerHTML = colleges.map((ele)=>`
    <div id="colleges-card">
    <h4>College_id:${ele.college_id}</h4>
    <h4>Name: ${ele.name}</h4>
    <h4>Type: ${ele.type}</h4>
    <button id="edit">Edit</button>
    <button id="delete">Delete</button>
    </div>`).join("") 
};

let privateBtn = document.getElementById("Private");

privateBtn.addEventListener("click", () => {
    let filterPrivate = allColleges.filter((ele) => {
        return ele.type === "Private";
    });

    displayColleges(filterPrivate);
});

let governmentBtn = document.getElementById("Government");
governmentBtn.addEventListener("click", () => {
    let filterGovernment = allColleges.filter((ele) => {
        return ele.type === "Government";
    });

    displayColleges(filterGovernment);
});

let allCollegesBtn= document.getElementById("allColleges")
allCollegesBtn.addEventListener("click", () => {
    let filterAllColleges = allColleges.filter((ele) => {
        return ele.type === "Private" || ele.type === "Government";
    });

    displayColleges(filterAllColleges);
});



let newCollege=document.getElementById("newCollege");
newCollege.addEventListener("click",()=>{
    window.location.href="../Html/addCollege.html";
})
