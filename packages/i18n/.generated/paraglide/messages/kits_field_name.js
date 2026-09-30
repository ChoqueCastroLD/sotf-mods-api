/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Field_NameInputs */

const en_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const es_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre`)
};

const de_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

const fr_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom`)
};

const it_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const nl_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam`)
};

const pl_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa`)
};

const pt_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome`)
};

const ru_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название`)
};

const sv_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn`)
};

const tr_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad`)
};

const zh_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称`)
};

const ja_kits_field_name = /** @type {(inputs: Kits_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前`)
};

/**
* | output |
* | --- |
* | "Name" |
*
* @param {Kits_Field_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_field_name = /** @type {((inputs?: Kits_Field_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Field_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_field_name(inputs)
	if (locale === "de") return de_kits_field_name(inputs)
	if (locale === "fr") return fr_kits_field_name(inputs)
	if (locale === "it") return it_kits_field_name(inputs)
	if (locale === "nl") return nl_kits_field_name(inputs)
	if (locale === "pl") return pl_kits_field_name(inputs)
	if (locale === "pt") return pt_kits_field_name(inputs)
	if (locale === "ru") return ru_kits_field_name(inputs)
	if (locale === "sv") return sv_kits_field_name(inputs)
	if (locale === "tr") return tr_kits_field_name(inputs)
	if (locale === "zh") return zh_kits_field_name(inputs)
	if (locale === "ja") return ja_kits_field_name(inputs)
	return en_kits_field_name(inputs)
});
