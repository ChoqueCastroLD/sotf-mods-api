/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Flag_Extension_Not_AllowedInputs */

const en_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unusual file type for a mod.`)
};

const es_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de archivo inusual para un mod.`)
};

const de_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ungewöhnlicher Dateityp für einen Mod.`)
};

const fr_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type de fichier inhabituel pour un mod.`)
};

const it_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo di file insolito per una mod.`)
};

const nl_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongebruikelijk bestandstype voor een mod.`)
};

const pl_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nietypowy typ pliku dla moda.`)
};

const pt_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de arquivo incomum para um mod.`)
};

const ru_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Необычный для мода тип файла.`)
};

const sv_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ovanlig filtyp för en mod.`)
};

const tr_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir mod için alışılmadık dosya türü.`)
};

const zh_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对模组来说不常见的文件类型。`)
};

const ja_upload_flag_extension_not_allowed = /** @type {(inputs: Upload_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODとしては珍しいファイル形式です。`)
};

/**
* | output |
* | --- |
* | "Unusual file type for a mod." |
*
* @param {Upload_Flag_Extension_Not_AllowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_flag_extension_not_allowed = /** @type {((inputs?: Upload_Flag_Extension_Not_AllowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Extension_Not_AllowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_flag_extension_not_allowed(inputs)
	if (locale === "de") return de_upload_flag_extension_not_allowed(inputs)
	if (locale === "fr") return fr_upload_flag_extension_not_allowed(inputs)
	if (locale === "it") return it_upload_flag_extension_not_allowed(inputs)
	if (locale === "nl") return nl_upload_flag_extension_not_allowed(inputs)
	if (locale === "pl") return pl_upload_flag_extension_not_allowed(inputs)
	if (locale === "pt") return pt_upload_flag_extension_not_allowed(inputs)
	if (locale === "ru") return ru_upload_flag_extension_not_allowed(inputs)
	if (locale === "sv") return sv_upload_flag_extension_not_allowed(inputs)
	if (locale === "tr") return tr_upload_flag_extension_not_allowed(inputs)
	if (locale === "zh") return zh_upload_flag_extension_not_allowed(inputs)
	if (locale === "ja") return ja_upload_flag_extension_not_allowed(inputs)
	return en_upload_flag_extension_not_allowed(inputs)
});
