/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Assign_ConflictInputs */

const en_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Another ranger already took this item.`)
};

const es_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otro ranger ya se ha asignado este elemento.`)
};

const de_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein anderer Ranger hat diesen Eintrag schon übernommen.`)
};

const fr_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un autre ranger a déjà pris cet élément.`)
};

const it_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un altro ranger ha già preso questo elemento.`)
};

const nl_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een andere ranger heeft dit item al opgepakt.`)
};

const pl_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inny ranger już wziął ten element.`)
};

const pt_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro ranger já assumiu este item.`)
};

const ru_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот элемент уже взял другой рейнджер.`)
};

const sv_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En annan ranger har redan tagit ärendet.`)
};

const tr_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu öğeyi başka bir korucu zaten üstlendi.`)
};

const zh_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`另一位护林员已认领此项。`)
};

const ja_ranger_assign_conflict = /** @type {(inputs: Ranger_Assign_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`別のレンジャーがすでにこの項目を担当しています。`)
};

/**
* | output |
* | --- |
* | "Another ranger already took this item." |
*
* @param {Ranger_Assign_ConflictInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_assign_conflict = /** @type {((inputs?: Ranger_Assign_ConflictInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Assign_ConflictInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_assign_conflict(inputs)
	if (locale === "de") return de_ranger_assign_conflict(inputs)
	if (locale === "fr") return fr_ranger_assign_conflict(inputs)
	if (locale === "it") return it_ranger_assign_conflict(inputs)
	if (locale === "nl") return nl_ranger_assign_conflict(inputs)
	if (locale === "pl") return pl_ranger_assign_conflict(inputs)
	if (locale === "pt") return pt_ranger_assign_conflict(inputs)
	if (locale === "ru") return ru_ranger_assign_conflict(inputs)
	if (locale === "sv") return sv_ranger_assign_conflict(inputs)
	if (locale === "tr") return tr_ranger_assign_conflict(inputs)
	if (locale === "zh") return zh_ranger_assign_conflict(inputs)
	if (locale === "ja") return ja_ranger_assign_conflict(inputs)
	return en_ranger_assign_conflict(inputs)
});
