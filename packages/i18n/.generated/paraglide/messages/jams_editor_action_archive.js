/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Action_ArchiveInputs */

const en_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archive jam`)
};

const es_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivar el jam`)
};

const de_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam archivieren`)
};

const fr_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archiver le jam`)
};

const it_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivia il jam`)
};

const nl_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam archiveren`)
};

const pl_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarchiwizuj jam`)
};

const pt_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivar a jam`)
};

const ru_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить джем в архив`)
};

const sv_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkivera jam`)
};

const tr_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam’i arşivle`)
};

const zh_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`归档 Jam`)
};

const ja_jams_editor_action_archive = /** @type {(inputs: Jams_Editor_Action_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムをアーカイブする`)
};

/**
* | output |
* | --- |
* | "Archive jam" |
*
* @param {Jams_Editor_Action_ArchiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_action_archive = /** @type {((inputs?: Jams_Editor_Action_ArchiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Action_ArchiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_action_archive(inputs)
	if (locale === "de") return de_jams_editor_action_archive(inputs)
	if (locale === "fr") return fr_jams_editor_action_archive(inputs)
	if (locale === "it") return it_jams_editor_action_archive(inputs)
	if (locale === "nl") return nl_jams_editor_action_archive(inputs)
	if (locale === "pl") return pl_jams_editor_action_archive(inputs)
	if (locale === "pt") return pt_jams_editor_action_archive(inputs)
	if (locale === "ru") return ru_jams_editor_action_archive(inputs)
	if (locale === "sv") return sv_jams_editor_action_archive(inputs)
	if (locale === "tr") return tr_jams_editor_action_archive(inputs)
	if (locale === "zh") return zh_jams_editor_action_archive(inputs)
	if (locale === "ja") return ja_jams_editor_action_archive(inputs)
	return en_jams_editor_action_archive(inputs)
});
