import { DrupalClient } from "next-drupal";

export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL ?? "",
  {
    auth: {
      clientId: process.env.DRUPAL_CLIENT_ID ?? "",
      clientSecret: process.env.DRUPAL_CLIENT_SECRET ?? "",
      scope: process.env.DRUPAL_CLIENT_SCOPE ?? "",
    },
    debug: true,
    withAuth: true,
    frontPage: "/home",
  }
);
