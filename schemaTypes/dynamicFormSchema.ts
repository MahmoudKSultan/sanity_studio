import { defineField, defineType } from "sanity";

export const submission = defineType({
  name: "submission",
  type: "document",
  title: "Form Submission",
  fields: [
    defineField({
      name: "formTitle",
      type: "string",
      title: "Form Title",
    }),
    defineField({
      name: "data",
      type: "object",
      title: "Submission Data",
      fields: [
        defineField({
          name: "name",
          type: "string",
          title: "Name",
        }),
        defineField({
          name: "email",
          type: "string",
          title: "Email",
        }),
      ],
    }),
    defineField({
      name: "submittedAt",
      type: "datetime",
      title: "Submitted At",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
