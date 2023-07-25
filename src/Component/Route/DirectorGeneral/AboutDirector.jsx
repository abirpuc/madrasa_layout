import React from 'react';

const AboutDirector = (props) => {
    return (
        <div >
            <div className='img-container'>
                <img src={props.img} alt="" />
                <h3>{props.name}</h3>
                <p>{props.office}</p>
            </div>
            <div className='about-table'>
                <table >
                    <tr>
                        <td>নাম</td>
                        <td>{props.name}</td>
                    </tr>
                    <tr>
                        <td>পদবি</td>
                        <td>{props.designation}</td>
                    </tr>
                    <tr>
                        <td>অফিস</td>
                        <td>{props.office}</td>
                    </tr>
                    <tr>
                        <td>ই-মেইল</td>
                        <td>{props.email}</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>মোবাইল</td>
                        <td>{props.mobile}</td>
                    </tr>
                    <tr>
                        <td>ফোন (অফিস)</td>
                        <td>{props.phone_office}</td>
                    </tr>
                    <tr>
                        <td>ফোন (বাসা)</td>
                        <td>{props.phone_home}</td>
                    </tr>
                    <tr>
                        <td>ফ্যাক্স</td>
                        <td>{props.fax}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default AboutDirector;