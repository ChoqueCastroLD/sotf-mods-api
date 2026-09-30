/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Recat_Select_VisibleInputs */

const en_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Select the ${i?.count} rows shown`)
};

const es_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seleccionar las ${i?.count} filas visibles`)
};

const de_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die ${i?.count} angezeigten Zeilen auswählen`)
};

const fr_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sélectionner les ${i?.count} lignes affichées`)
};

const it_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seleziona le ${i?.count} righe mostrate`)
};

const nl_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De ${i?.count} getoonde rijen selecteren`)
};

const pl_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaznacz widoczne wiersze (${i?.count})`)
};

const pt_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Selecionar as ${i?.count} linhas exibidas`)
};

const ru_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выбрать показанные строки (${i?.count})`)
};

const sv_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markera de ${i?.count} visade raderna`)
};

const tr_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gösterilen ${i?.count} satırı seç`)
};

const zh_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`选择显示的 ${i?.count} 行`)
};

const ja_admin_recat_select_visible = /** @type {(inputs: Admin_Recat_Select_VisibleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`表示中の ${i?.count} 行を選択`)
};

/**
* | output |
* | --- |
* | "Select the {count} rows shown" |
*
* @param {Admin_Recat_Select_VisibleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_select_visible = /** @type {((inputs: Admin_Recat_Select_VisibleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Select_VisibleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_select_visible(inputs)
	if (locale === "de") return de_admin_recat_select_visible(inputs)
	if (locale === "fr") return fr_admin_recat_select_visible(inputs)
	if (locale === "it") return it_admin_recat_select_visible(inputs)
	if (locale === "nl") return nl_admin_recat_select_visible(inputs)
	if (locale === "pl") return pl_admin_recat_select_visible(inputs)
	if (locale === "pt") return pt_admin_recat_select_visible(inputs)
	if (locale === "ru") return ru_admin_recat_select_visible(inputs)
	if (locale === "sv") return sv_admin_recat_select_visible(inputs)
	if (locale === "tr") return tr_admin_recat_select_visible(inputs)
	if (locale === "zh") return zh_admin_recat_select_visible(inputs)
	if (locale === "ja") return ja_admin_recat_select_visible(inputs)
	return en_admin_recat_select_visible(inputs)
});
