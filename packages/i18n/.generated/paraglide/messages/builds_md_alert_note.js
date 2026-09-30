/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Md_Alert_NoteInputs */

const en_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const es_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const de_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinweis`)
};

const fr_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remarque`)
};

const it_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const nl_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opmerking`)
};

const pl_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uwaga`)
};

const pt_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota`)
};

const ru_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Примечание`)
};

const sv_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obs`)
};

const tr_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not`)
};

const zh_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注意`)
};

const ja_builds_md_alert_note = /** @type {(inputs: Builds_Md_Alert_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモ`)
};

/**
* | output |
* | --- |
* | "Note" |
*
* @param {Builds_Md_Alert_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_md_alert_note = /** @type {((inputs?: Builds_Md_Alert_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Md_Alert_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_md_alert_note(inputs)
	if (locale === "de") return de_builds_md_alert_note(inputs)
	if (locale === "fr") return fr_builds_md_alert_note(inputs)
	if (locale === "it") return it_builds_md_alert_note(inputs)
	if (locale === "nl") return nl_builds_md_alert_note(inputs)
	if (locale === "pl") return pl_builds_md_alert_note(inputs)
	if (locale === "pt") return pt_builds_md_alert_note(inputs)
	if (locale === "ru") return ru_builds_md_alert_note(inputs)
	if (locale === "sv") return sv_builds_md_alert_note(inputs)
	if (locale === "tr") return tr_builds_md_alert_note(inputs)
	if (locale === "zh") return zh_builds_md_alert_note(inputs)
	if (locale === "ja") return ja_builds_md_alert_note(inputs)
	return en_builds_md_alert_note(inputs)
});
