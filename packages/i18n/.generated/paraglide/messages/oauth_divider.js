/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_DividerInputs */

const en_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`or`)
};

const es_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`o`)
};

const de_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`oder`)
};

const fr_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ou`)
};

const it_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`oppure`)
};

const nl_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`of`)
};

const pl_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`lub`)
};

const pt_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ou`)
};

const ru_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`или`)
};

const sv_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`eller`)
};

const tr_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`veya`)
};

const zh_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`或`)
};

const ja_oauth_divider = /** @type {(inputs: Oauth_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`または`)
};

/**
* | output |
* | --- |
* | "or" |
*
* @param {Oauth_DividerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_divider = /** @type {((inputs?: Oauth_DividerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_DividerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_divider(inputs)
	if (locale === "de") return de_oauth_divider(inputs)
	if (locale === "fr") return fr_oauth_divider(inputs)
	if (locale === "it") return it_oauth_divider(inputs)
	if (locale === "nl") return nl_oauth_divider(inputs)
	if (locale === "pl") return pl_oauth_divider(inputs)
	if (locale === "pt") return pt_oauth_divider(inputs)
	if (locale === "ru") return ru_oauth_divider(inputs)
	if (locale === "sv") return sv_oauth_divider(inputs)
	if (locale === "tr") return tr_oauth_divider(inputs)
	if (locale === "zh") return zh_oauth_divider(inputs)
	if (locale === "ja") return ja_oauth_divider(inputs)
	return en_oauth_divider(inputs)
});
