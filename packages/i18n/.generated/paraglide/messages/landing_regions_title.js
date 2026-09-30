/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Regions_TitleInputs */

const en_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regions`)
};

const es_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regiones`)
};

const de_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regionen`)
};

const fr_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Régions`)
};

const it_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regioni`)
};

const nl_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regio’s`)
};

const pl_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regiony`)
};

const pt_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regiões`)
};

const ru_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Регионы`)
};

const sv_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regioner`)
};

const tr_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bölgeler`)
};

const zh_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`区域`)
};

const ja_landing_regions_title = /** @type {(inputs: Landing_Regions_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地域`)
};

/**
* | output |
* | --- |
* | "Regions" |
*
* @param {Landing_Regions_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_regions_title = /** @type {((inputs?: Landing_Regions_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Regions_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_regions_title(inputs)
	if (locale === "de") return de_landing_regions_title(inputs)
	if (locale === "fr") return fr_landing_regions_title(inputs)
	if (locale === "it") return it_landing_regions_title(inputs)
	if (locale === "nl") return nl_landing_regions_title(inputs)
	if (locale === "pl") return pl_landing_regions_title(inputs)
	if (locale === "pt") return pt_landing_regions_title(inputs)
	if (locale === "ru") return ru_landing_regions_title(inputs)
	if (locale === "sv") return sv_landing_regions_title(inputs)
	if (locale === "tr") return tr_landing_regions_title(inputs)
	if (locale === "zh") return zh_landing_regions_title(inputs)
	if (locale === "ja") return ja_landing_regions_title(inputs)
	return en_landing_regions_title(inputs)
});
