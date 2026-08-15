import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title"
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Subtitle"
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description"
    }),
    defineField({
      name: "techStack",
      type: "array",
      title: "Tech Stack",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "link",
      type: "url",
      title: "Project Link"
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true
      }
    })
  ]
});
