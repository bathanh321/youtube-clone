interface LayoutProps {
    children: React.ReactNode;
};

const Layoutt = ({ children }: LayoutProps) => {
    return ( 
        <div className="min-h-screen flex items-center justify-center">
            {children}
        </div>
     );
}

export default Layoutt;