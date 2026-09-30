/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Referrer_OtherInputs */

const en_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other sites`)
};

const es_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otros sitios`)
};

const de_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere Seiten`)
};

const fr_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres sites`)
};

const it_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altri siti`)
};

const nl_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere sites`)
};

const pl_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inne strony`)
};

const pt_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outros sites`)
};

const ru_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие сайты`)
};

const sv_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andra webbplatser`)
};

const tr_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer siteler`)
};

const zh_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他网站`)
};

const ja_basecamp_referrer_other = /** @type {(inputs: Basecamp_Referrer_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他のサイト`)
};

/**
* | output |
* | --- |
* | "Other sites" |
*
* @param {Basecamp_Referrer_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_referrer_other = /** @type {((inputs?: Basecamp_Referrer_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Referrer_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_referrer_other(inputs)
	if (locale === "de") return de_basecamp_referrer_other(inputs)
	if (locale === "fr") return fr_basecamp_referrer_other(inputs)
	if (locale === "it") return it_basecamp_referrer_other(inputs)
	if (locale === "nl") return nl_basecamp_referrer_other(inputs)
	if (locale === "pl") return pl_basecamp_referrer_other(inputs)
	if (locale === "pt") return pt_basecamp_referrer_other(inputs)
	if (locale === "ru") return ru_basecamp_referrer_other(inputs)
	if (locale === "sv") return sv_basecamp_referrer_other(inputs)
	if (locale === "tr") return tr_basecamp_referrer_other(inputs)
	if (locale === "zh") return zh_basecamp_referrer_other(inputs)
	if (locale === "ja") return ja_basecamp_referrer_other(inputs)
	return en_basecamp_referrer_other(inputs)
});
