import { Footer, Navbar } from "@/components";
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar />
          
            <main className="w-screen">  {/* Full-width container */}
                {children}
            </main>
            <Footer />
        </div>
    )
};

export default MarketingLayout;
