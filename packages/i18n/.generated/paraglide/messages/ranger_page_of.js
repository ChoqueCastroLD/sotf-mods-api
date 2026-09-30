/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ page: NonNullable<unknown>, total: NonNullable<unknown> }} Ranger_Page_OfInputs */

const en_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page} of ${i?.total}`)
};

const es_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página ${i?.page} de ${i?.total}`)
};

const de_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seite ${i?.page} von ${i?.total}`)
};

const fr_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page} sur ${i?.total}`)
};

const it_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina ${i?.page} di ${i?.total}`)
};

const nl_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina ${i?.page} van ${i?.total}`)
};

const pl_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Strona ${i?.page} z ${i?.total}`)
};

const pt_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página ${i?.page} de ${i?.total}`)
};

const ru_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Страница ${i?.page} из ${i?.total}`)
};

const sv_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sida ${i?.page} av ${i?.total}`)
};

const tr_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sayfa ${i?.page}/${i?.total}`)
};

const zh_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.page} 页，共 ${i?.total} 页`)
};

const ja_ranger_page_of = /** @type {(inputs: Ranger_Page_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} ページ中 ${i?.page} ページ目`)
};

/**
* | output |
* | --- |
* | "Page {page} of {total}" |
*
* @param {Ranger_Page_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_page_of = /** @type {((inputs: Ranger_Page_OfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Page_OfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_page_of(inputs)
	if (locale === "de") return de_ranger_page_of(inputs)
	if (locale === "fr") return fr_ranger_page_of(inputs)
	if (locale === "it") return it_ranger_page_of(inputs)
	if (locale === "nl") return nl_ranger_page_of(inputs)
	if (locale === "pl") return pl_ranger_page_of(inputs)
	if (locale === "pt") return pt_ranger_page_of(inputs)
	if (locale === "ru") return ru_ranger_page_of(inputs)
	if (locale === "sv") return sv_ranger_page_of(inputs)
	if (locale === "tr") return tr_ranger_page_of(inputs)
	if (locale === "zh") return zh_ranger_page_of(inputs)
	if (locale === "ja") return ja_ranger_page_of(inputs)
	return en_ranger_page_of(inputs)
});
