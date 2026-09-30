/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Col_NotesInputs */

const en_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes`)
};

const es_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas`)
};

const de_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinweise`)
};

const fr_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remarques`)
};

const it_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const nl_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opmerkingen`)
};

const pl_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uwagi`)
};

const pt_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Observações`)
};

const ru_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Примечания`)
};

const sv_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckningar`)
};

const tr_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notlar`)
};

const zh_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`备注`)
};

const ja_content_dev_col_notes = /** @type {(inputs: Content_Dev_Col_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`備考`)
};

/**
* | output |
* | --- |
* | "Notes" |
*
* @param {Content_Dev_Col_NotesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_col_notes = /** @type {((inputs?: Content_Dev_Col_NotesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Col_NotesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_col_notes(inputs)
	if (locale === "de") return de_content_dev_col_notes(inputs)
	if (locale === "fr") return fr_content_dev_col_notes(inputs)
	if (locale === "it") return it_content_dev_col_notes(inputs)
	if (locale === "nl") return nl_content_dev_col_notes(inputs)
	if (locale === "pl") return pl_content_dev_col_notes(inputs)
	if (locale === "pt") return pt_content_dev_col_notes(inputs)
	if (locale === "ru") return ru_content_dev_col_notes(inputs)
	if (locale === "sv") return sv_content_dev_col_notes(inputs)
	if (locale === "tr") return tr_content_dev_col_notes(inputs)
	if (locale === "zh") return zh_content_dev_col_notes(inputs)
	if (locale === "ja") return ja_content_dev_col_notes(inputs)
	return en_content_dev_col_notes(inputs)
});
