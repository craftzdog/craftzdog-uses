import type { MarkdownInstance } from 'astro'

/**
 * Frontmatter of the review posts in `src/pages/posts/*.md`, which are
 * exported from Inkdrop by `tools/import.mjs`.
 */
export interface PostFrontmatter {
  title: string
  description?: string
  createdAt: number
  updatedAt: number
  tags: string[]
  heroImage: string
  slug: string
  public: boolean
  layout: string
}

export type Post = MarkdownInstance<PostFrontmatter>
