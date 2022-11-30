const { default: client } = require("./utils/apollo");
const { GET_ALL_WPDATA } = require("./utils/queries");

module.exports = () => ({
  "/_app": [
    {
      key: "headerMenu",
      data: async () => {
        const { data } = await client.query({
          query: GET_ALL_WPDATA,
        });

        return data.menu.menuItems.edges.map((item) => item.node);
      },
    },
  ],
});
