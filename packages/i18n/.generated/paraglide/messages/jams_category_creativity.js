/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Category_CreativityInputs */

const en_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creativity`)
};

const es_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatividad`)
};

const de_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kreativität`)
};

const fr_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créativité`)
};

const it_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatività`)
};

const nl_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creativiteit`)
};

const pl_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kreatywność`)
};

const pt_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criatividade`)
};

const ru_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Креативность`)
};

const sv_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kreativitet`)
};

const tr_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaratıcılık`)
};

const zh_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创意`)
};

const ja_jams_category_creativity = /** @type {(inputs: Jams_Category_CreativityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`独創性`)
};

/**
* | output |
* | --- |
* | "Creativity" |
*
* @param {Jams_Category_CreativityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_category_creativity = /** @type {((inputs?: Jams_Category_CreativityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Category_CreativityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_category_creativity(inputs)
	if (locale === "de") return de_jams_category_creativity(inputs)
	if (locale === "fr") return fr_jams_category_creativity(inputs)
	if (locale === "it") return it_jams_category_creativity(inputs)
	if (locale === "nl") return nl_jams_category_creativity(inputs)
	if (locale === "pl") return pl_jams_category_creativity(inputs)
	if (locale === "pt") return pt_jams_category_creativity(inputs)
	if (locale === "ru") return ru_jams_category_creativity(inputs)
	if (locale === "sv") return sv_jams_category_creativity(inputs)
	if (locale === "tr") return tr_jams_category_creativity(inputs)
	if (locale === "zh") return zh_jams_category_creativity(inputs)
	if (locale === "ja") return ja_jams_category_creativity(inputs)
	return en_jams_category_creativity(inputs)
});
