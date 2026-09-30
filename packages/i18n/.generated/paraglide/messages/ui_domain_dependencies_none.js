/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dependencies_NoneInputs */

const en_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`None`)
};

const es_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguno`)
};

const de_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine`)
};

const fr_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun`)
};

const it_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuno`)
};

const nl_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen`)
};

const pl_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak`)
};

const pt_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum`)
};

const ru_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет`)
};

const sv_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga`)
};

const tr_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yok`)
};

const zh_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无`)
};

const ja_ui_domain_dependencies_none = /** @type {(inputs: Ui_Domain_Dependencies_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`なし`)
};

/**
* | output |
* | --- |
* | "None" |
*
* @param {Ui_Domain_Dependencies_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dependencies_none = /** @type {((inputs?: Ui_Domain_Dependencies_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependencies_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dependencies_none(inputs)
	if (locale === "de") return de_ui_domain_dependencies_none(inputs)
	if (locale === "fr") return fr_ui_domain_dependencies_none(inputs)
	if (locale === "it") return it_ui_domain_dependencies_none(inputs)
	if (locale === "nl") return nl_ui_domain_dependencies_none(inputs)
	if (locale === "pl") return pl_ui_domain_dependencies_none(inputs)
	if (locale === "pt") return pt_ui_domain_dependencies_none(inputs)
	if (locale === "ru") return ru_ui_domain_dependencies_none(inputs)
	if (locale === "sv") return sv_ui_domain_dependencies_none(inputs)
	if (locale === "tr") return tr_ui_domain_dependencies_none(inputs)
	if (locale === "zh") return zh_ui_domain_dependencies_none(inputs)
	if (locale === "ja") return ja_ui_domain_dependencies_none(inputs)
	return en_ui_domain_dependencies_none(inputs)
});
