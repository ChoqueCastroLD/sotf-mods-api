/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Field_LevelInputs */

const en_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Level`)
};

const es_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nivel`)
};

const de_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stufe`)
};

const fr_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niveau`)
};

const it_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Livello`)
};

const nl_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niveau`)
};

const pl_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poziom`)
};

const pt_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nível`)
};

const ru_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уровень`)
};

const sv_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nivå`)
};

const tr_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzey`)
};

const zh_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`级别`)
};

const ja_admin_ann_field_level = /** @type {(inputs: Admin_Ann_Field_LevelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レベル`)
};

/**
* | output |
* | --- |
* | "Level" |
*
* @param {Admin_Ann_Field_LevelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_field_level = /** @type {((inputs?: Admin_Ann_Field_LevelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Field_LevelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_field_level(inputs)
	if (locale === "de") return de_admin_ann_field_level(inputs)
	if (locale === "fr") return fr_admin_ann_field_level(inputs)
	if (locale === "it") return it_admin_ann_field_level(inputs)
	if (locale === "nl") return nl_admin_ann_field_level(inputs)
	if (locale === "pl") return pl_admin_ann_field_level(inputs)
	if (locale === "pt") return pt_admin_ann_field_level(inputs)
	if (locale === "ru") return ru_admin_ann_field_level(inputs)
	if (locale === "sv") return sv_admin_ann_field_level(inputs)
	if (locale === "tr") return tr_admin_ann_field_level(inputs)
	if (locale === "zh") return zh_admin_ann_field_level(inputs)
	if (locale === "ja") return ja_admin_ann_field_level(inputs)
	return en_admin_ann_field_level(inputs)
});
