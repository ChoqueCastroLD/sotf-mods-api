/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_PrivacyInputs */

const en_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy`)
};

const es_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacidad`)
};

const de_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privatsphäre`)
};

const fr_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confidentialité`)
};

const it_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy`)
};

const nl_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy`)
};

const pl_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prywatność`)
};

const pt_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacidade`)
};

const ru_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приватность`)
};

const sv_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integritet`)
};

const tr_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizlilik`)
};

const zh_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐私`)
};

const ja_console_nav_privacy = /** @type {(inputs: Console_Nav_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プライバシー`)
};

/**
* | output |
* | --- |
* | "Privacy" |
*
* @param {Console_Nav_PrivacyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_privacy = /** @type {((inputs?: Console_Nav_PrivacyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_PrivacyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_privacy(inputs)
	if (locale === "de") return de_console_nav_privacy(inputs)
	if (locale === "fr") return fr_console_nav_privacy(inputs)
	if (locale === "it") return it_console_nav_privacy(inputs)
	if (locale === "nl") return nl_console_nav_privacy(inputs)
	if (locale === "pl") return pl_console_nav_privacy(inputs)
	if (locale === "pt") return pt_console_nav_privacy(inputs)
	if (locale === "ru") return ru_console_nav_privacy(inputs)
	if (locale === "sv") return sv_console_nav_privacy(inputs)
	if (locale === "tr") return tr_console_nav_privacy(inputs)
	if (locale === "zh") return zh_console_nav_privacy(inputs)
	if (locale === "ja") return ja_console_nav_privacy(inputs)
	return en_console_nav_privacy(inputs)
});
