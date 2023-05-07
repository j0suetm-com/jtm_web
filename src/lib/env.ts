export const env = {
  svc_srv: import.meta.env.VITE_PUBLIC_JTM_SVC_SRV,
  svc_host: import.meta.env.VITE_PUBLIC_JTM_SVC_HOST,
  svc_port: import.meta.env.VITE_PUBLIC_JTM_SVC_PORT
}

export const buildSvcEndpoint = (endpoint: string) =>
  env.svc_srv + "://" + env.svc_host + ":" + env.svc_port + endpoint