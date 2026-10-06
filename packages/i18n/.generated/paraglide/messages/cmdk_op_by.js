/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Op_ByInputs */

const en_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Author`)
};

const es_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const de_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const fr_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur`)
};

const it_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autore`)
};

const nl_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur`)
};

const pl_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const pt_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor`)
};

const ru_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор`)
};

const sv_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yazar`)
};

const zh_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

const ja_cmdk_op_by = /** @type {(inputs: Cmdk_Op_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

/**
* | output |
* | --- |
* | "Author" |
*
* @param {Cmdk_Op_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_op_by = /** @type {((inputs?: Cmdk_Op_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Op_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_op_by(inputs)
	if (locale === "de") return de_cmdk_op_by(inputs)
	if (locale === "fr") return fr_cmdk_op_by(inputs)
	if (locale === "it") return it_cmdk_op_by(inputs)
	if (locale === "nl") return nl_cmdk_op_by(inputs)
	if (locale === "pl") return pl_cmdk_op_by(inputs)
	if (locale === "pt") return pt_cmdk_op_by(inputs)
	if (locale === "ru") return ru_cmdk_op_by(inputs)
	if (locale === "sv") return sv_cmdk_op_by(inputs)
	if (locale === "tr") return tr_cmdk_op_by(inputs)
	if (locale === "zh") return zh_cmdk_op_by(inputs)
	if (locale === "ja") return ja_cmdk_op_by(inputs)
	return en_cmdk_op_by(inputs)
});
