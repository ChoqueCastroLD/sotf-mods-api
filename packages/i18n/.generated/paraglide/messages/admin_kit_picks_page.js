/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ page: NonNullable<unknown>, pages: NonNullable<unknown> }} Admin_Kit_Picks_PageInputs */

const en_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page} of ${i?.pages}`)
};

const es_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página ${i?.page} de ${i?.pages}`)
};

const de_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seite ${i?.page} von ${i?.pages}`)
};

const fr_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Page ${i?.page} sur ${i?.pages}`)
};

const it_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina ${i?.page} di ${i?.pages}`)
};

const nl_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pagina ${i?.page} van ${i?.pages}`)
};

const pl_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Strona ${i?.page} z ${i?.pages}`)
};

const pt_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Página ${i?.page} de ${i?.pages}`)
};

const ru_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Страница ${i?.page} из ${i?.pages}`)
};

const sv_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sida ${i?.page} av ${i?.pages}`)
};

const tr_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sayfa ${i?.page} / ${i?.pages}`)
};

const zh_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.page} 页，共 ${i?.pages} 页`)
};

const ja_admin_kit_picks_page = /** @type {(inputs: Admin_Kit_Picks_PageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.pages} ページ中 ${i?.page} ページ`)
};

/**
* | output |
* | --- |
* | "Page {page} of {pages}" |
*
* @param {Admin_Kit_Picks_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_page = /** @type {((inputs: Admin_Kit_Picks_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_page(inputs)
	if (locale === "de") return de_admin_kit_picks_page(inputs)
	if (locale === "fr") return fr_admin_kit_picks_page(inputs)
	if (locale === "it") return it_admin_kit_picks_page(inputs)
	if (locale === "nl") return nl_admin_kit_picks_page(inputs)
	if (locale === "pl") return pl_admin_kit_picks_page(inputs)
	if (locale === "pt") return pt_admin_kit_picks_page(inputs)
	if (locale === "ru") return ru_admin_kit_picks_page(inputs)
	if (locale === "sv") return sv_admin_kit_picks_page(inputs)
	if (locale === "tr") return tr_admin_kit_picks_page(inputs)
	if (locale === "zh") return zh_admin_kit_picks_page(inputs)
	if (locale === "ja") return ja_admin_kit_picks_page(inputs)
	return en_admin_kit_picks_page(inputs)
});
