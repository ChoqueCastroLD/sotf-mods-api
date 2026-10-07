/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Sort_TitleInputs */

const en_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Title A to Z`)
};

const es_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título de A a Z`)
};

const de_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel A bis Z`)
};

const fr_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titre de A à Z`)
};

const it_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titolo dalla A alla Z`)
};

const nl_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel A tot Z`)
};

const pl_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tytuł od A do Z`)
};

const pt_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Título de A a Z`)
};

const ru_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название от А до Я`)
};

const sv_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titel A till Ö`)
};

const tr_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlık A’dan Z’ye`)
};

const zh_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题 A 到 Z`)
};

const ja_jams_admin_sort_title = /** @type {(inputs: Jams_Admin_Sort_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイトル順（A から Z）`)
};

/**
* | output |
* | --- |
* | "Title A to Z" |
*
* @param {Jams_Admin_Sort_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_sort_title = /** @type {((inputs?: Jams_Admin_Sort_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Sort_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_sort_title(inputs)
	if (locale === "de") return de_jams_admin_sort_title(inputs)
	if (locale === "fr") return fr_jams_admin_sort_title(inputs)
	if (locale === "it") return it_jams_admin_sort_title(inputs)
	if (locale === "nl") return nl_jams_admin_sort_title(inputs)
	if (locale === "pl") return pl_jams_admin_sort_title(inputs)
	if (locale === "pt") return pt_jams_admin_sort_title(inputs)
	if (locale === "ru") return ru_jams_admin_sort_title(inputs)
	if (locale === "sv") return sv_jams_admin_sort_title(inputs)
	if (locale === "tr") return tr_jams_admin_sort_title(inputs)
	if (locale === "zh") return zh_jams_admin_sort_title(inputs)
	if (locale === "ja") return ja_jams_admin_sort_title(inputs)
	return en_jams_admin_sort_title(inputs)
});
