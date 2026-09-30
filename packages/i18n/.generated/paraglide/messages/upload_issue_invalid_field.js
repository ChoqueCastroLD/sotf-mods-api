/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ field: NonNullable<unknown> }} Upload_Issue_Invalid_FieldInputs */

const en_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The field “${i?.field}” is missing or invalid.`)
};

const es_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El campo «${i?.field}» falta o no es válido.`)
};

const de_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Das Feld „${i?.field}“ fehlt oder ist ungültig.`)
};

const fr_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le champ « ${i?.field} » est manquant ou invalide.`)
};

const it_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il campo “${i?.field}” manca o non è valido.`)
};

const nl_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Het veld ‘${i?.field}’ ontbreekt of is ongeldig.`)
};

const pl_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Brak pola „${i?.field}” lub jest niepoprawne.`)
};

const pt_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O campo “${i?.field}” está ausente ou é inválido.`)
};

const ru_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Поле «${i?.field}» отсутствует или некорректно.`)
};

const sv_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fältet ”${i?.field}” saknas eller är ogiltigt.`)
};

const tr_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.field}” alanı eksik ya da geçersiz.`)
};

const zh_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`字段“${i?.field}”缺失或无效。`)
};

const ja_upload_issue_invalid_field = /** @type {(inputs: Upload_Issue_Invalid_FieldInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`項目「${i?.field}」がないか、無効です。`)
};

/**
* | output |
* | --- |
* | "The field “{field}” is missing or invalid." |
*
* @param {Upload_Issue_Invalid_FieldInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_field = /** @type {((inputs: Upload_Issue_Invalid_FieldInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_FieldInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_field(inputs)
	if (locale === "de") return de_upload_issue_invalid_field(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_field(inputs)
	if (locale === "it") return it_upload_issue_invalid_field(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_field(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_field(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_field(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_field(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_field(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_field(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_field(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_field(inputs)
	return en_upload_issue_invalid_field(inputs)
});
