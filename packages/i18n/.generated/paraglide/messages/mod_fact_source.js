/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Fact_SourceInputs */

const en_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source code`)
};

const es_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código fuente`)
};

const de_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quellcode`)
};

const fr_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code source`)
};

const it_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice sorgente`)
};

const nl_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broncode`)
};

const pl_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod źródłowy`)
};

const pt_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código-fonte`)
};

const ru_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исходный код`)
};

const sv_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Källkod`)
};

const tr_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak kod`)
};

const zh_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`源代码`)
};

const ja_mod_fact_source = /** @type {(inputs: Mod_Fact_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソースコード`)
};

/**
* | output |
* | --- |
* | "Source code" |
*
* @param {Mod_Fact_SourceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_source = /** @type {((inputs?: Mod_Fact_SourceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_SourceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_source(inputs)
	if (locale === "de") return de_mod_fact_source(inputs)
	if (locale === "fr") return fr_mod_fact_source(inputs)
	if (locale === "it") return it_mod_fact_source(inputs)
	if (locale === "nl") return nl_mod_fact_source(inputs)
	if (locale === "pl") return pl_mod_fact_source(inputs)
	if (locale === "pt") return pt_mod_fact_source(inputs)
	if (locale === "ru") return ru_mod_fact_source(inputs)
	if (locale === "sv") return sv_mod_fact_source(inputs)
	if (locale === "tr") return tr_mod_fact_source(inputs)
	if (locale === "zh") return zh_mod_fact_source(inputs)
	if (locale === "ja") return ja_mod_fact_source(inputs)
	return en_mod_fact_source(inputs)
});
