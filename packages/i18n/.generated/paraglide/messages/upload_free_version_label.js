/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Free_Version_LabelInputs */

const en_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version number`)
};

const es_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Número de versión`)
};

const de_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionsnummer`)
};

const fr_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Numéro de version`)
};

const it_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Numero di versione`)
};

const nl_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versienummer`)
};

const pl_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Numer wersji`)
};

const pt_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Número da versão`)
};

const ru_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Номер версии`)
};

const sv_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionsnummer`)
};

const tr_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm numarası`)
};

const zh_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本号`)
};

const ja_upload_free_version_label = /** @type {(inputs: Upload_Free_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン番号`)
};

/**
* | output |
* | --- |
* | "Version number" |
*
* @param {Upload_Free_Version_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_free_version_label = /** @type {((inputs?: Upload_Free_Version_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Free_Version_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_free_version_label(inputs)
	if (locale === "de") return de_upload_free_version_label(inputs)
	if (locale === "fr") return fr_upload_free_version_label(inputs)
	if (locale === "it") return it_upload_free_version_label(inputs)
	if (locale === "nl") return nl_upload_free_version_label(inputs)
	if (locale === "pl") return pl_upload_free_version_label(inputs)
	if (locale === "pt") return pt_upload_free_version_label(inputs)
	if (locale === "ru") return ru_upload_free_version_label(inputs)
	if (locale === "sv") return sv_upload_free_version_label(inputs)
	if (locale === "tr") return tr_upload_free_version_label(inputs)
	if (locale === "zh") return zh_upload_free_version_label(inputs)
	if (locale === "ja") return ja_upload_free_version_label(inputs)
	return en_upload_free_version_label(inputs)
});
