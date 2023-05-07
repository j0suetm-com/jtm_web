import { buildSvcEndpoint } from "$lib/env"
import type { LiteArtifact } from "$lib/models"

export interface PortfolioLoadData {
  projects: Promise<LiteArtifact[]>
}

export const load = (): PortfolioLoadData => {
  let projects: Promise<LiteArtifact[]> = fetch(buildSvcEndpoint('/projects')).then(resp => {
    if (resp.ok)
      return resp.json()
  })

  return {
    projects
  }
}