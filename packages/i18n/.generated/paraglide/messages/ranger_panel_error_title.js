/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Panel_Error_TitleInputs */

const en_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This didn’t load`)
};

const es_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto no se ha cargado`)
};

const de_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das wurde nicht geladen`)
};

const fr_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce contenu ne s’est pas chargé`)
};

const it_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato caricato`)
};

const nl_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is niet geladen`)
};

const pl_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To się nie wczytało`)
};

const pt_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isto não carregou`)
};

const ru_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить`)
};

const sv_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här lästes inte in`)
};

const tr_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yüklenemedi`)
};

const zh_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载失败`)
};

const ja_ranger_panel_error_title = /** @type {(inputs: Ranger_Panel_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "This didn’t load" |
*
* @param {Ranger_Panel_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_panel_error_title = /** @type {((inputs?: Ranger_Panel_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Panel_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_panel_error_title(inputs)
	if (locale === "de") return de_ranger_panel_error_title(inputs)
	if (locale === "fr") return fr_ranger_panel_error_title(inputs)
	if (locale === "it") return it_ranger_panel_error_title(inputs)
	if (locale === "nl") return nl_ranger_panel_error_title(inputs)
	if (locale === "pl") return pl_ranger_panel_error_title(inputs)
	if (locale === "pt") return pt_ranger_panel_error_title(inputs)
	if (locale === "ru") return ru_ranger_panel_error_title(inputs)
	if (locale === "sv") return sv_ranger_panel_error_title(inputs)
	if (locale === "tr") return tr_ranger_panel_error_title(inputs)
	if (locale === "zh") return zh_ranger_panel_error_title(inputs)
	if (locale === "ja") return ja_ranger_panel_error_title(inputs)
	return en_ranger_panel_error_title(inputs)
});
