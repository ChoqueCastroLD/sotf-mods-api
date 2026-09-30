/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_PlatformInputs */

const en_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const es_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma`)
};

const de_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform`)
};

const fr_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plateforme`)
};

const it_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piattaforma`)
};

const nl_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const pl_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platforma`)
};

const pt_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma`)
};

const ru_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Платформа`)
};

const sv_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform`)
};

const tr_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const zh_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平台`)
};

const ja_basecamp_compat_platform = /** @type {(inputs: Basecamp_Compat_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラットフォーム`)
};

/**
* | output |
* | --- |
* | "Platform" |
*
* @param {Basecamp_Compat_PlatformInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_platform = /** @type {((inputs?: Basecamp_Compat_PlatformInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_PlatformInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_platform(inputs)
	if (locale === "de") return de_basecamp_compat_platform(inputs)
	if (locale === "fr") return fr_basecamp_compat_platform(inputs)
	if (locale === "it") return it_basecamp_compat_platform(inputs)
	if (locale === "nl") return nl_basecamp_compat_platform(inputs)
	if (locale === "pl") return pl_basecamp_compat_platform(inputs)
	if (locale === "pt") return pt_basecamp_compat_platform(inputs)
	if (locale === "ru") return ru_basecamp_compat_platform(inputs)
	if (locale === "sv") return sv_basecamp_compat_platform(inputs)
	if (locale === "tr") return tr_basecamp_compat_platform(inputs)
	if (locale === "zh") return zh_basecamp_compat_platform(inputs)
	if (locale === "ja") return ja_basecamp_compat_platform(inputs)
	return en_basecamp_compat_platform(inputs)
});
