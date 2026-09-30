/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Build_StructuresInputs */

const en_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Structures`)
};

const es_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estructuras`)
};

const de_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strukturen`)
};

const fr_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Structures`)
};

const it_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strutture`)
};

const nl_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Constructies`)
};

const pl_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konstrukcje`)
};

const pt_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estruturas`)
};

const ru_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Конструкции`)
};

const sv_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konstruktioner`)
};

const tr_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılar`)
};

const zh_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结构`)
};

const ja_upload_build_structures = /** @type {(inputs: Upload_Build_StructuresInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`構造物`)
};

/**
* | output |
* | --- |
* | "Structures" |
*
* @param {Upload_Build_StructuresInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_build_structures = /** @type {((inputs?: Upload_Build_StructuresInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Build_StructuresInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_build_structures(inputs)
	if (locale === "de") return de_upload_build_structures(inputs)
	if (locale === "fr") return fr_upload_build_structures(inputs)
	if (locale === "it") return it_upload_build_structures(inputs)
	if (locale === "nl") return nl_upload_build_structures(inputs)
	if (locale === "pl") return pl_upload_build_structures(inputs)
	if (locale === "pt") return pt_upload_build_structures(inputs)
	if (locale === "ru") return ru_upload_build_structures(inputs)
	if (locale === "sv") return sv_upload_build_structures(inputs)
	if (locale === "tr") return tr_upload_build_structures(inputs)
	if (locale === "zh") return zh_upload_build_structures(inputs)
	if (locale === "ja") return ja_upload_build_structures(inputs)
	return en_upload_build_structures(inputs)
});
