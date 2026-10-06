/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_BasecampInputs */

const en_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const es_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const de_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const fr_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tableau de bord`)
};

const it_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const nl_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const pl_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const pt_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Painel`)
};

const ru_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Панель`)
};

const sv_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översikt`)
};

const tr_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const zh_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制台`)
};

const ja_common_term_basecamp = /** @type {(inputs: Common_Term_BasecampInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダッシュボード`)
};

/**
* | output |
* | --- |
* | "Dashboard" |
*
* @param {Common_Term_BasecampInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_basecamp = /** @type {((inputs?: Common_Term_BasecampInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_BasecampInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_basecamp(inputs)
	if (locale === "de") return de_common_term_basecamp(inputs)
	if (locale === "fr") return fr_common_term_basecamp(inputs)
	if (locale === "it") return it_common_term_basecamp(inputs)
	if (locale === "nl") return nl_common_term_basecamp(inputs)
	if (locale === "pl") return pl_common_term_basecamp(inputs)
	if (locale === "pt") return pt_common_term_basecamp(inputs)
	if (locale === "ru") return ru_common_term_basecamp(inputs)
	if (locale === "sv") return sv_common_term_basecamp(inputs)
	if (locale === "tr") return tr_common_term_basecamp(inputs)
	if (locale === "zh") return zh_common_term_basecamp(inputs)
	if (locale === "ja") return ja_common_term_basecamp(inputs)
	return en_common_term_basecamp(inputs)
});
