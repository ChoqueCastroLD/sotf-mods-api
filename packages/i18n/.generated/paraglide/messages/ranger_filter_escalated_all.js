/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_Escalated_AllInputs */

const en_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All items`)
};

const es_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los elementos`)
};

const de_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Einträge`)
};

const fr_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les éléments`)
};

const it_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti gli elementi`)
};

const nl_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle items`)
};

const pl_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie pozycje`)
};

const pt_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os itens`)
};

const ru_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все элементы`)
};

const sv_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla objekt`)
};

const tr_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm öğeler`)
};

const zh_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部项目`)
};

const ja_ranger_filter_escalated_all = /** @type {(inputs: Ranger_Filter_Escalated_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての項目`)
};

/**
* | output |
* | --- |
* | "All items" |
*
* @param {Ranger_Filter_Escalated_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_escalated_all = /** @type {((inputs?: Ranger_Filter_Escalated_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_Escalated_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_escalated_all(inputs)
	if (locale === "de") return de_ranger_filter_escalated_all(inputs)
	if (locale === "fr") return fr_ranger_filter_escalated_all(inputs)
	if (locale === "it") return it_ranger_filter_escalated_all(inputs)
	if (locale === "nl") return nl_ranger_filter_escalated_all(inputs)
	if (locale === "pl") return pl_ranger_filter_escalated_all(inputs)
	if (locale === "pt") return pt_ranger_filter_escalated_all(inputs)
	if (locale === "ru") return ru_ranger_filter_escalated_all(inputs)
	if (locale === "sv") return sv_ranger_filter_escalated_all(inputs)
	if (locale === "tr") return tr_ranger_filter_escalated_all(inputs)
	if (locale === "zh") return zh_ranger_filter_escalated_all(inputs)
	if (locale === "ja") return ja_ranger_filter_escalated_all(inputs)
	return en_ranger_filter_escalated_all(inputs)
});
