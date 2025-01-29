import { type SchemaTypeDefinition } from "sanity";
import { homeType } from "./homeSchema";
import { footerSchemaType } from "./siteSettings/footerSchema";
import { waitlistPageType } from "./waitlist";
import { navbarSchemaType } from "./siteSettings/navbarSchema";
// import { submission } from "./dynamicFormSchema";
// import { formSubmissionSchema } from "./submittedData";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeType,
    footerSchemaType,
    waitlistPageType,
    navbarSchemaType,
    // submission,
    // formSubmissionSchema,
  ],
};
