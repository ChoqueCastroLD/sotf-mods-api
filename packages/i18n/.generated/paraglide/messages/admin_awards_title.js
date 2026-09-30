/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_TitleInputs */

const en_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Awards`)
};

const es_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premios`)
};

const de_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auszeichnungen`)
};

const fr_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récompenses`)
};

const it_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premi`)
};

const nl_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prijzen`)
};

const pl_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyróżnienia`)
};

const pt_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêmios`)
};

const ru_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Награды`)
};

const sv_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utmärkelser`)
};

const tr_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ödüller`)
};

const zh_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`奖项`)
};

const ja_admin_awards_title = /** @type {(inputs: Admin_Awards_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アワード`)
};

/**
* | output |
* | --- |
* | "Awards" |
*
* @param {Admin_Awards_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_title = /** @type {((inputs?: Admin_Awards_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_title(inputs)
	if (locale === "de") return de_admin_awards_title(inputs)
	if (locale === "fr") return fr_admin_awards_title(inputs)
	if (locale === "it") return it_admin_awards_title(inputs)
	if (locale === "nl") return nl_admin_awards_title(inputs)
	if (locale === "pl") return pl_admin_awards_title(inputs)
	if (locale === "pt") return pt_admin_awards_title(inputs)
	if (locale === "ru") return ru_admin_awards_title(inputs)
	if (locale === "sv") return sv_admin_awards_title(inputs)
	if (locale === "tr") return tr_admin_awards_title(inputs)
	if (locale === "zh") return zh_admin_awards_title(inputs)
	if (locale === "ja") return ja_admin_awards_title(inputs)
	return en_admin_awards_title(inputs)
});
