/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Hub_ArchiveInputs */

const en_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archive`)
};

const es_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo`)
};

const de_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiv`)
};

const fr_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archives`)
};

const it_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivio`)
};

const nl_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archief`)
};

const pl_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiwum`)
};

const pt_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo`)
};

const ru_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Архив`)
};

const sv_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkiv`)
};

const tr_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arşiv`)
};

const zh_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`存档`)
};

const ja_jams_hub_archive = /** @type {(inputs: Jams_Hub_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アーカイブ`)
};

/**
* | output |
* | --- |
* | "Archive" |
*
* @param {Jams_Hub_ArchiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_hub_archive = /** @type {((inputs?: Jams_Hub_ArchiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Hub_ArchiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_hub_archive(inputs)
	if (locale === "de") return de_jams_hub_archive(inputs)
	if (locale === "fr") return fr_jams_hub_archive(inputs)
	if (locale === "it") return it_jams_hub_archive(inputs)
	if (locale === "nl") return nl_jams_hub_archive(inputs)
	if (locale === "pl") return pl_jams_hub_archive(inputs)
	if (locale === "pt") return pt_jams_hub_archive(inputs)
	if (locale === "ru") return ru_jams_hub_archive(inputs)
	if (locale === "sv") return sv_jams_hub_archive(inputs)
	if (locale === "tr") return tr_jams_hub_archive(inputs)
	if (locale === "zh") return zh_jams_hub_archive(inputs)
	if (locale === "ja") return ja_jams_hub_archive(inputs)
	return en_jams_hub_archive(inputs)
});
