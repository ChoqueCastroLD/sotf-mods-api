/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Fact_PlatformInputs */

const en_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const es_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma`)
};

const de_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform`)
};

const fr_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plateforme`)
};

const it_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piattaforma`)
};

const nl_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const pl_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platforma`)
};

const pt_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma`)
};

const ru_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Платформа`)
};

const sv_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform`)
};

const tr_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const zh_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平台`)
};

const ja_mod_fact_platform = /** @type {(inputs: Mod_Fact_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラットフォーム`)
};

/**
* | output |
* | --- |
* | "Platform" |
*
* @param {Mod_Fact_PlatformInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_platform = /** @type {((inputs?: Mod_Fact_PlatformInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_PlatformInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_platform(inputs)
	if (locale === "de") return de_mod_fact_platform(inputs)
	if (locale === "fr") return fr_mod_fact_platform(inputs)
	if (locale === "it") return it_mod_fact_platform(inputs)
	if (locale === "nl") return nl_mod_fact_platform(inputs)
	if (locale === "pl") return pl_mod_fact_platform(inputs)
	if (locale === "pt") return pt_mod_fact_platform(inputs)
	if (locale === "ru") return ru_mod_fact_platform(inputs)
	if (locale === "sv") return sv_mod_fact_platform(inputs)
	if (locale === "tr") return tr_mod_fact_platform(inputs)
	if (locale === "zh") return zh_mod_fact_platform(inputs)
	if (locale === "ja") return ja_mod_fact_platform(inputs)
	return en_mod_fact_platform(inputs)
});
