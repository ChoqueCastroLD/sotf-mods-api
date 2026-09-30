/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_Rating_ImproveInputs */

const en_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`needs improvement`)
};

const es_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`mejorable`)
};

const de_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`verbesserungswürdig`)
};

const fr_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`à améliorer`)
};

const it_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`da migliorare`)
};

const nl_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`kan beter`)
};

const pl_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`do poprawy`)
};

const pt_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`precisa melhorar`)
};

const ru_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`нужно улучшить`)
};

const sv_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`behöver förbättras`)
};

const tr_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`iyileştirilmeli`)
};

const zh_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需改进`)
};

const ja_admin_rum_rating_improve = /** @type {(inputs: Admin_Rum_Rating_ImproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要改善`)
};

/**
* | output |
* | --- |
* | "needs improvement" |
*
* @param {Admin_Rum_Rating_ImproveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_rating_improve = /** @type {((inputs?: Admin_Rum_Rating_ImproveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_Rating_ImproveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_rating_improve(inputs)
	if (locale === "de") return de_admin_rum_rating_improve(inputs)
	if (locale === "fr") return fr_admin_rum_rating_improve(inputs)
	if (locale === "it") return it_admin_rum_rating_improve(inputs)
	if (locale === "nl") return nl_admin_rum_rating_improve(inputs)
	if (locale === "pl") return pl_admin_rum_rating_improve(inputs)
	if (locale === "pt") return pt_admin_rum_rating_improve(inputs)
	if (locale === "ru") return ru_admin_rum_rating_improve(inputs)
	if (locale === "sv") return sv_admin_rum_rating_improve(inputs)
	if (locale === "tr") return tr_admin_rum_rating_improve(inputs)
	if (locale === "zh") return zh_admin_rum_rating_improve(inputs)
	if (locale === "ja") return ja_admin_rum_rating_improve(inputs)
	return en_admin_rum_rating_improve(inputs)
});
