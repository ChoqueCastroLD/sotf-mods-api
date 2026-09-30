/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Flag_Extension_Not_AllowedInputs */

const en_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File type not allowed`)
};

const es_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de archivo no permitido`)
};

const de_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dateityp nicht erlaubt`)
};

const fr_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type de fichier non autorisé`)
};

const it_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo di file non consentito`)
};

const nl_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestandstype niet toegestaan`)
};

const pl_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niedozwolony typ pliku`)
};

const pt_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de arquivo não permitido`)
};

const ru_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тип файла не разрешён`)
};

const sv_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtypen är inte tillåten`)
};

const tr_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya türüne izin verilmiyor`)
};

const zh_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不允许的文件类型`)
};

const ja_ranger_flag_extension_not_allowed = /** @type {(inputs: Ranger_Flag_Extension_Not_AllowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`許可されていないファイル形式`)
};

/**
* | output |
* | --- |
* | "File type not allowed" |
*
* @param {Ranger_Flag_Extension_Not_AllowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_flag_extension_not_allowed = /** @type {((inputs?: Ranger_Flag_Extension_Not_AllowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Extension_Not_AllowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_flag_extension_not_allowed(inputs)
	if (locale === "de") return de_ranger_flag_extension_not_allowed(inputs)
	if (locale === "fr") return fr_ranger_flag_extension_not_allowed(inputs)
	if (locale === "it") return it_ranger_flag_extension_not_allowed(inputs)
	if (locale === "nl") return nl_ranger_flag_extension_not_allowed(inputs)
	if (locale === "pl") return pl_ranger_flag_extension_not_allowed(inputs)
	if (locale === "pt") return pt_ranger_flag_extension_not_allowed(inputs)
	if (locale === "ru") return ru_ranger_flag_extension_not_allowed(inputs)
	if (locale === "sv") return sv_ranger_flag_extension_not_allowed(inputs)
	if (locale === "tr") return tr_ranger_flag_extension_not_allowed(inputs)
	if (locale === "zh") return zh_ranger_flag_extension_not_allowed(inputs)
	if (locale === "ja") return ja_ranger_flag_extension_not_allowed(inputs)
	return en_ranger_flag_extension_not_allowed(inputs)
});
