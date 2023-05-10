import { buildSvcEndpoint } from "$lib/env"
import type { LiteArtifact } from "$lib/models"

export interface HomeLoadData {
  recent_post: Promise<LiteArtifact>
}

export const load = (): HomeLoadData => {
  let post: Promise<LiteArtifact> = fetch(buildSvcEndpoint('/posts/recent'))
    .then(resp => {
      if (resp.ok)
        return resp.json()
    })

  return {
    recent_post: post
  }
}
