/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Field_StartsInputs */

const en_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starts`)
};

const es_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empieza`)
};

const de_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beginn`)
};

const fr_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Début`)
};

const it_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inizio`)
};

const nl_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begint`)
};

const pl_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Początek`)
};

const pt_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Começa`)
};

const ru_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Начало`)
};

const sv_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Börjar`)
};

const tr_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlangıç`)
};

const zh_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始`)
};

const ja_admin_ann_field_starts = /** @type {(inputs: Admin_Ann_Field_StartsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開始`)
};

/**
* | output |
* | --- |
* | "Starts" |
*
* @param {Admin_Ann_Field_StartsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_field_starts = /** @type {((inputs?: Admin_Ann_Field_StartsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Field_StartsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_field_starts(inputs)
	if (locale === "de") return de_admin_ann_field_starts(inputs)
	if (locale === "fr") return fr_admin_ann_field_starts(inputs)
	if (locale === "it") return it_admin_ann_field_starts(inputs)
	if (locale === "nl") return nl_admin_ann_field_starts(inputs)
	if (locale === "pl") return pl_admin_ann_field_starts(inputs)
	if (locale === "pt") return pt_admin_ann_field_starts(inputs)
	if (locale === "ru") return ru_admin_ann_field_starts(inputs)
	if (locale === "sv") return sv_admin_ann_field_starts(inputs)
	if (locale === "tr") return tr_admin_ann_field_starts(inputs)
	if (locale === "zh") return zh_admin_ann_field_starts(inputs)
	if (locale === "ja") return ja_admin_ann_field_starts(inputs)
	return en_admin_ann_field_starts(inputs)
});
