/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Nav_ProfileInputs */

const en_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile`)
};

const es_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfil`)
};

const de_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil`)
};

const fr_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil`)
};

const it_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profilo`)
};

const nl_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profiel`)
};

const pl_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil`)
};

const pt_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfil`)
};

const ru_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Профиль`)
};

const sv_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil`)
};

const tr_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil`)
};

const zh_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人资料`)
};

const ja_shell_nav_profile = /** @type {(inputs: Shell_Nav_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロフィール`)
};

/**
* | output |
* | --- |
* | "Profile" |
*
* @param {Shell_Nav_ProfileInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_nav_profile = /** @type {((inputs?: Shell_Nav_ProfileInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Nav_ProfileInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_nav_profile(inputs)
	if (locale === "de") return de_shell_nav_profile(inputs)
	if (locale === "fr") return fr_shell_nav_profile(inputs)
	if (locale === "it") return it_shell_nav_profile(inputs)
	if (locale === "nl") return nl_shell_nav_profile(inputs)
	if (locale === "pl") return pl_shell_nav_profile(inputs)
	if (locale === "pt") return pt_shell_nav_profile(inputs)
	if (locale === "ru") return ru_shell_nav_profile(inputs)
	if (locale === "sv") return sv_shell_nav_profile(inputs)
	if (locale === "tr") return tr_shell_nav_profile(inputs)
	if (locale === "zh") return zh_shell_nav_profile(inputs)
	if (locale === "ja") return ja_shell_nav_profile(inputs)
	return en_shell_nav_profile(inputs)
});
