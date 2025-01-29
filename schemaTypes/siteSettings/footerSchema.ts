import { defineField, defineType } from "sanity";

export const footerSchemaType = defineType({
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "copyrights",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      title: "Social Links",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform Name",
              type: "string",
              description: "The name of the social media platform.",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              description: "The link to your social media profile.",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              description: "Upload the icon for the social media platform.",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "width",
              title: "Width",
              type: "number",
              description: "The Width of the icon in pixels.",
            }),
            defineField({
              name: "height",
              title: "Height",
              type: "number",
              description: "The Height of the icon in pixels.",
            }),
            defineField({
              name: "visible",
              title: "Visible",
              type: "boolean",
              description: "Check this box to display the icon on the website.",
              initialValue: true,
            }),
          ],
        },
      ],
    }),
  ],
});
