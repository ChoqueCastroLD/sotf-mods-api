/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Bug_Report_On_ModInputs */

const en_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} reported a bug on ${i?.mod}`)
};

const es_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha informado de un bug en ${i?.mod}`)
};

const de_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat einen Bug in ${i?.mod} gemeldet`)
};

const fr_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a signalé un bug sur ${i?.mod}`)
};

const it_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha segnalato un bug in ${i?.mod}`)
};

const nl_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} meldde een bug in ${i?.mod}`)
};

const pl_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} zgłosił(a) błąd w ${i?.mod}`)
};

const pt_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} relatou um bug em ${i?.mod}`)
};

const ru_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} сообщил(а) об ошибке в ${i?.mod}`)
};

const sv_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} rapporterade en bugg i ${i?.mod}`)
};

const tr_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.mod} için bir hata bildirdi`)
};

const zh_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 报告了 ${i?.mod} 的一个错误`)
};

const ja_signals_bug_report_on_mod = /** @type {(inputs: Signals_Bug_Report_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} が ${i?.mod} のバグを報告しました`)
};

/**
* | output |
* | --- |
* | "{actor} reported a bug on {mod}" |
*
* @param {Signals_Bug_Report_On_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_bug_report_on_mod = /** @type {((inputs: Signals_Bug_Report_On_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Bug_Report_On_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_bug_report_on_mod(inputs)
	if (locale === "de") return de_signals_bug_report_on_mod(inputs)
	if (locale === "fr") return fr_signals_bug_report_on_mod(inputs)
	if (locale === "it") return it_signals_bug_report_on_mod(inputs)
	if (locale === "nl") return nl_signals_bug_report_on_mod(inputs)
	if (locale === "pl") return pl_signals_bug_report_on_mod(inputs)
	if (locale === "pt") return pt_signals_bug_report_on_mod(inputs)
	if (locale === "ru") return ru_signals_bug_report_on_mod(inputs)
	if (locale === "sv") return sv_signals_bug_report_on_mod(inputs)
	if (locale === "tr") return tr_signals_bug_report_on_mod(inputs)
	if (locale === "zh") return zh_signals_bug_report_on_mod(inputs)
	if (locale === "ja") return ja_signals_bug_report_on_mod(inputs)
	return en_signals_bug_report_on_mod(inputs)
});
