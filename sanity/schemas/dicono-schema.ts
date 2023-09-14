const dicono = {
  name: "dicono",
  title: "Dicono di noi",
  type: "document",
  fields: [
    {
      name: "author",
      title: "Autore",
      type: "string",
    },
    {
      name: "role",
      title: "Ruolo",
      type: "string",
    },
    {
      name: "azienda",
      title: "Azienda",
      type: "string",
    },
    {
      name: "quote",
      title: "Citazione",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default dicono;
