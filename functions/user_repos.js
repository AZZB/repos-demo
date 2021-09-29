const axios = require("axios");

exports.handler = async (event, context) => {
  const { username } = JSON.parse(event.body);

  try {
    const { data } = await axios(
      `https://api.github.com/users/${username}/repos`
    );

    return {
      statusCode: 200,
      body: JSON.stringify(
        data.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          languages_url: item.languages_url,
          language: item.language,
          owner: item.owner.login,
          url: item.html_url,
        }))
      ),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "not found" }),
    };
  }
};
