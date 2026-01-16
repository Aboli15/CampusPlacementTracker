let companyForm=document.getElementById("companyForm");

companyForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    // console.log(studentName.value);
    // console.log(studentGender.value);
    // console.log(PerformanceNavigationTiming.value.split(","));
    let company = {
        company_id:companyId.value,
        name:name.value,
        industry:industry.value,
        Hiring_Status: hiringStatus.value,
        Eligible_Batch:YOP.value.split(","),
        City:city.value,
        State:state.value,
        Country:country.value,

    };
    console.log(company);
    await fetch("https://placementstracker-4.onrender.com/api/companies",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(company),
    });
    alert("Company added Successfully")
});