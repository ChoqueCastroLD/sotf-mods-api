/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Report_NoteInputs */

const en_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details (optional)`)
};

const es_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalles (opcional)`)
};

const de_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details (optional)`)
};

const fr_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détails (facultatif)`)
};

const it_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettagli (facoltativo)`)
};

const nl_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details (optioneel)`)
};

const pl_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły (opcjonalnie)`)
};

const pt_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhes (opcional)`)
};

const ru_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробности (необязательно)`)
};

const sv_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljer (valfritt)`)
};

const tr_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayrıntılar (isteğe bağlı)`)
};

const zh_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`详情（可选）`)
};

const ja_logs_report_note = /** @type {(inputs: Logs_Report_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`詳細（任意）`)
};

/**
* | output |
* | --- |
* | "Details (optional)" |
*
* @param {Logs_Report_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_report_note = /** @type {((inputs?: Logs_Report_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Report_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_report_note(inputs)
	if (locale === "de") return de_logs_report_note(inputs)
	if (locale === "fr") return fr_logs_report_note(inputs)
	if (locale === "it") return it_logs_report_note(inputs)
	if (locale === "nl") return nl_logs_report_note(inputs)
	if (locale === "pl") return pl_logs_report_note(inputs)
	if (locale === "pt") return pt_logs_report_note(inputs)
	if (locale === "ru") return ru_logs_report_note(inputs)
	if (locale === "sv") return sv_logs_report_note(inputs)
	if (locale === "tr") return tr_logs_report_note(inputs)
	if (locale === "zh") return zh_logs_report_note(inputs)
	if (locale === "ja") return ja_logs_report_note(inputs)
	return en_logs_report_note(inputs)
});
