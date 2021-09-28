const axios = require("axios");

exports.handler = async (event, ctx) => {
  try {
    const { username, repo } = JSON.parse(event.body);

    const { data: files } = await axios(
      `http://api.github.com/repos/${username}/${repo}/contents`
    );

    const file = files.find(
      (file) => file.name === "README.md" || file.name === "readme.md"
    );
    if (!file) {
      throw new Error("Readme not found");
    }

    const { data: readme } = await axios(file.download_url);

    return {
      statusCode: 200,
      body: JSON.stringify(readme),
    };
  } catch (error) {
    return {
      statusCode: 500,
    };
  }
};
