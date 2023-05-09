import axios from "axios";

export default async (_req, res) => {
  const data = await axios
    .get(process.env.API_URL, {
      headers: {
        "x-api-key": process.env.LAMBDA_API_KEY,
      },
    })
    .then(function (response) {
      return JSON.parse(response.data.body);
    })
    .catch(function (error) {
      console.log(error);
    });

  if (!data) {
    res.statusCode = 500;
    return;
  }

  res.statusCode = 200;
  res.json(data);
};
