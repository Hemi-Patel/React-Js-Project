import { useState } from 'react';
import './UserProfileCard.css'
const UserProfileCard = ({ name, designation, email, image, gender, qualification }) => {
    return (
        <>
            <div className="col-6">
                <div className='card '>
                    <img src={image} alt="" height={150} width={150} />
                    <ul style={{marginLeft:"30px"}}>
                        <li className='d-flex  align-center'>
                            <p style={{fontSize:"32px", fontWeight:"900" }}>{name}</p>
                        </li><hr></hr>
                        <li className='d-flex align-center'>
                            <b>Designation:</b> <p>{designation}</p>
                        </li>
                        <li className='d-flex  align-center'>
                            <b>Email ID:</b><p>{email}</p>
                        </li>
                        <li className='d-flex align-center'>
                            <b>Gender:</b><p>{gender}</p>
                        </li>
                        <li className='d-flex  align-center'>
                            <b>Qualification:</b><p>{qualification}</p>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default UserProfileCard;