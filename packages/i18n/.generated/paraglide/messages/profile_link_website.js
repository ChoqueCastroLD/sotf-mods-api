/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Link_WebsiteInputs */

const en_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const es_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web`)
};

const de_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const fr_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site web`)
};

const it_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sito web`)
};

const nl_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const pl_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona WWW`)
};

const pt_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site`)
};

const ru_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сайт`)
};

const sv_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webbplats`)
};

const tr_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web sitesi`)
};

const zh_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站`)
};

const ja_profile_link_website = /** @type {(inputs: Profile_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウェブサイト`)
};

/**
* | output |
* | --- |
* | "Website" |
*
* @param {Profile_Link_WebsiteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_link_website = /** @type {((inputs?: Profile_Link_WebsiteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Link_WebsiteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_link_website(inputs)
	if (locale === "de") return de_profile_link_website(inputs)
	if (locale === "fr") return fr_profile_link_website(inputs)
	if (locale === "it") return it_profile_link_website(inputs)
	if (locale === "nl") return nl_profile_link_website(inputs)
	if (locale === "pl") return pl_profile_link_website(inputs)
	if (locale === "pt") return pt_profile_link_website(inputs)
	if (locale === "ru") return ru_profile_link_website(inputs)
	if (locale === "sv") return sv_profile_link_website(inputs)
	if (locale === "tr") return tr_profile_link_website(inputs)
	if (locale === "zh") return zh_profile_link_website(inputs)
	if (locale === "ja") return ja_profile_link_website(inputs)
	return en_profile_link_website(inputs)
});
