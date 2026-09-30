/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Version_FirstInputs */

const en_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`First release`)
};

const es_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primera versión`)
};

const de_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erste Veröffentlichung`)
};

const fr_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Première version`)
};

const it_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primo rilascio`)
};

const nl_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eerste release`)
};

const pl_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pierwsze wydanie`)
};

const pt_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primeiro lançamento`)
};

const ru_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Первый выпуск`)
};

const sv_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Första release`)
};

const tr_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk sürüm`)
};

const zh_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首次发布`)
};

const ja_upload_version_first = /** @type {(inputs: Upload_Version_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`初回リリース`)
};

/**
* | output |
* | --- |
* | "First release" |
*
* @param {Upload_Version_FirstInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_version_first = /** @type {((inputs?: Upload_Version_FirstInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Version_FirstInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_version_first(inputs)
	if (locale === "de") return de_upload_version_first(inputs)
	if (locale === "fr") return fr_upload_version_first(inputs)
	if (locale === "it") return it_upload_version_first(inputs)
	if (locale === "nl") return nl_upload_version_first(inputs)
	if (locale === "pl") return pl_upload_version_first(inputs)
	if (locale === "pt") return pt_upload_version_first(inputs)
	if (locale === "ru") return ru_upload_version_first(inputs)
	if (locale === "sv") return sv_upload_version_first(inputs)
	if (locale === "tr") return tr_upload_version_first(inputs)
	if (locale === "zh") return zh_upload_version_first(inputs)
	if (locale === "ja") return ja_upload_version_first(inputs)
	return en_upload_version_first(inputs)
});
