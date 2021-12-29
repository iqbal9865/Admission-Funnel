import React,{useState} from 'react';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import OnlineAdmissionCSS from './OnlineAdmission.module.css';

const OnlineAdmission = () => {
    const [department, setDepartment] = useState('')
    const [semester, setSemester] = useState('')
    const [gender, setGender] = useState('')
    const [marital, setMarital] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleGender = (e) => {
        setGender(e.target.value)
    }
    const handleChange = (e) => {
        setDepartment(e.target.value)
    }
    const handleSemester = (e) => {
        setSemester(e.target.value)
    }
    const handleMarital = (e) => {
        setMarital(e.target.value)
    }
    
    const onSubmit = data => {
        data.semester = semester;
        data.department = department;
        data.gender = gender;
        data.marital = marital
        console.log(data)
         const eventData = {
            academicYear: data.academicYear,
            name: data.name,
            semsester: data.semester,
            department: data.department,
            gender: data.gender,
            birthDate: data.birthDate,
            birthPlace: data.birthPlace,
            citizenship: data.citizenship,
            marital: data.marital,
            presentAddress: data.presentAddress,
            permanentAddress: data.permanentAddress,
            mobileNumber: data.mobileNumber,
            email: data.email,
            fatherName: data.fatherName,
            motheName: data.motheName,
            sscInstitutionName: data.sscInstitutionName,
            sscBoardName: data.sscBoardName,
            sscPassingYear: data.sscPassingYear,
            sscGroup: data.sscGroup,
            sscGpa: data.sscGpa,
            hscInstitutionName: data.hscInstitutionName,
            hscBoardName: data.hscBoardName,
            hscPassingYear: data.hscPassingYear,
            hscGroup: data.hscGroup,
            hscGpa: data.hscGpa,
            admissionDate: data.admissionDate,
            applicantSignature: data.applicantSignature
            
        };
        const url = `https://cryptic-stream-76661.herokuapp.com/addOnlineAdmission`
        console.log('eventData')
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        alert('Addmission Done Successfully!')
    };

    console.log(watch("example"));
    return (
        <div className="row m-5">
        <div className="col-md-3 col-sm-12">
            <SideBar />
        </div>
        <div className='col-md-9 col-sm-12 px-lg-5 py-3' style={{textAlign:'justify', fontWeight:'700'}}> 
            <h1>Application For Admission</h1>
            <p>XYZ University is committed to offer quality education to all students with required academic qualifications. There will be no discrimination on the basis of age, sex, religion, nationality etc.</p>
            <br/>
            <h4>INSTRUCTIONS</h4>
            <p>a. The application processing fee (TK 500) is non refundable. The final decision regarding admission will be based on the candidate's academic background and performance in the admission test. The decision of the Admission Committee shall be final. b. Applications will not be processed without a complete application package which includes (1) Duly filled application form, (2) Four (4) passport size recent colour photographs of the applicant, (3) two (2) sets of all certificates and mark sheets/ transcripts (attested). In addition for graduate students two letters of recommendation from teachers/employers are required.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                        <label for="academic_year" style={{marginBottom: "10px"}}>Academic Year:</label>
                        <input Placeholder="Enter Your Academic year" className="form-control" autoComplete={false} {...register("academicYear")} required />
                    </div>
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                        <div>
                            <label for="semester">Semester:</label>
                        </div>
                            <label style={{margin: "10px"}}>
                                <input type="radio" id="spring" name="semester" value="spring" onChange={handleSemester} /> Spring
                            </label>

                            <label style={{margin: "10px"}}>
                                <input type="radio" id="Summer" name="semester" value="summer" onChange={handleSemester}  /> Summer
                            </label>
                            
                            <label style={{margin: "10px"}}>
                                <input type="radio" id="Fall" onChange={handleSemester}  name="semester" value="fall"  /> Fall
                            </label>
                            <div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                        <div className="col-sm-12 col-md-12 form-group">
                            <label for="application_for_admission" style={{marginBottom: "10px"}}>Application For Admission In:</label>
                            <select id="inputState" class="form-control" onChange={handleChange}>
                                <option selected>Choose Your Option...</option>
                                <option value="cse" {...register("cse")}>Bachelor Of Computer Science and Engineering (CSE)</option>
                                <option value="eee" {...register("eee")}>Bachelor Of Electrical and Electronic Engineering (EEE)</option>
                                <option value="textile" {...register("textile")}>Bachelor Of Science in Textile Engineering (BSTE)</option>
                                <option value="civil" {...register("civil")}>Bachelor Of Science in Civil Engineering (CE)</option>
                                <option value="mechanical" {...register("mechanical")}>Bachelor Of Mechanical Engineering (ME)</option>
                                <option value="pharmacy" {...register("pharmacy")}>Bachelor Of Pharmacy (BP)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                        <label for="application_for_admission" style={{marginBottom: "10px"}}>Name (In capital Letter):</label>
                        <input Placeholder="Enter Your Name" className="form-control" autoComplete={false} {...register("name")} required />
                    </div>

                    <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                        <label for="application_for_admission" style={{marginBottom: "10px"}}>DateOf Birth:</label>
                        <input type="date" className="form-control" id="birthday" name="birthday" {...register("birthDate")} required />
                    </div>
                </div>
                </div>

                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                        <label for="place_of_birth" style={{marginBottom: "10px"}}>Place of Birth:</label>
                        <input Placeholder="Enter Your Birth Place" className="form-control" autoComplete={false} {...register("birthPlace")} required />
                    </div>

                    <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                        <label for="citizebship" style={{marginBottom: "10px"}}>Citizenship:</label>
                        <input Placeholder="Enter Your Citizenship" className="form-control" autoComplete={false} {...register("citizenship")} required />
                    </div>
                </div>
            </div>
                

            <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                    <div>
                            <label for="semester">Gender:</label>
                        </div>
                            <label style={{margin: "10px"}}>
                                <input type="radio" id="male" onChange={handleGender} name="gender" value="male" /> Male
                            </label>

                            <label style={{margin: "10px"}}>
                                <input type="radio" id="female" name="gender" onChange={handleGender}  value="female" /> Female
                            </label>
                            <div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                        <div>
                            <label for="semester">Marital Status:</label>
                        </div>
                            <label style={{margin: "10px"}}>
                                <input type="radio" id="single" name="maritalstatus" value="single" onChange={handleMarital} /> Single
                            </label>

                            <label style={{margin: "10px"}}>
                                <input type="radio" id="married" name="maritalstatus" value="married" /> Married
                            </label>
                            <div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                        <label for="present_address" style={{marginBottom: "10px"}}>Present Address( In Capital Letter):</label>
                        <input Placeholder="Enter Your Present Address" className="form-control" autoComplete={false} {...register("presentAddress")} required />
                    </div>
                        <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                            <label for="permanent_address" style={{marginBottom: "10px"}}>Permanent Address(In Capital Letter):</label>
                            <input Placeholder="Enter Your Permanent Address" className="form-control" autoComplete={false} {...register("permanentAddress")} required />
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                        <label for="mobile" style={{marginBottom: "10px"}}>Mobile:</label>
                        <input Placeholder="Enter Your Mobile number" className="form-control" autoComplete={false} {...register("mobileNumber")} required />
                    </div>
                        <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                            <label for="email" style={{marginBottom: "10px"}}>E-mail:</label>
                            <input Placeholder="Enter Your Email Address" className="form-control" autoComplete={false} {...register("email")} required />
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                        <label for="father_name" style={{marginBottom: "10px"}}>Father/Husband's Name:</label>
                        <input Placeholder="Enter Your Father/Husband Name" className="form-control" autoComplete={false} {...register("fatherName")} required />
                    </div>
                        <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                            <label for="email" style={{marginBottom: "10px"}}>Mother Name:</label>
                            <input Placeholder="Enter Your Mother Name" className="form-control" autoComplete={false} {...register("motheName")} required />
                        </div>
                    </div>
                </div>

              

                <h1 style={{marginTop: "50px"}}>Academic Qualification:</h1>
                <h4>SSC:</h4>
                <div className="row" style={{marginTop: "10px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-3 form-group" style={{paddingRight: "10px"}}>
                        <label for="sscInstituionName" style={{marginBottom: "10px"}}>Name of Institution:</label>
                        <input className="form-control" autoComplete={false} {...register("sscInstitutionName")} required />
                    </div>
                        <div className="col-sm-12 col-md-3 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                            <label for="sscBoardName" style={{marginBottom: "10px"}}>Board:</label>
                            <input className="form-control" autoComplete={false} {...register("sscBoardName")} required />
                        </div>
                    
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="sscPassingYear" style={{marginBottom: "10px"}}>Year of Passing:</label>
                        <input className="form-control" autoComplete={false} {...register("sscPassingYear")} required />
                    </div>
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="sscGroup" style={{marginBottom: "10px"}}>Group:</label>
                        <input className="form-control" autoComplete={false} {...register("sscGroup")} required />
                    </div>
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="sscGpa" style={{marginBottom: "10px"}}>GPA:</label>
                        <input className="form-control" autoComplete={false} {...register("sscGpa")} required />
                    </div>
                    </div>
                </div>

                <h4 style={{marginTop: "20px"}}>HSC:</h4>
                <div className="row" style={{marginTop: "10px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-3 form-group" style={{paddingRight: "10px"}}>
                        <label for="hscInstituionName" style={{marginBottom: "10px"}}>Name of Institution:</label>
                        <input className="form-control" autoComplete={false} {...register("hscInstitutionName")} required />
                    </div>
                        <div className="col-sm-12 col-md-3 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                            <label for="hscBoardName" style={{marginBottom: "10px"}}>Board:</label>
                            <input className="form-control" autoComplete={false} {...register("hscBoardName")} required />
                        </div>
                    
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="hscPassingYear" style={{marginBottom: "10px"}}>Year of Passing:</label>
                        <input className="form-control" autoComplete={false} {...register("hscPassingYear")} required />
                    </div>
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="hscGroup" style={{marginBottom: "10px"}}>Group:</label>
                        <input className="form-control" autoComplete={false} {...register("hscGroup")} required />
                    </div>
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="hscGpa" style={{marginBottom: "10px"}}>GPA:</label>
                        <input className="form-control" autoComplete={false} {...register("hscGpa")} required />
                    </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">

                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                        <label for="admissionDate" style={{marginBottom: "10px"}}>Admission Date:</label>
                        <input type="date" {...register("admissionDate")} className="form-control" id="admission_date" name="admission_date" {...register("admissionDate")} />
                    </div>

                    <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                        <label for="sinature_of_applicant" style={{marginBottom: "10px"}}>Signature of Applicant:</label>
                        <input className="form-control" autoComplete={false} {...register("applicantSignature")} required />
                    </div>
                </div>
                </div>
                
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input style={{marginTop: "30px", backgroundColor:'#FA9516'}} className={`btn form-control ${OnlineAdmissionCSS.submitbutton}`} type="submit" value="SUBMIT"/>
                
            </form>
        </div>
    </div>
    );
};

export default OnlineAdmission;