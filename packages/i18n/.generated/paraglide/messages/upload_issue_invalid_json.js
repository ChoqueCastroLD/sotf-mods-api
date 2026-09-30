/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Issue_Invalid_JsonInputs */

const en_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file isn’t valid JSON.`)
};

const es_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo no es un JSON válido.`)
};

const de_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei ist kein gültiges JSON.`)
};

const fr_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier n’est pas un JSON valide.`)
};

const it_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file non è un JSON valido.`)
};

const nl_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand is geen geldige JSON.`)
};

const pl_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik nie jest poprawnym JSON-em.`)
};

const pt_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo não é um JSON válido.`)
};

const ru_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл не является корректным JSON.`)
};

const sv_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är inte giltig JSON.`)
};

const tr_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya geçerli bir JSON değil.`)
};

const zh_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件不是有效的 JSON。`)
};

const ja_upload_issue_invalid_json = /** @type {(inputs: Upload_Issue_Invalid_JsonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが有効なJSONではありません。`)
};

/**
* | output |
* | --- |
* | "The file isn’t valid JSON." |
*
* @param {Upload_Issue_Invalid_JsonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_issue_invalid_json = /** @type {((inputs?: Upload_Issue_Invalid_JsonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_JsonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_issue_invalid_json(inputs)
	if (locale === "de") return de_upload_issue_invalid_json(inputs)
	if (locale === "fr") return fr_upload_issue_invalid_json(inputs)
	if (locale === "it") return it_upload_issue_invalid_json(inputs)
	if (locale === "nl") return nl_upload_issue_invalid_json(inputs)
	if (locale === "pl") return pl_upload_issue_invalid_json(inputs)
	if (locale === "pt") return pt_upload_issue_invalid_json(inputs)
	if (locale === "ru") return ru_upload_issue_invalid_json(inputs)
	if (locale === "sv") return sv_upload_issue_invalid_json(inputs)
	if (locale === "tr") return tr_upload_issue_invalid_json(inputs)
	if (locale === "zh") return zh_upload_issue_invalid_json(inputs)
	if (locale === "ja") return ja_upload_issue_invalid_json(inputs)
	return en_upload_issue_invalid_json(inputs)
});
