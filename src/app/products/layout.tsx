interface LayoutProps {
    children: React.ReactNode;
    modal: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    modal
}) => {
    return ( 
        <>
            {children}
            {modal}
        </>
     );
}
 
export default Layout;
