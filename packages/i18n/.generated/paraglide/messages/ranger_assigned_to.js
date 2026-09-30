/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Assigned_ToInputs */

const en_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assigned to`)
};

const es_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Asignado a`)
};

const de_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zugewiesen an`)
};

const fr_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assigné à`)
};

const it_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assegnato a`)
};

const nl_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toegewezen aan`)
};

const pl_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przypisane do`)
};

const pt_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atribuído a`)
};

const ru_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назначено`)
};

const sv_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tilldelat`)
};

const tr_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atanan`)
};

const zh_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`指派给`)
};

const ja_ranger_assigned_to = /** @type {(inputs: Ranger_Assigned_ToInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`担当`)
};

/**
* | output |
* | --- |
* | "Assigned to" |
*
* @param {Ranger_Assigned_ToInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_assigned_to = /** @type {((inputs?: Ranger_Assigned_ToInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Assigned_ToInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_assigned_to(inputs)
	if (locale === "de") return de_ranger_assigned_to(inputs)
	if (locale === "fr") return fr_ranger_assigned_to(inputs)
	if (locale === "it") return it_ranger_assigned_to(inputs)
	if (locale === "nl") return nl_ranger_assigned_to(inputs)
	if (locale === "pl") return pl_ranger_assigned_to(inputs)
	if (locale === "pt") return pt_ranger_assigned_to(inputs)
	if (locale === "ru") return ru_ranger_assigned_to(inputs)
	if (locale === "sv") return sv_ranger_assigned_to(inputs)
	if (locale === "tr") return tr_ranger_assigned_to(inputs)
	if (locale === "zh") return zh_ranger_assigned_to(inputs)
	if (locale === "ja") return ja_ranger_assigned_to(inputs)
	return en_ranger_assigned_to(inputs)
});
