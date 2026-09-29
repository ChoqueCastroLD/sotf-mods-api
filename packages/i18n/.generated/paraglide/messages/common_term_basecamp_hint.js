/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_Basecamp_HintInputs */

const en_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator dashboard`)
};

const es_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel del creador`)
};

const de_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator-Dashboard`)
};

const fr_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tableau de bord créateur`)
};

const it_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard del creatore`)
};

const nl_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard voor makers`)
};

const pl_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel twórcy`)
};

const pt_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Painel do criador`)
};

const ru_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Панель автора`)
};

const sv_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel för skapare`)
};

const tr_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçerik üretici paneli`)
};

const zh_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者面板`)
};

const ja_common_term_basecamp_hint = /** @type {(inputs: Common_Term_Basecamp_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターダッシュボード`)
};

/**
* | output |
* | --- |
* | "Creator dashboard" |
*
* @param {Common_Term_Basecamp_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_basecamp_hint = /** @type {((inputs?: Common_Term_Basecamp_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_Basecamp_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_basecamp_hint(inputs)
	if (locale === "de") return de_common_term_basecamp_hint(inputs)
	if (locale === "fr") return fr_common_term_basecamp_hint(inputs)
	if (locale === "it") return it_common_term_basecamp_hint(inputs)
	if (locale === "nl") return nl_common_term_basecamp_hint(inputs)
	if (locale === "pl") return pl_common_term_basecamp_hint(inputs)
	if (locale === "pt") return pt_common_term_basecamp_hint(inputs)
	if (locale === "ru") return ru_common_term_basecamp_hint(inputs)
	if (locale === "sv") return sv_common_term_basecamp_hint(inputs)
	if (locale === "tr") return tr_common_term_basecamp_hint(inputs)
	if (locale === "zh") return zh_common_term_basecamp_hint(inputs)
	if (locale === "ja") return ja_common_term_basecamp_hint(inputs)
	return en_common_term_basecamp_hint(inputs)
});
