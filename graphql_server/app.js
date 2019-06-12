const express = require('express');
const bodyParser = require('body-parser')

const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use(bodyParser.json());

let schema = buildSchema(`
    type RootQuery {
        events : [String!]!
    }

    type RootMutation {
        createEvent (name : String) : String
    }

    schema {
        query : RootQuery
        mutation : RootMutation
    }
`)

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: {
        events: () => {
            return ['peter', 'olubayo'];
        },
        createEvent: (args) => {
            const eventname = args.name;
            return eventname
        }
    },
    graphiql: true
}))

app.listen(4000, function () {
    console.log("listening to port 4000")
})