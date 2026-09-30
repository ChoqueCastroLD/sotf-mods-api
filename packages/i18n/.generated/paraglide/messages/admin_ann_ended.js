/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_EndedInputs */

const en_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announcement ended`)
};

const es_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuncio terminado`)
};

const de_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigung beendet`)
};

const fr_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonce terminée`)
};

const it_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuncio terminato`)
};

const nl_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aankondiging beëindigd`)
};

const pl_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłoszenie zakończone`)
};

const pt_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso encerrado`)
};

const ru_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объявление завершено`)
};

const sv_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddelandet avslutat`)
};

const tr_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyuru bitirildi`)
};

const zh_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公告已结束`)
};

const ja_admin_ann_ended = /** @type {(inputs: Admin_Ann_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`お知らせを終了しました`)
};

/**
* | output |
* | --- |
* | "Announcement ended" |
*
* @param {Admin_Ann_EndedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_ended = /** @type {((inputs?: Admin_Ann_EndedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_EndedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_ended(inputs)
	if (locale === "de") return de_admin_ann_ended(inputs)
	if (locale === "fr") return fr_admin_ann_ended(inputs)
	if (locale === "it") return it_admin_ann_ended(inputs)
	if (locale === "nl") return nl_admin_ann_ended(inputs)
	if (locale === "pl") return pl_admin_ann_ended(inputs)
	if (locale === "pt") return pt_admin_ann_ended(inputs)
	if (locale === "ru") return ru_admin_ann_ended(inputs)
	if (locale === "sv") return sv_admin_ann_ended(inputs)
	if (locale === "tr") return tr_admin_ann_ended(inputs)
	if (locale === "zh") return zh_admin_ann_ended(inputs)
	if (locale === "ja") return ja_admin_ann_ended(inputs)
	return en_admin_ann_ended(inputs)
});
