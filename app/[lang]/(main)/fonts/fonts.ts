import { Rubik, Playfair_Display} from "next/font/google";

export const rubik = Rubik({
    subsets: ["hebrew", "latin"],
    weight: ["400", "500", "700"]
})

export const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    weight: ["700"]
})