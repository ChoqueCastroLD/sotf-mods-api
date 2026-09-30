/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Stat_SurvivorsInputs */

const en_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivors`)
};

const es_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supervivientes`)
};

const de_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Überlebende`)
};

const fr_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivants`)
};

const it_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sopravvissuti`)
};

const nl_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overlevenden`)
};

const pl_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocaleni`)
};

const pt_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobreviventes`)
};

const ru_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выжившие`)
};

const sv_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevare`)
};

const tr_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalan`)
};

const zh_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`幸存者`)
};

const ja_landing_stat_survivors = /** @type {(inputs: Landing_Stat_SurvivorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サバイバー`)
};

/**
* | output |
* | --- |
* | "Survivors" |
*
* @param {Landing_Stat_SurvivorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_stat_survivors = /** @type {((inputs?: Landing_Stat_SurvivorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Stat_SurvivorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_stat_survivors(inputs)
	if (locale === "de") return de_landing_stat_survivors(inputs)
	if (locale === "fr") return fr_landing_stat_survivors(inputs)
	if (locale === "it") return it_landing_stat_survivors(inputs)
	if (locale === "nl") return nl_landing_stat_survivors(inputs)
	if (locale === "pl") return pl_landing_stat_survivors(inputs)
	if (locale === "pt") return pt_landing_stat_survivors(inputs)
	if (locale === "ru") return ru_landing_stat_survivors(inputs)
	if (locale === "sv") return sv_landing_stat_survivors(inputs)
	if (locale === "tr") return tr_landing_stat_survivors(inputs)
	if (locale === "zh") return zh_landing_stat_survivors(inputs)
	if (locale === "ja") return ja_landing_stat_survivors(inputs)
	return en_landing_stat_survivors(inputs)
});
