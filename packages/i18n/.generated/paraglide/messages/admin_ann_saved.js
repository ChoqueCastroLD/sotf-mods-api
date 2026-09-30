/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_SavedInputs */

const en_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcement saved`)
};

const es_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuncio guardado`)
};

const de_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigung gespeichert`)
};

const fr_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonce enregistrée`)
};

const it_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuncio salvato`)
};

const nl_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aankondiging opgeslagen`)
};

const pl_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano ogłoszenie`)
};

const pt_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso salvo`)
};

const ru_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объявление сохранено`)
};

const sv_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddelandet sparat`)
};

const tr_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuru kaydedildi`)
};

const zh_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公告已保存`)
};

const ja_admin_ann_saved = /** @type {(inputs: Admin_Ann_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お知らせを保存しました`)
};

/**
* | output |
* | --- |
* | "Announcement saved" |
*
* @param {Admin_Ann_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_saved = /** @type {((inputs?: Admin_Ann_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_saved(inputs)
	if (locale === "de") return de_admin_ann_saved(inputs)
	if (locale === "fr") return fr_admin_ann_saved(inputs)
	if (locale === "it") return it_admin_ann_saved(inputs)
	if (locale === "nl") return nl_admin_ann_saved(inputs)
	if (locale === "pl") return pl_admin_ann_saved(inputs)
	if (locale === "pt") return pt_admin_ann_saved(inputs)
	if (locale === "ru") return ru_admin_ann_saved(inputs)
	if (locale === "sv") return sv_admin_ann_saved(inputs)
	if (locale === "tr") return tr_admin_ann_saved(inputs)
	if (locale === "zh") return zh_admin_ann_saved(inputs)
	if (locale === "ja") return ja_admin_ann_saved(inputs)
	return en_admin_ann_saved(inputs)
});
