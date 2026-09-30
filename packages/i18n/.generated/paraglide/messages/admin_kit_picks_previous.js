/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kit_Picks_PreviousInputs */

const en_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous page`)
};

const es_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página anterior`)
};

const de_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorherige Seite`)
};

const fr_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page précédente`)
};

const it_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina precedente`)
};

const nl_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorige pagina`)
};

const pl_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poprzednia strona`)
};

const pt_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página anterior`)
};

const ru_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предыдущая страница`)
};

const sv_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Föregående sida`)
};

const tr_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önceki sayfa`)
};

const zh_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一页`)
};

const ja_admin_kit_picks_previous = /** @type {(inputs: Admin_Kit_Picks_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前のページ`)
};

/**
* | output |
* | --- |
* | "Previous page" |
*
* @param {Admin_Kit_Picks_PreviousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_previous = /** @type {((inputs?: Admin_Kit_Picks_PreviousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_PreviousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_previous(inputs)
	if (locale === "de") return de_admin_kit_picks_previous(inputs)
	if (locale === "fr") return fr_admin_kit_picks_previous(inputs)
	if (locale === "it") return it_admin_kit_picks_previous(inputs)
	if (locale === "nl") return nl_admin_kit_picks_previous(inputs)
	if (locale === "pl") return pl_admin_kit_picks_previous(inputs)
	if (locale === "pt") return pt_admin_kit_picks_previous(inputs)
	if (locale === "ru") return ru_admin_kit_picks_previous(inputs)
	if (locale === "sv") return sv_admin_kit_picks_previous(inputs)
	if (locale === "tr") return tr_admin_kit_picks_previous(inputs)
	if (locale === "zh") return zh_admin_kit_picks_previous(inputs)
	if (locale === "ja") return ja_admin_kit_picks_previous(inputs)
	return en_admin_kit_picks_previous(inputs)
});
