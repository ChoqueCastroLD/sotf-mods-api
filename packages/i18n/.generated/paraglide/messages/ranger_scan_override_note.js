/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_Override_NoteInputs */

const en_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Why (kept in the audit log)`)
};

const es_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo (queda en el registro de auditoría)`)
};

const de_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begründung (bleibt im Audit-Log)`)
};

const fr_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pourquoi (conservé dans le journal d’audit)`)
};

const it_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo (resta nel registro di audit)`)
};

const nl_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waarom (blijft in het auditlog)`)
};

const pl_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dlaczego (zostaje w dzienniku audytu)`)
};

const pt_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo (fica no registro de auditoria)`)
};

const ru_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Причина (сохраняется в журнале аудита)`)
};

const sv_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varför (sparas i granskningsloggen)`)
};

const tr_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neden (denetim kaydında kalır)`)
};

const zh_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原因（记录在审计日志中）`)
};

const ja_ranger_scan_override_note = /** @type {(inputs: Ranger_Scan_Override_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由（監査ログに残ります）`)
};

/**
* | output |
* | --- |
* | "Why (kept in the audit log)" |
*
* @param {Ranger_Scan_Override_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_override_note = /** @type {((inputs?: Ranger_Scan_Override_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Override_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_override_note(inputs)
	if (locale === "de") return de_ranger_scan_override_note(inputs)
	if (locale === "fr") return fr_ranger_scan_override_note(inputs)
	if (locale === "it") return it_ranger_scan_override_note(inputs)
	if (locale === "nl") return nl_ranger_scan_override_note(inputs)
	if (locale === "pl") return pl_ranger_scan_override_note(inputs)
	if (locale === "pt") return pt_ranger_scan_override_note(inputs)
	if (locale === "ru") return ru_ranger_scan_override_note(inputs)
	if (locale === "sv") return sv_ranger_scan_override_note(inputs)
	if (locale === "tr") return tr_ranger_scan_override_note(inputs)
	if (locale === "zh") return zh_ranger_scan_override_note(inputs)
	if (locale === "ja") return ja_ranger_scan_override_note(inputs)
	return en_ranger_scan_override_note(inputs)
});
