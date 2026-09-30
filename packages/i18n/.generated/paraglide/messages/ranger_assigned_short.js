/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Ranger_Assigned_ShortInputs */

const en_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`with ${i?.name}`)
};

const es_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`con ${i?.name}`)
};

const de_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`bei ${i?.name}`)
};

const fr_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`chez ${i?.name}`)
};

const it_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`a ${i?.name}`)
};

const nl_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`bij ${i?.name}`)
};

const pl_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`u ${i?.name}`)
};

const pt_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`com ${i?.name}`)
};

const ru_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`у ${i?.name}`)
};

const sv_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`hos ${i?.name}`)
};

const tr_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} üzerinde`)
};

const zh_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`由 ${i?.name} 处理`)
};

const ja_ranger_assigned_short = /** @type {(inputs: Ranger_Assigned_ShortInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} が担当`)
};

/**
* | output |
* | --- |
* | "with {name}" |
*
* @param {Ranger_Assigned_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_assigned_short = /** @type {((inputs: Ranger_Assigned_ShortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Assigned_ShortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_assigned_short(inputs)
	if (locale === "de") return de_ranger_assigned_short(inputs)
	if (locale === "fr") return fr_ranger_assigned_short(inputs)
	if (locale === "it") return it_ranger_assigned_short(inputs)
	if (locale === "nl") return nl_ranger_assigned_short(inputs)
	if (locale === "pl") return pl_ranger_assigned_short(inputs)
	if (locale === "pt") return pt_ranger_assigned_short(inputs)
	if (locale === "ru") return ru_ranger_assigned_short(inputs)
	if (locale === "sv") return sv_ranger_assigned_short(inputs)
	if (locale === "tr") return tr_ranger_assigned_short(inputs)
	if (locale === "zh") return zh_ranger_assigned_short(inputs)
	if (locale === "ja") return ja_ranger_assigned_short(inputs)
	return en_ranger_assigned_short(inputs)
});
