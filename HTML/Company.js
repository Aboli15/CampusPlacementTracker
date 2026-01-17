let companyContainer = document.getElementById("company-container");
let allCompanies;

let callCompaniesFromApi = async () =>{
    allCompanies = await getCompanies();
    console.log(allCompanies);
    displayCompanies(allCompanies);
}
callCompaniesFromApi();

let displayCompanies = async (companies)=>{
    companyContainer.innerHTML = companies.map((ele)=>`
    <div id="company-card">
    <h4>Company_Id: ${ele.company_id}</h4>
    <h4>Company Name: ${ele.name}</h4>
    <h5>Industry: ${ele.industry}</h5>
    <button id="edit">Edit</button>
    <button id="delete">Delete</button>
    </div>`).join("") 
};

let newCompany=document.getElementById("newCompany");
newCompany.addEventListener("click",()=>{
    window.location.href="../Html/addCompany.html";
})