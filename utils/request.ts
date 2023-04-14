const baseUrl = "http://x.x.x.x/api";
const fetch = async (url: string, options: object) => {
    const reqUrl = baseUrl + url;
    return new Promise((resolve, reject) => {
        useFetch(reqUrl, { ...options })
            .then(({ data, error }) => {
                if (error.value) {
                    reject(error.value);
                    return;
                }
                const value = data.value;
                if (!value) {
                    // 这里处理错误回调
                    // reject(value)
                    // $router.replace('/reject/' + value.status)
                } else {
                    // console.log('返回参数======================',reqUrl, value)
                    resolve(value);
                }
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default new class Http {
    get(url: string, params?:object) {
        return fetch(url, { method: "get", params });
    }
    post(url: string, params?:object) {
        return fetch(url, { method: "post", params });
    }
    put(url: string, body:object) {
        return fetch(url, { method: "put", body });
    }
    delete(url: string, body:object) {
        return fetch(url, { method: "delete", body });
    }
};


// 使用方式
// import http from "~/utils/request";
// export const getSiteInfo = async ()=>{
//     const { data } = await http.get(`url`);
//     return data;
// }
