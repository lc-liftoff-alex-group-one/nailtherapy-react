import "../styling/CreateAccount.css";

export default function CreateAccount() {
    return(
        <div className="create">
            <h1 className="title">Create</h1>
            <h1 className="title">Your Account!</h1>
            <p className="reason">Sign up to build reward points that you can use towards 
                a future service!
            </p>
            <form>
            <div className="names">
                <div>
                <label className="firstname">First Name: <input type="text" name="firstName" /></label>
                <label className="lastname">Last Name: <input type="text" name="lastName" /></label>
                </div>
                <div className="emailandpassword">
                <div><label className="email">Email: <input type="email" name="email" /></label></div>
                <div> <label className="password">Password: <input type="text" name="password" /></label></div>
                <div><button>Create</button></div>
                </div>
                </div>
            </form>
        </div>
    )
}