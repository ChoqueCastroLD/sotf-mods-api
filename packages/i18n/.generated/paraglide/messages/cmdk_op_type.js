/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Op_TypeInputs */

const en_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const es_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const de_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Art`)
};

const fr_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const it_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const nl_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const pl_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ`)
};

const pt_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const ru_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тип`)
};

const sv_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ`)
};

const tr_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tür`)
};

const zh_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`类型`)
};

const ja_cmdk_op_type = /** @type {(inputs: Cmdk_Op_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`種類`)
};

/**
* | output |
* | --- |
* | "Type" |
*
* @param {Cmdk_Op_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_op_type = /** @type {((inputs?: Cmdk_Op_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Op_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_op_type(inputs)
	if (locale === "de") return de_cmdk_op_type(inputs)
	if (locale === "fr") return fr_cmdk_op_type(inputs)
	if (locale === "it") return it_cmdk_op_type(inputs)
	if (locale === "nl") return nl_cmdk_op_type(inputs)
	if (locale === "pl") return pl_cmdk_op_type(inputs)
	if (locale === "pt") return pt_cmdk_op_type(inputs)
	if (locale === "ru") return ru_cmdk_op_type(inputs)
	if (locale === "sv") return sv_cmdk_op_type(inputs)
	if (locale === "tr") return tr_cmdk_op_type(inputs)
	if (locale === "zh") return zh_cmdk_op_type(inputs)
	if (locale === "ja") return ja_cmdk_op_type(inputs)
	return en_cmdk_op_type(inputs)
});
