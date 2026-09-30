/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_AuditInputs */

const en_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audit trail`)
};

const es_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rastro de auditoría`)
};

const de_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Audit-Spur`)
};

const fr_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trace d’audit`)
};

const it_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traccia di audit`)
};

const nl_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auditspoor`)
};

const pl_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ślad audytu`)
};

const pt_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rastro de auditoria`)
};

const ru_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`След в аудите`)
};

const sv_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granskningsspår`)
};

const tr_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denetim izi`)
};

const zh_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审计记录`)
};

const ja_ranger_user_audit = /** @type {(inputs: Ranger_User_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`監査の記録`)
};

/**
* | output |
* | --- |
* | "Audit trail" |
*
* @param {Ranger_User_AuditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_audit = /** @type {((inputs?: Ranger_User_AuditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_AuditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_audit(inputs)
	if (locale === "de") return de_ranger_user_audit(inputs)
	if (locale === "fr") return fr_ranger_user_audit(inputs)
	if (locale === "it") return it_ranger_user_audit(inputs)
	if (locale === "nl") return nl_ranger_user_audit(inputs)
	if (locale === "pl") return pl_ranger_user_audit(inputs)
	if (locale === "pt") return pt_ranger_user_audit(inputs)
	if (locale === "ru") return ru_ranger_user_audit(inputs)
	if (locale === "sv") return sv_ranger_user_audit(inputs)
	if (locale === "tr") return tr_ranger_user_audit(inputs)
	if (locale === "zh") return zh_ranger_user_audit(inputs)
	if (locale === "ja") return ja_ranger_user_audit(inputs)
	return en_ranger_user_audit(inputs)
});
