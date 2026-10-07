/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_Assignee_AllInputs */

const en_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anyone`)
};

const es_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquiera`)
};

const de_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout le monde`)
};

const it_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiunque`)
};

const nl_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iedereen`)
};

const pl_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszyscy`)
};

const pt_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer pessoa`)
};

const ru_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все`)
};

const sv_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkes`)
};

const zh_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有人`)
};

const ja_ranger_filter_assignee_all = /** @type {(inputs: Ranger_Filter_Assignee_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全員`)
};

/**
* | output |
* | --- |
* | "Anyone" |
*
* @param {Ranger_Filter_Assignee_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_assignee_all = /** @type {((inputs?: Ranger_Filter_Assignee_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_Assignee_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_assignee_all(inputs)
	if (locale === "de") return de_ranger_filter_assignee_all(inputs)
	if (locale === "fr") return fr_ranger_filter_assignee_all(inputs)
	if (locale === "it") return it_ranger_filter_assignee_all(inputs)
	if (locale === "nl") return nl_ranger_filter_assignee_all(inputs)
	if (locale === "pl") return pl_ranger_filter_assignee_all(inputs)
	if (locale === "pt") return pt_ranger_filter_assignee_all(inputs)
	if (locale === "ru") return ru_ranger_filter_assignee_all(inputs)
	if (locale === "sv") return sv_ranger_filter_assignee_all(inputs)
	if (locale === "tr") return tr_ranger_filter_assignee_all(inputs)
	if (locale === "zh") return zh_ranger_filter_assignee_all(inputs)
	if (locale === "ja") return ja_ranger_filter_assignee_all(inputs)
	return en_ranger_filter_assignee_all(inputs)
});
