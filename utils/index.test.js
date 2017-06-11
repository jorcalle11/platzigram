/* eslint-env jest */
'use strict'

const { expect } = require('chai')

const utils = require('./')

it('returns an array with the hashtags extrated from the text', () => {
  const hashtags = utils.extractTags('one #AweSoME #picture with much #hashtags ##yes #OK #Platzi')
  const expected = ['awesome', 'picture', 'hashtags', 'yes', 'ok', 'platzi']

  expect(hashtags).to.deep.equal(expected)
})

it('returns an empty array if the text passed is not contained hashtags', () => {
  const hashtags = utils.extractTags('this text not contains hashtags')
  expect(hashtags).to.deep.equal([])
})

it('returns an empty array if the text is not given', () => {
  const hashtags = utils.extractTags()
  expect(hashtags).to.deep.equal([])
})

it('returns an empty array if the text passed is null type', () => {
  const hashtags = utils.extractTags(null)
  expect(hashtags).to.deep.equal([])
})
