import React from 'react';

export default class Register extends React.Component {
    state = {
        username: "",
        password: "",
        confirmPassword: ""
    }
    login = (e) => {
        e.preventDefault()
        fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                    password_confirmation: this.state.confirmPassword
                }
            })
        })
        .then(r => r.json())
        .then(newUser => {
            console.log(newUser)
        })
    }
    render() {
        return(
            <div className="div-reg">
                <h2>Register</h2>
                <form>
                    <label>Username or Email Address</label>{" "}
                    <input name="username" placeholder="Username or Email" type="username"></input>
                    <br></br>
                    <label>Password</label>{" "}
                    <input name="password" placeholder="Password" type="password"></input>
                    <br></br>
                    <label>Confirm Password</label>{" "}
                    <input name="confirmpassword" placeholder="Confirm Password" type="password"></input>
                </form>
            </div>
        )
    }
}