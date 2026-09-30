/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Matrix_TitleInputs */

const en_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status per build`)
};

const es_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado por build`)
};

const de_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status pro Build`)
};

const fr_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`État par build`)
};

const it_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato per build`)
};

const nl_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status per build`)
};

const pl_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stan dla każdego buildu`)
};

const pt_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status por build`)
};

const ru_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус по сборкам`)
};

const sv_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status per bygge`)
};

const tr_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüme göre durum`)
};

const zh_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各版本状态`)
};

const ja_admin_eco_matrix_title = /** @type {(inputs: Admin_Eco_Matrix_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルドごとの状況`)
};

/**
* | output |
* | --- |
* | "Status per build" |
*
* @param {Admin_Eco_Matrix_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_matrix_title = /** @type {((inputs?: Admin_Eco_Matrix_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Matrix_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_matrix_title(inputs)
	if (locale === "de") return de_admin_eco_matrix_title(inputs)
	if (locale === "fr") return fr_admin_eco_matrix_title(inputs)
	if (locale === "it") return it_admin_eco_matrix_title(inputs)
	if (locale === "nl") return nl_admin_eco_matrix_title(inputs)
	if (locale === "pl") return pl_admin_eco_matrix_title(inputs)
	if (locale === "pt") return pt_admin_eco_matrix_title(inputs)
	if (locale === "ru") return ru_admin_eco_matrix_title(inputs)
	if (locale === "sv") return sv_admin_eco_matrix_title(inputs)
	if (locale === "tr") return tr_admin_eco_matrix_title(inputs)
	if (locale === "zh") return zh_admin_eco_matrix_title(inputs)
	if (locale === "ja") return ja_admin_eco_matrix_title(inputs)
	return en_admin_eco_matrix_title(inputs)
});
