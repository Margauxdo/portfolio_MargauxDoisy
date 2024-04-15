import React, { useState, useEffect, useMemo } from 'react';
import '../styles/components/AnimationText.css';

const AnimationText = () => {
    const phrases = useMemo(() => [
        "Je réalise des sites web",
        "Je fais la refonte de votre site web",
        "Je trouve des solutions digitales adaptées à vos besoins",
        "Je crée des identités visuelles, charte graphique, logo et carte de visite"
    ], []); // Memoize the phrases array

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [fade, setFade] = useState(false); // State to control fade animation

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true); // Activate fade-out animation
            setTimeout(() => {
                setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Switch to the next phrase
                setFade(false); // Deactivate fade-in animation
            }, 1000); // Delay before changing text (1 second)
        }, 5000); // Time before changing text (5 seconds)

        // Cleanup timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, [currentPhraseIndex, phrases]); // useEffect re-runs whenever currentPhraseIndex or phrases changes

    return (
        <div className="header">
            <h4 className={fade ? "fade-out" : "fade-in"}>{phrases[currentPhraseIndex]}</h4>
        </div>
    );
};

export default AnimationText;

