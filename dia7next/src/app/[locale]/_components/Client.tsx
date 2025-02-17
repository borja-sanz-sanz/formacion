"use client";

import { useTranslations } from "next-intl";

export const Client = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <p>Title: {t("title")}</p>
      <p>About {t("about")}</p>
    </div>
  );
};
