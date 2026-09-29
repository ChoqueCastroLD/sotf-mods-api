/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_CookiesInputs */

const en_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookies`)
};

const es_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookies`)
};

const de_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookies`)
};

const fr_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookies`)
};

const it_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie`)
};

const nl_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookies`)
};

const pl_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pliki cookie`)
};

const pt_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookies`)
};

const ru_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файлы cookie`)
};

const sv_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookies`)
};

const tr_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çerezler`)
};

const zh_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie`)
};

const ja_common_footer_cookies = /** @type {(inputs: Common_Footer_CookiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cookie`)
};

/**
* | output |
* | --- |
* | "Cookies" |
*
* @param {Common_Footer_CookiesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_cookies = /** @type {((inputs?: Common_Footer_CookiesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_CookiesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_cookies(inputs)
	if (locale === "de") return de_common_footer_cookies(inputs)
	if (locale === "fr") return fr_common_footer_cookies(inputs)
	if (locale === "it") return it_common_footer_cookies(inputs)
	if (locale === "nl") return nl_common_footer_cookies(inputs)
	if (locale === "pl") return pl_common_footer_cookies(inputs)
	if (locale === "pt") return pt_common_footer_cookies(inputs)
	if (locale === "ru") return ru_common_footer_cookies(inputs)
	if (locale === "sv") return sv_common_footer_cookies(inputs)
	if (locale === "tr") return tr_common_footer_cookies(inputs)
	if (locale === "zh") return zh_common_footer_cookies(inputs)
	if (locale === "ja") return ja_common_footer_cookies(inputs)
	return en_common_footer_cookies(inputs)
});
