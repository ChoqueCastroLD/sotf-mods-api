/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Entry_Not_AllowedInputs */

const en_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unusual type`)
};

const es_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo inusual`)
};

const de_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ungewöhnlicher Typ`)
};

const fr_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type inhabituel`)
};

const it_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo insolito`)
};

const nl_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongebruikelijk type`)
};

const pl_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nietypowy typ`)
};

const pt_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo incomum`)
};

const ru_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Необычный тип`)
};

const sv_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ovanlig typ`)
};

const tr_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alışılmadık tür`)
};

const zh_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不常见类型`)
};

const ja_upload_entry_not_allowed = /** @type {(inputs: Upload_Entry_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`珍しい形式`)
};

/**
* | output |
* | --- |
* | "Unusual type" |
*
* @param {Upload_Entry_Not_AllowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_entry_not_allowed = /** @type {((inputs?: Upload_Entry_Not_AllowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Entry_Not_AllowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_entry_not_allowed(inputs)
	if (locale === "de") return de_upload_entry_not_allowed(inputs)
	if (locale === "fr") return fr_upload_entry_not_allowed(inputs)
	if (locale === "it") return it_upload_entry_not_allowed(inputs)
	if (locale === "nl") return nl_upload_entry_not_allowed(inputs)
	if (locale === "pl") return pl_upload_entry_not_allowed(inputs)
	if (locale === "pt") return pt_upload_entry_not_allowed(inputs)
	if (locale === "ru") return ru_upload_entry_not_allowed(inputs)
	if (locale === "sv") return sv_upload_entry_not_allowed(inputs)
	if (locale === "tr") return tr_upload_entry_not_allowed(inputs)
	if (locale === "zh") return zh_upload_entry_not_allowed(inputs)
	if (locale === "ja") return ja_upload_entry_not_allowed(inputs)
	return en_upload_entry_not_allowed(inputs)
});
