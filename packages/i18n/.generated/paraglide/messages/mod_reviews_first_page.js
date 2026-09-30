/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Reviews_First_PageInputs */

const en_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to the first page`)
};

const es_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a la primera página`)
};

const de_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zur ersten Seite`)
};

const fr_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revenir à la première page`)
};

const it_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna alla prima pagina`)
};

const nl_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar de eerste pagina`)
};

const pl_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do pierwszej strony`)
};

const pt_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar à primeira página`)
};

const ru_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На первую страницу`)
};

const sv_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till första sidan`)
};

const tr_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk sayfaya dön`)
};

const zh_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回第一页`)
};

const ja_mod_reviews_first_page = /** @type {(inputs: Mod_Reviews_First_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のページに戻る`)
};

/**
* | output |
* | --- |
* | "Back to the first page" |
*
* @param {Mod_Reviews_First_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_first_page = /** @type {((inputs?: Mod_Reviews_First_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_First_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_first_page(inputs)
	if (locale === "de") return de_mod_reviews_first_page(inputs)
	if (locale === "fr") return fr_mod_reviews_first_page(inputs)
	if (locale === "it") return it_mod_reviews_first_page(inputs)
	if (locale === "nl") return nl_mod_reviews_first_page(inputs)
	if (locale === "pl") return pl_mod_reviews_first_page(inputs)
	if (locale === "pt") return pt_mod_reviews_first_page(inputs)
	if (locale === "ru") return ru_mod_reviews_first_page(inputs)
	if (locale === "sv") return sv_mod_reviews_first_page(inputs)
	if (locale === "tr") return tr_mod_reviews_first_page(inputs)
	if (locale === "zh") return zh_mod_reviews_first_page(inputs)
	if (locale === "ja") return ja_mod_reviews_first_page(inputs)
	return en_mod_reviews_first_page(inputs)
});
