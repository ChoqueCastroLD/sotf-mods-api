/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Rank_LegendInputs */

const en_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legend of the Island`)
};

const es_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leyenda de la isla`)
};

const de_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legende der Insel`)
};

const fr_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Légende de l’île`)
};

const it_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggenda dell’isola`)
};

const nl_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legende van het eiland`)
};

const pl_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Legenda wyspy`)
};

const pt_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lenda da ilha`)
};

const ru_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Легенда острова`)
};

const sv_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öns legend`)
};

const tr_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adanın efsanesi`)
};

const zh_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小岛传奇`)
};

const ja_profile_rank_legend = /** @type {(inputs: Profile_Rank_LegendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島の伝説`)
};

/**
* | output |
* | --- |
* | "Legend of the Island" |
*
* @param {Profile_Rank_LegendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_rank_legend = /** @type {((inputs?: Profile_Rank_LegendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Rank_LegendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_rank_legend(inputs)
	if (locale === "de") return de_profile_rank_legend(inputs)
	if (locale === "fr") return fr_profile_rank_legend(inputs)
	if (locale === "it") return it_profile_rank_legend(inputs)
	if (locale === "nl") return nl_profile_rank_legend(inputs)
	if (locale === "pl") return pl_profile_rank_legend(inputs)
	if (locale === "pt") return pt_profile_rank_legend(inputs)
	if (locale === "ru") return ru_profile_rank_legend(inputs)
	if (locale === "sv") return sv_profile_rank_legend(inputs)
	if (locale === "tr") return tr_profile_rank_legend(inputs)
	if (locale === "zh") return zh_profile_rank_legend(inputs)
	if (locale === "ja") return ja_profile_rank_legend(inputs)
	return en_profile_rank_legend(inputs)
});
