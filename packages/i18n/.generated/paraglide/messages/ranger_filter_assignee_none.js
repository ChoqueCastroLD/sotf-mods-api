/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_Assignee_NoneInputs */

const en_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unassigned`)
};

const es_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin asignar`)
};

const de_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht zugewiesen`)
};

const fr_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non attribués`)
};

const it_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non assegnati`)
};

const nl_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet toegewezen`)
};

const pl_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieprzypisane`)
};

const pt_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem atribuição`)
};

const ru_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не назначены`)
};

const sv_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ej tilldelade`)
};

const tr_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atanmamış`)
};

const zh_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未分配`)
};

const ja_ranger_filter_assignee_none = /** @type {(inputs: Ranger_Filter_Assignee_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未割り当て`)
};

/**
* | output |
* | --- |
* | "Unassigned" |
*
* @param {Ranger_Filter_Assignee_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_assignee_none = /** @type {((inputs?: Ranger_Filter_Assignee_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_Assignee_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_assignee_none(inputs)
	if (locale === "de") return de_ranger_filter_assignee_none(inputs)
	if (locale === "fr") return fr_ranger_filter_assignee_none(inputs)
	if (locale === "it") return it_ranger_filter_assignee_none(inputs)
	if (locale === "nl") return nl_ranger_filter_assignee_none(inputs)
	if (locale === "pl") return pl_ranger_filter_assignee_none(inputs)
	if (locale === "pt") return pt_ranger_filter_assignee_none(inputs)
	if (locale === "ru") return ru_ranger_filter_assignee_none(inputs)
	if (locale === "sv") return sv_ranger_filter_assignee_none(inputs)
	if (locale === "tr") return tr_ranger_filter_assignee_none(inputs)
	if (locale === "zh") return zh_ranger_filter_assignee_none(inputs)
	if (locale === "ja") return ja_ranger_filter_assignee_none(inputs)
	return en_ranger_filter_assignee_none(inputs)
});
