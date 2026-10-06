/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_DataInputs */

const en_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The build Data is invalid.`)
};

const es_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El Data de la build no es válido.`)
};

const de_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data des Builds ist ungültig.`)
};

const fr_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le Data du build n’est pas valide.`)
};

const it_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il Data della build non è valido.`)
};

const nl_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De Data van de build is ongeldig.`)
};

const pl_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pole Data builda jest niepoprawne.`)
};

const pt_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O Data da build é inválido.`)
};

const ru_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поле Data в постройке некорректно.`)
};

const sv_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggets Data är ogiltig.`)
};

const tr_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapının Data alanı geçersiz.`)
};

const zh_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑的 Data 无效。`)
};

const ja_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築の Data が無効です。`)
};

/**
* | output |
* | --- |
* | "The build Data is invalid." |
*
* @param {Upload_Issue_Invalid_DataInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_data = /** @type {((inputs?: Upload_Issue_Invalid_DataInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_DataInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_data(inputs)
	if (locale === "de") return de_upload_issue_invalid_data(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_data(inputs)
	if (locale === "it") return it_upload_issue_invalid_data(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_data(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_data(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_data(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_data(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_data(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_data(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_data(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_data(inputs)
	return en_upload_issue_invalid_data(inputs)
});
