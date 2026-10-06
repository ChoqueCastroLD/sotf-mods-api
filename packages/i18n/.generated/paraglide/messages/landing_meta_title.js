/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Meta_TitleInputs */

const en_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest Mods | SOTF Mods`)
};

const es_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de Sons of the Forest | SOTF Mods`)
};

const de_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest Mods | SOTF Mods`)
};

const fr_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods Sons of the Forest | SOTF Mods`)
};

const it_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod di Sons of the Forest | SOTF Mods`)
};

const nl_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest-mods | SOTF Mods`)
};

const pl_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody do Sons of the Forest | SOTF Mods`)
};

const pt_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de Sons of the Forest | SOTF Mods`)
};

const ru_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для Sons of the Forest | SOTF Mods`)
};

const sv_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest-mods | SOTF Mods`)
};

const tr_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest Modları | SOTF Mods`)
};

const zh_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`《森林之子》模组 | SOTF Mods`)
};

const ja_landing_meta_title = /** @type {(inputs: Landing_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest MOD | SOTF Mods`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest Mods \| SOTF Mods" |
*
* @param {Landing_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_meta_title = /** @type {((inputs?: Landing_Meta_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Meta_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_meta_title(inputs)
	if (locale === "de") return de_landing_meta_title(inputs)
	if (locale === "fr") return fr_landing_meta_title(inputs)
	if (locale === "it") return it_landing_meta_title(inputs)
	if (locale === "nl") return nl_landing_meta_title(inputs)
	if (locale === "pl") return pl_landing_meta_title(inputs)
	if (locale === "pt") return pt_landing_meta_title(inputs)
	if (locale === "ru") return ru_landing_meta_title(inputs)
	if (locale === "sv") return sv_landing_meta_title(inputs)
	if (locale === "tr") return tr_landing_meta_title(inputs)
	if (locale === "zh") return zh_landing_meta_title(inputs)
	if (locale === "ja") return ja_landing_meta_title(inputs)
	return en_landing_meta_title(inputs)
});
