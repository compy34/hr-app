import Parse from "parse";

const PARSE_APP_ID = import.meta.env.VITE_PARSE_APP_ID;
const PARSE_JS_KEY = import.meta.env.VITE_PARSE_JS_KEY;
const PARSE_SERVER_URL = import.meta.env.VITE_PASRE_SERVER_URL;

console.log('PARSE_APP_ID', PARSE_APP_ID);
console.log("PARSE_JS_KEY", PARSE_JS_KEY);
console.log("PARSE_SERVER_URL", PARSE_SERVER_URL);

Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
Parse.serverURL =PARSE_SERVER_URL;

export default Parse;
