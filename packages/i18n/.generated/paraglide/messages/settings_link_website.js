/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Link_WebsiteInputs */

const en_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const es_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web`)
};

const de_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const fr_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site web`)
};

const it_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sito web`)
};

const nl_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const pl_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona internetowa`)
};

const pt_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site`)
};

const ru_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сайт`)
};

const sv_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webbplats`)
};

const tr_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web sitesi`)
};

const zh_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站`)
};

const ja_settings_link_website = /** @type {(inputs: Settings_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウェブサイト`)
};

/**
* | output |
* | --- |
* | "Website" |
*
* @param {Settings_Link_WebsiteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_link_website = /** @type {((inputs?: Settings_Link_WebsiteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Link_WebsiteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_link_website(inputs)
	if (locale === "de") return de_settings_link_website(inputs)
	if (locale === "fr") return fr_settings_link_website(inputs)
	if (locale === "it") return it_settings_link_website(inputs)
	if (locale === "nl") return nl_settings_link_website(inputs)
	if (locale === "pl") return pl_settings_link_website(inputs)
	if (locale === "pt") return pt_settings_link_website(inputs)
	if (locale === "ru") return ru_settings_link_website(inputs)
	if (locale === "sv") return sv_settings_link_website(inputs)
	if (locale === "tr") return tr_settings_link_website(inputs)
	if (locale === "zh") return zh_settings_link_website(inputs)
	if (locale === "ja") return ja_settings_link_website(inputs)
	return en_settings_link_website(inputs)
});
