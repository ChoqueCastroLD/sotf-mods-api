/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Links_GroupInputs */

const en_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence and links`)
};

const es_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencia y enlaces`)
};

const de_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lizenz und Links`)
};

const fr_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence et liens`)
};

const it_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licenza e link`)
};

const nl_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licentie en links`)
};

const pl_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencja i linki`)
};

const pt_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licença e links`)
};

const ru_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лицензия и ссылки`)
};

const sv_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licens och länkar`)
};

const tr_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lisans ve bağlantılar`)
};

const zh_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`许可证与链接`)
};

const ja_basecamp_listing_links_group = /** @type {(inputs: Basecamp_Listing_Links_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライセンスとリンク`)
};

/**
* | output |
* | --- |
* | "Licence and links" |
*
* @param {Basecamp_Listing_Links_GroupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_links_group = /** @type {((inputs?: Basecamp_Listing_Links_GroupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Links_GroupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_links_group(inputs)
	if (locale === "de") return de_basecamp_listing_links_group(inputs)
	if (locale === "fr") return fr_basecamp_listing_links_group(inputs)
	if (locale === "it") return it_basecamp_listing_links_group(inputs)
	if (locale === "nl") return nl_basecamp_listing_links_group(inputs)
	if (locale === "pl") return pl_basecamp_listing_links_group(inputs)
	if (locale === "pt") return pt_basecamp_listing_links_group(inputs)
	if (locale === "ru") return ru_basecamp_listing_links_group(inputs)
	if (locale === "sv") return sv_basecamp_listing_links_group(inputs)
	if (locale === "tr") return tr_basecamp_listing_links_group(inputs)
	if (locale === "zh") return zh_basecamp_listing_links_group(inputs)
	if (locale === "ja") return ja_basecamp_listing_links_group(inputs)
	return en_basecamp_listing_links_group(inputs)
});
