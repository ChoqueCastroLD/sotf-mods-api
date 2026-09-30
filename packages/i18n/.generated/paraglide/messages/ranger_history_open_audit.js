/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_History_Open_AuditInputs */

const en_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Their audit trail`)
};

const es_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Su rastro en la auditoría`)
};

const de_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seine Audit-Spur`)
};

const fr_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sa trace d’audit`)
};

const it_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La sua traccia di audit`)
};

const nl_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zijn auditspoor`)
};

const pl_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jego ślad w audycie`)
};

const pt_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rastro de auditoria`)
};

const ru_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Его след в аудите`)
};

const sv_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Granskningsspåret`)
};

const tr_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denetim izi`)
};

const zh_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其审计记录`)
};

const ja_ranger_history_open_audit = /** @type {(inputs: Ranger_History_Open_AuditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`監査の記録`)
};

/**
* | output |
* | --- |
* | "Their audit trail" |
*
* @param {Ranger_History_Open_AuditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_history_open_audit = /** @type {((inputs?: Ranger_History_Open_AuditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_History_Open_AuditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_history_open_audit(inputs)
	if (locale === "de") return de_ranger_history_open_audit(inputs)
	if (locale === "fr") return fr_ranger_history_open_audit(inputs)
	if (locale === "it") return it_ranger_history_open_audit(inputs)
	if (locale === "nl") return nl_ranger_history_open_audit(inputs)
	if (locale === "pl") return pl_ranger_history_open_audit(inputs)
	if (locale === "pt") return pt_ranger_history_open_audit(inputs)
	if (locale === "ru") return ru_ranger_history_open_audit(inputs)
	if (locale === "sv") return sv_ranger_history_open_audit(inputs)
	if (locale === "tr") return tr_ranger_history_open_audit(inputs)
	if (locale === "zh") return zh_ranger_history_open_audit(inputs)
	if (locale === "ja") return ja_ranger_history_open_audit(inputs)
	return en_ranger_history_open_audit(inputs)
});
