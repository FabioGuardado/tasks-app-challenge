const capitalizeWords = (defaultString: string) => {
  const words = defaultString.split('_');
  const capitalizedWords = words.map(
    (word: string) => word.charAt(0) + word.toLowerCase().slice(1)
  );

  return capitalizedWords.reduce(
    (acc, currentWord: string) => `${acc} ${currentWord}`,
    ''
  );
};

export default capitalizeWords;
