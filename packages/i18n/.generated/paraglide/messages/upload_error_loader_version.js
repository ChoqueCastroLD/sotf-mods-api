/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Error_Loader_VersionInputs */

const en_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a version like 0.9.0.`)
};

const es_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa una versión como 0.9.0.`)
};

const de_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwende eine Version wie 0.9.0.`)
};

const fr_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez une version comme 0.9.0.`)
};

const it_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa una versione come 0.9.0.`)
};

const nl_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik een versie zoals 0.9.0.`)
};

const pl_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj wersji w stylu 0.9.0.`)
};

const pt_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use uma versão como 0.9.0.`)
};

const ru_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Укажите версию вида 0.9.0.`)
};

const sv_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd en version som 0.9.0.`)
};

const tr_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`0.9.0 gibi bir sürüm kullan.`)
};

const zh_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请使用类似 0.9.0 的版本。`)
};

const ja_upload_error_loader_version = /** @type {(inputs: Upload_Error_Loader_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`0.9.0 のようなバージョンを入力してください。`)
};

/**
* | output |
* | --- |
* | "Use a version like 0.9.0." |
*
* @param {Upload_Error_Loader_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_error_loader_version = /** @type {((inputs?: Upload_Error_Loader_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Error_Loader_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_error_loader_version(inputs)
	if (locale === "de") return de_upload_error_loader_version(inputs)
	if (locale === "fr") return fr_upload_error_loader_version(inputs)
	if (locale === "it") return it_upload_error_loader_version(inputs)
	if (locale === "nl") return nl_upload_error_loader_version(inputs)
	if (locale === "pl") return pl_upload_error_loader_version(inputs)
	if (locale === "pt") return pt_upload_error_loader_version(inputs)
	if (locale === "ru") return ru_upload_error_loader_version(inputs)
	if (locale === "sv") return sv_upload_error_loader_version(inputs)
	if (locale === "tr") return tr_upload_error_loader_version(inputs)
	if (locale === "zh") return zh_upload_error_loader_version(inputs)
	if (locale === "ja") return ja_upload_error_loader_version(inputs)
	return en_upload_error_loader_version(inputs)
});
