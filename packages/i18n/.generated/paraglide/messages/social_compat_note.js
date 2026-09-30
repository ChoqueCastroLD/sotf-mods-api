/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_NoteInputs */

const en_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const es_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const de_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notiz`)
};

const fr_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const it_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const nl_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notitie`)
};

const pl_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uwagi`)
};

const pt_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Observação`)
};

const ru_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметка`)
};

const sv_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckning`)
};

const tr_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not`)
};

const zh_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`备注`)
};

const ja_social_compat_note = /** @type {(inputs: Social_Compat_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモ`)
};

/**
* | output |
* | --- |
* | "Note" |
*
* @param {Social_Compat_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_note = /** @type {((inputs?: Social_Compat_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_note(inputs)
	if (locale === "de") return de_social_compat_note(inputs)
	if (locale === "fr") return fr_social_compat_note(inputs)
	if (locale === "it") return it_social_compat_note(inputs)
	if (locale === "nl") return nl_social_compat_note(inputs)
	if (locale === "pl") return pl_social_compat_note(inputs)
	if (locale === "pt") return pt_social_compat_note(inputs)
	if (locale === "ru") return ru_social_compat_note(inputs)
	if (locale === "sv") return sv_social_compat_note(inputs)
	if (locale === "tr") return tr_social_compat_note(inputs)
	if (locale === "zh") return zh_social_compat_note(inputs)
	if (locale === "ja") return ja_social_compat_note(inputs)
	return en_social_compat_note(inputs)
});
