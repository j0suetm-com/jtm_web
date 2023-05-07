export interface LiteArtifact {
  title: string
  external_link: string
  summary: string
  tags: string[]
  header_id: string
  created_at: string
}

export interface Artifact extends LiteArtifact {
  content: string
}

export const failed_artifact: Artifact = {
  content: 'Failed to retrieve artifact',
  title: 'Failed to retrieve artifact',
  external_link: '#',
  summary: 'Failed to retrieve artifact',
  tags: [],
  header_id: '64571f1b98f72c57cee6413b',
  created_at: '2023-05-07T21:02:29.996Z'
}