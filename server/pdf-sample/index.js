module.exports = ({
	username,
	SchoolName,
	phone,
	studentClass,
	adress,
	rollNo,
}) => {
	return `
          <!doctype html>
          <html>
              <head>
                  <!-- Font Awesome -->
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
                  <!-- Bootstrap core CSS -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
                  <!-- Material Design Bootstrap -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
      
                  <style>
                    html{
                        zoom: 0.55;
                    }    
                    .rule{
                      border-bottom: 1px solid black;
                      width:80%;
                    }
                    .mobile{
                      margin-top:-10px;
                    }
                    .email{
                      margin-bottom: 0;    
                    }
                    body{
                      font-family: 'Garamond';
                    }
                  </style>
              
              </head>
              <body>
      
              
              <div class="col-lg-8 mx-auto bg-light">
                    <h3><b>Students's Name </b></h3>
              </div>
              <div class="col-lg-8 row mx-auto">
                  <p class="lead"> ${username}</p>
              </div>

              <div class="col-lg-8 mx-auto bg-light">
                    <h3><b>School Name</b></h3>
              </div>
              <div class="col-lg-8 row mx-auto">
                  <p class="lead"> ${SchoolName}</p>
              </div>

              <div class="col-lg-8 mx-auto bg-light">
                    <h3><b>Class</b></h3>
              </div>
              <div class="col-lg-8 row mx-auto">
                  <p class="lead"> ${studentClass}</p>
              </div>

              <div class="col-lg-8 mx-auto bg-light">
                    <h3><b>Roll Number</b></h3>
              </div>
              <div class="col-lg-8 row mx-auto">
                  <p class="lead"> ${rollNo}</p>
              </div>

              <div class="col-lg-8 mx-auto bg-light">
                    <h3><b>Address Details</b></h3>
              </div>
              <div class="col-lg-8 row mx-auto">
                  <p class="lead"> ${adress}</p>
              </div>

              <div class="col-lg-8 mx-auto bg-light">
                    <h3><b>Contact Number</b></h3>
              </div>
              <div class="col-lg-8 row mx-auto">
                  <p class="lead"> ${phone}</p>
              </div>
      
              
              
                  <!-- JQuery -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                  <!-- Bootstrap tooltips -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
                  <!-- Bootstrap core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
                  <!-- MDB core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
              </body>
          </html> 
        `;
};
