/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_DependencyInputs */

const en_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependency`)
};

const es_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencia`)
};

const de_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abhängigkeit`)
};

const fr_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dépendance`)
};

const it_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dipendenza`)
};

const nl_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afhankelijkheid`)
};

const pl_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zależność`)
};

const pt_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependência`)
};

const ru_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимость`)
};

const sv_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beroende`)
};

const tr_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılık`)
};

const zh_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依赖`)
};

const ja_modpacks_dependency = /** @type {(inputs: Modpacks_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依存関係`)
};

/**
* | output |
* | --- |
* | "Dependency" |
*
* @param {Modpacks_DependencyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_dependency = /** @type {((inputs?: Modpacks_DependencyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_DependencyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_dependency(inputs)
	if (locale === "de") return de_modpacks_dependency(inputs)
	if (locale === "fr") return fr_modpacks_dependency(inputs)
	if (locale === "it") return it_modpacks_dependency(inputs)
	if (locale === "nl") return nl_modpacks_dependency(inputs)
	if (locale === "pl") return pl_modpacks_dependency(inputs)
	if (locale === "pt") return pt_modpacks_dependency(inputs)
	if (locale === "ru") return ru_modpacks_dependency(inputs)
	if (locale === "sv") return sv_modpacks_dependency(inputs)
	if (locale === "tr") return tr_modpacks_dependency(inputs)
	if (locale === "zh") return zh_modpacks_dependency(inputs)
	if (locale === "ja") return ja_modpacks_dependency(inputs)
	return en_modpacks_dependency(inputs)
});
