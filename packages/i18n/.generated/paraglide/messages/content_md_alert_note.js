/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Md_Alert_NoteInputs */

const en_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const es_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const de_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinweis`)
};

const fr_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remarque`)
};

const it_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const nl_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opmerking`)
};

const pl_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uwaga`)
};

const pt_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const ru_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Примечание`)
};

const sv_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obs`)
};

const tr_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not`)
};

const zh_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注意`)
};

const ja_content_md_alert_note = /** @type {(inputs: Content_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモ`)
};

/**
* | output |
* | --- |
* | "Note" |
*
* @param {Content_Md_Alert_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_md_alert_note = /** @type {((inputs?: Content_Md_Alert_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Md_Alert_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_md_alert_note(inputs)
	if (locale === "de") return de_content_md_alert_note(inputs)
	if (locale === "fr") return fr_content_md_alert_note(inputs)
	if (locale === "it") return it_content_md_alert_note(inputs)
	if (locale === "nl") return nl_content_md_alert_note(inputs)
	if (locale === "pl") return pl_content_md_alert_note(inputs)
	if (locale === "pt") return pt_content_md_alert_note(inputs)
	if (locale === "ru") return ru_content_md_alert_note(inputs)
	if (locale === "sv") return sv_content_md_alert_note(inputs)
	if (locale === "tr") return tr_content_md_alert_note(inputs)
	if (locale === "zh") return zh_content_md_alert_note(inputs)
	if (locale === "ja") return ja_content_md_alert_note(inputs)
	return en_content_md_alert_note(inputs)
});
