import React from "react";
import profile from "../assets/profile.png";
import Mail from "../assets/Mail.png";
import Linkedin from "../assets/Linkedin.png";

export default function Info(){
    return(
        <div className="info">
            <img src={profile} width="317" alt="profile" />
            <h2 className="info--name">Laura Smith</h2>
            <p className="info--job">Frontend Developer</p>
            <p className="info--website">laurasmith.website</p>
            <div className="info--buttons">
                <button className="info--email"><span><img src={Mail} alt="" /></span> Email</button>
                <button className="info--linkedin"><span><img src={Linkedin} alt="" /></span> LinkedIn</button>
            </div>
        </div>
    )
}