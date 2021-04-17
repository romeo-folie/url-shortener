const graphql = require("graphql");

const schema = graphql.buildSchema(`
    type Query {
        urls: [Url!]!
    }

    type Mutation {
        shortenUrl(longUrl: String!): Url!
    }

    type Url {
        id: ID!
        longUrl: String!
        urlCode: String!
        shortUrl: String!
        date: String!
    }
`);

module.exports = schema;
