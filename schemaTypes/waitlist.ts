import { defineField, defineType } from "sanity";

export const waitlistPageType = defineType({
  name: "waitlistPage",
  type: "document",
  title: "Waitlist Page",
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
      description: "The main title of the waitlist page.",
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Page Subtitle",
      description: "The subtitle for the waitlist page.",
    }),
    defineField({
      name: "formTitle",
      type: "string",
      title: "Form Title",
      description: "The title for the form.",
    }),
    defineField({
      name: "submitBtn",
      type: "string",
      title: "Submit Button Text",
      description: "The submit button for the form.",
    }),
    defineField({
      name: "formFields",
      type: "array",
      title: "Form Fields",
      description: "The fields for the waitlist form.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Field Name",
              description:
                "A unique identifier for this form field (e.g., 'email').",
            },
            {
              name: "label",
              type: "string",
              title: "Label",
              description: "The label displayed for the form field.",
            },
            {
              name: "placeholder",
              type: "string",
              title: "Placeholder",
              description: "The placeholder text for the form field.",
            },
            {
              name: "type",
              type: "string",
              title: "Field Type",
              description:
                "The input type (e.g., 'text', 'email', 'password').",
              options: {
                list: [
                  "text",
                  "email",
                  "password",
                  "number",
                  "tel",
                  "radio",
                  "checkbox",
                ],
              },
            },
            {
              name: "radioOptions",
              type: "array",
              title: "Radio Options",
              description: "The options for the radio buttons.",
              of: [
                {
                  type: "object",
                  title: "Readio Options",
                  fields: [
                    defineField({
                      type: "string",
                      name: "label",
                      title: "Label",
                      description: "The label for the radio button.",
                    }),
                    defineField({
                      type: "string",
                      name: "value",
                      title: "Value",
                      description: "The value for the radio button.",
                    }),
                  ],
                },
              ],
              hidden: ({ parent }) => parent?.type !== "radio", // Hide this unless the type is 'radio'
              // validation: (Rule) =>
              //   Rule.required().custom((value, context) => {
              //     console.log("value", value);
              //     console.log("context", context.parent?.type);

              //     if (context.parent?.type === "radio") {
              //       return "You must provide at least one option for the radio button.";
              //     }
              //     return true;
              //   }),
            },
            {
              name: "required",
              type: "boolean",
              title: "Required",
              description: "Is this field required?",
            },
            {
              name: "width",
              type: "number",
              title: "Width",
              description: "The width of the form field in percent%.",
            },
          ],
        },
      ],
    }),
  ],
});
