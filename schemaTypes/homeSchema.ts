import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  type: "document",
  title: "Home",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "cta",
      type: "string",
    }),
  ],
});
