/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_TypeInputs */

const en_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The type must be “Mod” or “Library”.`)
};

const es_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El tipo debe ser «Mod» o «Library».`)
};

const de_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Typ muss „Mod“ oder „Library“ sein.`)
};

const fr_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le type doit être « Mod » ou « Library ».`)
};

const it_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tipo deve essere “Mod” o “Library”.`)
};

const nl_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het type moet ‘Mod’ of ‘Library’ zijn.`)
};

const pl_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ musi mieć wartość „Mod” lub „Library”.`)
};

const pt_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O tipo precisa ser “Mod” ou “Library”.`)
};

const ru_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тип должен быть «Mod» или «Library».`)
};

const sv_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typen måste vara ”Mod” eller ”Library”.`)
};

const tr_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tür “Mod” ya da “Library” olmalı.`)
};

const zh_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`类型必须是“Mod”或“Library”。`)
};

const ja_upload_issue_invalid_type = /** @type {(inputs: Upload_Issue_Invalid_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`種類は「MOD」か「Library」にしてください。`)
};

/**
* | output |
* | --- |
* | "The type must be “Mod” or “Library”." |
*
* @param {Upload_Issue_Invalid_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_type = /** @type {((inputs?: Upload_Issue_Invalid_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_type(inputs)
	if (locale === "de") return de_upload_issue_invalid_type(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_type(inputs)
	if (locale === "it") return it_upload_issue_invalid_type(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_type(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_type(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_type(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_type(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_type(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_type(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_type(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_type(inputs)
	return en_upload_issue_invalid_type(inputs)
});
