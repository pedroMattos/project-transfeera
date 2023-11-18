import router from "@/router";
import type { Destination } from "@/types/destination";

export function useRoute() {

    const push = (destination: Destination) => router.push(destination)

    return { push }
}