const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const connectToDB = require("./config/db");
const schema = require("./schema");
const resolvers = require("./resolvers");
const getErrorCode = require("./utils/errors");

const startServer = async function () {
  const app = express();

  app.use(express.json());

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql: true,
      customFormatErrorFn: (err) => {
        const error = getErrorCode(err);
        return {
          message: error.message || error,
          statusCode: error.statusCode || 500,
        };
      },
    })
  );

  app.use("/", require("./routes"));

  await connectToDB();

  const port = 3000;

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};

startServer();
