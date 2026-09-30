/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_NewInputs */

const en_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New jam`)
};

const es_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo jam`)
};

const de_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Jam`)
};

const fr_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau jam`)
};

const it_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo jam`)
};

const nl_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe jam`)
};

const pl_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy jam`)
};

const pt_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo jam`)
};

const ru_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый джем`)
};

const sv_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny jam`)
};

const tr_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni jam`)
};

const zh_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建 Jam`)
};

const ja_jams_admin_new = /** @type {(inputs: Jams_Admin_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいジャム`)
};

/**
* | output |
* | --- |
* | "New jam" |
*
* @param {Jams_Admin_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_new = /** @type {((inputs?: Jams_Admin_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_new(inputs)
	if (locale === "de") return de_jams_admin_new(inputs)
	if (locale === "fr") return fr_jams_admin_new(inputs)
	if (locale === "it") return it_jams_admin_new(inputs)
	if (locale === "nl") return nl_jams_admin_new(inputs)
	if (locale === "pl") return pl_jams_admin_new(inputs)
	if (locale === "pt") return pt_jams_admin_new(inputs)
	if (locale === "ru") return ru_jams_admin_new(inputs)
	if (locale === "sv") return sv_jams_admin_new(inputs)
	if (locale === "tr") return tr_jams_admin_new(inputs)
	if (locale === "zh") return zh_jams_admin_new(inputs)
	if (locale === "ja") return ja_jams_admin_new(inputs)
	return en_jams_admin_new(inputs)
});
