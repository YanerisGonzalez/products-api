export const validateString = ({ text, length }) => {
  const textConverted = text ? String(text).trim() : false
  return textConverted && textConverted.length >= length
}
