export default () => {
    const env = "dev"
    switch(env){
        case "dev":
            return "https://localhost:7188"
        case "prod":
            return ""
    }
}