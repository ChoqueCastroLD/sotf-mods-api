/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dependency_From_ManifestInputs */

const en_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`From manifest.json`)
};

const es_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De manifest.json`)
};

const de_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aus manifest.json`)
};

const fr_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Depuis manifest.json`)
};

const it_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da manifest.json`)
};

const nl_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uit manifest.json`)
};

const pl_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z manifest.json`)
};

const pt_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do manifest.json`)
};

const ru_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Из manifest.json`)
};

const sv_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Från manifest.json`)
};

const tr_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json’dan`)
};

const zh_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来自 manifest.json`)
};

const ja_upload_dependency_from_manifest = /** @type {(inputs: Upload_Dependency_From_ManifestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`manifest.json より`)
};

/**
* | output |
* | --- |
* | "From manifest.json" |
*
* @param {Upload_Dependency_From_ManifestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_from_manifest = /** @type {((inputs?: Upload_Dependency_From_ManifestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_From_ManifestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_from_manifest(inputs)
	if (locale === "de") return de_upload_dependency_from_manifest(inputs)
	if (locale === "fr") return fr_upload_dependency_from_manifest(inputs)
	if (locale === "it") return it_upload_dependency_from_manifest(inputs)
	if (locale === "nl") return nl_upload_dependency_from_manifest(inputs)
	if (locale === "pl") return pl_upload_dependency_from_manifest(inputs)
	if (locale === "pt") return pt_upload_dependency_from_manifest(inputs)
	if (locale === "ru") return ru_upload_dependency_from_manifest(inputs)
	if (locale === "sv") return sv_upload_dependency_from_manifest(inputs)
	if (locale === "tr") return tr_upload_dependency_from_manifest(inputs)
	if (locale === "zh") return zh_upload_dependency_from_manifest(inputs)
	if (locale === "ja") return ja_upload_dependency_from_manifest(inputs)
	return en_upload_dependency_from_manifest(inputs)
});
