import { useState } from "react";
import UserProfileCard from "./components/UserProfileCard"
import '../src/components/UserProfileCard.css'
function App() {

    let [userData, setUserData] = useState([
        {
            name: "Hemi Patel",
            designation: "Software Developer",
            email: "hemipatel@gmail.com",
            image: "./images.jpg",
            gender: "Female",
            qualification: "MCA"
        },  
        {
            name: "Urvi Sojitra",
            designation: "Full Stack Developer",
            email: "urvisojitra@gmail.com",
            image: "./urvi.jpg",
            gender: "Female",
            qualification: "B.sc"
        },
        {
            name: "Milan Sanghani",
            designation: "Senior Software Developer",
            email: "milansanghani@gmail.com",
            image: "./milan.jpg",
            gender: "Male",
            qualification: "B.Tech"
        },
        {
            name: "Janki Gohel",
            designation: "Graphics Designer",
            email: "jankigohel@gmail.com",
            image: "./janki.jpg",
            gender: "Female",
            qualification: "M.Com"
        }
        

    ]);

    return (
        <>
            <h1 align="center">User Profile card</h1>
            <div className="container d-flex">
                {userData.map((v, i) => {
                    return (
                        <UserProfileCard
                            name={v.name}
                            designation={v.designation}
                            email={v.email}
                            image={v.image}
                            gender={v.gender}
                            qualification={v.qualification}
                        />

                    )

                })}
            </div>


        </>
    )
}

export default App
