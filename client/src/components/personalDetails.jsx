import React from 'react'

const PersonalDetails = ({formData, setFormData}) => {

  // username: "",
	// 	SchoolName: "",
	// 	phone: "",
	// 	studentClass: "",
	// 	adress: "",
	// 	rollNo: "",
  return (
    <div className='container'>
    <form className="row g-3">
  <div className="col-md-5">
    <label htmlFor="username" className="form-label">Candidate's Name</label>
    <input type="text" className="form-control" id="username" 
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
              }}
              />
  </div>
  <div className="col-md-5">
    <label htmlFor="SchollName" className="form-label">School Name</label>
    <input type="text" className="form-control" id="SchoolName"      value={formData.SchoolName}
            onChange={(e) => {
              setFormData({ ...formData, SchoolName: e.target.value });
            }}
            />
  </div>
  <div className="col-md-3">
    <label htmlFor="studentClassName" className="form-label">Class</label>
    <input type="text" className="form-control" id="studentClass"
            value={formData.studentClass}
            onChange={(e) => {
              setFormData({ ...formData, studentClass: e.target.value });
            }}
            />
  </div>
  <div className="col-md-3">
    <label htmlFor="rollNo" className="form-label">Roll Number</label>
    <input type="text" className="form-control" id="rollNo"
              value={formData.rollNo}
              onChange={(e) => {
                setFormData({ ...formData, rollNo: e.target.value });
              }}
              />
  </div>
  <div className="col-md-4">
    <label htmlFor="phone" className="form-label">Contact Number</label>
    <input type="tel" className="form-control" id="phone"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
              />
  </div>
  <div className="col-10">
    <label htmlFor="adress" className="form-label">Address</label>
    <input type="text" className="form-control" id="adress" placeholder="Luchnow UttarPradesh"
              value={formData.adress}
              onChange={(e) => {
                setFormData({ ...formData, adress: e.target.value });
              }}
              />
  </div>
  
  
</form>
</div>
  );
};

export default PersonalDetails;