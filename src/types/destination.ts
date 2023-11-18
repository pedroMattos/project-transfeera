import type { Dictionary } from "./dictionary";

type RouteWithPath = {
    path: string;
    params?: Dictionary<any>;
    query?: Dictionary<any>;
}

type RouteWithName = {
    name: string;
    params?: Dictionary<any>;
    query?: Dictionary<any>;
}

export type Destination = string | RouteWithName | RouteWithPath