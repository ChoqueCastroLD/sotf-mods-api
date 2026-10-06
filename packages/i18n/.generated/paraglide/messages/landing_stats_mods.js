/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Stats_ModsInputs */

const en_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods published`)
};

const es_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods publicados`)
};

const de_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichte Mods`)
};

const fr_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods publiés`)
};

const it_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod pubblicati`)
};

const nl_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerde mods`)
};

const pl_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowane mody`)
};

const pt_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods publicados`)
};

const ru_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликованные моды`)
};

const sv_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerade mods`)
};

const tr_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlanan modlar`)
};

const zh_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已发布模组`)
};

const ja_landing_stats_mods = /** @type {(inputs: Landing_Stats_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開MOD`)
};

/**
* | output |
* | --- |
* | "Mods published" |
*
* @param {Landing_Stats_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_stats_mods = /** @type {((inputs?: Landing_Stats_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Stats_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_stats_mods(inputs)
	if (locale === "de") return de_landing_stats_mods(inputs)
	if (locale === "fr") return fr_landing_stats_mods(inputs)
	if (locale === "it") return it_landing_stats_mods(inputs)
	if (locale === "nl") return nl_landing_stats_mods(inputs)
	if (locale === "pl") return pl_landing_stats_mods(inputs)
	if (locale === "pt") return pt_landing_stats_mods(inputs)
	if (locale === "ru") return ru_landing_stats_mods(inputs)
	if (locale === "sv") return sv_landing_stats_mods(inputs)
	if (locale === "tr") return tr_landing_stats_mods(inputs)
	if (locale === "zh") return zh_landing_stats_mods(inputs)
	if (locale === "ja") return ja_landing_stats_mods(inputs)
	return en_landing_stats_mods(inputs)
});
