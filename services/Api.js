const Api = {
    url: "/data/menu.json",
    fetchMenu: async () => {
        const result = await fetch(Api.url);
        return await result.json();
    }
}
export default Api;