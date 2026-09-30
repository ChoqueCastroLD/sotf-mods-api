/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Link_WebsiteInputs */

const en_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const es_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web`)
};

const de_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const fr_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site web`)
};

const it_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sito web`)
};

const nl_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const pl_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona WWW`)
};

const pt_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site`)
};

const ru_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сайт`)
};

const sv_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webbplats`)
};

const tr_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web sitesi`)
};

const zh_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站`)
};

const ja_upload_link_website = /** @type {(inputs: Upload_Link_WebsiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウェブサイト`)
};

/**
* | output |
* | --- |
* | "Website" |
*
* @param {Upload_Link_WebsiteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_link_website = /** @type {((inputs?: Upload_Link_WebsiteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Link_WebsiteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_link_website(inputs)
	if (locale === "de") return de_upload_link_website(inputs)
	if (locale === "fr") return fr_upload_link_website(inputs)
	if (locale === "it") return it_upload_link_website(inputs)
	if (locale === "nl") return nl_upload_link_website(inputs)
	if (locale === "pl") return pl_upload_link_website(inputs)
	if (locale === "pt") return pt_upload_link_website(inputs)
	if (locale === "ru") return ru_upload_link_website(inputs)
	if (locale === "sv") return sv_upload_link_website(inputs)
	if (locale === "tr") return tr_upload_link_website(inputs)
	if (locale === "zh") return zh_upload_link_website(inputs)
	if (locale === "ja") return ja_upload_link_website(inputs)
	return en_upload_link_website(inputs)
});
