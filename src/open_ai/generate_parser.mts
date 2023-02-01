function parseQuotes(message: string, character: string, endCharacter?: string): string[] {
    const regex = new RegExp(`${character}([^${character}${endCharacter ?? ''}]+)${endCharacter ?? character}`, 'g');
    const quotes: string[] = [];

    let match: RegExpExecArray | null;

    while ((match = regex.exec(message)) !== null) {
        quotes.push(match[1]);
    }

    return quotes;
}

export { parseQuotes };

// let testText = ''
//     + '1. “Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.” -Martin Luther King, Jr.'
//     + '2. “The world is a dangerous place to live; not because of the people who are evil, but because of the people who don\'t do anything about it."-Albert Einstein '
//     + '3. "We all must choose between what is right and what is easy" -JK Rowling '
//     + '4."People will never understand how deep darkness really goes or how wide good stretches when you put your hope in humanity"-Anonymous '
//     + '5."No matter how dark the night may seem, one tiny spark of light always conquers it”― Debasish Mridha';

// testText = testText.replace(/(“)+/g, '"');
// testText = testText.replace(/(”)+/g, '"');

// console.log(testText);
// const arr1 = parseQuotes(testText, '"');
// const arr3 = [...arr1];

// console.log(arr3);
// console.log("");