const percorsiFormativi = {
  name: "percorsiFormativi",
  title: "Percorsi Formativi",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titolo (in rosso)",
      type: "string",
    },
    {
      name: "card_first_title",
      title: "Titolo prima card",
      type: "string",
    },
    {
      name: "card_first_description",
      title: "Descrizione prima card",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "card_second_title",
      title: "Titolo seconda card",
      type: "string",
    },
    {
      name: "card_second_description",
      title: "Descrizione seconda card",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default percorsiFormativi;
