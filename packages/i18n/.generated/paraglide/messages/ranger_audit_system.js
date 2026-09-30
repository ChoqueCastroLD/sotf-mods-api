/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_SystemInputs */

const en_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const es_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const de_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const fr_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Système`)
};

const it_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const nl_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Systeem`)
};

const pl_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const pt_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistema`)
};

const ru_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Система`)
};

const sv_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System`)
};

const tr_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sistem`)
};

const zh_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`系统`)
};

const ja_ranger_audit_system = /** @type {(inputs: Ranger_Audit_SystemInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム`)
};

/**
* | output |
* | --- |
* | "System" |
*
* @param {Ranger_Audit_SystemInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_system = /** @type {((inputs?: Ranger_Audit_SystemInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_SystemInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_system(inputs)
	if (locale === "de") return de_ranger_audit_system(inputs)
	if (locale === "fr") return fr_ranger_audit_system(inputs)
	if (locale === "it") return it_ranger_audit_system(inputs)
	if (locale === "nl") return nl_ranger_audit_system(inputs)
	if (locale === "pl") return pl_ranger_audit_system(inputs)
	if (locale === "pt") return pt_ranger_audit_system(inputs)
	if (locale === "ru") return ru_ranger_audit_system(inputs)
	if (locale === "sv") return sv_ranger_audit_system(inputs)
	if (locale === "tr") return tr_ranger_audit_system(inputs)
	if (locale === "zh") return zh_ranger_audit_system(inputs)
	if (locale === "ja") return ja_ranger_audit_system(inputs)
	return en_ranger_audit_system(inputs)
});
