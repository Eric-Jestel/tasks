import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChoice(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedChoice} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <p>{selectedChoice === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
