/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Flag_ExpiredInputs */

const en_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your session ended. Log in again to continue.`)
};

const es_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu sesión ha terminado. Vuelve a iniciar sesión para continuar.`)
};

const de_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Sitzung ist abgelaufen. Melde dich erneut an, um fortzufahren.`)
};

const fr_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre session a expiré. Reconnectez-vous pour continuer.`)
};

const it_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua sessione è scaduta. Accedi di nuovo per continuare.`)
};

const nl_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je sessie is verlopen. Log opnieuw in om verder te gaan.`)
};

const pl_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja sesja wygasła. Zaloguj się ponownie, aby kontynuować.`)
};

const pt_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua sessão terminou. Entre de novo para continuar.`)
};

const ru_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша сессия завершилась. Войдите снова, чтобы продолжить.`)
};

const sv_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din session har gått ut. Logga in igen för att fortsätta.`)
};

const tr_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oturumun sona erdi. Devam etmek için tekrar giriş yap.`)
};

const zh_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的会话已结束。请重新登录以继续。`)
};

const ja_auth_flag_expired = /** @type {(inputs: Auth_Flag_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セッションが終了しました。もう一度ログインして続けてください。`)
};

/**
* | output |
* | --- |
* | "Your session ended. Log in again to continue." |
*
* @param {Auth_Flag_ExpiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_flag_expired = /** @type {((inputs?: Auth_Flag_ExpiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Flag_ExpiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_flag_expired(inputs)
	if (locale === "de") return de_auth_flag_expired(inputs)
	if (locale === "fr") return fr_auth_flag_expired(inputs)
	if (locale === "it") return it_auth_flag_expired(inputs)
	if (locale === "nl") return nl_auth_flag_expired(inputs)
	if (locale === "pl") return pl_auth_flag_expired(inputs)
	if (locale === "pt") return pt_auth_flag_expired(inputs)
	if (locale === "ru") return ru_auth_flag_expired(inputs)
	if (locale === "sv") return sv_auth_flag_expired(inputs)
	if (locale === "tr") return tr_auth_flag_expired(inputs)
	if (locale === "zh") return zh_auth_flag_expired(inputs)
	if (locale === "ja") return ja_auth_flag_expired(inputs)
	return en_auth_flag_expired(inputs)
});
