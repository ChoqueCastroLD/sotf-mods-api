/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_TargetInputs */

const en_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Target`)
};

const es_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Objetivo`)
};

const de_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziel`)
};

const fr_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cible`)
};

const it_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oggetto`)
};

const nl_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doel`)
};

const pl_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cel`)
};

const pt_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alvo`)
};

const ru_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объект`)
};

const sv_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mål`)
};

const tr_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hedef`)
};

const zh_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对象`)
};

const ja_ranger_audit_target = /** @type {(inputs: Ranger_Audit_TargetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対象`)
};

/**
* | output |
* | --- |
* | "Target" |
*
* @param {Ranger_Audit_TargetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_target = /** @type {((inputs?: Ranger_Audit_TargetInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_TargetInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_target(inputs)
	if (locale === "de") return de_ranger_audit_target(inputs)
	if (locale === "fr") return fr_ranger_audit_target(inputs)
	if (locale === "it") return it_ranger_audit_target(inputs)
	if (locale === "nl") return nl_ranger_audit_target(inputs)
	if (locale === "pl") return pl_ranger_audit_target(inputs)
	if (locale === "pt") return pt_ranger_audit_target(inputs)
	if (locale === "ru") return ru_ranger_audit_target(inputs)
	if (locale === "sv") return sv_ranger_audit_target(inputs)
	if (locale === "tr") return tr_ranger_audit_target(inputs)
	if (locale === "zh") return zh_ranger_audit_target(inputs)
	if (locale === "ja") return ja_ranger_audit_target(inputs)
	return en_ranger_audit_target(inputs)
});
