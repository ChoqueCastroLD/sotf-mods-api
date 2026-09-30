/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dependency_Kind_RequiredInputs */

const en_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requires`)
};

const es_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Necesita`)
};

const de_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benötigt`)
};

const fr_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nécessite`)
};

const it_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiede`)
};

const nl_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vereist`)
};

const pl_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymaga`)
};

const pt_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requer`)
};

const ru_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Требует`)
};

const sv_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kräver`)
};

const tr_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerektirir`)
};

const zh_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要`)
};

const ja_ui_domain_dependency_kind_required = /** @type {(inputs: Ui_Domain_Dependency_Kind_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必須`)
};

/**
* | output |
* | --- |
* | "Requires" |
*
* @param {Ui_Domain_Dependency_Kind_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dependency_kind_required = /** @type {((inputs?: Ui_Domain_Dependency_Kind_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependency_Kind_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dependency_kind_required(inputs)
	if (locale === "de") return de_ui_domain_dependency_kind_required(inputs)
	if (locale === "fr") return fr_ui_domain_dependency_kind_required(inputs)
	if (locale === "it") return it_ui_domain_dependency_kind_required(inputs)
	if (locale === "nl") return nl_ui_domain_dependency_kind_required(inputs)
	if (locale === "pl") return pl_ui_domain_dependency_kind_required(inputs)
	if (locale === "pt") return pt_ui_domain_dependency_kind_required(inputs)
	if (locale === "ru") return ru_ui_domain_dependency_kind_required(inputs)
	if (locale === "sv") return sv_ui_domain_dependency_kind_required(inputs)
	if (locale === "tr") return tr_ui_domain_dependency_kind_required(inputs)
	if (locale === "zh") return zh_ui_domain_dependency_kind_required(inputs)
	if (locale === "ja") return ja_ui_domain_dependency_kind_required(inputs)
	return en_ui_domain_dependency_kind_required(inputs)
});
