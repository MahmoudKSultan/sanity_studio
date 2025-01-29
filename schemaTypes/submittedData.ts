import { defineField, defineType } from "sanity";

export const formSubmissionSchema = defineType({
  name: "formSubmission",
  type: "document",
  title: "Form Submission",
  preview: {
    select: {
      title: "submissionData",
      subtitle: "submittedAt",
    },
    prepare(selection) {
      const { subtitle, title } = selection;

      return {
        title: title[1].value,
        subtitle: new Date(subtitle).toLocaleDateString(),
      };
    },
  },
  fields: [
    defineField({
      name: "form",
      type: "reference",
      to: [{ type: "waitlistPage" }],
      title: "Form",
    }),
    defineField({
      name: "submissionData",
      type: "array",
      title: "Submission Data",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "fieldName",
              type: "string",
              title: "Field Name",
            }),
            defineField({
              name: "value",
              type: "string", // Use a flexible type to handle various data types.
              title: "Value",
            }),
          ],
        },
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
