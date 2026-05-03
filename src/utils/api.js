import axios from "axios";

function normalizeBase(raw) {
    if (raw == null || raw === "") return raw;
    if (/^https?:\/\//i.test(raw)) return raw.replace(/\/$/, "");
    return `https://${raw}`.replace(/\/$/, "");
}

const RAW_BASE = process.env.REACT_APP_API_URL || "";
const BASE = normalizeBase(RAW_BASE) ?? "";
const baseURL = (`${BASE}/api`).replace(/([^:]\/)\/+/g, "$1");

const api = axios.create({
    baseURL,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
});

export default api;
