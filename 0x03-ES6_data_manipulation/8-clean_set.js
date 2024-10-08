export default function cleanSet(theSet, theStartString) {
  if (!theSet || !theStartString || !(theSet instanceof Set) || typeof theStartString !== 'string') {
    return '';
  }
  return Array.from(theSet)
    .filter((ele) => ele && ele.startsWith(theStartString))
    .map((ele) => ele.replace(theStartString, ''))
    .join('-');
}
