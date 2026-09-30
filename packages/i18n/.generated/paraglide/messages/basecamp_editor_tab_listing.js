/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Tab_ListingInputs */

const en_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listing`)
};

const es_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ficha`)
};

const de_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite`)
};

const fr_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fiche`)
};

const it_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scheda`)
};

const nl_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina`)
};

const pl_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona`)
};

const pt_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página`)
};

const ru_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страница`)
};

const sv_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sida`)
};

const tr_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa`)
};

const zh_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面`)
};

const ja_basecamp_editor_tab_listing = /** @type {(inputs: Basecamp_Editor_Tab_ListingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページ`)
};

/**
* | output |
* | --- |
* | "Listing" |
*
* @param {Basecamp_Editor_Tab_ListingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_tab_listing = /** @type {((inputs?: Basecamp_Editor_Tab_ListingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Tab_ListingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_tab_listing(inputs)
	if (locale === "de") return de_basecamp_editor_tab_listing(inputs)
	if (locale === "fr") return fr_basecamp_editor_tab_listing(inputs)
	if (locale === "it") return it_basecamp_editor_tab_listing(inputs)
	if (locale === "nl") return nl_basecamp_editor_tab_listing(inputs)
	if (locale === "pl") return pl_basecamp_editor_tab_listing(inputs)
	if (locale === "pt") return pt_basecamp_editor_tab_listing(inputs)
	if (locale === "ru") return ru_basecamp_editor_tab_listing(inputs)
	if (locale === "sv") return sv_basecamp_editor_tab_listing(inputs)
	if (locale === "tr") return tr_basecamp_editor_tab_listing(inputs)
	if (locale === "zh") return zh_basecamp_editor_tab_listing(inputs)
	if (locale === "ja") return ja_basecamp_editor_tab_listing(inputs)
	return en_basecamp_editor_tab_listing(inputs)
});
