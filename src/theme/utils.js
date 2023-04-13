export function plural(word, number) {
    if (number > 1) {
      return `${word}s`;
    }
    return word;
}

export function pluralImovel(number) {
    if (number > 1) {
      return 'imóveis';
    }
    return 'imóvel';
  }