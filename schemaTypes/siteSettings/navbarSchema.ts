import { defineField, defineType } from "sanity";

export const navbarSchemaType = defineType({
  name: "navbar",
  type: "document",
  title: "Navbar",
  preview: {
    select: {
      title: "event.eventDate",
    },
  },
  fields: [
    defineField({
      type: "object",
      name: "sidebar",
      title: "Sidebar",
      fields: [
        defineField({
          name: "sidebarTitle",
          type: "string",
          title: "Sidebar Title",
        }),
        defineField({
          name: "linkslist",
          type: "array",
          title: "Links",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "link",
                  type: "string",
                  title: "Label",
                  description: "The label for the link.",
                }),
                defineField({
                  name: "url",
                  type: "string",
                  title: "URL",
                  description:
                    "The URL for the link. Write only the segment of the URL.",
                  placeholder: "waitlist",
                }),
              ],
            },
          ],
        }),
      ],
    }),
    // date related fields
    defineField({
      type: "object",
      name: "event",
      title: "Event",
      fields: [
        defineField({
          name: "enableDate",
          title: "Enable Date",
          type: "boolean",
          initialValue: true,
          description: "Enable/Disable date.",
        }),
        defineField({
          name: "eventDate",
          title: "Event Date",
          type: "datetime",
          validation: (Rule) => Rule.min(new Date().toISOString()),
          description: "The date of the event.",
          // hidden: ({ parent }) => parent.enableDate === false,
        }),
        defineField({
          name: "days",
          title: "Days",
          type: "boolean",
          initialValue: true,
          description: ".Enable/Disable days",
          // hidden: ({ parent }) => parent.enableDate === false,
        }),
        defineField({
          name: "hours",
          title: "Hours",
          type: "boolean",
          initialValue: true,
          description: ".Enable/Disable hours",
          // hidden: ({ parent }) => parent.enableDate === false,
          // validation: (Rule) => Rule.valueOfField("days") ,
        }),
        defineField({
          name: "minutes",
          title: "Minutes",
          type: "boolean",
          initialValue: true,
          description: ".Enable/Disable minutes",
          // hidden: ({ parent }) => parent.enableDate === false,
        }),
        defineField({
          name: "seconds",
          title: "Seconds",
          type: "boolean",
          initialValue: true,
          description: ".Enable/Disable seconds",
          // hidden: ({ parent }) => parent.enableDate === false,
        }),
      ],
    }),
  ],
  initialValue: {
    days: true,
    hours: true,
    minutes: true,
    seconds: true,
  },
});
