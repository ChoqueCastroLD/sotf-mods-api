/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Manifest_Dependency_MissingInputs */

const en_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`not on SOTF Mods`)
};

const es_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`no está en SOTF Mods`)
};

const de_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nicht auf SOTF Mods`)
};

const fr_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`absent de SOTF Mods`)
};

const it_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`non presente su SOTF Mods`)
};

const nl_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`niet op SOTF Mods`)
};

const pl_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nie ma w SOTF Mods`)
};

const pt_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`não está no SOTF Mods`)
};

const ru_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`нет на SOTF Mods`)
};

const sv_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`finns inte på SOTF Mods`)
};

const tr_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’ta yok`)
};

const zh_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不在 SOTF Mods 上`)
};

const ja_upload_manifest_dependency_missing = /** @type {(inputs: Upload_Manifest_Dependency_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Modsにありません`)
};

/**
* | output |
* | --- |
* | "not on SOTF Mods" |
*
* @param {Upload_Manifest_Dependency_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_manifest_dependency_missing = /** @type {((inputs?: Upload_Manifest_Dependency_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Manifest_Dependency_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_manifest_dependency_missing(inputs)
	if (locale === "de") return de_upload_manifest_dependency_missing(inputs)
	if (locale === "fr") return fr_upload_manifest_dependency_missing(inputs)
	if (locale === "it") return it_upload_manifest_dependency_missing(inputs)
	if (locale === "nl") return nl_upload_manifest_dependency_missing(inputs)
	if (locale === "pl") return pl_upload_manifest_dependency_missing(inputs)
	if (locale === "pt") return pt_upload_manifest_dependency_missing(inputs)
	if (locale === "ru") return ru_upload_manifest_dependency_missing(inputs)
	if (locale === "sv") return sv_upload_manifest_dependency_missing(inputs)
	if (locale === "tr") return tr_upload_manifest_dependency_missing(inputs)
	if (locale === "zh") return zh_upload_manifest_dependency_missing(inputs)
	if (locale === "ja") return ja_upload_manifest_dependency_missing(inputs)
	return en_upload_manifest_dependency_missing(inputs)
});
