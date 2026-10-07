/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Sort_StartInputs */

const en_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest start date`)
};

const es_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicio más reciente`)
};

const de_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spätester Start`)
};

const fr_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Début le plus récent`)
};

const it_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inizio più recente`)
};

const nl_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laatste startdatum`)
};

const pl_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpóźniejszy start`)
};

const pt_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Início mais recente`)
};

const ru_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала поздний старт`)
};

const sv_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste startdatum`)
};

const tr_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En geç başlangıç`)
};

const zh_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始日期最晚`)
};

const ja_jams_admin_sort_start = /** @type {(inputs: Jams_Admin_Sort_StartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開始日が新しい順`)
};

/**
* | output |
* | --- |
* | "Latest start date" |
*
* @param {Jams_Admin_Sort_StartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_sort_start = /** @type {((inputs?: Jams_Admin_Sort_StartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Sort_StartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_sort_start(inputs)
	if (locale === "de") return de_jams_admin_sort_start(inputs)
	if (locale === "fr") return fr_jams_admin_sort_start(inputs)
	if (locale === "it") return it_jams_admin_sort_start(inputs)
	if (locale === "nl") return nl_jams_admin_sort_start(inputs)
	if (locale === "pl") return pl_jams_admin_sort_start(inputs)
	if (locale === "pt") return pt_jams_admin_sort_start(inputs)
	if (locale === "ru") return ru_jams_admin_sort_start(inputs)
	if (locale === "sv") return sv_jams_admin_sort_start(inputs)
	if (locale === "tr") return tr_jams_admin_sort_start(inputs)
	if (locale === "zh") return zh_jams_admin_sort_start(inputs)
	if (locale === "ja") return ja_jams_admin_sort_start(inputs)
	return en_jams_admin_sort_start(inputs)
});
