/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Filtered_Empty_TitleInputs */

const en_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching jams`)
};

const es_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay jams que coincidan`)
};

const de_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine passenden Jams`)
};

const fr_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun jam ne correspond`)
};

const it_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun jam corrisponde`)
};

const nl_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen overeenkomende jams`)
};

const pl_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak pasujących jamów`)
};

const pt_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma jam corresponde`)
};

const ru_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Джемов не найдено`)
};

const sv_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga matchande jams`)
};

const tr_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen jam yok`)
};

const zh_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合条件的 Jam`)
};

const ja_jams_admin_filtered_empty_title = /** @type {(inputs: Jams_Admin_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`該当するジャムはありません`)
};

/**
* | output |
* | --- |
* | "No matching jams" |
*
* @param {Jams_Admin_Filtered_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_filtered_empty_title = /** @type {((inputs?: Jams_Admin_Filtered_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Filtered_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_filtered_empty_title(inputs)
	if (locale === "de") return de_jams_admin_filtered_empty_title(inputs)
	if (locale === "fr") return fr_jams_admin_filtered_empty_title(inputs)
	if (locale === "it") return it_jams_admin_filtered_empty_title(inputs)
	if (locale === "nl") return nl_jams_admin_filtered_empty_title(inputs)
	if (locale === "pl") return pl_jams_admin_filtered_empty_title(inputs)
	if (locale === "pt") return pt_jams_admin_filtered_empty_title(inputs)
	if (locale === "ru") return ru_jams_admin_filtered_empty_title(inputs)
	if (locale === "sv") return sv_jams_admin_filtered_empty_title(inputs)
	if (locale === "tr") return tr_jams_admin_filtered_empty_title(inputs)
	if (locale === "zh") return zh_jams_admin_filtered_empty_title(inputs)
	if (locale === "ja") return ja_jams_admin_filtered_empty_title(inputs)
	return en_jams_admin_filtered_empty_title(inputs)
});
