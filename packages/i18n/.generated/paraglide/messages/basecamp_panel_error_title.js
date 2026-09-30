/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Panel_Error_TitleInputs */

const en_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This part did not load`)
};

const es_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta parte no se cargó`)
};

const de_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Teil wurde nicht geladen`)
};

const fr_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette partie ne s’est pas chargée`)
};

const it_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa parte non si è caricata`)
};

const nl_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit deel is niet geladen`)
};

const pl_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta część się nie wczytała`)
};

const pt_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta parte não carregou`)
};

const ru_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта часть не загрузилась`)
};

const sv_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här delen laddades inte`)
};

const tr_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bölüm yüklenmedi`)
};

const zh_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这部分没有加载出来`)
};

const ja_basecamp_panel_error_title = /** @type {(inputs: Basecamp_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この部分を読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "This part did not load" |
*
* @param {Basecamp_Panel_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_panel_error_title = /** @type {((inputs?: Basecamp_Panel_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Panel_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_panel_error_title(inputs)
	if (locale === "de") return de_basecamp_panel_error_title(inputs)
	if (locale === "fr") return fr_basecamp_panel_error_title(inputs)
	if (locale === "it") return it_basecamp_panel_error_title(inputs)
	if (locale === "nl") return nl_basecamp_panel_error_title(inputs)
	if (locale === "pl") return pl_basecamp_panel_error_title(inputs)
	if (locale === "pt") return pt_basecamp_panel_error_title(inputs)
	if (locale === "ru") return ru_basecamp_panel_error_title(inputs)
	if (locale === "sv") return sv_basecamp_panel_error_title(inputs)
	if (locale === "tr") return tr_basecamp_panel_error_title(inputs)
	if (locale === "zh") return zh_basecamp_panel_error_title(inputs)
	if (locale === "ja") return ja_basecamp_panel_error_title(inputs)
	return en_basecamp_panel_error_title(inputs)
});
