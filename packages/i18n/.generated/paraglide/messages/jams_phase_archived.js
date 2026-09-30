/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Phase_ArchivedInputs */

const en_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archived`)
};

const es_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivado`)
};

const de_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviert`)
};

const fr_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivé`)
};

const it_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviato`)
};

const nl_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gearchiveerd`)
};

const pl_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarchiwizowany`)
};

const pt_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivado`)
};

const ru_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В архиве`)
};

const sv_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkiverad`)
};

const tr_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arşivlendi`)
};

const zh_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已存档`)
};

const ja_jams_phase_archived = /** @type {(inputs: Jams_Phase_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アーカイブ済み`)
};

/**
* | output |
* | --- |
* | "Archived" |
*
* @param {Jams_Phase_ArchivedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_phase_archived = /** @type {((inputs?: Jams_Phase_ArchivedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Phase_ArchivedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_phase_archived(inputs)
	if (locale === "de") return de_jams_phase_archived(inputs)
	if (locale === "fr") return fr_jams_phase_archived(inputs)
	if (locale === "it") return it_jams_phase_archived(inputs)
	if (locale === "nl") return nl_jams_phase_archived(inputs)
	if (locale === "pl") return pl_jams_phase_archived(inputs)
	if (locale === "pt") return pt_jams_phase_archived(inputs)
	if (locale === "ru") return ru_jams_phase_archived(inputs)
	if (locale === "sv") return sv_jams_phase_archived(inputs)
	if (locale === "tr") return tr_jams_phase_archived(inputs)
	if (locale === "zh") return zh_jams_phase_archived(inputs)
	if (locale === "ja") return ja_jams_phase_archived(inputs)
	return en_jams_phase_archived(inputs)
});
