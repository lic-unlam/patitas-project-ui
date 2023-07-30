import LandingPage from './welcome_sections/LandingPage';
import Testimonials from './welcome_sections/Testimonials';
import MobileApps from './welcome_sections/MobileApps';
import Features from './welcome_sections/Features';

const Welcome = () => {
    return (
        <>
            <section>
                <LandingPage></LandingPage>
            </section>
            <section>
                <Features></Features>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
            <section>
                <MobileApps></MobileApps>
            </section>
        </>
    );
}

export default Welcome;