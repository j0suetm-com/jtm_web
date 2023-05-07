import { buildSvcEndpoint } from "$lib/env"
import { failed_artifact, type Artifact } from "$lib/models"

export interface PostLoadData {
  post: Promise<Artifact>
}

export const load = ({ params }): PostLoadData => {
  let post: Promise<Artifact> = fetch(buildSvcEndpoint('/posts/' + params.post))
  .then(resp => {
    if (resp.ok)
      return resp.json()
  }).then((posts: Artifact[]) => posts[0] ?? failed_artifact)

  return {
    post
  }
}