/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Category_PolishInputs */

const en_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Polish`)
};

const es_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulido`)
};

const de_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feinschliff`)
};

const fr_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finition`)
};

const it_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rifinitura`)
};

const nl_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afwerking`)
};

const pl_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dopracowanie`)
};

const pt_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acabamento`)
};

const ru_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проработка`)
};

const sv_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Finish`)
};

const tr_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cilalama`)
};

const zh_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完成度`)
};

const ja_jams_category_polish = /** @type {(inputs: Jams_Category_PolishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完成度`)
};

/**
* | output |
* | --- |
* | "Polish" |
*
* @param {Jams_Category_PolishInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_category_polish = /** @type {((inputs?: Jams_Category_PolishInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Category_PolishInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_category_polish(inputs)
	if (locale === "de") return de_jams_category_polish(inputs)
	if (locale === "fr") return fr_jams_category_polish(inputs)
	if (locale === "it") return it_jams_category_polish(inputs)
	if (locale === "nl") return nl_jams_category_polish(inputs)
	if (locale === "pl") return pl_jams_category_polish(inputs)
	if (locale === "pt") return pt_jams_category_polish(inputs)
	if (locale === "ru") return ru_jams_category_polish(inputs)
	if (locale === "sv") return sv_jams_category_polish(inputs)
	if (locale === "tr") return tr_jams_category_polish(inputs)
	if (locale === "zh") return zh_jams_category_polish(inputs)
	if (locale === "ja") return ja_jams_category_polish(inputs)
	return en_jams_category_polish(inputs)
});
