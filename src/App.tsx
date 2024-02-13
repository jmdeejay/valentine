"use client";
import React, {useState} from "react";

export default function Page() {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);

    const phrases = [
        "No",
        "Nani?",
        "U sure?",
        "What if I asked really nicely?",
        "Pretty please",
        "With a chocolate cake on top",
        "What about a bubble tea?",
        "PLEASE COPINETTE",
        "B-b-b-but... :*(",
        "I am going to die",
        "Yep, im dead",
        "Ok, you're talking to my ghost",
        "Please babyyy",
        ":((((",
        "PRETTY PLEASE",
        "Soy muerto",
        "No :(",
    ];
    const yesButtonSize = (noCount * 20) + phrases.length;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    const YesButton: React.FC<{ additionalStyles?: React.CSSProperties }> = ({additionalStyles = {}}) => (
        <button
            className={`rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
            style={{fontSize: yesButtonSize, ...additionalStyles}}
            onClick={() => setYesPressed(true)}
        >
            Yes
        </button>
    );

    const NoButton = () => (
        <button
            onClick={handleNoClick}
            className="mr-4 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        >
            {noCount === 0 ? "No" : getNoButtonText()}
        </button>
    );

    const LoveWins = () => (
        <>
            <img
                src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                alt={"bear-kiss-bear-kisses"}/>
            <div className="my-4 text-4xl font-bold">WOOOHOOO!!! I love you, copinette! \o/</div>
        </>
    );

    return (
        <div className="-mt-16 flex h-screen flex-col items-center justify-center">
            {yesPressed ? (
                <LoveWins/>
            ) : (
                <>
                    {noCount > phrases.length - 1 ? (
                        <YesButton additionalStyles={{width: "100%", height: "100vh"}}/>
                    ) : (
                        <>
                            <img
                                className="h-[200px]"
                                src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                                alt={"cute-love-bear-roses"}/>
                            <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
                            <div className="flex items-center">
                                <NoButton/>
                                <YesButton/>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
