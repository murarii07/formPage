import { useEffect, useState } from "react";
import { obj } from "../../Validationfunc/functions";
import Input from "../atoms/inputElement";
import Select from "../atoms/optionElement";
import Button from '../atoms/buttonElement';
import Field from "../Molecules/fieldElement";
function Form() {
  const programmeOptions = [
    "Select Programmes-",
    "(BACHELOR OF COMMERCE): (BUSINESS ADMINISTRATION)",
    "(BACHELOR OF COMMERCE): (BANKING, FINANCIAL SERVICES AND INSURANCE)",
    "(MASTER OF COMMERCE): (BUSINESS MANAGEMENT)",
    "(MASTER OF COMMERCE): (BANKING & FINANCE)",
    "(MASTER OF COMMERCE): M.Sc.(FINANCE)",
    "(MASTER OF SCIENCE): (INFORMATION TECHNOLOGY)",
    "(BACHELOR OF SCIENCE): (COMPUTER SCIENCE)",
    "(BACHELOR OF SCIENCE) : (INFORMATION TECHNOLOGY)",
    "(BACHELOR OF ARTS): MULTIMEDIA AND MASS COMMUNICATION",
    "(BACHELOR OF SCIENCE): (DATA SCIENCE)",
    "(BACHELOR OF SCIENCE): (COMPUTER APPLICATIONS)",
    "(BACHELOR OF COMMERCE): (BUSINESS ADMINISTRATION)",
    "(BACHELOR OF COMMERCE): COMMERCE",
    "(MASTER OF COMMERCE): ADVANCED ACCOUNTANCY",
    "(BACHELOR OF COMMERCE): (ACCOUNTING & FINANCE)",
    "(BACHELOR OF COMMERCE): (BANKING & INSURANCE)",
    "(BACHELOR OF COMMERCE): (FINANCIAL MARKETS)",
    "(BACHELOR OF COMMERCE): (MANAGEMENT STUDIES)"
  ];
  const scalePayOptions = ["-- Pay --"]
  for (let i = 1; i < 13; i++) {
    scalePayOptions.push(`Level${i}`)
  }
 
  const [phone, setPhone] = useState('');
  const [percent, setPercent] = useState('');
  const [tName, setTName] = useState('');
  const [indExp, setIndExp] = useState('');
  const [tExp, setTExp] = useState('');
  const [error, setError] = useState({});

  useEffect(() => {
    const handler = setTimeout(() => {
      const p = document.querySelector('#teachingExperience');
      let res;
      if (!obj.isNumber(tExp) && p.value !== "") {
        res = true;
      } else {
        res = false
      }
      setError(s => ({
        ...s,
        teachingExperience: res
      }))
    }, 500);
    return () => { clearTimeout(handler); };
  }, [tExp]);
  useEffect(() => {
    const handler = setTimeout(() => {
      const p = document.querySelector('#industryExperience');
      let res;
      if (!obj.isNumber(indExp) && p.value !== "") {
        res = true;
      } else {
        res = false
      }
      setError(s => ({
        ...s,
        industryExperience: res
      }))
    }, 500);
    return () => { clearTimeout(handler); };
  }, [indExp]);
  useEffect(() => {
    const handler = setTimeout(() => {
      const p = document.querySelector('#percentageMarks');
      let res;
      if (!obj.isPercentValidate(percent) && p.value !== "") {
        res = true
      } else {
        res = false
      }
      setError(s => ({
        ...s,
        percentageMarks: res
      }))
    }, 500);

    return () => { clearTimeout(handler); };
  }, [percent]);
  useEffect(() => {
    const handler = setTimeout(() => {
      const p = document.querySelector('#phoneNo');
      let res;
      if ((!obj.isNumber(phone) && p.value !== "")) {
        res = true
      } else {
        res = false
      }
      setError(s => ({
        ...s,
        phoneNo: res
      }))
    }, 500);
    return () => { clearTimeout(handler); };
  }, [phone]);
  useEffect(() => {
    const handler = setTimeout(() => {
      const p = document.querySelector('#teacherName');
      let res;
      if (!obj.isCharacter(tName) && p.value !== "") {
        res = true
      } else {
        res = false
      }
      setError(s => ({
        ...s,
        teacherName: res
      }))
    }, 500);

    return () => { clearTimeout(handler); };
  }, [tName]);

  const phonehandle = (e) => {
    setPhone(e.target.value)
  }
  const percenthandle = (e) => {
    setPercent(e.target.value)
  }
  const nameHandle = (e) => {
    setTName(e.target.value)
  }
  const indExpHandle = (e) => {
    setIndExp(e.target.value)
  }
  const tExpHandle = (e) => {
    setTExp(e.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (document.querySelector(".error")) {
      alert("Please verify your inputs");
      return;
    }
    const form = document.querySelector('form');
    const formdata = new FormData(form);
    try {
      const response = await fetch(process.env.REACT_APP_API_URL_ADD, { method: "POST", body: formdata });
      const result = await response.json();
      if (result['success']) {
        form.reset();
        window.location.href = "/submit";
      }
      else {
        alert(result.message);
      }
    }
    catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <>
        <h2>Teaching Faculty Details</h2>
      <form className="form-container" encType="multipart/form-data" onSubmit={handleSubmit}>
        <Field
          elementobj={<Input
            inputId="departmentName"
            inputName="departmentName"
            inputType="text"
            placeholder="Department Name"
            name="Department Name"
          />}
        />

        <Field
          elementobj={<Input
            inputId="designationDateOfJoining"
            inputName="designationDateOfJoining"
            inputType="text"
            placeholder="Date of joining"
            name="Designation at Date Of Joining"
          />}
        />

        <Field
          elementobj={<Input
            inputId="teacherName"
            inputName="teacherName"
            inputType="text"
            placeholder="Teacher Name"
            name="Teacher Name"
            value={tName}
            onChange={(e) => nameHandle(e)}
          />}
          error={error.teacherName}
          id={"teacherName"}
        />

        <Field
          elementobj={<Input
            inputId="qualification"
            inputName="qualification"
            inputType="text"
            placeholder="Qualification"
            name="Qualification"
          />}
        />

        <Field
          elementobj={<Input
            inputId="specialization"
            inputName="specialization"
            inputType="text"
            placeholder="Specialization"
            name="Specialization"
          />}
        />

        <Field
          elementobj={<Input
            inputId="joinDate"
            inputName="joinDate"
            inputType="date"
            name="Date Of Joining"
          />}
        />

        <Field
          elementobj={<Input
            inputId="basicPay"
            inputName="basicPay"
            inputType="text"
            placeholder="Present Basic Pay"
            name="Present Basic Pay"
          />}
        />

        <Field
          elementobj={<Input
            inputId="appointmentLetter"
            inputName="appointmentLetter"
            inputType="text"
            placeholder="Enter Appointment Letter No."
            name="Appointment Letter No."
          />}
        />

        <Field
          elementobj={<Input
            inputId="approvalDate"
            inputName="approvalDate"
            inputType="date"
            name="University Approval Date"
            required
          />}
        />

        <Field
          elementobj={<Select
            selectId="teacherType"
            selectName="teacherType"
            name="Designation Type"
            options={["-- Select Teacher Type --", "Visiting", "Regular"]}
            required
          />}
        />

        <Field
          elementobj={<Input
            inputId="currentDesignation"
            inputName="currentDesignation"
            inputType="text"
            placeholder="Enter the present/current designation"
            name="Present/Current Designation"
          />}
        />

        <Field
          elementobj={<Select
            selectId="programme"
            selectName="programme"
            name="Programme Associated With"
            options={programmeOptions}
          />}
        />

        <Field
          elementobj={<Input
            inputId="percentageMarks"
            inputName="percentageMarks"
            inputType="text"
            placeholder="Percentage Of Marks"
            name="Percentage Of Marks"
            value={percent}
            onChange={(e) => percenthandle(e)}

          />}
          error={error.percentageMarks}
          id={"percentageMarks"}
        />

        <Field
          elementobj={<Input
            inputId="teachingExperience"
            inputName="teachingExperience"
            inputType="text"
            placeholder="Years Of Teaching Experience"
            name="Years Of Teaching Experience"
            value={tExp}
            onChange={tExpHandle}
          />}
          error={error.teachingExperience}
          id="teachingExperience"
        />

        <Field
          elementobj={<Input
            inputId="industryExperience"
            inputName="industryExperience"
            inputType="text"
            placeholder="Total Industry Experience"
            name="Total Industry Experience"
            value={indExp}
            onChange={indExpHandle}

          />}
          error={error.industryExperience}
          id="industryExperience"
        />

        <Field
          elementobj={<Input
            inputId="birthDate"
            inputName="birthDate"
            inputType="date"
            name="Birth Date"
            max="2005-01-01"

          />}
        />

        <Field
          elementobj={<Select
            selectId="scalePay"
            selectName="scalePay"
            name="Scale Of Pay"
            options={scalePayOptions}

          />}
        />

        <Field
          elementobj={<Input
            inputId="totalEmoluments"
            inputName="totalEmoluments"
            inputType="text"
            placeholder="Total Emoluments"
            name="Total Emoluments"
          />}
        />

        <Field
          elementobj={<Input
            inputId="phoneNo"
            inputName="phoneNo"
            inputType="text"
            placeholder="Phone No"
            name="Phone No"
            minLength={10}
            maxLength={10}
            onChange={(e) => phonehandle(e)}
          />}
          error={error.phoneNo}
          id="phoneNo"
        />

        <Field
          elementobj={<Input
            inputId="resume"
            inputName="resume"
            inputType="file"
            placeholder="cv"
            accept="*/*"
            name="Resume"
          />}
        />

        <Field
          elementobj={<Input
            inputId="photo"
            inputName="photo"
            inputType="file"
            placeholder="image"
            accept="image/*"
            name="Photo Image"
          />}
        />

        <Button 
        buttonType="submit" 
        buttonName="submit-button" 
        name="Submit" />

      </form>


    </>

  );
}
export default Form;