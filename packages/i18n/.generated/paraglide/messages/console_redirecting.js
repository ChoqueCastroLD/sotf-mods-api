/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_RedirectingInputs */

const en_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redirecting to the login page…`)
};

const es_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redirigiendo al inicio de sesión…`)
};

const de_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiterleitung zur Anmeldung…`)
};

const fr_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redirection vers la page de connexion…`)
};

const it_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reindirizzamento alla pagina di accesso…`)
};

const nl_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doorsturen naar de inlogpagina…`)
};

const pl_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przekierowanie do logowania…`)
};

const pt_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redirecionando para o login…`)
};

const ru_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переходим на страницу входа…`)
};

const sv_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skickar dig till inloggningen…`)
};

const tr_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş sayfasına yönlendiriliyorsun…`)
};

const zh_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在前往登录页面…`)
};

const ja_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインページに移動しています…`)
};

/**
* | output |
* | --- |
* | "Redirecting to the login page…" |
*
* @param {Console_RedirectingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_redirecting = /** @type {((inputs?: Console_RedirectingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_RedirectingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_redirecting(inputs)
	if (locale === "de") return de_console_redirecting(inputs)
	if (locale === "fr") return fr_console_redirecting(inputs)
	if (locale === "it") return it_console_redirecting(inputs)
	if (locale === "nl") return nl_console_redirecting(inputs)
	if (locale === "pl") return pl_console_redirecting(inputs)
	if (locale === "pt") return pt_console_redirecting(inputs)
	if (locale === "ru") return ru_console_redirecting(inputs)
	if (locale === "sv") return sv_console_redirecting(inputs)
	if (locale === "tr") return tr_console_redirecting(inputs)
	if (locale === "zh") return zh_console_redirecting(inputs)
	if (locale === "ja") return ja_console_redirecting(inputs)
	return en_console_redirecting(inputs)
});
