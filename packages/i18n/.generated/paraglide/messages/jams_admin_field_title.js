/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Field_TitleInputs */

const en_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Title`)
};

const es_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título`)
};

const de_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel`)
};

const fr_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titre`)
};

const it_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titolo`)
};

const nl_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel`)
};

const pl_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tytuł`)
};

const pt_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título`)
};

const ru_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название`)
};

const sv_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel`)
};

const tr_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlık`)
};

const zh_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题`)
};

const ja_jams_admin_field_title = /** @type {(inputs: Jams_Admin_Field_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイトル`)
};

/**
* | output |
* | --- |
* | "Title" |
*
* @param {Jams_Admin_Field_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_field_title = /** @type {((inputs?: Jams_Admin_Field_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Field_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_field_title(inputs)
	if (locale === "de") return de_jams_admin_field_title(inputs)
	if (locale === "fr") return fr_jams_admin_field_title(inputs)
	if (locale === "it") return it_jams_admin_field_title(inputs)
	if (locale === "nl") return nl_jams_admin_field_title(inputs)
	if (locale === "pl") return pl_jams_admin_field_title(inputs)
	if (locale === "pt") return pt_jams_admin_field_title(inputs)
	if (locale === "ru") return ru_jams_admin_field_title(inputs)
	if (locale === "sv") return sv_jams_admin_field_title(inputs)
	if (locale === "tr") return tr_jams_admin_field_title(inputs)
	if (locale === "zh") return zh_jams_admin_field_title(inputs)
	if (locale === "ja") return ja_jams_admin_field_title(inputs)
	return en_jams_admin_field_title(inputs)
});
