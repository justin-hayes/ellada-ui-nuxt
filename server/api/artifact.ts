import { H3Event } from "h3";

export default defineEventHandler(event => {
    const query = getQuery(event)
    const { limit = 10 } = query;
    return $fetch(`https://ellada-api.fly.dev/artifact?limit=${limit}`);
});