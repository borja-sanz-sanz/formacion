import { ReactNode } from "react"
import { LevelContext } from "./LevelContext"

type SectionProps = {
    children: ReactNode
    level: number
}


export const Section = ({children, level}: SectionProps) => {
    return <div className="section">
        <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </div>
}