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
      title: "Cover Image",
      description: "The main thumbnail shown on the projects list page.",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "gallery",
      type: "array",
      title: "Gallery",
      description:
        "Additional screenshots/mockups shown on the project's case-study page (as many as you like).",
      of: [
        {
          type: "image",
          options: { hotspot: true }
        }
      ]
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Your Role",
      description: "e.g. \"Solo Developer\", \"Frontend Lead\", \"Full-Stack Intern\""
    }),
    defineField({
      name: "githubLink",
      type: "url",
      title: "GitHub Repo Link"
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96
      }
    })
  ]
});
