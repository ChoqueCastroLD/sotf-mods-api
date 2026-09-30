/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Error_TitleInputs */

const en_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The title needs at least 3 characters.`)
};

const es_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El título necesita al menos 3 caracteres.`)
};

const de_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Titel braucht mindestens 3 Zeichen.`)
};

const fr_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le titre doit comporter au moins 3 caractères.`)
};

const it_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il titolo deve avere almeno 3 caratteri.`)
};

const nl_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De titel heeft minstens 3 tekens nodig.`)
};

const pl_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tytuł musi mieć co najmniej 3 znaki.`)
};

const pt_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O título precisa de pelo menos 3 caracteres.`)
};

const ru_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название должно содержать не менее 3 символов.`)
};

const sv_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titeln måste ha minst 3 tecken.`)
};

const tr_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlık en az 3 karakter olmalı.`)
};

const zh_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题至少需要 3 个字符。`)
};

const ja_jams_admin_error_title = /** @type {(inputs: Jams_Admin_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイトルは3文字以上にしてください。`)
};

/**
* | output |
* | --- |
* | "The title needs at least 3 characters." |
*
* @param {Jams_Admin_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_error_title = /** @type {((inputs?: Jams_Admin_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_error_title(inputs)
	if (locale === "de") return de_jams_admin_error_title(inputs)
	if (locale === "fr") return fr_jams_admin_error_title(inputs)
	if (locale === "it") return it_jams_admin_error_title(inputs)
	if (locale === "nl") return nl_jams_admin_error_title(inputs)
	if (locale === "pl") return pl_jams_admin_error_title(inputs)
	if (locale === "pt") return pt_jams_admin_error_title(inputs)
	if (locale === "ru") return ru_jams_admin_error_title(inputs)
	if (locale === "sv") return sv_jams_admin_error_title(inputs)
	if (locale === "tr") return tr_jams_admin_error_title(inputs)
	if (locale === "zh") return zh_jams_admin_error_title(inputs)
	if (locale === "ja") return ja_jams_admin_error_title(inputs)
	return en_jams_admin_error_title(inputs)
});
