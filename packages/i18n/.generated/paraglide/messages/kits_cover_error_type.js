/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_Error_TypeInputs */

const en_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That file type isn’t supported.`)
};

const es_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ese tipo de archivo no es compatible.`)
};

const de_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Dateityp wird nicht unterstützt.`)
};

const fr_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce type de fichier n’est pas pris en charge.`)
};

const it_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo tipo di file non è supportato.`)
};

const nl_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat bestandstype wordt niet ondersteund.`)
};

const pl_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten typ pliku nie jest obsługiwany.`)
};

const pt_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse tipo de arquivo não é compatível.`)
};

const ru_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот тип файла не поддерживается.`)
};

const sv_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den filtypen stöds inte.`)
};

const tr_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dosya türü desteklenmiyor.`)
};

const zh_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不支持该文件类型。`)
};

const ja_kits_cover_error_type = /** @type {(inputs: Kits_Cover_Error_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このファイル形式には対応していません。`)
};

/**
* | output |
* | --- |
* | "That file type isn’t supported." |
*
* @param {Kits_Cover_Error_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_error_type = /** @type {((inputs?: Kits_Cover_Error_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_Error_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_error_type(inputs)
	if (locale === "de") return de_kits_cover_error_type(inputs)
	if (locale === "fr") return fr_kits_cover_error_type(inputs)
	if (locale === "it") return it_kits_cover_error_type(inputs)
	if (locale === "nl") return nl_kits_cover_error_type(inputs)
	if (locale === "pl") return pl_kits_cover_error_type(inputs)
	if (locale === "pt") return pt_kits_cover_error_type(inputs)
	if (locale === "ru") return ru_kits_cover_error_type(inputs)
	if (locale === "sv") return sv_kits_cover_error_type(inputs)
	if (locale === "tr") return tr_kits_cover_error_type(inputs)
	if (locale === "zh") return zh_kits_cover_error_type(inputs)
	if (locale === "ja") return ja_kits_cover_error_type(inputs)
	return en_kits_cover_error_type(inputs)
});
