/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Free_Version_ErrorInputs */

const en_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type a version number, for example 1.0.0.`)
};

const es_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe un número de versión, por ejemplo 1.0.0.`)
};

const de_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib eine Versionsnummer ein, zum Beispiel 1.0.0.`)
};

const fr_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez un numéro de version, par exemple 1.0.0.`)
};

const it_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scrivi un numero di versione, ad esempio 1.0.0.`)
};

const nl_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vul een versienummer in, bijvoorbeeld 1.0.0.`)
};

const pl_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz numer wersji, na przykład 1.0.0.`)
};

const pt_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite um número de versão, por exemplo 1.0.0.`)
};

const ru_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Укажите номер версии, например 1.0.0.`)
};

const sv_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skriv ett versionsnummer, till exempel 1.0.0.`)
};

const tr_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir sürüm numarası yaz, örneğin 1.0.0.`)
};

const zh_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入版本号，例如 1.0.0。`)
};

const ja_upload_free_version_error = /** @type {(inputs: Upload_Free_Version_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン番号を入力してください（例: 1.0.0）。`)
};

/**
* | output |
* | --- |
* | "Type a version number, for example 1.0.0." |
*
* @param {Upload_Free_Version_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_free_version_error = /** @type {((inputs?: Upload_Free_Version_ErrorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Free_Version_ErrorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_free_version_error(inputs)
	if (locale === "de") return de_upload_free_version_error(inputs)
	if (locale === "fr") return fr_upload_free_version_error(inputs)
	if (locale === "it") return it_upload_free_version_error(inputs)
	if (locale === "nl") return nl_upload_free_version_error(inputs)
	if (locale === "pl") return pl_upload_free_version_error(inputs)
	if (locale === "pt") return pt_upload_free_version_error(inputs)
	if (locale === "ru") return ru_upload_free_version_error(inputs)
	if (locale === "sv") return sv_upload_free_version_error(inputs)
	if (locale === "tr") return tr_upload_free_version_error(inputs)
	if (locale === "zh") return zh_upload_free_version_error(inputs)
	if (locale === "ja") return ja_upload_free_version_error(inputs)
	return en_upload_free_version_error(inputs)
});
