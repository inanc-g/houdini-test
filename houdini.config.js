/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": "env:VITE_GRAPHQL_API"
    },
    "runtimeDir": ".houdini",
    "plugins": {
        "houdini-svelte": {}
    },
    scalars: {
        DateTime: {
            type: 'Date',
            unmarshal(val) {
                return val ? new Date(val) : null
            },
            marshal(date) {
                return date && date.getTime()
            }
        }
    }
}

export default config
