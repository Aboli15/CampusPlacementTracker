let BASE_URL = "https://placementstracker-4.onrender.com/api";

let getStudents = async () => {
  return fetch(`${BASE_URL}/students`)
    .then((res) => res.json());
};

let getColleges = async () => {
  return fetch(`${BASE_URL}/colleges`)
    .then((res) => res.json());
};

let getCompanies = async () => {
  return fetch(`${BASE_URL}/companies`)
    .then((res) => res.json());
};

let getJobRoles = async () => {
  return fetch(`${BASE_URL}/job-roles`)
    .then((res) => res.json());
};
