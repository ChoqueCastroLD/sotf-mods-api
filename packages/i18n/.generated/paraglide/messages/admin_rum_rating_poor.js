/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_Rating_PoorInputs */

const en_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`poor`)
};

const es_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`deficiente`)
};

const de_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`schlecht`)
};

const fr_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`médiocre`)
};

const it_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`scarso`)
};

const nl_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`slecht`)
};

const pl_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`słabo`)
};

const pt_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ruim`)
};

const ru_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`плохо`)
};

const sv_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`dålig`)
};

const tr_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`zayıf`)
};

const zh_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`较差`)
};

const ja_admin_rum_rating_poor = /** @type {(inputs: Admin_Rum_Rating_PoorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不良`)
};

/**
* | output |
* | --- |
* | "poor" |
*
* @param {Admin_Rum_Rating_PoorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_rating_poor = /** @type {((inputs?: Admin_Rum_Rating_PoorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_Rating_PoorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_rating_poor(inputs)
	if (locale === "de") return de_admin_rum_rating_poor(inputs)
	if (locale === "fr") return fr_admin_rum_rating_poor(inputs)
	if (locale === "it") return it_admin_rum_rating_poor(inputs)
	if (locale === "nl") return nl_admin_rum_rating_poor(inputs)
	if (locale === "pl") return pl_admin_rum_rating_poor(inputs)
	if (locale === "pt") return pt_admin_rum_rating_poor(inputs)
	if (locale === "ru") return ru_admin_rum_rating_poor(inputs)
	if (locale === "sv") return sv_admin_rum_rating_poor(inputs)
	if (locale === "tr") return tr_admin_rum_rating_poor(inputs)
	if (locale === "zh") return zh_admin_rum_rating_poor(inputs)
	if (locale === "ja") return ja_admin_rum_rating_poor(inputs)
	return en_admin_rum_rating_poor(inputs)
});
