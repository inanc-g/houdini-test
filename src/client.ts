import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: import.meta.env.VITE_GRAPHQL_API,
    fetchParams() {
        return {
            headers: {
                Authorization: `${import.meta.env.VITE_API_KEY}`,
            }
        }
    }
})
