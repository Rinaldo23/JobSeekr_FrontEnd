import axios from "axios";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("middleware executed");

    //const authToken = request.cookies.get("authToken")?.value;
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTQzZTdmNmEyN2E3YzdiY2I2ZTNjNiIsImlhdCI6MTY5NjE2MDgyNn0.NydvPk91wff70bJQ8ME0pFu2Np9LVXudiL9T7sot5zg"

    // backend 
    if (!authToken) {
        return NextResponse.redirect(new URL("/signin", request.url));
    } else {
        // varify...
        const res = axios.post("http://localhost:8000/api/auth/verifyToken", authToken)
        console.log(res)
    }
}
console.log(authToken);
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/",
        "/signin",
        "/jobform",
    ],
};
