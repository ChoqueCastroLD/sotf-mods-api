/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Unsupported_Media_Type_TitleInputs */

const en_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File type not supported`)
};

const es_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de archivo no admitido`)
};

const de_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dateityp nicht unterstützt`)
};

const fr_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type de fichier non pris en charge`)
};

const it_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo di file non supportato`)
};

const nl_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestandstype niet ondersteund`)
};

const pl_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieobsługiwany typ pliku`)
};

const pt_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de arquivo não suportado`)
};

const ru_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тип файла не поддерживается`)
};

const sv_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtypen stöds inte`)
};

const tr_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya türü desteklenmiyor`)
};

const zh_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不支持的文件类型`)
};

const ja_errors_code_unsupported_media_type_title = /** @type {(inputs: Errors_Code_Unsupported_Media_Type_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応していないファイル形式です`)
};

/**
* | output |
* | --- |
* | "File type not supported" |
*
* @param {Errors_Code_Unsupported_Media_Type_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_unsupported_media_type_title = /** @type {((inputs?: Errors_Code_Unsupported_Media_Type_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unsupported_Media_Type_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_unsupported_media_type_title(inputs)
	if (locale === "de") return de_errors_code_unsupported_media_type_title(inputs)
	if (locale === "fr") return fr_errors_code_unsupported_media_type_title(inputs)
	if (locale === "it") return it_errors_code_unsupported_media_type_title(inputs)
	if (locale === "nl") return nl_errors_code_unsupported_media_type_title(inputs)
	if (locale === "pl") return pl_errors_code_unsupported_media_type_title(inputs)
	if (locale === "pt") return pt_errors_code_unsupported_media_type_title(inputs)
	if (locale === "ru") return ru_errors_code_unsupported_media_type_title(inputs)
	if (locale === "sv") return sv_errors_code_unsupported_media_type_title(inputs)
	if (locale === "tr") return tr_errors_code_unsupported_media_type_title(inputs)
	if (locale === "zh") return zh_errors_code_unsupported_media_type_title(inputs)
	if (locale === "ja") return ja_errors_code_unsupported_media_type_title(inputs)
	return en_errors_code_unsupported_media_type_title(inputs)
});
