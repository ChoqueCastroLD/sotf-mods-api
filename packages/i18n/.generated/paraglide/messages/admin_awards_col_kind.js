/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Col_KindInputs */

const en_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Award`)
};

const es_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premio`)
};

const de_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auszeichnung`)
};

const fr_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récompense`)
};

const it_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premio`)
};

const nl_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prijs`)
};

const pl_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyróżnienie`)
};

const pt_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêmio`)
};

const ru_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Награда`)
};

const sv_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utmärkelse`)
};

const tr_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ödül`)
};

const zh_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`奖项`)
};

const ja_admin_awards_col_kind = /** @type {(inputs: Admin_Awards_Col_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アワード`)
};

/**
* | output |
* | --- |
* | "Award" |
*
* @param {Admin_Awards_Col_KindInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_col_kind = /** @type {((inputs?: Admin_Awards_Col_KindInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Col_KindInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_col_kind(inputs)
	if (locale === "de") return de_admin_awards_col_kind(inputs)
	if (locale === "fr") return fr_admin_awards_col_kind(inputs)
	if (locale === "it") return it_admin_awards_col_kind(inputs)
	if (locale === "nl") return nl_admin_awards_col_kind(inputs)
	if (locale === "pl") return pl_admin_awards_col_kind(inputs)
	if (locale === "pt") return pt_admin_awards_col_kind(inputs)
	if (locale === "ru") return ru_admin_awards_col_kind(inputs)
	if (locale === "sv") return sv_admin_awards_col_kind(inputs)
	if (locale === "tr") return tr_admin_awards_col_kind(inputs)
	if (locale === "zh") return zh_admin_awards_col_kind(inputs)
	if (locale === "ja") return ja_admin_awards_col_kind(inputs)
	return en_admin_awards_col_kind(inputs)
});
