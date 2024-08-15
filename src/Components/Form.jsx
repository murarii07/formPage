import { useEffect, useState } from "react";
import { obj } from "../Validationfunc/functions";
import Input from "./inputElement";
import Select from "./optionElement";
import Button from './buttonElement';

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
    function errorCreation(obj, text) {
        let r = document.createElement('div');
        r.innerText = `*invalid ${text}`;
        r.setAttribute('class', "error");
        r.setAttribute('id', `${text}-error`);
        obj.appendChild(r);
    }
    const [phone, setPhone] = useState('');
    const [percent, setPercent] = useState('');
    const [tName, setTName] = useState('');
    const [indExp, setIndExp] = useState('');
    const [tExp, setTExp] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            const p = document.querySelector('#teachingExperience');
            if (!obj.isNumber(tExp) && p.value !== "") {
                let parent = p.parentElement;
                if (!parent.querySelector('.error')) {
                    p.style = 'border-bottom:3px solid red';
                    errorCreation(parent, p.getAttribute('id'))
                }
            } else {
                const errorElement = document.querySelector('#teachingExperience-error');
                if (errorElement) {
                    p.style = 'border-bottom:3px solid black';
                    errorElement.remove();
                }
            }
        }, 500);

        return () => { clearTimeout(handler); };
    }, [tExp]);
    useEffect(() => {
        const handler = setTimeout(() => {
            const p = document.querySelector('#industryExperience');
            if (!obj.isNumber(indExp) && p.value !== "") {
                let parent = p.parentElement;
                if (!parent.querySelector('.error')) {
                    p.style = 'border-bottom:3px solid red';
                    errorCreation(parent, p.getAttribute('id'))
                }
            } else {
                const errorElement = document.querySelector('#industryExperience-error');
                if (errorElement) {
                    p.style = 'border-bottom:3px solid black';
                    errorElement.remove();
                }
            }
        }, 500);

        return () => { clearTimeout(handler); };
    }, [indExp]);
    useEffect(() => {
        const handler = setTimeout(() => {
            const p = document.querySelector('#percentageMarks');
            if (!obj.isPercentValidate(percent) && p.value !== "") {
                let parent = p.parentElement;
                if (!parent.querySelector('.error')) {
                    p.style = 'border-bottom:3px solid red';
                    errorCreation(parent, p.getAttribute('id'))
                }
            } else {
                const errorElement = document.querySelector('#percentageMarks-error');
                if (errorElement) {
                    p.style = 'border-bottom:3px solid black';
                    errorElement.remove();
                }
            }
        }, 500);

        return () => { clearTimeout(handler); };
    }, [percent]);
    useEffect(() => {
        const handler = setTimeout(() => {
            const p = document.querySelector('#phoneNo');
            if ((!obj.isNumber(phone) && p.value !== "")) {
                let parent = p.parentElement;
                if (!parent.querySelector('.error')) {
                    p.style = 'border-bottom:3px solid red';
                    errorCreation(parent, p.getAttribute('id'))
                }
            } else {
                const errorElement = document.querySelector('#phoneNo-error');
                if (errorElement) {
                    p.style = 'border-bottom:3px solid black';
                    errorElement.remove();
                }
            }
        }, 500);

        return () => { clearTimeout(handler); };
    }, [phone]);
    useEffect(() => {
        const handler = setTimeout(() => {
            const p = document.querySelector('#teacherName');
            if (!obj.isCharacter(tName) && p.value !== "") {
                let parent = p.parentElement;
                if (!parent.querySelector('.error')) {
                    p.style = 'border-bottom:3px solid red';
                    errorCreation(parent, p.getAttribute('id'))
                }
            } else {
                const errorElement = document.querySelector('#teacherName-error');
                if (errorElement) {
                    p.style = 'border-bottom:3px solid black';
                    errorElement.remove();
                }
            }
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
            const response = await fetch("http://localhost:5000/add", { method: "POST", body: formdata });
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
            <form className="form-container" encType="multipart/form-data" onSubmit={handleSubmit}>
                <h2>Teaching Faculty Details</h2>
                <Input
                    inputId="departmentName"
                    inputName="departmentName"
                    inputType="text"
                    placeholder="Department Name"
                    name="Department Name" />

                <Input
                    inputId="designationDateOfJoining" inputName="designationDateOfJoining"
                    inputType="text"
                    placeholder="Date of joining"
                    name="Designation at Date Of Joining" />

                <Input
                    inputId="teacherName"
                    inputName="teacherName"
                    inputType="text"
                    placeholder="Teacher Name"
                    name="Teacher Name"
                    value={tName}
                    onChange={(e) => nameHandle(e)}

                />


                <Input
                    inputId="qualification"
                    inputName="qualification"
                    inputType="text"
                    placeholder="Qualification"
                    name="Qualification"
                />

                <Input
                    inputId="specialization"
                    inputName="specialization"
                    inputType="text"
                    placeholder="Specialization"
                    name="Specialization"
                />


                <Input
                    inputId="joinDate"
                    inputName="joinDate"
                    inputType="date"
                    name="Date Of Joining"
                />

                <Input
                    inputId="basicPay"
                    inputName="basicPay"
                    inputType="text"
                    placeholder="Present Basic Pay"
                    name="Present Basic Pay"
                />

                <Input
                    inputId="appointmentLetter"
                    inputName="appointmentLetter"
                    inputType="text"
                    placeholder="Enter Appointment Letter No."
                    name="Appointment Letter No."
                />

                <Input
                    inputId="approvalDate"
                    inputName="approvalDate"
                    inputType="date"
                    name="University Approval Date"
                    required
                />


                <Select
                    selectId="teacherType"
                    selectName="teacherType"
                    name="Designation Type"
                    options={["-- Select Teacher Type --", "Visiting", "Regular"]}
                    required
                />


                <Input
                    inputId="currentDesignation"
                    inputName="currentDesignation"
                    inputType="text"
                    placeholder="Enter the present/current designation"
                    name="Present/Current Designation"
                />


                <Select
                    selectId="programme"
                    selectName="programme"
                    name="Programme Associated With"
                    options={programmeOptions}
                    required
                />

                <Input
                    inputId="percentageMarks"
                    inputName="percentageMarks"
                    inputType="text"
                    placeholder="Percentage Of Marks"
                    name="Percentage Of Marks"
                    value={percent}
                    onChange={(e)=>percenthandle(e)}
                    required
                />

                <Input
                    inputId="teachingExperience"
                    inputName="teachingExperience"
                    inputType="text"
                    placeholder="Years Of Teaching Experience"
                    name="Years Of Teaching Experience"
                    value={tExp}
                    onChange={tExpHandle}
                    required
                />

                <Input
                    inputId="industryExperience"
                    inputName="industryExperience"
                    inputType="text"
                    placeholder="Total Industry Experience"
                    name="Total Industry Experience"
                    value={indExp}
                    onChange={indExpHandle}
                    required
                />

                <Input
                    inputId="birthDate"
                    inputName="birthDate"
                    inputType="date"
                    name="Birth Date"
                    max="2005-01-01"
                    required
                />


                <Select
                    selectId="scalePay"
                    selectName="scalePay"
                    name="Scale Of Pay"
                    options={scalePayOptions}
                    required
                />

                <Input
                    inputId="totalEmoluments"
                    inputName="totalEmoluments"
                    inputType="text"
                    placeholder="Total Emoluments"
                    name="Total Emoluments"
                />


                <Input
                    inputId="phoneNo"
                    inputName="phoneNo"
                    inputType="text"
                    placeholder="Phone No"
                    name="Phone No"
                    minLength={10}
                    maxLength={10}
                    onChange={(e) => phonehandle(e)}
                    required
                />

                <Input
                    inputId="resume"
                    inputName="resume"
                    inputType="file"
                    placeholder="cv"
                    accept="*/*"
                    name="Resume"
                />
                <Input
                    inputId="photo"
                    inputName="photo"
                    inputType="file"
                    placeholder="image"
                    accept="image/*"
                    name="Photo Image"
                />
                <Button buttonType="submit" buttonName="submit-button" name="Submit" />
            </form>


        </>

    );
}
export default Form;