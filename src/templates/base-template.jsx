import Header from "../components/Header"

const BaseTemplate = ({children}) => {
    return(
        <div>
            <Header />
            {children}
        </div>
    )
}

export default BaseTemplate