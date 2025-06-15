// Result.tsx

import React from 'react';

interface ResultProps {
    term: number | null;
    secretNum: number;
}

const Result: React.FC<ResultProps> = ({ term, secretNum }) => {
    let result: string;
    if (term !== null) {
        if (secretNum > term) {
            result = 'Lower';
        } else if (secretNum < term) {
            result = 'Higher';
        } else if (secretNum === term) {
            result = 'Yippee, correct!';
        } else {
            result = "Enter Valid Input";
        }
    } else {
        result = "Enter Valid Input";
    }

    return <h3>You Guessed: {result}</h3>;
};

export default Result;

