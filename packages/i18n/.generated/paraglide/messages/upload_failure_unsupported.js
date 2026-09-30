/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Failure_UnsupportedInputs */

const en_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This file type isn’t accepted.`)
};

const es_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este tipo de archivo no se acepta.`)
};

const de_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Dateityp wird nicht akzeptiert.`)
};

const fr_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce type de fichier n’est pas accepté.`)
};

const it_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo tipo di file non è accettato.`)
};

const nl_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit bestandstype wordt niet geaccepteerd.`)
};

const pl_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten typ pliku nie jest akceptowany.`)
};

const pt_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este tipo de arquivo não é aceito.`)
};

const ru_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Такой тип файла не принимается.`)
};

const sv_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här filtypen accepteras inte.`)
};

const tr_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dosya türü kabul edilmiyor.`)
};

const zh_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不接受这种文件类型。`)
};

const ja_upload_failure_unsupported = /** @type {(inputs: Upload_Failure_UnsupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この形式のファイルは受け付けていません。`)
};

/**
* | output |
* | --- |
* | "This file type isn’t accepted." |
*
* @param {Upload_Failure_UnsupportedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_failure_unsupported = /** @type {((inputs?: Upload_Failure_UnsupportedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Failure_UnsupportedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_failure_unsupported(inputs)
	if (locale === "de") return de_upload_failure_unsupported(inputs)
	if (locale === "fr") return fr_upload_failure_unsupported(inputs)
	if (locale === "it") return it_upload_failure_unsupported(inputs)
	if (locale === "nl") return nl_upload_failure_unsupported(inputs)
	if (locale === "pl") return pl_upload_failure_unsupported(inputs)
	if (locale === "pt") return pt_upload_failure_unsupported(inputs)
	if (locale === "ru") return ru_upload_failure_unsupported(inputs)
	if (locale === "sv") return sv_upload_failure_unsupported(inputs)
	if (locale === "tr") return tr_upload_failure_unsupported(inputs)
	if (locale === "zh") return zh_upload_failure_unsupported(inputs)
	if (locale === "ja") return ja_upload_failure_unsupported(inputs)
	return en_upload_failure_unsupported(inputs)
});
