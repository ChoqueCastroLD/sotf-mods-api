/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_StructuresInputs */

const en_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Structures`)
};

const es_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estructuras`)
};

const de_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strukturen`)
};

const fr_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Structures`)
};

const it_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strutture`)
};

const nl_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Structuren`)
};

const pl_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Struktury`)
};

const pt_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estruturas`)
};

const ru_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Конструкции`)
};

const sv_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strukturer`)
};

const tr_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı öğeleri`)
};

const zh_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结构`)
};

const ja_builds_spec_structures = /** @type {(inputs: Builds_Spec_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`構造物`)
};

/**
* | output |
* | --- |
* | "Structures" |
*
* @param {Builds_Spec_StructuresInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_structures = /** @type {((inputs?: Builds_Spec_StructuresInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_StructuresInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_structures(inputs)
	if (locale === "de") return de_builds_spec_structures(inputs)
	if (locale === "fr") return fr_builds_spec_structures(inputs)
	if (locale === "it") return it_builds_spec_structures(inputs)
	if (locale === "nl") return nl_builds_spec_structures(inputs)
	if (locale === "pl") return pl_builds_spec_structures(inputs)
	if (locale === "pt") return pt_builds_spec_structures(inputs)
	if (locale === "ru") return ru_builds_spec_structures(inputs)
	if (locale === "sv") return sv_builds_spec_structures(inputs)
	if (locale === "tr") return tr_builds_spec_structures(inputs)
	if (locale === "zh") return zh_builds_spec_structures(inputs)
	if (locale === "ja") return ja_builds_spec_structures(inputs)
	return en_builds_spec_structures(inputs)
});
