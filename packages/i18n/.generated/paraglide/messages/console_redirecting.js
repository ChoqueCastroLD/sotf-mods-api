/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_RedirectingInputs */

const en_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taking you to sign in…`)
};

const es_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Te llevamos a iniciar sesión…`)
};

const de_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir bringen dich zur Anmeldung…`)
};

const fr_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redirection vers la connexion…`)
};

const it_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ti portiamo all’accesso…`)
};

const nl_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We brengen je naar het inloggen…`)
};

const pl_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przenosimy cię do logowania…`)
};

const pt_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Levando você para o login…`)
};

const ru_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переходим ко входу…`)
};

const sv_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tar dig till inloggningen…`)
};

const tr_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giriş sayfasına götürüyoruz…`)
};

const zh_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在前往登录…`)
};

const ja_console_redirecting = /** @type {(inputs: Console_RedirectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインページに移動しています…`)
};

/**
* | output |
* | --- |
* | "Taking you to sign in…" |
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
