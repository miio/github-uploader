# GitHub Test
# test/github.coffee

GitHub  = require "../github"
mocha   = require "mocha"
should  = require "should"
sinon   = require "sinon"

describe "GitHub", ->
  github = new GitHub
  it "#auth", ->
    github.should.have.property "auth"
  it "#commit", ->
    github.should.have.property "commit"
