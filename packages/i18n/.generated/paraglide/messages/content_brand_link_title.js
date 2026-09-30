/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Link_TitleInputs */

const en_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link to SOTF Mods`)
};

const es_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlaza a SOTF Mods`)
};

const de_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf SOTF Mods verlinken`)
};

const fr_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faire un lien vers SOTF Mods`)
};

const it_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci un link a SOTF Mods`)
};

const nl_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naar SOTF Mods linken`)
};

const pl_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linkuj do SOTF Mods`)
};

const pt_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link para o SOTF Mods`)
};

const ru_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылка на SOTF Mods`)
};

const sv_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Länka till SOTF Mods`)
};

const tr_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’a bağlantı ver`)
};

const zh_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接到 SOTF Mods`)
};

const ja_content_brand_link_title = /** @type {(inputs: Content_Brand_Link_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods へのリンク`)
};

/**
* | output |
* | --- |
* | "Link to SOTF Mods" |
*
* @param {Content_Brand_Link_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_link_title = /** @type {((inputs?: Content_Brand_Link_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Link_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_link_title(inputs)
	if (locale === "de") return de_content_brand_link_title(inputs)
	if (locale === "fr") return fr_content_brand_link_title(inputs)
	if (locale === "it") return it_content_brand_link_title(inputs)
	if (locale === "nl") return nl_content_brand_link_title(inputs)
	if (locale === "pl") return pl_content_brand_link_title(inputs)
	if (locale === "pt") return pt_content_brand_link_title(inputs)
	if (locale === "ru") return ru_content_brand_link_title(inputs)
	if (locale === "sv") return sv_content_brand_link_title(inputs)
	if (locale === "tr") return tr_content_brand_link_title(inputs)
	if (locale === "zh") return zh_content_brand_link_title(inputs)
	if (locale === "ja") return ja_content_brand_link_title(inputs)
	return en_content_brand_link_title(inputs)
});
