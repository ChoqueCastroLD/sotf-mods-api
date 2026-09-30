/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Capsule_ConflictsInputs */

const en_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conflicts`)
};

const es_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conflictos`)
};

const de_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konflikte`)
};

const fr_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conflits`)
};

const it_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conflitti`)
};

const nl_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conflicten`)
};

const pl_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konflikty`)
};

const pt_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conflitos`)
};

const ru_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Конфликты`)
};

const sv_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konflikter`)
};

const tr_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çakışmalar`)
};

const zh_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`冲突`)
};

const ja_ui_domain_capsule_conflicts = /** @type {(inputs: Ui_Domain_Capsule_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`競合`)
};

/**
* | output |
* | --- |
* | "Conflicts" |
*
* @param {Ui_Domain_Capsule_ConflictsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_capsule_conflicts = /** @type {((inputs?: Ui_Domain_Capsule_ConflictsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Capsule_ConflictsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_capsule_conflicts(inputs)
	if (locale === "de") return de_ui_domain_capsule_conflicts(inputs)
	if (locale === "fr") return fr_ui_domain_capsule_conflicts(inputs)
	if (locale === "it") return it_ui_domain_capsule_conflicts(inputs)
	if (locale === "nl") return nl_ui_domain_capsule_conflicts(inputs)
	if (locale === "pl") return pl_ui_domain_capsule_conflicts(inputs)
	if (locale === "pt") return pt_ui_domain_capsule_conflicts(inputs)
	if (locale === "ru") return ru_ui_domain_capsule_conflicts(inputs)
	if (locale === "sv") return sv_ui_domain_capsule_conflicts(inputs)
	if (locale === "tr") return tr_ui_domain_capsule_conflicts(inputs)
	if (locale === "zh") return zh_ui_domain_capsule_conflicts(inputs)
	if (locale === "ja") return ja_ui_domain_capsule_conflicts(inputs)
	return en_ui_domain_capsule_conflicts(inputs)
});
