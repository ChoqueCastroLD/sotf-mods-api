/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Action_ArchiveInputs */

const en_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archive`)
};

const es_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivar`)
};

const de_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivieren`)
};

const fr_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiver`)
};

const it_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivia`)
};

const nl_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiveren`)
};

const pl_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiwizuj`)
};

const pt_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivar`)
};

const ru_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Архивировать`)
};

const sv_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkivera`)
};

const tr_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arşivle`)
};

const zh_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`归档`)
};

const ja_basecamp_action_archive = /** @type {(inputs: Basecamp_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アーカイブ`)
};

/**
* | output |
* | --- |
* | "Archive" |
*
* @param {Basecamp_Action_ArchiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_action_archive = /** @type {((inputs?: Basecamp_Action_ArchiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Action_ArchiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_action_archive(inputs)
	if (locale === "de") return de_basecamp_action_archive(inputs)
	if (locale === "fr") return fr_basecamp_action_archive(inputs)
	if (locale === "it") return it_basecamp_action_archive(inputs)
	if (locale === "nl") return nl_basecamp_action_archive(inputs)
	if (locale === "pl") return pl_basecamp_action_archive(inputs)
	if (locale === "pt") return pt_basecamp_action_archive(inputs)
	if (locale === "ru") return ru_basecamp_action_archive(inputs)
	if (locale === "sv") return sv_basecamp_action_archive(inputs)
	if (locale === "tr") return tr_basecamp_action_archive(inputs)
	if (locale === "zh") return zh_basecamp_action_archive(inputs)
	if (locale === "ja") return ja_basecamp_action_archive(inputs)
	return en_basecamp_action_archive(inputs)
});
