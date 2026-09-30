/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Fact_DepsInputs */

const en_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencies`)
};

const es_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencias`)
};

const de_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abhängigkeiten`)
};

const fr_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dépendances`)
};

const it_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dipendenze`)
};

const nl_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afhankelijkheden`)
};

const pl_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zależności`)
};

const pt_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependências`)
};

const ru_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимости`)
};

const sv_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beroenden`)
};

const tr_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılıklar`)
};

const zh_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依赖`)
};

const ja_cmdk_fact_deps = /** @type {(inputs: Cmdk_Fact_DepsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依存関係`)
};

/**
* | output |
* | --- |
* | "Dependencies" |
*
* @param {Cmdk_Fact_DepsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_fact_deps = /** @type {((inputs?: Cmdk_Fact_DepsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Fact_DepsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_fact_deps(inputs)
	if (locale === "de") return de_cmdk_fact_deps(inputs)
	if (locale === "fr") return fr_cmdk_fact_deps(inputs)
	if (locale === "it") return it_cmdk_fact_deps(inputs)
	if (locale === "nl") return nl_cmdk_fact_deps(inputs)
	if (locale === "pl") return pl_cmdk_fact_deps(inputs)
	if (locale === "pt") return pt_cmdk_fact_deps(inputs)
	if (locale === "ru") return ru_cmdk_fact_deps(inputs)
	if (locale === "sv") return sv_cmdk_fact_deps(inputs)
	if (locale === "tr") return tr_cmdk_fact_deps(inputs)
	if (locale === "zh") return zh_cmdk_fact_deps(inputs)
	if (locale === "ja") return ja_cmdk_fact_deps(inputs)
	return en_cmdk_fact_deps(inputs)
});
