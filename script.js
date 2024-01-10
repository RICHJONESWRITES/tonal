function transformText() {
  const inputText = document.getElementById('inputText').value;
  const linguisticDevice = document.getElementById('linguisticDevice').value;

  let transformedText = applyLinguisticDevice(inputText, linguisticDevice);
  const description = getLinguisticDeviceDescription(linguisticDevice);

  document.getElementById('transformedText').innerText = transformedText;
  document.getElementById('description').innerText = description;
}

function applyLinguisticDevice(text, device) {
  switch (device) {
    case 'alliteration':
      // Placeholder function for alliteration transformation
      return applyAlliteration(text);
    // Add more cases for other linguistic devices
    default:
      return text;
  }
}

function applyAlliteration(text) {
  // Placeholder implementation for alliteration
  // This is a simple example and might not cover all cases
  return text.replace(/\b(\w)(\w*)\b/g, function(_, first, rest) {
    return first.toUpperCase() + rest.toLowerCase();
  });
}

function getLinguisticDeviceDescription(device) {
  switch (device) {
    case 'alliteration':
      return "Alliteration can make the text more memorable. The repetition of consonant sounds creates a rhythmic and melodic quality, making the content stand out and facilitating easier recall. This is particularly beneficial for conveying important information or key messages.";
    // Add more descriptions for other linguistic devices
    default:
      return "";
  }
}
