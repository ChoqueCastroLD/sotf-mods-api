/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_Note_LabelInputs */

const en_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What happened`)
};

const es_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué pasó`)
};

const de_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was ist passiert`)
};

const fr_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce qui s’est passé`)
};

const it_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cos’è successo`)
};

const nl_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat er gebeurde`)
};

const pl_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co się stało`)
};

const pt_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que aconteceu`)
};

const ru_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что произошло`)
};

const sv_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad hände`)
};

const tr_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne oldu`)
};

const zh_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发生了什么`)
};

const ja_me_report_note_label = /** @type {(inputs: Me_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`何が起きたか`)
};

/**
* | output |
* | --- |
* | "What happened" |
*
* @param {Me_Report_Note_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_note_label = /** @type {((inputs?: Me_Report_Note_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_Note_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_note_label(inputs)
	if (locale === "de") return de_me_report_note_label(inputs)
	if (locale === "fr") return fr_me_report_note_label(inputs)
	if (locale === "it") return it_me_report_note_label(inputs)
	if (locale === "nl") return nl_me_report_note_label(inputs)
	if (locale === "pl") return pl_me_report_note_label(inputs)
	if (locale === "pt") return pt_me_report_note_label(inputs)
	if (locale === "ru") return ru_me_report_note_label(inputs)
	if (locale === "sv") return sv_me_report_note_label(inputs)
	if (locale === "tr") return tr_me_report_note_label(inputs)
	if (locale === "zh") return zh_me_report_note_label(inputs)
	if (locale === "ja") return ja_me_report_note_label(inputs)
	return en_me_report_note_label(inputs)
});
