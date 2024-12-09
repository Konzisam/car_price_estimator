export const config = {
  client_id: import.meta.env.VITE_CLIENT_ID.trim(),
  cognitoDomain: import.meta.env.VITE_COGNITO_DOMAIN.trim(),
  cognitoAuthority: import.meta.env.VITE_COGNITO_AUTHORITY.trim(),
  localURL: import.meta.env.VITE_LOCAL_URL.trim(),
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL.trim()
};
