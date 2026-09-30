/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Author_TestedInputs */

const en_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tested by you`)
};

const es_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`probada por ti`)
};

const de_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`von dir getestet`)
};

const fr_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`testé par toi`)
};

const it_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`testata da te`)
};

const nl_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`door jou getest`)
};

const pl_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`testowany przez ciebie`)
};

const pt_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`testada por você`)
};

const ru_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`проверено вами`)
};

const sv_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`testad av dig`)
};

const tr_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`senin test ettiğin`)
};

const zh_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已测试`)
};

const ja_basecamp_compat_author_tested = /** @type {(inputs: Basecamp_Compat_Author_TestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたが確認済み`)
};

/**
* | output |
* | --- |
* | "tested by you" |
*
* @param {Basecamp_Compat_Author_TestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_author_tested = /** @type {((inputs?: Basecamp_Compat_Author_TestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Author_TestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_author_tested(inputs)
	if (locale === "de") return de_basecamp_compat_author_tested(inputs)
	if (locale === "fr") return fr_basecamp_compat_author_tested(inputs)
	if (locale === "it") return it_basecamp_compat_author_tested(inputs)
	if (locale === "nl") return nl_basecamp_compat_author_tested(inputs)
	if (locale === "pl") return pl_basecamp_compat_author_tested(inputs)
	if (locale === "pt") return pt_basecamp_compat_author_tested(inputs)
	if (locale === "ru") return ru_basecamp_compat_author_tested(inputs)
	if (locale === "sv") return sv_basecamp_compat_author_tested(inputs)
	if (locale === "tr") return tr_basecamp_compat_author_tested(inputs)
	if (locale === "zh") return zh_basecamp_compat_author_tested(inputs)
	if (locale === "ja") return ja_basecamp_compat_author_tested(inputs)
	return en_basecamp_compat_author_tested(inputs)
});
