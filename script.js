function getExamples() {
    const goalSelect = document.getElementById("contentGoal");
    const selectedGoal = goalSelect.value;
    const resultContainer = document.getElementById("resultContainer");

    let examples = "";
    let explanation = "";

    switch (selectedGoal) {
        case "enhancedMemorability":
            examples = `
                <p>Example for Fashion E-commerce:</p>
                <p>Before: "Discover our new collection of chic knitwear."</p>
                <p>With Assonance: "Wrap yourself in the warmth of our blissful knits."</p>
                
                <!-- Add more examples for other industries -->
            `;
            explanation = "Assonance can make the text more memorable by creating a rhythmic and melodic quality to the language.";
            break;

        case "toneAndMood":
            examples = `
                <p>Example for Electronics E-commerce:</p>
                <p>Before: "Explore the latest in cutting-edge technology."</p>
                <p>With Assonance: "Dive into the excitement of the next-gen tech."</p>
                
                <!-- Add more examples for other industries -->
            `;
            explanation = "Assonance contributes to the tone and mood of the copy. For example, vibrant and playful vowel sounds for a young audience.";
            break;

        case "brandVoice":
            examples = `
                <p>Example for Fashion E-commerce:</p>
                <p>Before: "Elevate your style with our new selection."</p>
                <p>With Consonance: "Step into chic elegance with our latest collection."</p>
                
                <!-- Add more examples for other industries -->
            `;
            explanation = "Consonance contributes to a unified brand voice. For instance, aligning consonance with the desired brand personality.";
            break;

        case "improvingReadability":
            examples = `
                <p>Example for Electronics E-commerce:</p>
                <p>Before: "Experience cutting-edge technology at its best."</p>
                <p>With Consonance: "Explore the excellence of our latest tech advancements."</p>
                
                <!-- Add more examples for other industries -->
            `;
            explanation = "Consonance improves the overall readability of the copy. For example, creating a sense of cohesion.";
            break;

        // Add cases for other content goals

        default:
            examples = "No examples available.";
            explanation = "";
    }

    resultContainer.innerHTML = `
        <h2>Examples for ${selectedGoal}</h2>
        <div>${explanation}</div>
        <div>${examples}</div>
    `;
}
