function printError(elemId, errorMsg) {
  document.getElementById(elemId).innerHTML = errorMsg;
}

function checkValidation() {
  //accessing all the input elemen'ts value attributes
  let userName = document.frm.userName.value;
  let fullName = document.frm.fullName.value;
  let emailAddress = document.frm.emailAddress.value;
  let password = document.frm.password.value;
  let mobileNumber = document.frm.mobileNumber.value;
  let age = document.frm.age.value;
  let dob = document.frm.dob.value;
  let gender = document.frm.gender.value;

  let checkBoxes = document.getElementsByName("skills[]");
  let skills = [];

  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      skills.push(checkBoxes[i].value);
    }
  }

  let country = document.frm.country.value;
  let description = document.frm.description.value;

  // declare the error variables
  let userNameErr =
    (fullNameErr =
    emailAddressErr =
    passwordErr =
    mobileNumberErr =
    ageErr =
    dobErr =
    genderErr =
    countryErr =
    descriptionErr =
      true);

  // userName validation
  if (userName == "") {
    printError("userNameErr", "please enter userName");
  } else {
    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.])[a-zA-Z0-9\.]{4,8}$/;
    if (regex.test(userName) === false) {
      printError("userNameErr", "invalid userName");
    } else {
      printError("userNameErr", "");
      userNameErr = false;
    }
  }

  // fullName validation
  if (fullName == "") {
    printError("fullNameErr", "please enter fullName");
  } else {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\s])[a-zA-Z\s]{4,8}$/;
    if (regex.test(fullName) === false) {
      printError("fullNameErr", "invalid fullName");
    } else {
      printError("fullNameErr", "");
      fullNameErr = false;
    }
  }

  // checking all error variables
  if (userNameErr || fullNameErr === true) {
    return false;
  } else {
    let dataPreview = `
        Form Validation \n 
        -------------------------- \n 
        UserName: ${userName} \n 
        FullName: ${fullName} \n 
    `;

    alert(dataPreview);
  }
}
