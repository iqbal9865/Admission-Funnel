import React from 'react';
import SideBar from '../SideBar/SideBar';
import TutionFeesCSS from './TutionFees.module.css';
const tableStyle={
    textAlign:'justify'
}
const TutionFees = () => {
    return (
        <div className="row m-5">
            <div className="col-md-3 col-sm-12">
                <SideBar />
            </div>
            <div className='col-md-9 col-sm-12 px-lg-5 py-3' style={{textAlign:'justify', fontWeight:'700'}}> 
            <table class="table table-hover">
            <thead>
                <tr style={tableStyle} className={TutionFeesCSS.tableHeader}>
                    <th scope="col">Program Name</th>
                    <th scope="col">Durions</th>
                    <th scope="col">Credit Hours</th>
                    <th scope="col">Cost Per Credit</th>
                    <th scope="col">Total Fees</th>
                    <th scope="col">Admission Fees</th>
                    <th scope="col">Average Semester Fees</th>
                    <th scope="col">Total Tution Fees</th>
                </tr>
            </thead>
            <tbody>
                <tr style={tableStyle} className={TutionFeesCSS.tableHover}>
                    <th scope="row">CSE</th>
                    <td>4 Years</td>
                    <td>157</td>
                    <td>1500</td>
                    <td>2,35,500</td>
                    <td>10,800</td>
                    <td>24000</td>
                    <td>2,70,300</td>
                </tr>
                <tr style={tableStyle} className={TutionFeesCSS.tableHover}>
                    <th scope="row">EEE</th>
                    <td>4 Years</td>
                    <td>154</td>
                    <td>1600</td>
                    <td>2,46,400</td>
                    <td>10,800</td>
                    <td>12,000</td>
                    <td>2,69,200</td>
                </tr>
                <tr style={tableStyle} className={TutionFeesCSS.tableHover}>
                    <th scope="row">Civil Eng.</th>
                    <td>4 Years</td>
                    <td>164</td>
                    <td>2000</td>
                    <td>2,68,000</td>
                    <td>10,800</td>
                    <td>36,000</td>
                    <td>3,74,800</td>
                </tr>
                <tr style={tableStyle} className={TutionFeesCSS.tableHover}>
                    <th scope="row">BSTE</th>
                    <td>4 Years</td>
                    <td>156</td>
                    <td>1900</td>
                    <td>2,96,400</td>
                    <td>10,800</td>
                    <td>24,000</td>
                    <td>3,31,200</td>
                </tr>
                <tr style={tableStyle} className={TutionFeesCSS.tableHover}>
                    <th scope="row">Mechanical Eng.</th>
                    <td>4 Years</td>
                    <td>155</td>
                    <td>3400</td>
                    <td>5,57,400</td>
                    <td>12,000</td>
                    <td>24,000</td>
                    <td>5,61,800</td>
                </tr>
                <tr style={tableStyle} className={TutionFeesCSS.tableHover}>
                    <th scope="row">Pharmacy</th>
                    <td>4 Years</td>
                    <td>170</td>
                    <td>2000</td>
                    <td>3,34,000</td>
                    <td>10,800</td>
                    <td>12,000</td>
                    <td>3,98,800</td>
                </tr>
                <tr style={tableStyle} className={TutionFeesCSS.tableHover}>
                    <th scope="row">BA in English</th>
                    <td>4 Years</td>
                    <td>120</td>
                    <td>1000</td>
                    <td>1,20,000</td>
                    <td>10,800</td>
                    <td>12,000</td>
                    <td>1,42,800</td>
                </tr>
                <tr style={tableStyle} className={TutionFeesCSS.tableHover}>
                    <th scope="row">LLB</th>
                    <td>4 Years</td>
                    <td>130</td>
                    <td>2000</td>
                    <td>2,60,000</td>
                    <td>10,800</td>
                    <td>12,000</td>
                    <td>2,82,800</td>
                </tr>
                <tr style={tableStyle} className={TutionFeesCSS.tableHover}>
                    <th scope="row">BBA</th>
                    <td>4 Years</td>
                    <td>124</td>
                    <td>2100</td>
                    <td>2,60,400</td>
                    <td>10,800</td>
                    <td>12,000</td>
                    <td>2,82,800</td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
    );
};

export default TutionFees;