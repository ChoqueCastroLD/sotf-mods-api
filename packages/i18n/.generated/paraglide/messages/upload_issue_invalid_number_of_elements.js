/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_Number_Of_ElementsInputs */

const en_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements must be a whole number.`)
};

const es_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements debe ser un número entero.`)
};

const de_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements muss eine ganze Zahl sein.`)
};

const fr_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements doit être un nombre entier.`)
};

const it_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements deve essere un numero intero.`)
};

const nl_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements moet een geheel getal zijn.`)
};

const pl_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements musi być liczbą całkowitą.`)
};

const pt_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements precisa ser um número inteiro.`)
};

const ru_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements должно быть целым числом.`)
};

const sv_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements måste vara ett heltal.`)
};

const tr_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements bir tam sayı olmalı.`)
};

const zh_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements 必须是整数。`)
};

const ja_upload_issue_invalid_number_of_elements = /** @type {(inputs: Upload_Issue_Invalid_Number_Of_ElementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`NumberOfElements は整数にしてください。`)
};

/**
* | output |
* | --- |
* | "NumberOfElements must be a whole number." |
*
* @param {Upload_Issue_Invalid_Number_Of_ElementsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_number_of_elements = /** @type {((inputs?: Upload_Issue_Invalid_Number_Of_ElementsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_Number_Of_ElementsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_number_of_elements(inputs)
	if (locale === "de") return de_upload_issue_invalid_number_of_elements(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_number_of_elements(inputs)
	if (locale === "it") return it_upload_issue_invalid_number_of_elements(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_number_of_elements(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_number_of_elements(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_number_of_elements(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_number_of_elements(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_number_of_elements(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_number_of_elements(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_number_of_elements(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_number_of_elements(inputs)
	return en_upload_issue_invalid_number_of_elements(inputs)
});
