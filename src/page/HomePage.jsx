import AboutComponent from "../component/client/AboutComponent"
import ContactEmail from "../component/client/ContactEmailComponent"
import IntroduceComponent from "../component/client/IntroduceComponent"
import TeamComponent from "../component/client/TeamComponent"

const  HomePage = () => {
    return (
        <>
        <IntroduceComponent/>
        <AboutComponent/>
        <TeamComponent/>
        <ContactEmail/>
        </>
    )
}

export default HomePage