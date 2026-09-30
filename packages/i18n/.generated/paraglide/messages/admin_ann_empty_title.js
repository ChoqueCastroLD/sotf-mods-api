/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Empty_TitleInputs */

const en_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No announcements`)
};

const es_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay anuncios`)
};

const de_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Ankündigungen`)
};

const fr_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune annonce`)
};

const it_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun annuncio`)
};

const nl_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen aankondigingen`)
};

const pl_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak ogłoszeń`)
};

const pt_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum aviso`)
};

const ru_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объявлений нет`)
};

const sv_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga meddelanden`)
};

const tr_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuru yok`)
};

const zh_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有公告`)
};

const ja_admin_ann_empty_title = /** @type {(inputs: Admin_Ann_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お知らせはありません`)
};

/**
* | output |
* | --- |
* | "No announcements" |
*
* @param {Admin_Ann_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_empty_title = /** @type {((inputs?: Admin_Ann_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_empty_title(inputs)
	if (locale === "de") return de_admin_ann_empty_title(inputs)
	if (locale === "fr") return fr_admin_ann_empty_title(inputs)
	if (locale === "it") return it_admin_ann_empty_title(inputs)
	if (locale === "nl") return nl_admin_ann_empty_title(inputs)
	if (locale === "pl") return pl_admin_ann_empty_title(inputs)
	if (locale === "pt") return pt_admin_ann_empty_title(inputs)
	if (locale === "ru") return ru_admin_ann_empty_title(inputs)
	if (locale === "sv") return sv_admin_ann_empty_title(inputs)
	if (locale === "tr") return tr_admin_ann_empty_title(inputs)
	if (locale === "zh") return zh_admin_ann_empty_title(inputs)
	if (locale === "ja") return ja_admin_ann_empty_title(inputs)
	return en_admin_ann_empty_title(inputs)
});
