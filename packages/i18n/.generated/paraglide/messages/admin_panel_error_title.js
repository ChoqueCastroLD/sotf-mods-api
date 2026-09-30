/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Panel_Error_TitleInputs */

const en_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This panel didn't load`)
};

const es_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este panel no se ha cargado`)
};

const de_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Bereich wurde nicht geladen`)
};

const fr_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce panneau ne s’est pas chargé`)
};

const it_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo pannello non è stato caricato`)
};

const nl_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit paneel is niet geladen`)
};

const pl_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten panel się nie wczytał`)
};

const pt_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este painel não carregou`)
};

const ru_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта панель не загрузилась`)
};

const sv_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här panelen laddades inte`)
};

const tr_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu panel yüklenmedi`)
};

const zh_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此面板未能加载`)
};

const ja_admin_panel_error_title = /** @type {(inputs: Admin_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このパネルを読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "This panel didn't load" |
*
* @param {Admin_Panel_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_panel_error_title = /** @type {((inputs?: Admin_Panel_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Panel_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_panel_error_title(inputs)
	if (locale === "de") return de_admin_panel_error_title(inputs)
	if (locale === "fr") return fr_admin_panel_error_title(inputs)
	if (locale === "it") return it_admin_panel_error_title(inputs)
	if (locale === "nl") return nl_admin_panel_error_title(inputs)
	if (locale === "pl") return pl_admin_panel_error_title(inputs)
	if (locale === "pt") return pt_admin_panel_error_title(inputs)
	if (locale === "ru") return ru_admin_panel_error_title(inputs)
	if (locale === "sv") return sv_admin_panel_error_title(inputs)
	if (locale === "tr") return tr_admin_panel_error_title(inputs)
	if (locale === "zh") return zh_admin_panel_error_title(inputs)
	if (locale === "ja") return ja_admin_panel_error_title(inputs)
	return en_admin_panel_error_title(inputs)
});
