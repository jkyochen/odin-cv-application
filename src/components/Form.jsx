import PropTypes from 'prop-types';
import FieldSet from "./FieldSet";
import InputField from "./InputField";
import styles from "../styles/Form.module.css";
import { useState } from 'react';

function Form({ person, setPerson }) {

    const [newPersonInfo, setNewPersonInfo] = useState(person);
    const [school, setSchool] = useState(person.educationalExperience[0]);
    const [company, setCompany] = useState(person.practicalExperience[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPerson({
            ...newPersonInfo,
        });
    };

    const handleChange = (e) => {
        setNewPersonInfo({
            ...newPersonInfo,
            [e.target.name]: e.target.value,
        });
    }

    const handleSchoolDelete = (e, index) => {
        e.preventDefault();
        setNewPersonInfo({
            ...newPersonInfo,
            educationalExperience: newPersonInfo.educationalExperience.filter((_, i) => i !== index),
        });
    }

    const handleSchoolSave = (e) => {
        e.preventDefault();
        setNewPersonInfo({
            ...newPersonInfo,
            educationalExperience: newPersonInfo.educationalExperience.concat(school),
        });
    }

    const handleSchoolChange = (e) => {
        setSchool({
            ...school,
            [e.target.name]: e.target.value,
        });
    }

    const handleCompanyDelete = (e, index) => {
        e.preventDefault();
        setNewPersonInfo({
            ...newPersonInfo,
            practicalExperience: newPersonInfo.practicalExperience.filter((_, i) => i !== index),
        });
    }

    const handleCompanySave = (e) => {
        e.preventDefault();
        setNewPersonInfo({
            ...newPersonInfo,
            practicalExperience: newPersonInfo.practicalExperience.concat(company),
        });
    }

    const handleCompanyChange = (e) => {
        setCompany({
            ...company,
            [e.target.name]: e.target.value,
        });
    }

    return <form className={styles.form}>
        <FieldSet title={"General Information"}>
            <InputField label={"Name"} name={"name"} value={newPersonInfo.name} onChange={handleChange} />
            <InputField label={"Email"} type='email' name={"email"} value={newPersonInfo.email} onChange={handleChange} />
            <InputField label={"Phone number"} type='tel' name={"phoneNumber"} value={newPersonInfo.phoneNumber} onChange={handleChange} />
        </FieldSet>
        <FieldSet title={"Educational Experience"}>
            {newPersonInfo.educationalExperience.map((r, i) => {
                return <div key={i} className={styles.show}>
                    <p>{r.schoolName}-{r.titleOfStudy}({r.startDateOfStudy}-{r.endDateOfStudy})</p>
                    <button onClick={(e) => handleSchoolDelete(e, i)}>Delete</button>
                </div>
            })}
            <InputField label={"School name"} value={school.schoolName} name={"schoolName"} onChange={handleSchoolChange} />
            <InputField label={"Title of study"} value={school.titleOfStudy} name={"titleOfStudy"} onChange={handleSchoolChange} />
            <InputField label={"Start date of study"} value={school.startDateOfStudy} name={"startDateOfStudy"} onChange={handleSchoolChange} />
            <InputField label={"End date of study"} value={school.endDateOfStudy} name={"endDateOfStudy"} onChange={handleSchoolChange} />
            <div className={styles.button}>
                <button onClick={handleSchoolSave}>Save</button>
            </div>
        </FieldSet>
        <FieldSet title={"Practical Experience"}>
            {newPersonInfo.practicalExperience.map((r, i) => {
                return <div key={i} className={styles.show}>
                    <p>{r.companyName}-{r.titleOfStudy}({r.dateFrom}-{r.dateUntil})</p>
                    <button onClick={(e) => handleCompanyDelete(e, i)}>Delete</button>
                </div>
            })}
            <InputField label={"Company name"} value={company.companyName} name={"companyName"} onChange={handleCompanyChange} />
            <InputField label={"Position title"} value={company.positionTitle} name={"positionTitle"} onChange={handleCompanyChange} />
            <InputField label={"Main responsibilities of your jobs"} value={company.mainResponsibilitiesOfYourJobs} name={"mainResponsibilitiesOfYourJobs"} onChange={handleCompanyChange} />
            <InputField label={"Date from"} value={company.dateFrom} name={"dateFrom"} onChange={handleCompanyChange} />
            <InputField label={"Date until"} value={company.dateUntil} name={"dateUntil"} onChange={handleCompanyChange} />
            <div className={styles.button}>
                <button onClick={handleCompanySave}>Save</button>
            </div>
        </FieldSet>
        <div className={styles.button}>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    </form>
}

Form.propTypes = {
    person: PropTypes.object.isRequired,
    setPerson: PropTypes.func.isRequired,
}

export default Form;