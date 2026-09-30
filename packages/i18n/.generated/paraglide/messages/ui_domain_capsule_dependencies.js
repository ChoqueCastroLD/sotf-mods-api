/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Capsule_DependenciesInputs */

const en_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencies`)
};

const es_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencias`)
};

const de_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abhängigkeiten`)
};

const fr_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dépendances`)
};

const it_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dipendenze`)
};

const nl_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afhankelijkheden`)
};

const pl_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zależności`)
};

const pt_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependências`)
};

const ru_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимости`)
};

const sv_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beroenden`)
};

const tr_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılıklar`)
};

const zh_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前置`)
};

const ja_ui_domain_capsule_dependencies = /** @type {(inputs: Ui_Domain_Capsule_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前提 MOD`)
};

/**
* | output |
* | --- |
* | "Dependencies" |
*
* @param {Ui_Domain_Capsule_DependenciesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_capsule_dependencies = /** @type {((inputs?: Ui_Domain_Capsule_DependenciesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Capsule_DependenciesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_capsule_dependencies(inputs)
	if (locale === "de") return de_ui_domain_capsule_dependencies(inputs)
	if (locale === "fr") return fr_ui_domain_capsule_dependencies(inputs)
	if (locale === "it") return it_ui_domain_capsule_dependencies(inputs)
	if (locale === "nl") return nl_ui_domain_capsule_dependencies(inputs)
	if (locale === "pl") return pl_ui_domain_capsule_dependencies(inputs)
	if (locale === "pt") return pt_ui_domain_capsule_dependencies(inputs)
	if (locale === "ru") return ru_ui_domain_capsule_dependencies(inputs)
	if (locale === "sv") return sv_ui_domain_capsule_dependencies(inputs)
	if (locale === "tr") return tr_ui_domain_capsule_dependencies(inputs)
	if (locale === "zh") return zh_ui_domain_capsule_dependencies(inputs)
	if (locale === "ja") return ja_ui_domain_capsule_dependencies(inputs)
	return en_ui_domain_capsule_dependencies(inputs)
});
