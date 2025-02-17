import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { AsyncComponent } from "./_components/AsyncCompontent";
import { NonAsyncComponent } from "./_components/NonAsyncComponent";
import { ClientTitle } from "./_components/ClientTitle";
import { Client } from "./_components/Client";
import pick from "lodash/pick";

export default function Home() {
  const t = useTranslations("HomePage");
  const messages = useMessages();
  return (
    <div>
      <NonAsyncComponent />
      <AsyncComponent />
      <ClientTitle title={t("title")}>
        <p>Description {t("about")}</p>
      </ClientTitle>
      <NextIntlClientProvider messages={pick(messages, "HomePage")}>
        <Client />
      </NextIntlClientProvider>
    </div>
  );
}

//Crear un componente servidor asincrono que muestre datos de contacto
//Nombre: Borja
//Apellidos: asdf
//direccion:
// email
//Todos los nombres de los campos traducibles

//Lo mismo con un componente cliente sin estar envuelto en un provider
