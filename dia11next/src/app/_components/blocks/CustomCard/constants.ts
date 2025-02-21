import { Default } from "./viewmodes/Default/Default";
import { Horizontal } from "./viewmodes/Horizontal/Horizontal";

const VIEWMODE_DEFAULT = "default";
const VIEWMODE_HORIZONTAL = "horizontal";

export const CUSTOM_CARD_VIEWMODES = {
  [VIEWMODE_DEFAULT]: Default,
  [VIEWMODE_HORIZONTAL]: Horizontal,
};
