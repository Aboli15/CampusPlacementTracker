let studentsContainer = document.getElementById("students-container");
let allStudents;

let callStudentsFromApi = async () =>{
    allStudents = await getStudents();
    console.log(allStudents);
    displayStudents(allStudents);
}
callStudentsFromApi();

let displayStudents = async (students)=>{
    studentsContainer.innerHTML = students.map((ele,index)=>`
    <div id="student-card" ondblclick="openStudentDetails(${index})">
    <img src ="${ele.personal_info.profile_image}">
    <h4>Name: ${ele.personal_info.full_name}</h4>
    <h4>CollegeId: ${ele.academic_info.college_id}</h4>
    <h5>Placement Status: ${ele.placement_status}</h5>
    <button id="edit" onclick="editStudent('${ele.student_id}')">Edit</button>
    <button id="delete" onclick="deleteStudent('${ele.student_id}')">Delete</button>
    </div>`).join("") 
};

let editStudent =(id) =>{
    console.log("editStudent");
    window.location.href=`../HTML/editStudent.html?id=${id}`;
    
}

let deleteStudent = async(id)=>{
    // console.log("deleteStudent", id);
    let conformDelete = confirm("Are you sure");
    if(!conformDelete) return;
    await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`, {method: "DELETE"});

    callStudentsFromApi();
};

function openStudentDetails(index){
    let selectedStudent = allStudents[index];
    localStorage.setItem("selectedStudent", JSON.stringify(selectedStudent));
    window.location.href = "../HTML/studentDetails.html";
}


let placedStudents = document.getElementById("placedStudents");

placedStudents.addEventListener("click", ()=>{
    let filterPlaced = allStudents.filter((ele)=>{
        return ele.placement_status === "Placed";
    });

    console.log(filterPlaced);
    displayStudents(filterPlaced)   
})

let notPlacedStudents = document.getElementById("notPlacedStudents");

notPlacedStudents.addEventListener("click", ()=>{
    let filterNotPlaced = allStudents.filter((ele)=>{
        return ele.placement_status === "Not Placed";
    });

    console.log(filterNotPlaced);
    displayStudents(filterNotPlaced);
})


let newStudent = document.getElementById("newStudent");
newStudent.addEventListener("click", ()=>{
    window.location.href = "../HTML/addStudent.html";
});

document.getElementById("allStudents").addEventListener("click", ()=>{
    if(allStudents && allStudents.length > 0){
        displayStudents(allStudents);
    } else {
        alert("Students data is still loading...");
    }
});