'use client'
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

import InstagramIcon from "@mui/icons-material/Instagram";

const social = [TwitterIcon, LinkedInIcon, FacebookIcon, InstagramIcon];

export default function SocialIconsClient() {
  return (
    <div className="flex gap-2">
      {social.map((Value, index) => (
        <Value className="btn-secondary px-2 text-4xl border" key={index} />
      ))}
    </div>
  );
}
