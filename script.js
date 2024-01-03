function recommendDevices() {
    const selectedGoals = Array.from(document.getElementById('contentGoals').selectedOptions).map(option => option.value);
    const recommendations = getLinguisticDeviceRecommendations(selectedGoals);
    displayRecommendations(recommendations);
}

function getLinguisticDeviceRecommendations(selectedGoals) {
    // Replace this with your actual logic for recommending linguistic devices based on goals
    const recommendations = {
        Assonance: ["Enhanced Memorability", "Establishing Tone and Mood"],
        Consonance: ["Enhanced Memorability"],
        Alliteration: ["Drawing Attention to Key Points"],
        // Add more linguistic devices and their associated goals
    };

    // Filter recommendations based on selected goals
    const filteredRecommendations = {};
    for (const device in recommendations) {
        const relevantGoals = recommendations[device];
        if (selectedGoals.some(goal => relevantGoals.includes(goal))) {
            filteredRecommendations[device] = relevantGoals;
        }
    }

    return filteredRecommendations;
}

function displayRecommendations(recommendations) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    if (Object.keys(recommendations).length === 0) {
        recommendationsDiv.innerHTML = '<p>No recommendations for the selected goals.</p>';
        return;
    }

    const ul = document.createElement('ul');
    for (const device in recommendations) {
        const goals = recommendations[device].join(', ');
        const li = document.createElement('li');
        li.textContent = `${device}: ${goals}`;
        ul.appendChild(li);
    }

    recommendationsDiv.appendChild(ul);
}
