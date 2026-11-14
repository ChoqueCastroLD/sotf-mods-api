/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Release_NotesInputs */

const en_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release notes`)
};

const es_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas de la versión`)
};

const de_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionshinweise`)
};

const fr_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes de version`)
};

const it_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note di rilascio`)
};

const nl_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release-opmerkingen`)
};

const pl_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informacje o wersji`)
};

const pt_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas da versão`)
};

const ru_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список изменений`)
};

const sv_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionsinformation`)
};

const tr_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm notları`)
};

const zh_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新说明`)
};

const ja_manager_release_notes = /** @type {(inputs: Manager_Release_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリースノート`)
};

/**
* | output |
* | --- |
* | "Release notes" |
*
* @param {Manager_Release_NotesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_release_notes = /** @type {((inputs?: Manager_Release_NotesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Release_NotesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_release_notes(inputs)
	if (locale === "de") return de_manager_release_notes(inputs)
	if (locale === "fr") return fr_manager_release_notes(inputs)
	if (locale === "it") return it_manager_release_notes(inputs)
	if (locale === "nl") return nl_manager_release_notes(inputs)
	if (locale === "pl") return pl_manager_release_notes(inputs)
	if (locale === "pt") return pt_manager_release_notes(inputs)
	if (locale === "ru") return ru_manager_release_notes(inputs)
	if (locale === "sv") return sv_manager_release_notes(inputs)
	if (locale === "tr") return tr_manager_release_notes(inputs)
	if (locale === "zh") return zh_manager_release_notes(inputs)
	if (locale === "ja") return ja_manager_release_notes(inputs)
	return en_manager_release_notes(inputs)
});
