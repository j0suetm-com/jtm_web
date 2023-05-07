import { buildSvcEndpoint } from "$lib/env"
import type { LiteArtifact } from "$lib/models"

export interface BlogLoadData {
  posts: Promise<LiteArtifact[]>
}

export const load = (): BlogLoadData => {
  let posts: Promise<LiteArtifact[]> = fetch(buildSvcEndpoint('/posts')).then(resp => {
    if (resp.ok)
      return resp.json()
  })

  return {
    posts
  }
}