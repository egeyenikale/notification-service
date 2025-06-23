export const project = {
  slug: "notification-service",
  title: "Notification Service",
  description: "Reusable email notification service.",
  features: [
  "HTML mail templates",
  "SMTP provider",
  "Microsoft Graph provider",
  "Success notifications",
  "Error notifications",
  "Send logs"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
