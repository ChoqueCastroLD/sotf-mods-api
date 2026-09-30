/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Col_JamInputs */

const en_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const es_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const de_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const fr_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const it_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const nl_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const pl_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const pt_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const ru_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Джем`)
};

const sv_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const tr_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const zh_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam`)
};

const ja_jams_admin_col_jam = /** @type {(inputs: Jams_Admin_Col_JamInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャム`)
};

/**
* | output |
* | --- |
* | "Jam" |
*
* @param {Jams_Admin_Col_JamInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_col_jam = /** @type {((inputs?: Jams_Admin_Col_JamInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Col_JamInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_col_jam(inputs)
	if (locale === "de") return de_jams_admin_col_jam(inputs)
	if (locale === "fr") return fr_jams_admin_col_jam(inputs)
	if (locale === "it") return it_jams_admin_col_jam(inputs)
	if (locale === "nl") return nl_jams_admin_col_jam(inputs)
	if (locale === "pl") return pl_jams_admin_col_jam(inputs)
	if (locale === "pt") return pt_jams_admin_col_jam(inputs)
	if (locale === "ru") return ru_jams_admin_col_jam(inputs)
	if (locale === "sv") return sv_jams_admin_col_jam(inputs)
	if (locale === "tr") return tr_jams_admin_col_jam(inputs)
	if (locale === "zh") return zh_jams_admin_col_jam(inputs)
	if (locale === "ja") return ja_jams_admin_col_jam(inputs)
	return en_jams_admin_col_jam(inputs)
});
