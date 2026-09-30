/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Has_SourceInputs */

const en_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has source code`)
};

const es_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con código fuente`)
};

const de_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit Quellcode`)
};

const fr_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code source disponible`)
};

const it_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con codice sorgente`)
};

const nl_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Met broncode`)
};

const pl_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z kodem źródłowym`)
};

const pt_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Com código-fonte`)
};

const ru_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С исходным кодом`)
};

const sv_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Har källkod`)
};

const tr_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak kodu var`)
};

const zh_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`附带源代码`)
};

const ja_explore_has_source = /** @type {(inputs: Explore_Has_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソースコードあり`)
};

/**
* | output |
* | --- |
* | "Has source code" |
*
* @param {Explore_Has_SourceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_has_source = /** @type {((inputs?: Explore_Has_SourceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Has_SourceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_has_source(inputs)
	if (locale === "de") return de_explore_has_source(inputs)
	if (locale === "fr") return fr_explore_has_source(inputs)
	if (locale === "it") return it_explore_has_source(inputs)
	if (locale === "nl") return nl_explore_has_source(inputs)
	if (locale === "pl") return pl_explore_has_source(inputs)
	if (locale === "pt") return pt_explore_has_source(inputs)
	if (locale === "ru") return ru_explore_has_source(inputs)
	if (locale === "sv") return sv_explore_has_source(inputs)
	if (locale === "tr") return tr_explore_has_source(inputs)
	if (locale === "zh") return zh_explore_has_source(inputs)
	if (locale === "ja") return ja_explore_has_source(inputs)
	return en_explore_has_source(inputs)
});
