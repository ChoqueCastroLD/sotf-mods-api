/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_AddInputs */

const en_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Give an award`)
};

const es_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dar un premio`)
};

const de_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auszeichnung vergeben`)
};

const fr_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Décerner une récompense`)
};

const it_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assegna un premio`)
};

const nl_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prijs toekennen`)
};

const pl_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przyznaj wyróżnienie`)
};

const pt_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dar um prêmio`)
};

const ru_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вручить награду`)
};

const sv_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela ut en utmärkelse`)
};

const tr_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ödül ver`)
};

const zh_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`颁发奖项`)
};

const ja_admin_awards_add = /** @type {(inputs: Admin_Awards_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アワードを授与`)
};

/**
* | output |
* | --- |
* | "Give an award" |
*
* @param {Admin_Awards_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_add = /** @type {((inputs?: Admin_Awards_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_add(inputs)
	if (locale === "de") return de_admin_awards_add(inputs)
	if (locale === "fr") return fr_admin_awards_add(inputs)
	if (locale === "it") return it_admin_awards_add(inputs)
	if (locale === "nl") return nl_admin_awards_add(inputs)
	if (locale === "pl") return pl_admin_awards_add(inputs)
	if (locale === "pt") return pt_admin_awards_add(inputs)
	if (locale === "ru") return ru_admin_awards_add(inputs)
	if (locale === "sv") return sv_admin_awards_add(inputs)
	if (locale === "tr") return tr_admin_awards_add(inputs)
	if (locale === "zh") return zh_admin_awards_add(inputs)
	if (locale === "ja") return ja_admin_awards_add(inputs)
	return en_admin_awards_add(inputs)
});
