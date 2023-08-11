import { extendTheme } from "@chakra-ui/react";
import backgroundImage from "./DSC08145-2.jpg";

// const theme = extendTheme({
//     styles: {
//         global: {
//             body: {
//              backgroundColor: "blue.800",
//              color: "gray.50"
//             }
//         }
//     }
// });
const theme = extendTheme({
    styles: {
        global: {
            body: {
             height: "100vh",
             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
             backgroundSize: "cover",
             backgroundPosition: "center center",
             backgroundRepeat: "no-repeat",
             backgroundAttachment: "fixed",
             color: "gray.50"
            }
        }
    }
});

export default theme;