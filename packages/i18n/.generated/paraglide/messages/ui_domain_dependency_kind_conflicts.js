/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dependency_Kind_ConflictsInputs */

const en_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not compatible with`)
};

const es_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No compatible con`)
};

const de_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht kompatibel mit`)
};

const fr_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incompatible avec`)
};

const it_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non compatibile con`)
};

const nl_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet compatibel met`)
};

const pl_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezgodny z`)
};

const pt_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não compatível com`)
};

const ru_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Несовместим с`)
};

const sv_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte kompatibel med`)
};

const tr_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumsuz`)
};

const zh_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不兼容`)
};

const ja_ui_domain_dependency_kind_conflicts = /** @type {(inputs: Ui_Domain_Dependency_Kind_ConflictsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性なし`)
};

/**
* | output |
* | --- |
* | "Not compatible with" |
*
* @param {Ui_Domain_Dependency_Kind_ConflictsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dependency_kind_conflicts = /** @type {((inputs?: Ui_Domain_Dependency_Kind_ConflictsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependency_Kind_ConflictsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dependency_kind_conflicts(inputs)
	if (locale === "de") return de_ui_domain_dependency_kind_conflicts(inputs)
	if (locale === "fr") return fr_ui_domain_dependency_kind_conflicts(inputs)
	if (locale === "it") return it_ui_domain_dependency_kind_conflicts(inputs)
	if (locale === "nl") return nl_ui_domain_dependency_kind_conflicts(inputs)
	if (locale === "pl") return pl_ui_domain_dependency_kind_conflicts(inputs)
	if (locale === "pt") return pt_ui_domain_dependency_kind_conflicts(inputs)
	if (locale === "ru") return ru_ui_domain_dependency_kind_conflicts(inputs)
	if (locale === "sv") return sv_ui_domain_dependency_kind_conflicts(inputs)
	if (locale === "tr") return tr_ui_domain_dependency_kind_conflicts(inputs)
	if (locale === "zh") return zh_ui_domain_dependency_kind_conflicts(inputs)
	if (locale === "ja") return ja_ui_domain_dependency_kind_conflicts(inputs)
	return en_ui_domain_dependency_kind_conflicts(inputs)
});
