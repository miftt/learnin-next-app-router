const ProfileLayout = ({
    children,
}: { 
   children: React.ReactNode;
}) => {
 return (
   <>
     <h1>Profile</h1>
     <div>{children}</div>
   </>
 );
};

export default ProfileLayout;
