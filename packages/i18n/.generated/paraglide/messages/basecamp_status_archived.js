/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Status_ArchivedInputs */

const en_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archived`)
};

const es_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivado`)
};

const de_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviert`)
};

const fr_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivé`)
};

const it_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiviata`)
};

const nl_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gearchiveerd`)
};

const pl_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarchiwizowany`)
};

const pt_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivado`)
};

const ru_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В архиве`)
};

const sv_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkiverad`)
};

const tr_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arşivlendi`)
};

const zh_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已归档`)
};

const ja_basecamp_status_archived = /** @type {(inputs: Basecamp_Status_ArchivedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アーカイブ済み`)
};

/**
* | output |
* | --- |
* | "Archived" |
*
* @param {Basecamp_Status_ArchivedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_status_archived = /** @type {((inputs?: Basecamp_Status_ArchivedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Status_ArchivedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_status_archived(inputs)
	if (locale === "de") return de_basecamp_status_archived(inputs)
	if (locale === "fr") return fr_basecamp_status_archived(inputs)
	if (locale === "it") return it_basecamp_status_archived(inputs)
	if (locale === "nl") return nl_basecamp_status_archived(inputs)
	if (locale === "pl") return pl_basecamp_status_archived(inputs)
	if (locale === "pt") return pt_basecamp_status_archived(inputs)
	if (locale === "ru") return ru_basecamp_status_archived(inputs)
	if (locale === "sv") return sv_basecamp_status_archived(inputs)
	if (locale === "tr") return tr_basecamp_status_archived(inputs)
	if (locale === "zh") return zh_basecamp_status_archived(inputs)
	if (locale === "ja") return ja_basecamp_status_archived(inputs)
	return en_basecamp_status_archived(inputs)
});
