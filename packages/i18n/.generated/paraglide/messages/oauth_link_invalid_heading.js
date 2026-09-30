/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Oauth_Link_Invalid_HeadingInputs */

const en_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This link can’t be used`)
};

const es_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este enlace no se puede usar`)
};

const de_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Link kann nicht verwendet werden`)
};

const fr_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce lien n’est pas utilisable`)
};

const it_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo link non può essere usato`)
};

const nl_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze link kan niet worden gebruikt`)
};

const pl_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tego linku nie można użyć`)
};

const pt_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este link não pode ser usado`)
};

const ru_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эту ссылку нельзя использовать`)
};

const sv_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här länken kan inte användas`)
};

const tr_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bağlantı kullanılamaz`)
};

const zh_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此链接无法使用`)
};

const ja_oauth_link_invalid_heading = /** @type {(inputs: Oauth_Link_Invalid_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリンクは使用できません`)
};

/**
* | output |
* | --- |
* | "This link can’t be used" |
*
* @param {Oauth_Link_Invalid_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_link_invalid_heading = /** @type {((inputs?: Oauth_Link_Invalid_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Link_Invalid_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_link_invalid_heading(inputs)
	if (locale === "de") return de_oauth_link_invalid_heading(inputs)
	if (locale === "fr") return fr_oauth_link_invalid_heading(inputs)
	if (locale === "it") return it_oauth_link_invalid_heading(inputs)
	if (locale === "nl") return nl_oauth_link_invalid_heading(inputs)
	if (locale === "pl") return pl_oauth_link_invalid_heading(inputs)
	if (locale === "pt") return pt_oauth_link_invalid_heading(inputs)
	if (locale === "ru") return ru_oauth_link_invalid_heading(inputs)
	if (locale === "sv") return sv_oauth_link_invalid_heading(inputs)
	if (locale === "tr") return tr_oauth_link_invalid_heading(inputs)
	if (locale === "zh") return zh_oauth_link_invalid_heading(inputs)
	if (locale === "ja") return ja_oauth_link_invalid_heading(inputs)
	return en_oauth_link_invalid_heading(inputs)
});
