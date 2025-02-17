import { getTranslations } from "next-intl/server";

export const ServerAsyncComponent = async () => {
  const t = await getTranslations("ContactPage");

  return (
    <div>
      <p>{t("name")}</p>
      <p>{t("surname")}</p>
      <p>{t("address")}</p>
      <p>{t("email")}</p>
    </div>
  );
};
