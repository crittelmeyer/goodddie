type Options = {
  splitRegexp?: RegExp | RegExp[]
  stripRegexp?: RegExp | RegExp[]
  delimiter?: string
  transform?: (part: string, index: number, parts: string[]) => string
}

const lowerCase = (str: string) => str.toLowerCase()

const replace = (input: string, re: RegExp | RegExp[], value: string) => {
  if (re instanceof RegExp) return input.replace(re, value)

  return re.reduce((input, re) => input.replace(re, value), input) // eslint-disable-line @typescript-eslint/no-shadow
}

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
const DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g]

// Remove all non-word characters.
const DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi

const noCase = (input: string, options: Options = {}) => {
  const {
    splitRegexp = DEFAULT_SPLIT_REGEXP,
    stripRegexp = DEFAULT_STRIP_REGEXP,
    transform = lowerCase,
    delimiter = ' '
  } = options

  const result = replace(replace(input, splitRegexp, '$1\0$2'), stripRegexp, '\0')
  let start = 0
  let end = result.length

  // Trim the delimiter from around the output string.
  while (result.charAt(start) === '\0') start++
  while (result.charAt(end - 1) === '\0') end--

  // Transform each token independently.
  return result.slice(start, end).split('\0').map(transform).join(delimiter)
}

export const snakeCase = (input: string, options: Options = {}) =>
  noCase(input, {
    delimiter: '_',
    ...options
  })

export const kebabCase = (input: string, options: Options = {}) =>
  noCase(input, {
    delimiter: '-',
    ...options
  })

export const capitalizeWord = (word: string) => {
  const firstLetter = word?.charAt(0).toUpperCase()
  const restOfWord = word?.substring(1)

  return `${firstLetter}${restOfWord}`
}

export const capitalizeAllWords = (words: string) =>
  words
    ?.split(/[ -]/)
    .map((word: string) => capitalizeWord(word))
    .join(' ')

export const titleizeWord = (word: string) => {
  const firstLetter = word?.charAt(0).toUpperCase()
  const restOfWord = word?.substring(1).toLocaleLowerCase()

  return `${firstLetter}${restOfWord}`
}

export const titleizeAllWords = (words: string) =>
  words
    ?.split(/[ -]/)
    .map((word: string) => titleizeWord(word))
    .join(' ')
