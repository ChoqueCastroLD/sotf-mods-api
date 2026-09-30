/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_TitleInputs */

const en_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcements`)
};

const es_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuncios`)
};

const de_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigungen`)
};

const fr_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonces`)
};

const it_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annunci`)
};

const nl_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aankondigingen`)
};

const pl_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłoszenia`)
};

const pt_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avisos`)
};

const ru_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объявления`)
};

const sv_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddelanden`)
};

const tr_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyurular`)
};

const zh_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公告`)
};

const ja_admin_ann_title = /** @type {(inputs: Admin_Ann_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お知らせ`)
};

/**
* | output |
* | --- |
* | "Announcements" |
*
* @param {Admin_Ann_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_title = /** @type {((inputs?: Admin_Ann_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_title(inputs)
	if (locale === "de") return de_admin_ann_title(inputs)
	if (locale === "fr") return fr_admin_ann_title(inputs)
	if (locale === "it") return it_admin_ann_title(inputs)
	if (locale === "nl") return nl_admin_ann_title(inputs)
	if (locale === "pl") return pl_admin_ann_title(inputs)
	if (locale === "pt") return pt_admin_ann_title(inputs)
	if (locale === "ru") return ru_admin_ann_title(inputs)
	if (locale === "sv") return sv_admin_ann_title(inputs)
	if (locale === "tr") return tr_admin_ann_title(inputs)
	if (locale === "zh") return zh_admin_ann_title(inputs)
	if (locale === "ja") return ja_admin_ann_title(inputs)
	return en_admin_ann_title(inputs)
});
