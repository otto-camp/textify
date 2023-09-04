export function getFirstSentence(text: string) {
  const firstSentenceMatch = text.match(/[^.!?]+[.!?]/);
  if (firstSentenceMatch) {
    return firstSentenceMatch[0].trim();
  }
  return text;
}
