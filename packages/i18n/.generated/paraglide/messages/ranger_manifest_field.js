/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Manifest_FieldInputs */

const en_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field`)
};

const es_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campo`)
};

const de_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feld`)
};

const fr_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Champ`)
};

const it_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campo`)
};

const nl_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veld`)
};

const pl_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pole`)
};

const pt_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campo`)
};

const ru_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поле`)
};

const sv_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fält`)
};

const tr_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alan`)
};

const zh_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`字段`)
};

const ja_ranger_manifest_field = /** @type {(inputs: Ranger_Manifest_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールド`)
};

/**
* | output |
* | --- |
* | "Field" |
*
* @param {Ranger_Manifest_FieldInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_manifest_field = /** @type {((inputs?: Ranger_Manifest_FieldInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Manifest_FieldInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_manifest_field(inputs)
	if (locale === "de") return de_ranger_manifest_field(inputs)
	if (locale === "fr") return fr_ranger_manifest_field(inputs)
	if (locale === "it") return it_ranger_manifest_field(inputs)
	if (locale === "nl") return nl_ranger_manifest_field(inputs)
	if (locale === "pl") return pl_ranger_manifest_field(inputs)
	if (locale === "pt") return pt_ranger_manifest_field(inputs)
	if (locale === "ru") return ru_ranger_manifest_field(inputs)
	if (locale === "sv") return sv_ranger_manifest_field(inputs)
	if (locale === "tr") return tr_ranger_manifest_field(inputs)
	if (locale === "zh") return zh_ranger_manifest_field(inputs)
	if (locale === "ja") return ja_ranger_manifest_field(inputs)
	return en_ranger_manifest_field(inputs)
});
