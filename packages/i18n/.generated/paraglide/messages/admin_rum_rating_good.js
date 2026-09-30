/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_Rating_GoodInputs */

const en_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`good`)
};

const es_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bueno`)
};

const de_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`gut`)
};

const fr_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bon`)
};

const it_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`buono`)
};

const nl_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`goed`)
};

const pl_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`dobrze`)
};

const pt_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bom`)
};

const ru_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`хорошо`)
};

const sv_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bra`)
};

const tr_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`iyi`)
};

const zh_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`良好`)
};

const ja_admin_rum_rating_good = /** @type {(inputs: Admin_Rum_Rating_GoodInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`良好`)
};

/**
* | output |
* | --- |
* | "good" |
*
* @param {Admin_Rum_Rating_GoodInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_rating_good = /** @type {((inputs?: Admin_Rum_Rating_GoodInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_Rating_GoodInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_rating_good(inputs)
	if (locale === "de") return de_admin_rum_rating_good(inputs)
	if (locale === "fr") return fr_admin_rum_rating_good(inputs)
	if (locale === "it") return it_admin_rum_rating_good(inputs)
	if (locale === "nl") return nl_admin_rum_rating_good(inputs)
	if (locale === "pl") return pl_admin_rum_rating_good(inputs)
	if (locale === "pt") return pt_admin_rum_rating_good(inputs)
	if (locale === "ru") return ru_admin_rum_rating_good(inputs)
	if (locale === "sv") return sv_admin_rum_rating_good(inputs)
	if (locale === "tr") return tr_admin_rum_rating_good(inputs)
	if (locale === "zh") return zh_admin_rum_rating_good(inputs)
	if (locale === "ja") return ja_admin_rum_rating_good(inputs)
	return en_admin_rum_rating_good(inputs)
});
