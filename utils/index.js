'use strict'

const utils = {
  extractTags
}

function extractTags (text) {
  // == it apply for null or undefined cases
  if (text == null) return []

  const hashtags = text.match(/#(\w+)/g)
  if (hashtags === null) return []

  return hashtags.map(normalize)
}

function normalize (text) {
  text = text
    .toLowerCase()
    .replace(/#/g, '')

  return text
}

module.exports = utils
