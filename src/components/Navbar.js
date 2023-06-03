function Navbar() {
    return (
        <div className="navbar-container">
            <div className="website-logo">
                <img src="https://media.licdn.com/dms/image/D4D0BAQHeL1mdM9bWig/company-logo_200_200/0/1666011368542?e=1694044800&v=beta&t=cRePieSBcQwTalLyQbaLjYtluwVBCvU-iiE2fxV9738" alt="" />
                <h3>Guruji</h3>
            </div>
            <div className="navbar-controlls">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Call with Astrologer</a></li>
                    <li><a href="">Live(Coming Soon )</a></li>
                </ul>
            </div>
            <div className="navbar-user">
                <img src="   https://cdn-icons-png.flaticon.com/512/4140/4140047.png " alt="" />
            </div>
        </div>
    );
}

export default Navbar;