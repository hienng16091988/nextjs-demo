
export default function Register()
{
    return (
        <div className="container w-1/2">
            <h1 className="title" >This is Register</h1>
            
            <form action="" className="space-y-4">

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                </div>

                <div >
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>

                <div >
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" />
                </div>

                <div>
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            
        </div>
    );
}