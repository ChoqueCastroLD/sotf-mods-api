/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_Escalated_OnlyInputs */

const en_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escalated only`)
};

const es_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo escalados`)
};

const de_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur eskalierte`)
};

const fr_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escaladés seulement`)
};

const it_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo inoltrati`)
};

const nl_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen geëscaleerd`)
};

const pl_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko eskalowane`)
};

const pt_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Somente escalados`)
};

const ru_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только эскалированные`)
};

const sv_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast eskalerade`)
};

const tr_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca yükseltilenler`)
};

const zh_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅已上报`)
};

const ja_ranger_filter_escalated_only = /** @type {(inputs: Ranger_Filter_Escalated_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エスカレーション済みのみ`)
};

/**
* | output |
* | --- |
* | "Escalated only" |
*
* @param {Ranger_Filter_Escalated_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_escalated_only = /** @type {((inputs?: Ranger_Filter_Escalated_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_Escalated_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_escalated_only(inputs)
	if (locale === "de") return de_ranger_filter_escalated_only(inputs)
	if (locale === "fr") return fr_ranger_filter_escalated_only(inputs)
	if (locale === "it") return it_ranger_filter_escalated_only(inputs)
	if (locale === "nl") return nl_ranger_filter_escalated_only(inputs)
	if (locale === "pl") return pl_ranger_filter_escalated_only(inputs)
	if (locale === "pt") return pt_ranger_filter_escalated_only(inputs)
	if (locale === "ru") return ru_ranger_filter_escalated_only(inputs)
	if (locale === "sv") return sv_ranger_filter_escalated_only(inputs)
	if (locale === "tr") return tr_ranger_filter_escalated_only(inputs)
	if (locale === "zh") return zh_ranger_filter_escalated_only(inputs)
	if (locale === "ja") return ja_ranger_filter_escalated_only(inputs)
	return en_ranger_filter_escalated_only(inputs)
});
