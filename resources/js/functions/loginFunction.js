import { setCookie, getCookie } from "./cookies";

export function loginUser(email, password, rememberMe = true) {
    const loginInfo = {
        email: email,
        password: password,
        remember_me: rememberMe,
    };

    axios
        .post("/api/auth/login", loginInfo)
        .then((res) => {
            setCookie("token", res.data.access_token);
            location.href = "/";
        })
        .catch((err) => {
            // Invalid credentials
            console.log(err);
            setCookie("token", "");
        });
}
