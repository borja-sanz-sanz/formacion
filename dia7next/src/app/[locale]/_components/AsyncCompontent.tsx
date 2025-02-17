import { getTranslations } from "next-intl/server";

export const AsyncComponent = async () => {
  const t = await getTranslations("HomePage");
  return <div>Async component: {t("title")}</div>;
};
