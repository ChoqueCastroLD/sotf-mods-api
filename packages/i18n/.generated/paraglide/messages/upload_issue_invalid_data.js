/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_DataInputs */

const en_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The blueprint Data is invalid.`)
};

const es_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El Data del plano no es válido.`)
};

const de_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Data des Bauplans ist ungültig.`)
};

const fr_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le Data du plan n’est pas valide.`)
};

const it_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il Data del progetto non è valido.`)
};

const nl_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De Data van de bouwtekening is ongeldig.`)
};

const pl_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pole Data planu jest niepoprawne.`)
};

const pt_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O Data da planta é inválido.`)
};

const ru_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поле Data в чертеже некорректно.`)
};

const sv_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritningens Data är ogiltig.`)
};

const tr_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planın Data alanı geçersiz.`)
};

const zh_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`蓝图的 Data 无效。`)
};

const ja_upload_issue_invalid_data = /** @type {(inputs: Upload_Issue_Invalid_DataInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設計図の Data が無効です。`)
};

/**
* | output |
* | --- |
* | "The blueprint Data is invalid." |
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
