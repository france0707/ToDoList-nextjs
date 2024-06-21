// lib/fontawesome.js
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Prevent FontAwesome from adding its CSS automatically
// since we're handling it ourselves in Next.js
config.autoAddCss = false;

// Add all icons to the library so you can use them in your components
library.add(fas);
