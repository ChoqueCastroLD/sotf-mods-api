/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Link_WebsiteInputs */

const en_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const es_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web`)
};

const de_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const fr_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site web`)
};

const it_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sito web`)
};

const nl_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const pl_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona`)
};

const pt_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site`)
};

const ru_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сайт`)
};

const sv_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webbplats`)
};

const tr_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web sitesi`)
};

const zh_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站`)
};

const ja_mod_link_website = /** @type {(inputs: Mod_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウェブサイト`)
};

/**
* | output |
* | --- |
* | "Website" |
*
* @param {Mod_Link_WebsiteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_link_website = /** @type {((inputs?: Mod_Link_WebsiteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Link_WebsiteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_link_website(inputs)
	if (locale === "de") return de_mod_link_website(inputs)
	if (locale === "fr") return fr_mod_link_website(inputs)
	if (locale === "it") return it_mod_link_website(inputs)
	if (locale === "nl") return nl_mod_link_website(inputs)
	if (locale === "pl") return pl_mod_link_website(inputs)
	if (locale === "pt") return pt_mod_link_website(inputs)
	if (locale === "ru") return ru_mod_link_website(inputs)
	if (locale === "sv") return sv_mod_link_website(inputs)
	if (locale === "tr") return tr_mod_link_website(inputs)
	if (locale === "zh") return zh_mod_link_website(inputs)
	if (locale === "ja") return ja_mod_link_website(inputs)
	return en_mod_link_website(inputs)
});
