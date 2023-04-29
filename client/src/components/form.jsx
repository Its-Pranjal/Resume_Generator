import React, { useState } from "react";
import PersonalDetails from "./personalDetails";
import axios from 'axios';
import {saveAs} from 'file-saver'; 

const Form = () => {
	const [formData, setFormData] = useState({
		username: "",
		SchoolName: "",
		phone: "",
		studentClass: "",
		adress: "",
		rollNo: "",
	});

	const [page, setPage] = useState(0);
	const FormTittle = ["Enter your Details"];

	const PageDisplay = () => {
		if (page === 0) {
			return <PersonalDetails formData={formData} setFormData = {setFormData} />;
		} 
		
	};

	return (
		<div>
			<h1 className="text-center">Form</h1>
			<div className="d-flex justify-content-center">
				<h1 className="text-center">{FormTittle[page]}</h1>
			</div>
				<div>{PageDisplay()}</div>
			<div className="d-flex justify-content-center">
        
				<button
          className="btn btn-primary"
          onClick={() => {
            if (page === FormTittle.length - 1) {
              axios
                .post("http://localhost:4000/create-pdf", formData)
                .then(() =>
                  axios.get("http://localhost:4000/fetch-pdf", {
                    responseType: "blob",
                  })
                )
                .then((res) => {
                  const pdfBlob = new Blob([res.data], {
                    type: "application/pdf",
                  });
                  // setSuccess(true && res.status === 200);
                  saveAs(pdfBlob, "admit_card.pdf");
                });
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          
          {page === FormTittle.length - 1 ? "Download Pdf" : "Next"}
        </button>
			</div>
		</div>
	);
};

export default Form;
