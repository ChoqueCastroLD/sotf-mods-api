/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_NotesInputs */

const en_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch notes`)
};

const es_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas del parche`)
};

const de_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchnotes`)
};

const fr_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes de patch`)
};

const it_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note della patch`)
};

const nl_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchnotes`)
};

const pl_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informacje o łatce`)
};

const pt_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas do patch`)
};

const ru_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание патча`)
};

const sv_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchanteckningar`)
};

const tr_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yama notları`)
};

const zh_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`补丁说明`)
};

const ja_content_radar_notes = /** @type {(inputs: Content_Radar_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パッチノート`)
};

/**
* | output |
* | --- |
* | "Patch notes" |
*
* @param {Content_Radar_NotesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_notes = /** @type {((inputs?: Content_Radar_NotesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_NotesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_notes(inputs)
	if (locale === "de") return de_content_radar_notes(inputs)
	if (locale === "fr") return fr_content_radar_notes(inputs)
	if (locale === "it") return it_content_radar_notes(inputs)
	if (locale === "nl") return nl_content_radar_notes(inputs)
	if (locale === "pl") return pl_content_radar_notes(inputs)
	if (locale === "pt") return pt_content_radar_notes(inputs)
	if (locale === "ru") return ru_content_radar_notes(inputs)
	if (locale === "sv") return sv_content_radar_notes(inputs)
	if (locale === "tr") return tr_content_radar_notes(inputs)
	if (locale === "zh") return zh_content_radar_notes(inputs)
	if (locale === "ja") return ja_content_radar_notes(inputs)
	return en_content_radar_notes(inputs)
});
