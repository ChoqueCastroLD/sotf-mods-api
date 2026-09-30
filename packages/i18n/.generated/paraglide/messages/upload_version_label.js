/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Version_LabelInputs */

const en_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const es_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión`)
};

const de_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const fr_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const it_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione`)
};

const nl_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie`)
};

const pl_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja`)
};

const pt_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão`)
};

const ru_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия`)
};

const sv_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const tr_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_upload_version_label = /** @type {(inputs: Upload_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Version" |
*
* @param {Upload_Version_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_version_label = /** @type {((inputs?: Upload_Version_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Version_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_version_label(inputs)
	if (locale === "de") return de_upload_version_label(inputs)
	if (locale === "fr") return fr_upload_version_label(inputs)
	if (locale === "it") return it_upload_version_label(inputs)
	if (locale === "nl") return nl_upload_version_label(inputs)
	if (locale === "pl") return pl_upload_version_label(inputs)
	if (locale === "pt") return pt_upload_version_label(inputs)
	if (locale === "ru") return ru_upload_version_label(inputs)
	if (locale === "sv") return sv_upload_version_label(inputs)
	if (locale === "tr") return tr_upload_version_label(inputs)
	if (locale === "zh") return zh_upload_version_label(inputs)
	if (locale === "ja") return ja_upload_version_label(inputs)
	return en_upload_version_label(inputs)
});
