/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_TaglineInputs */

const en_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Providing quality mods since March 2023`)
};

const es_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Proveyendo mods de calidad desde marzo de 2023`)
};

const de_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hochwertige Mods seit März 2023`)
};

const fr_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des mods de qualité depuis mars 2023`)
};

const it_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod di qualità da marzo 2023`)
};

const nl_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kwaliteitsmods sinds maart 2023`)
};

const pl_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najlepsze mody od marca 2023`)
};

const pt_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de qualidade desde março de 2023`)
};

const ru_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Качественные моды с марта 2023 года`)
};

const sv_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods av hög kvalitet sedan mars 2023`)
};

const tr_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mart 2023'ten beri kaliteli modlar`)
};

const zh_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自 2023 年 3 月起提供优质模组`)
};

const ja_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2023年3月から高品質なMODを提供`)
};

/**
* | output |
* | --- |
* | "Providing quality mods since March 2023" |
*
* @param {Common_TaglineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_tagline = /** @type {((inputs?: Common_TaglineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_TaglineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_tagline(inputs)
	if (locale === "de") return de_common_tagline(inputs)
	if (locale === "fr") return fr_common_tagline(inputs)
	if (locale === "it") return it_common_tagline(inputs)
	if (locale === "nl") return nl_common_tagline(inputs)
	if (locale === "pl") return pl_common_tagline(inputs)
	if (locale === "pt") return pt_common_tagline(inputs)
	if (locale === "ru") return ru_common_tagline(inputs)
	if (locale === "sv") return sv_common_tagline(inputs)
	if (locale === "tr") return tr_common_tagline(inputs)
	if (locale === "zh") return zh_common_tagline(inputs)
	if (locale === "ja") return ja_common_tagline(inputs)
	return en_common_tagline(inputs)
});
