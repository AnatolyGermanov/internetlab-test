import React from 'react';

import Hero from '../../components/Hero/Hero';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import ThirdBlock from '../../components/ThirdBlock/ThirdBlock';
import Feedback from '../../components/Reviews/Reviews';
import FAQ from '../../components/FAQ/FAQ';
import PollFindings from '../../components/PollFindings/PollFindings';
import Callback from '../../components/Callback/Callback';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <main>
            <Hero />
            <HowItWorks />
            <ThirdBlock />
            <Feedback />
            <FAQ />
            <PollFindings />
            <Callback />
            <Footer />
        </main>
    );
};

export default Home;
