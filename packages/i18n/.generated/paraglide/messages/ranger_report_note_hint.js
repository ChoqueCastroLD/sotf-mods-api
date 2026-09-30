/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Note_HintInputs */

const en_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kept with the report and in the audit log.`)
};

const es_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se guarda con el reporte y en el registro de auditoría.`)
};

const de_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird bei der Meldung und im Audit-Log gespeichert.`)
};

const fr_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conservée avec le signalement et dans le journal d’audit.`)
};

const it_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvata con la segnalazione e nel registro di audit.`)
};

const nl_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wordt bij de melding en in het auditlog bewaard.`)
};

const pl_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisywana przy zgłoszeniu i w dzienniku audytu.`)
};

const pt_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fica guardada com a denúncia e no registro de auditoria.`)
};

const ru_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохраняется вместе с жалобой и в журнале аудита.`)
};

const sv_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparas med anmälan och i granskningsloggen.`)
};

const tr_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyetle birlikte ve denetim kaydında saklanır.`)
};

const zh_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`与举报一起保存，并记录在审计日志中。`)
};

const ja_ranger_report_note_hint = /** @type {(inputs: Ranger_Report_Note_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告と監査ログに保存されます。`)
};

/**
* | output |
* | --- |
* | "Kept with the report and in the audit log." |
*
* @param {Ranger_Report_Note_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_note_hint = /** @type {((inputs?: Ranger_Report_Note_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Note_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_note_hint(inputs)
	if (locale === "de") return de_ranger_report_note_hint(inputs)
	if (locale === "fr") return fr_ranger_report_note_hint(inputs)
	if (locale === "it") return it_ranger_report_note_hint(inputs)
	if (locale === "nl") return nl_ranger_report_note_hint(inputs)
	if (locale === "pl") return pl_ranger_report_note_hint(inputs)
	if (locale === "pt") return pt_ranger_report_note_hint(inputs)
	if (locale === "ru") return ru_ranger_report_note_hint(inputs)
	if (locale === "sv") return sv_ranger_report_note_hint(inputs)
	if (locale === "tr") return tr_ranger_report_note_hint(inputs)
	if (locale === "zh") return zh_ranger_report_note_hint(inputs)
	if (locale === "ja") return ja_ranger_report_note_hint(inputs)
	return en_ranger_report_note_hint(inputs)
});
