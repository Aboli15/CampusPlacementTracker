let collegeForm=document.getElementById("collegeForm");

collegeForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    // console.log(studentName.value);
    // console.log(studentGender.value);
    // console.log(PerformanceNavigationTiming.value.split(","));
    let college = {
        college_id: collegeId.value,
        name: name.value,
        type:type.value,
        affiliated_to: affiliatedTo.value,
        established_year: establishedYear.value,
        location:{
            city: city.value,
            state: state.value,
            country: country.value,
            pindoce:pindoce.value,
        },
        department: department.value.split(","),
    };
    console.log(college);
    await fetch("https://placementstracker-4.onrender.com/api/colleges",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(college),
    });
    alert("college added Successfully")
});