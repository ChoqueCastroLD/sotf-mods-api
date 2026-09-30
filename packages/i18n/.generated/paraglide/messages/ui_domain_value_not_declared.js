/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Value_Not_DeclaredInputs */

const en_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not declared`)
};

const es_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin declarar`)
};

const de_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht angegeben`)
};

const fr_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non déclaré`)
};

const it_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non dichiarato`)
};

const nl_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet opgegeven`)
};

const pl_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie podano`)
};

const pt_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não declarado`)
};

const ru_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не указано`)
};

const sv_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte angivet`)
};

const tr_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirtilmemiş`)
};

const zh_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未声明`)
};

const ja_ui_domain_value_not_declared = /** @type {(inputs: Ui_Domain_Value_Not_DeclaredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未申告`)
};

/**
* | output |
* | --- |
* | "Not declared" |
*
* @param {Ui_Domain_Value_Not_DeclaredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_value_not_declared = /** @type {((inputs?: Ui_Domain_Value_Not_DeclaredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Value_Not_DeclaredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_value_not_declared(inputs)
	if (locale === "de") return de_ui_domain_value_not_declared(inputs)
	if (locale === "fr") return fr_ui_domain_value_not_declared(inputs)
	if (locale === "it") return it_ui_domain_value_not_declared(inputs)
	if (locale === "nl") return nl_ui_domain_value_not_declared(inputs)
	if (locale === "pl") return pl_ui_domain_value_not_declared(inputs)
	if (locale === "pt") return pt_ui_domain_value_not_declared(inputs)
	if (locale === "ru") return ru_ui_domain_value_not_declared(inputs)
	if (locale === "sv") return sv_ui_domain_value_not_declared(inputs)
	if (locale === "tr") return tr_ui_domain_value_not_declared(inputs)
	if (locale === "zh") return zh_ui_domain_value_not_declared(inputs)
	if (locale === "ja") return ja_ui_domain_value_not_declared(inputs)
	return en_ui_domain_value_not_declared(inputs)
});
