import React from 'react';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import OnlineAdmissionCSS from './OnlineAdmission.module.css';

const OnlineAdmission = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                        <input Placeholder="Enter Your Academic year" className="form-control" autoComplete={false} {...register("academic_year")} required />
                    </div>
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                        <div>
                            <label for="semester">Semester:</label>
                        </div>
                            <label className="checkbox-inline" style={{margin: "10px"}}>
                                <input type="checkbox" value="" /> Spring
                            </label>

                            <label className="checkbox-inline" style={{margin: "10px"}}>
                                <input type="checkbox" value="" /> Summer
                            </label>
                            
                            <label className="checkbox-inline" style={{margin: "10px"}}>
                                <input type="checkbox" value="" /> Fall
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
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>Bachelor Of Computer Science and Engineering (CSE)</option>
                                <option>Bachelor Of Electrical and Electronic Engineering (EEE)</option>
                                <option>Bachelor Of Science in Textile Engineering (BSTE)</option>
                                <option>Bachelor Of Science in Civil Engineering (CE)</option>
                                <option>Bachelor Of Mechanical Engineering (ME)</option>
                                <option>Bachelor Of Pharmacy (BP)</option>
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
                        <input type="date" className="form-control" id="birthday" name="birthday" />
                    </div>
                </div>
                </div>

                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                        <label for="place_of_birth" style={{marginBottom: "10px"}}>Place of Birth:</label>
                        <input Placeholder="Enter Your Birth Place" className="form-control" autoComplete={false} {...register("Place_of_birth")} required />
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
                            <label className="checkbox-inline" style={{margin: "10px"}}>
                                <input type="checkbox" value="male" /> Male
                            </label>

                            <label className="checkbox-inline" style={{margin: "10px"}}>
                                <input type="checkbox" value="female" /> Female
                            </label>
                            <div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                        <div>
                            <label for="semester">Marital Status:</label>
                        </div>
                            <label className="checkbox-inline" style={{margin: "10px"}}>
                                <input type="checkbox" value="" /> Single
                            </label>

                            <label className="checkbox-inline" style={{margin: "10px"}}>
                                <input type="checkbox" value="" /> Married
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
                        <input Placeholder="Enter Your Present Address" className="form-control" autoComplete={false} {...register("present_address")} required />
                    </div>
                        <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                            <label for="permanent_address" style={{marginBottom: "10px"}}>Permanent Address(In Capital Letter):</label>
                            <input Placeholder="Enter Your Permanent Address" className="form-control" autoComplete={false} {...register("permanent_address")} required />
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                        <label for="mobile" style={{marginBottom: "10px"}}>Mobile:</label>
                        <input Placeholder="Enter Your Mobile number" className="form-control" autoComplete={false} {...register("mobile_number")} required />
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
                        <label for="father_husband_name" style={{marginBottom: "10px"}}>Father/Husband's Name:</label>
                        <input Placeholder="Enter Your Father/Husband Name" className="form-control" autoComplete={false} {...register("father_husband_name")} required />
                    </div>
                        <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                            <label for="email" style={{marginBottom: "10px"}}>Mother Name:</label>
                            <input Placeholder="Enter Your Mother Name" className="form-control" autoComplete={false} {...register("mother_name")} required />
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                        <label for="mobile" style={{marginBottom: "10px"}}>Mobile:</label>
                        <input Placeholder="Enter Your Mobile number" className="form-control" autoComplete={false} {...register("mobile_number")} required />
                    </div>
                        <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                            <label for="email" style={{marginBottom: "10px"}}>E-mail:</label>
                            <input Placeholder="Enter Your Email Address" className="form-control" autoComplete={false} {...register("email")} required />
                        </div>
                    </div>
                </div>

                <h1 style={{marginTop: "50px"}}>Academic Qualification:</h1>
                <h4>SSC:</h4>
                <div className="row" style={{marginTop: "10px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-3 form-group" style={{paddingRight: "10px"}}>
                        <label for="nameofinstituion" style={{marginBottom: "10px"}}>Name of Institution:</label>
                        <input className="form-control" autoComplete={false} {...register("institution_name")} required />
                    </div>
                        <div className="col-sm-12 col-md-3 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                            <label for="board" style={{marginBottom: "10px"}}>Board/University/Country:</label>
                            <input className="form-control" autoComplete={false} {...register("board_name")} required />
                        </div>
                    
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="passingyear" style={{marginBottom: "10px"}}>Year of Passing:</label>
                        <input className="form-control" autoComplete={false} {...register("passing_year")} required />
                    </div>
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="group" style={{marginBottom: "10px"}}>Group:</label>
                        <input className="form-control" autoComplete={false} {...register("group")} required />
                    </div>
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="gpa" style={{marginBottom: "10px"}}>GPA:</label>
                        <input className="form-control" autoComplete={false} {...register("gpa")} required />
                    </div>
                    </div>
                </div>

                <h4 style={{marginTop: "20px"}}>HSC:</h4>
                <div className="row" style={{marginTop: "10px"}}>
                    <div className="d-flex">
                    <div className="col-sm-12 col-md-3 form-group" style={{paddingRight: "10px"}}>
                        <label for="nameofinstituion" style={{marginBottom: "10px"}}>Name of Institution:</label>
                        <input className="form-control" autoComplete={false} {...register("institution_name")} required />
                    </div>
                        <div className="col-sm-12 col-md-3 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                            <label for="board" style={{marginBottom: "10px"}}>Board/University/Country:</label>
                            <input className="form-control" autoComplete={false} {...register("board_name")} required />
                        </div>
                    
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="passingyear" style={{marginBottom: "10px"}}>Year of Passing:</label>
                        <input className="form-control" autoComplete={false} {...register("passing_year")} required />
                    </div>
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="group" style={{marginBottom: "10px"}}>Group:</label>
                        <input className="form-control" autoComplete={false} {...register("group")} required />
                    </div>
                    <div className="col-sm-12 col-md-2 form-group" style={{paddingLeft: "10px", marginRight: "10px"}}>
                        <label for="gpa" style={{marginBottom: "10px"}}>GPA:</label>
                        <input className="form-control" autoComplete={false} {...register("gpa")} required />
                    </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "20px"}}>
                    <div className="d-flex">

                    <div className="col-sm-12 col-md-6 form-group" style={{paddingRight: "30px"}}>
                        <label for="application_for_admission" style={{marginBottom: "10px"}}>Admission Date:</label>
                        <input type="admission_datedate" className="form-control" id="addmission_date" name="admission_date" />
                    </div>

                    <div className="col-sm-12 col-md-6 form-group" style={{paddingLeft: "30px"}}>
                        <label for="sinature_of_applicant" style={{marginBottom: "10px"}}>Signature of Applicant:</label>
                        <input className="form-control" autoComplete={false} {...register("signature")} required />
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
