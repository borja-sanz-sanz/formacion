import { useTranslations } from "next-intl";
import { ServerAsyncComponent } from "./_components/ServerAsyncComponent";
import { ClientComponent } from "./_components/ClientComponent";

export default function Page() {
  const t = useTranslations("ContactPage");
  return (
    <>
      Contact page
      <ServerAsyncComponent />
      <ClientComponent
        name={t("name")}
        surname={t("surname")}
        address={t("address")}
        email={t("email")}
      />
    </>
  );
}
