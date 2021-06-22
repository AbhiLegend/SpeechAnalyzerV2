const BASE_URL = "https://developer.expert.ai"
const ML_BASE_URL = "https://nlapi.expert.ai"


export const LOGIN_API = BASE_URL + "/oauth2/token"
export const SENTIMENT_API = ML_BASE_URL + "/v2/analyze/standard/en"
export const EMOTNTRAIT_API = ML_BASE_URL + "/v2/categorize/emotional-traits/en"
export const DISAMBIGUTY_API = ML_BASE_URL + "/v2/analyze/standard/en/disambiguation"
export const PROPSENT_API = ML_BASE_URL + "/v2/analyze/standard/en/sentiment"
export const PII_API = ML_BASE_URL + "/v2/detect/pii/en"
export const WRITE_API = ML_BASE_URL + "/v2/detect/writeprint/en"
export const REL_API = ML_BASE_URL + "/v2/analyze/standard/en/relations"



