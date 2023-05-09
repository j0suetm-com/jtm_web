import { buildSvcEndpoint } from "$lib/env"
import { failed_artifact, type Artifact } from "$lib/models"

export interface ProjectLoadData {
  project: Promise<Artifact>
}

export const load = ({ params }): ProjectLoadData => {
  let project: Promise<Artifact> = fetch(buildSvcEndpoint('/projects/' + params.project))
  .then(resp => {
    if (resp.ok)
      return resp.json()
  }).then((projects: Artifact[]) => projects[0] ?? failed_artifact)

  return {
    project
  }
}
