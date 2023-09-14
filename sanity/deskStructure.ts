// Questo file serve a personalizzare la struttura del desk di Sanity. Viene importato in sanity.config

import { StructureResolver } from "sanity/desk";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Home page")
    .items([
      S.listItem()
        .title("Sezione principale")
        .child(S.document().schemaType("hero").documentId("hero")),
      S.listItem()
        .title("Alta formazione")
        .child(
          S.document().schemaType("altaFormazione").documentId("altaFormazione")
        ),
      S.listItem()
        .title("Percorsi Formativi")
        .child(
          S.document()
            .schemaType("percorsiFormativi")
            .documentId("percorsiFormativi")
        ),
      S.listItem()
        .title("Numeri")
        .child(S.document().schemaType("numeri").documentId("numeri")),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["hero", "altaFormazione", "percorsiFormativi", "numeri"].includes(
            String(listItem.getId())
          )
      ),
    ]);
