/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_ProfileInputs */

const en_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile`)
};

const es_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfil`)
};

const de_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil`)
};

const fr_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil`)
};

const it_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilo`)
};

const nl_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profiel`)
};

const pl_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil`)
};

const pt_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfil`)
};

const ru_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Профиль`)
};

const sv_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil`)
};

const tr_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil`)
};

const zh_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人资料`)
};

const ja_console_nav_profile = /** @type {(inputs: Console_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィール`)
};

/**
* | output |
* | --- |
* | "Profile" |
*
* @param {Console_Nav_ProfileInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_profile = /** @type {((inputs?: Console_Nav_ProfileInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_ProfileInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_profile(inputs)
	if (locale === "de") return de_console_nav_profile(inputs)
	if (locale === "fr") return fr_console_nav_profile(inputs)
	if (locale === "it") return it_console_nav_profile(inputs)
	if (locale === "nl") return nl_console_nav_profile(inputs)
	if (locale === "pl") return pl_console_nav_profile(inputs)
	if (locale === "pt") return pt_console_nav_profile(inputs)
	if (locale === "ru") return ru_console_nav_profile(inputs)
	if (locale === "sv") return sv_console_nav_profile(inputs)
	if (locale === "tr") return tr_console_nav_profile(inputs)
	if (locale === "zh") return zh_console_nav_profile(inputs)
	if (locale === "ja") return ja_console_nav_profile(inputs)
	return en_console_nav_profile(inputs)
});
