/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Session_ExpiredInputs */

const en_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your session ended. Sign in again to continue.`)
};

const es_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu sesión terminó. Vuelve a iniciar sesión para continuar.`)
};

const de_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Sitzung ist abgelaufen. Melde dich erneut an, um weiterzumachen.`)
};

const fr_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre session a expiré. Reconnectez-vous pour continuer.`)
};

const it_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua sessione è scaduta. Accedi di nuovo per continuare.`)
};

const nl_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je sessie is verlopen. Log opnieuw in om verder te gaan.`)
};

const pl_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja sesja wygasła. Zaloguj się ponownie, aby kontynuować.`)
};

const pt_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua sessão terminou. Entre de novo para continuar.`)
};

const ru_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сеанс завершён. Войдите снова, чтобы продолжить.`)
};

const sv_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din session har gått ut. Logga in igen för att fortsätta.`)
};

const tr_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oturumun sona erdi. Devam etmek için tekrar giriş yap.`)
};

const zh_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的会话已结束。请重新登录以继续。`)
};

const ja_console_session_expired = /** @type {(inputs: Console_Session_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セッションが終了しました。続けるにはもう一度ログインしてください。`)
};

/**
* | output |
* | --- |
* | "Your session ended. Sign in again to continue." |
*
* @param {Console_Session_ExpiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_session_expired = /** @type {((inputs?: Console_Session_ExpiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Session_ExpiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_session_expired(inputs)
	if (locale === "de") return de_console_session_expired(inputs)
	if (locale === "fr") return fr_console_session_expired(inputs)
	if (locale === "it") return it_console_session_expired(inputs)
	if (locale === "nl") return nl_console_session_expired(inputs)
	if (locale === "pl") return pl_console_session_expired(inputs)
	if (locale === "pt") return pt_console_session_expired(inputs)
	if (locale === "ru") return ru_console_session_expired(inputs)
	if (locale === "sv") return sv_console_session_expired(inputs)
	if (locale === "tr") return tr_console_session_expired(inputs)
	if (locale === "zh") return zh_console_session_expired(inputs)
	if (locale === "ja") return ja_console_session_expired(inputs)
	return en_console_session_expired(inputs)
});
