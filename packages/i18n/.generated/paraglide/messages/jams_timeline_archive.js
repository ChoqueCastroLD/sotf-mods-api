/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Timeline_ArchiveInputs */

const en_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archive`)
};

const es_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo`)
};

const de_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivierung`)
};

const fr_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivage`)
};

const it_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviazione`)
};

const nl_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivering`)
};

const pl_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiwizacja`)
};

const pt_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivamento`)
};

const ru_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Архивация`)
};

const sv_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkivering`)
};

const tr_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arşivleme`)
};

const zh_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`存档`)
};

const ja_jams_timeline_archive = /** @type {(inputs: Jams_Timeline_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アーカイブ`)
};

/**
* | output |
* | --- |
* | "Archive" |
*
* @param {Jams_Timeline_ArchiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_timeline_archive = /** @type {((inputs?: Jams_Timeline_ArchiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Timeline_ArchiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_timeline_archive(inputs)
	if (locale === "de") return de_jams_timeline_archive(inputs)
	if (locale === "fr") return fr_jams_timeline_archive(inputs)
	if (locale === "it") return it_jams_timeline_archive(inputs)
	if (locale === "nl") return nl_jams_timeline_archive(inputs)
	if (locale === "pl") return pl_jams_timeline_archive(inputs)
	if (locale === "pt") return pt_jams_timeline_archive(inputs)
	if (locale === "ru") return ru_jams_timeline_archive(inputs)
	if (locale === "sv") return sv_jams_timeline_archive(inputs)
	if (locale === "tr") return tr_jams_timeline_archive(inputs)
	if (locale === "zh") return zh_jams_timeline_archive(inputs)
	if (locale === "ja") return ja_jams_timeline_archive(inputs)
	return en_jams_timeline_archive(inputs)
});
