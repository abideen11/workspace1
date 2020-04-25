import React from 'react';

export default class Register extends React.Component {
    state = {
        username: "",
        password: "",
        confirmPassword: "",
        hasRegistered: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    onHasRegistered = () => {
        this.setState({
            hasRegistered: !this.state.hasRegistered
        })
    }
    login = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/users", {
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
            this.onHasRegistered()
        })
    }
    render() {
        return(
            this.state.hasRegistered ? <div className="ret-reg">Thank you for registering.</div> :
            <div className="div-reg">
                <h2>Register</h2>
                <form onSubmit={(e) => this.login(e)}>
                    <label>Username or Email Address</label>{" "}
                    <input onChange={this.handleChange} name="username" placeholder="Username or Email" type="username"></input>
                    <br />
                    <label>Password</label>{" "}
                    <input onChange={this.handleChange} name="password" placeholder="Password" type="password"></input>
                    <br />
                    <label>Confirm Password</label>{" "}
                    <input onChange={this.handleChange} name="confirmPassword" placeholder="Confirm Password" type="password"></input>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}