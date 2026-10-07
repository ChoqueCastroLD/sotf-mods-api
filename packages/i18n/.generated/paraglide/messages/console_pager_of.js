/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ page: NonNullable<unknown>, pages: NonNullable<unknown> }} Console_Pager_OfInputs */

const en_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page} of ${i?.pages}`)
};

const es_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página ${i?.page} de ${i?.pages}`)
};

const de_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seite ${i?.page} von ${i?.pages}`)
};

const fr_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page} sur ${i?.pages}`)
};

const it_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina ${i?.page} di ${i?.pages}`)
};

const nl_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina ${i?.page} van ${i?.pages}`)
};

const pl_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Strona ${i?.page} z ${i?.pages}`)
};

const pt_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página ${i?.page} de ${i?.pages}`)
};

const ru_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Страница ${i?.page} из ${i?.pages}`)
};

const sv_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sida ${i?.page} av ${i?.pages}`)
};

const tr_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sayfa ${i?.page} / ${i?.pages}`)
};

const zh_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.page} 页，共 ${i?.pages} 页`)
};

const ja_console_pager_of = /** @type {(inputs: Console_Pager_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.page} / ${i?.pages} ページ`)
};

/**
* | output |
* | --- |
* | "Page {page} of {pages}" |
*
* @param {Console_Pager_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_pager_of = /** @type {((inputs: Console_Pager_OfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Pager_OfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_pager_of(inputs)
	if (locale === "de") return de_console_pager_of(inputs)
	if (locale === "fr") return fr_console_pager_of(inputs)
	if (locale === "it") return it_console_pager_of(inputs)
	if (locale === "nl") return nl_console_pager_of(inputs)
	if (locale === "pl") return pl_console_pager_of(inputs)
	if (locale === "pt") return pt_console_pager_of(inputs)
	if (locale === "ru") return ru_console_pager_of(inputs)
	if (locale === "sv") return sv_console_pager_of(inputs)
	if (locale === "tr") return tr_console_pager_of(inputs)
	if (locale === "zh") return zh_console_pager_of(inputs)
	if (locale === "ja") return ja_console_pager_of(inputs)
	return en_console_pager_of(inputs)
});
