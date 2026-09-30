/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Fact_ContentsInputs */

const en_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contents`)
};

const es_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido`)
};

const de_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalt`)
};

const fr_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu`)
};

const it_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuto`)
};

const nl_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud`)
};

const pl_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zawartość`)
};

const pt_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo`)
};

const ru_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Содержимое`)
};

const sv_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innehåll`)
};

const tr_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçerik`)
};

const zh_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

const ja_cmdk_fact_contents = /** @type {(inputs: Cmdk_Fact_ContentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

/**
* | output |
* | --- |
* | "Contents" |
*
* @param {Cmdk_Fact_ContentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_fact_contents = /** @type {((inputs?: Cmdk_Fact_ContentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Fact_ContentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_fact_contents(inputs)
	if (locale === "de") return de_cmdk_fact_contents(inputs)
	if (locale === "fr") return fr_cmdk_fact_contents(inputs)
	if (locale === "it") return it_cmdk_fact_contents(inputs)
	if (locale === "nl") return nl_cmdk_fact_contents(inputs)
	if (locale === "pl") return pl_cmdk_fact_contents(inputs)
	if (locale === "pt") return pt_cmdk_fact_contents(inputs)
	if (locale === "ru") return ru_cmdk_fact_contents(inputs)
	if (locale === "sv") return sv_cmdk_fact_contents(inputs)
	if (locale === "tr") return tr_cmdk_fact_contents(inputs)
	if (locale === "zh") return zh_cmdk_fact_contents(inputs)
	if (locale === "ja") return ja_cmdk_fact_contents(inputs)
	return en_cmdk_fact_contents(inputs)
});
