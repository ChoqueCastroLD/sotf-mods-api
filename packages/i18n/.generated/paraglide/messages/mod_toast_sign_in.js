/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Toast_Sign_InInputs */

const en_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your session ended. Sign in again.`)
};

const es_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu sesión terminó. Vuelve a iniciar sesión.`)
};

const de_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Sitzung ist abgelaufen. Melde dich erneut an.`)
};

const fr_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre session a expiré. Reconnectez-vous.`)
};

const it_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La sessione è scaduta. Accedi di nuovo.`)
};

const nl_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je sessie is verlopen. Log opnieuw in.`)
};

const pl_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sesja wygasła. Zaloguj się ponownie.`)
};

const pt_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua sessão expirou. Entre de novo.`)
};

const ru_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сессия закончилась. Войдите снова.`)
};

const sv_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din session har gått ut. Logga in igen.`)
};

const tr_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oturumun sona erdi. Tekrar giriş yap.`)
};

const zh_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录已过期，请重新登录。`)
};

const ja_mod_toast_sign_in = /** @type {(inputs: Mod_Toast_Sign_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セッションが切れました。もう一度ログインしてください。`)
};

/**
* | output |
* | --- |
* | "Your session ended. Sign in again." |
*
* @param {Mod_Toast_Sign_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_toast_sign_in = /** @type {((inputs?: Mod_Toast_Sign_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_Sign_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_toast_sign_in(inputs)
	if (locale === "de") return de_mod_toast_sign_in(inputs)
	if (locale === "fr") return fr_mod_toast_sign_in(inputs)
	if (locale === "it") return it_mod_toast_sign_in(inputs)
	if (locale === "nl") return nl_mod_toast_sign_in(inputs)
	if (locale === "pl") return pl_mod_toast_sign_in(inputs)
	if (locale === "pt") return pt_mod_toast_sign_in(inputs)
	if (locale === "ru") return ru_mod_toast_sign_in(inputs)
	if (locale === "sv") return sv_mod_toast_sign_in(inputs)
	if (locale === "tr") return tr_mod_toast_sign_in(inputs)
	if (locale === "zh") return zh_mod_toast_sign_in(inputs)
	if (locale === "ja") return ja_mod_toast_sign_in(inputs)
	return en_mod_toast_sign_in(inputs)
});
