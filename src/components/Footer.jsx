import React from "react";
import Facebook from "../assets/FacebookIcon.png"
import Github from "../assets/GithubIcon.png"
import Instagram from "../assets/InstagramIcon.png"
import Twitter from "../assets/TwitterIcon.png"

export default function Footer(){
    return(
        <div className="footer">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Github} alt="" />
        </div>
    )
}