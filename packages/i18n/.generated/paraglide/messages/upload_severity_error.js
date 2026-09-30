/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Severity_ErrorInputs */

const en_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
};

const es_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
};

const de_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehler`)
};

const fr_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erreur`)
};

const it_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Errore`)
};

const nl_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fout`)
};

const pl_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Błąd`)
};

const pt_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erro`)
};

const ru_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ошибка`)
};

const sv_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fel`)
};

const tr_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata`)
};

const zh_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误`)
};

const ja_upload_severity_error = /** @type {(inputs: Upload_Severity_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エラー`)
};

/**
* | output |
* | --- |
* | "Error" |
*
* @param {Upload_Severity_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_severity_error = /** @type {((inputs?: Upload_Severity_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Severity_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_severity_error(inputs)
	if (locale === "de") return de_upload_severity_error(inputs)
	if (locale === "fr") return fr_upload_severity_error(inputs)
	if (locale === "it") return it_upload_severity_error(inputs)
	if (locale === "nl") return nl_upload_severity_error(inputs)
	if (locale === "pl") return pl_upload_severity_error(inputs)
	if (locale === "pt") return pt_upload_severity_error(inputs)
	if (locale === "ru") return ru_upload_severity_error(inputs)
	if (locale === "sv") return sv_upload_severity_error(inputs)
	if (locale === "tr") return tr_upload_severity_error(inputs)
	if (locale === "zh") return zh_upload_severity_error(inputs)
	if (locale === "ja") return ja_upload_severity_error(inputs)
	return en_upload_severity_error(inputs)
});
