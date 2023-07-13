import { JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react"
import { Header } from "./Header";

interface LayoutProps {
    children: ReactNode;
}

const jetBrains_mono = JetBrains_Mono({
    subsets:['latin'],
    weight: '400'
})

export const Layout = ({ children }: LayoutProps) =>{
    return(
       <div className={jetBrains_mono.className}>
        <Header/>
        {children}
        </div>
    )
}