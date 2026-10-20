import { PageIntro } from "@/components/site/Fieldbook";
import { ActionLink } from "@/components/site/ActionLink";
export default function NotFound() {
  return <PageIntro eyebrow="PAGE NOT FOUND" title="This page isn’t in the fieldbook." lead="Return to the program information or start again from the home page."><ActionLink href="/">Back to home</ActionLink></PageIntro>;
}
