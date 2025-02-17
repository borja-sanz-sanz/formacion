import { useTranslations } from "next-intl";
import Link from "next/link";

export const NonAsyncComponent = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
};
