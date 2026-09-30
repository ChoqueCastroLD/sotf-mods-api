/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_TitleInputs */

const en_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audit log`)
};

const es_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de auditoría`)
};

const de_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audit-Log`)
};

const fr_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Journal d’audit`)
};

const it_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro di audit`)
};

const nl_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auditlog`)
};

const pl_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dziennik audytu`)
};

const pt_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registro de auditoria`)
};

const ru_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Журнал аудита`)
};

const sv_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granskningslogg`)
};

const tr_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denetim kaydı`)
};

const zh_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审计日志`)
};

const ja_ranger_audit_title = /** @type {(inputs: Ranger_Audit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`監査ログ`)
};

/**
* | output |
* | --- |
* | "Audit log" |
*
* @param {Ranger_Audit_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_title = /** @type {((inputs?: Ranger_Audit_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_title(inputs)
	if (locale === "de") return de_ranger_audit_title(inputs)
	if (locale === "fr") return fr_ranger_audit_title(inputs)
	if (locale === "it") return it_ranger_audit_title(inputs)
	if (locale === "nl") return nl_ranger_audit_title(inputs)
	if (locale === "pl") return pl_ranger_audit_title(inputs)
	if (locale === "pt") return pt_ranger_audit_title(inputs)
	if (locale === "ru") return ru_ranger_audit_title(inputs)
	if (locale === "sv") return sv_ranger_audit_title(inputs)
	if (locale === "tr") return tr_ranger_audit_title(inputs)
	if (locale === "zh") return zh_ranger_audit_title(inputs)
	if (locale === "ja") return ja_ranger_audit_title(inputs)
	return en_ranger_audit_title(inputs)
});
