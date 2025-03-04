import sanitizeHtml from 'sanitize-html';


export function sanitizeInput(input: string) {
  if (!input) return "";
  const symbolToken = `_____${Date.now().toString()}_____`;
  const inputTokenized = input.split(':').join(symbolToken);
  const allowedPattern = /[^\p{Script=Han}a-zA-Z0-9,.¡!¿?$%&()#+;/'" _-]/gu;
  const sanitizedInput = sanitizeHtml(inputTokenized.replace(allowedPattern, ""));
  const resultTokenized = sanitizedInput.trim().replace(/<[^>]*>?/gm, '');
  return resultTokenized.split(symbolToken).join(':');
}
