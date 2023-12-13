import LoginModal from "./"

interface LoginProps {
    searchParams: any
}

const Login: React.FC<LoginProps> = ({
    searchParams
}) => {
    return ( 
        <div>
            <LoginModal type="login" searchParams={searchParams}/>
        </div>
     );
}
 
export default Login;