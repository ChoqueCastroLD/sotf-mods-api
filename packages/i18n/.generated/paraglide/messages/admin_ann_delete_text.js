/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Delete_TextInputs */

const en_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It disappears from the site within a few minutes.`)
};

const es_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desaparece del sitio en unos minutos.`)
};

const de_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sie verschwindet innerhalb weniger Minuten von der Website.`)
};

const fr_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elle disparaît du site en quelques minutes.`)
};

const it_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparisce dal sito entro pochi minuti.`)
};

const nl_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ze verdwijnt binnen enkele minuten van de site.`)
};

const pl_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zniknie ze strony w ciągu kilku minut.`)
};

const pt_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ele some do site em poucos minutos.`)
};

const ru_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оно исчезнет с сайта через несколько минут.`)
};

const sv_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det försvinner från sajten inom några minuter.`)
};

const tr_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birkaç dakika içinde siteden kaybolur.`)
};

const zh_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它会在几分钟内从网站上消失。`)
};

const ja_admin_ann_delete_text = /** @type {(inputs: Admin_Ann_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数分以内にサイトから消えます。`)
};

/**
* | output |
* | --- |
* | "It disappears from the site within a few minutes." |
*
* @param {Admin_Ann_Delete_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_delete_text = /** @type {((inputs?: Admin_Ann_Delete_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Delete_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_delete_text(inputs)
	if (locale === "de") return de_admin_ann_delete_text(inputs)
	if (locale === "fr") return fr_admin_ann_delete_text(inputs)
	if (locale === "it") return it_admin_ann_delete_text(inputs)
	if (locale === "nl") return nl_admin_ann_delete_text(inputs)
	if (locale === "pl") return pl_admin_ann_delete_text(inputs)
	if (locale === "pt") return pt_admin_ann_delete_text(inputs)
	if (locale === "ru") return ru_admin_ann_delete_text(inputs)
	if (locale === "sv") return sv_admin_ann_delete_text(inputs)
	if (locale === "tr") return tr_admin_ann_delete_text(inputs)
	if (locale === "zh") return zh_admin_ann_delete_text(inputs)
	if (locale === "ja") return ja_admin_ann_delete_text(inputs)
	return en_admin_ann_delete_text(inputs)
});
