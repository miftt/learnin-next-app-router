import Login from "@/components/modal/Login";

const LoginPage = ({searchParams}: any) => {
    return ( 
        <div>
            <Login searchParams={searchParams}/>
        </div>
    );
}
 
export default LoginPage;