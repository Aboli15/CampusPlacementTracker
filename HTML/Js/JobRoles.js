let jobRoleContainer = document.getElementById("jobRole-container");
let allJobRoles;

let callJobRolesFromApi = async () =>{
    allJobRoles = await getJobRoles();
    console.log(allJobRoles);
    displayJobRoles(allJobRoles);
}
callJobRolesFromApi();

let displayJobRoles = async (jobRoles)=>{
    jobRoleContainer.innerHTML = jobRoles.map((ele)=>`
    <div id="jobRole-card">
    <h4>Role_id: ${ele.role_id}</h4>
    <h4>Title: ${ele.title}</h4>
    <button id="edit">Edit</button>
    <button id="delete">Delete</button>
    </div>`).join("") 
};

let newJobRole=document.getElementById("newRole");
newJobRole.addEventListener("click",()=>{
    window.location.href="../Html/JobRoles.html";
})