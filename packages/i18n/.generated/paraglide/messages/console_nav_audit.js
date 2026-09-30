/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_AuditInputs */

const en_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audit log`)
};

const es_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de auditoría`)
};

const de_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audit-Log`)
};

const fr_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Journal d’audit`)
};

const it_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro di audit`)
};

const nl_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auditlog`)
};

const pl_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dziennik audytu`)
};

const pt_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de auditoria`)
};

const ru_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Журнал аудита`)
};

const sv_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granskningslogg`)
};

const tr_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denetim kaydı`)
};

const zh_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审计日志`)
};

const ja_console_nav_audit = /** @type {(inputs: Console_Nav_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`監査ログ`)
};

/**
* | output |
* | --- |
* | "Audit log" |
*
* @param {Console_Nav_AuditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_audit = /** @type {((inputs?: Console_Nav_AuditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_AuditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_audit(inputs)
	if (locale === "de") return de_console_nav_audit(inputs)
	if (locale === "fr") return fr_console_nav_audit(inputs)
	if (locale === "it") return it_console_nav_audit(inputs)
	if (locale === "nl") return nl_console_nav_audit(inputs)
	if (locale === "pl") return pl_console_nav_audit(inputs)
	if (locale === "pt") return pt_console_nav_audit(inputs)
	if (locale === "ru") return ru_console_nav_audit(inputs)
	if (locale === "sv") return sv_console_nav_audit(inputs)
	if (locale === "tr") return tr_console_nav_audit(inputs)
	if (locale === "zh") return zh_console_nav_audit(inputs)
	if (locale === "ja") return ja_console_nav_audit(inputs)
	return en_console_nav_audit(inputs)
});
