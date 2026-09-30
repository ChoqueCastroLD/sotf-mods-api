/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_SavedInputs */

const en_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listing saved`)
};

const es_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ficha guardada`)
};

const de_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite gespeichert`)
};

const fr_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fiche enregistrée`)
};

const it_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scheda salvata`)
};

const nl_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina opgeslagen`)
};

const pl_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona zapisana`)
};

const pt_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página salva`)
};

const ru_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страница сохранена`)
};

const sv_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidan sparad`)
};

const tr_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa kaydedildi`)
};

const zh_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面已保存`)
};

const ja_basecamp_listing_saved = /** @type {(inputs: Basecamp_Listing_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページを保存しました`)
};

/**
* | output |
* | --- |
* | "Listing saved" |
*
* @param {Basecamp_Listing_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_saved = /** @type {((inputs?: Basecamp_Listing_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_saved(inputs)
	if (locale === "de") return de_basecamp_listing_saved(inputs)
	if (locale === "fr") return fr_basecamp_listing_saved(inputs)
	if (locale === "it") return it_basecamp_listing_saved(inputs)
	if (locale === "nl") return nl_basecamp_listing_saved(inputs)
	if (locale === "pl") return pl_basecamp_listing_saved(inputs)
	if (locale === "pt") return pt_basecamp_listing_saved(inputs)
	if (locale === "ru") return ru_basecamp_listing_saved(inputs)
	if (locale === "sv") return sv_basecamp_listing_saved(inputs)
	if (locale === "tr") return tr_basecamp_listing_saved(inputs)
	if (locale === "zh") return zh_basecamp_listing_saved(inputs)
	if (locale === "ja") return ja_basecamp_listing_saved(inputs)
	return en_basecamp_listing_saved(inputs)
});
