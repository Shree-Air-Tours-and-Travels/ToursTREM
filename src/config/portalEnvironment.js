import development from "../../../TravelsTREM/config/development.json";
import production from "../../../TravelsTREM/config/production.json";

const normalizeEnvironment = (value) => {
    const raw = String(value || "").trim().toLowerCase();
    return raw === "production" || raw === "prod" ? "production" : "development";
};

export const PORTAL_ENV = normalizeEnvironment(process.env.REACT_APP_PORTAL_ENV || process.env.NODE_ENV);
const allowEnvOverrides = process.env.REACT_APP_ALLOW_ENV_OVERRIDES === "true";

export const portalEnvironment = PORTAL_ENV === "production" ? production : development;

export const getConfiguredApiBase = () =>
    (allowEnvOverrides && process.env.REACT_APP_API_URL) ||
    portalEnvironment?.backend?.apiBaseUrl ||
    (portalEnvironment?.backend?.baseUrl ? `${portalEnvironment.backend.baseUrl.replace(/\/$/, "")}/api` : "");
