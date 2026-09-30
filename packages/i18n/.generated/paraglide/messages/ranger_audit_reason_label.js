/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_Reason_LabelInputs */

const en_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reason`)
};

const es_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const de_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begründung`)
};

const fr_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motif`)
};

const it_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const nl_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reden`)
};

const pl_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powód`)
};

const pt_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const ru_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Причина`)
};

const sv_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivering`)
};

const tr_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerekçe`)
};

const zh_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原因`)
};

const ja_ranger_audit_reason_label = /** @type {(inputs: Ranger_Audit_Reason_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由`)
};

/**
* | output |
* | --- |
* | "Reason" |
*
* @param {Ranger_Audit_Reason_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_reason_label = /** @type {((inputs?: Ranger_Audit_Reason_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_Reason_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_reason_label(inputs)
	if (locale === "de") return de_ranger_audit_reason_label(inputs)
	if (locale === "fr") return fr_ranger_audit_reason_label(inputs)
	if (locale === "it") return it_ranger_audit_reason_label(inputs)
	if (locale === "nl") return nl_ranger_audit_reason_label(inputs)
	if (locale === "pl") return pl_ranger_audit_reason_label(inputs)
	if (locale === "pt") return pt_ranger_audit_reason_label(inputs)
	if (locale === "ru") return ru_ranger_audit_reason_label(inputs)
	if (locale === "sv") return sv_ranger_audit_reason_label(inputs)
	if (locale === "tr") return tr_ranger_audit_reason_label(inputs)
	if (locale === "zh") return zh_ranger_audit_reason_label(inputs)
	if (locale === "ja") return ja_ranger_audit_reason_label(inputs)
	return en_ranger_audit_reason_label(inputs)
});
