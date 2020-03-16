import React from 'react';

export default class LogIn extends React.Component {
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
                    password: this.state.password
                }
            })
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
    }
    render() {
        return(
            <div className="div-log">
                <div className="sub-log"></div>
                <h2>Log In</h2>
                <form>
                    <label>Username or Email Address</label>{" "}
                    <input name="username" placeholder="Username or Email" type="username"></input>
                    <br />
                    <label>Password</label>{" "}
                    <input name="password" placeholder="Password" type="password"></input>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}