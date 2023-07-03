import * as React from 'react';
import { baseUrl } from "../config"

export default function LogOut() {
    const call = async () => {
        await fetch(
        `${baseUrl}/api/auth/signout`, 
        {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
      })
    }
    call()

    sessionStorage.setItem("email", "");
    sessionStorage.setItem("checkoutItems", []);
        window.location.replace('/login');

}