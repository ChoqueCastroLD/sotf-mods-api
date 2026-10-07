/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_Assignee_OthersInputs */

const en_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other moderators`)
};

const es_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otros moderadores`)
};

const de_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere Moderatoren`)
};

const fr_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres modérateurs`)
};

const it_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altri moderatori`)
};

const nl_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere moderators`)
};

const pl_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inni moderatorzy`)
};

const pt_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outros moderadores`)
};

const ru_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие модераторы`)
};

const sv_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andra moderatorer`)
};

const tr_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer moderatörler`)
};

const zh_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他版主`)
};

const ja_ranger_filter_assignee_others = /** @type {(inputs: Ranger_Filter_Assignee_OthersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`他のモデレーター`)
};

/**
* | output |
* | --- |
* | "Other moderators" |
*
* @param {Ranger_Filter_Assignee_OthersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_assignee_others = /** @type {((inputs?: Ranger_Filter_Assignee_OthersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_Assignee_OthersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_assignee_others(inputs)
	if (locale === "de") return de_ranger_filter_assignee_others(inputs)
	if (locale === "fr") return fr_ranger_filter_assignee_others(inputs)
	if (locale === "it") return it_ranger_filter_assignee_others(inputs)
	if (locale === "nl") return nl_ranger_filter_assignee_others(inputs)
	if (locale === "pl") return pl_ranger_filter_assignee_others(inputs)
	if (locale === "pt") return pt_ranger_filter_assignee_others(inputs)
	if (locale === "ru") return ru_ranger_filter_assignee_others(inputs)
	if (locale === "sv") return sv_ranger_filter_assignee_others(inputs)
	if (locale === "tr") return tr_ranger_filter_assignee_others(inputs)
	if (locale === "zh") return zh_ranger_filter_assignee_others(inputs)
	if (locale === "ja") return ja_ranger_filter_assignee_others(inputs)
	return en_ranger_filter_assignee_others(inputs)
});
