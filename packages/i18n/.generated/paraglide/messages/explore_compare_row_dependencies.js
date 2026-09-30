/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_Row_DependenciesInputs */

const en_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencies`)
};

const es_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencias`)
};

const de_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abhängigkeiten`)
};

const fr_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dépendances`)
};

const it_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dipendenze`)
};

const nl_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afhankelijkheden`)
};

const pl_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zależności`)
};

const pt_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependências`)
};

const ru_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимости`)
};

const sv_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beroenden`)
};

const tr_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılıklar`)
};

const zh_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依赖项`)
};

const ja_explore_compare_row_dependencies = /** @type {(inputs: Explore_Compare_Row_DependenciesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依存関係`)
};

/**
* | output |
* | --- |
* | "Dependencies" |
*
* @param {Explore_Compare_Row_DependenciesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_row_dependencies = /** @type {((inputs?: Explore_Compare_Row_DependenciesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Row_DependenciesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_row_dependencies(inputs)
	if (locale === "de") return de_explore_compare_row_dependencies(inputs)
	if (locale === "fr") return fr_explore_compare_row_dependencies(inputs)
	if (locale === "it") return it_explore_compare_row_dependencies(inputs)
	if (locale === "nl") return nl_explore_compare_row_dependencies(inputs)
	if (locale === "pl") return pl_explore_compare_row_dependencies(inputs)
	if (locale === "pt") return pt_explore_compare_row_dependencies(inputs)
	if (locale === "ru") return ru_explore_compare_row_dependencies(inputs)
	if (locale === "sv") return sv_explore_compare_row_dependencies(inputs)
	if (locale === "tr") return tr_explore_compare_row_dependencies(inputs)
	if (locale === "zh") return zh_explore_compare_row_dependencies(inputs)
	if (locale === "ja") return ja_explore_compare_row_dependencies(inputs)
	return en_explore_compare_row_dependencies(inputs)
});
