function uniqueCharacters(name) {
    const lowerCaseName = name.toLowerCase();
    const charset = new Set(lowerCaseName);
    if (charset.size === lowerCaseName.length) {
        console.log(`${name} is unique charchters`);
    } else {
        console.log(`${name} is duplicate charchters`);
    }
}

uniqueCharacters('mithun');
uniqueCharacters('Mithun');
uniqueCharacters('aarav');
uniqueCharacters('rahul');
uniqueCharacters('popoye');