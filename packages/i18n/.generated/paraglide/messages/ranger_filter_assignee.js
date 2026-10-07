/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filter_AssigneeInputs */

const en_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assigned to`)
};

const es_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asignado a`)
};

const de_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zugewiesen an`)
};

const fr_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attribué à`)
};

const it_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assegnato a`)
};

const nl_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toegewezen aan`)
};

const pl_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przypisane do`)
};

const pt_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atribuído a`)
};

const ru_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кому назначено`)
};

const sv_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tilldelad`)
};

const tr_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atanan kişi`)
};

const zh_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`负责人`)
};

const ja_ranger_filter_assignee = /** @type {(inputs: Ranger_Filter_AssigneeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`担当者`)
};

/**
* | output |
* | --- |
* | "Assigned to" |
*
* @param {Ranger_Filter_AssigneeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filter_assignee = /** @type {((inputs?: Ranger_Filter_AssigneeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_AssigneeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filter_assignee(inputs)
	if (locale === "de") return de_ranger_filter_assignee(inputs)
	if (locale === "fr") return fr_ranger_filter_assignee(inputs)
	if (locale === "it") return it_ranger_filter_assignee(inputs)
	if (locale === "nl") return nl_ranger_filter_assignee(inputs)
	if (locale === "pl") return pl_ranger_filter_assignee(inputs)
	if (locale === "pt") return pt_ranger_filter_assignee(inputs)
	if (locale === "ru") return ru_ranger_filter_assignee(inputs)
	if (locale === "sv") return sv_ranger_filter_assignee(inputs)
	if (locale === "tr") return tr_ranger_filter_assignee(inputs)
	if (locale === "zh") return zh_ranger_filter_assignee(inputs)
	if (locale === "ja") return ja_ranger_filter_assignee(inputs)
	return en_ranger_filter_assignee(inputs)
});
