/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Error_TitleInputs */

const en_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This screen didn’t load`)
};

const es_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta pantalla no se cargó`)
};

const de_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Ansicht wurde nicht geladen`)
};

const fr_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cet écran ne s’est pas chargé`)
};

const it_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa schermata non si è caricata`)
};

const nl_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit scherm is niet geladen`)
};

const pl_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten ekran się nie wczytał`)
};

const pt_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta tela não carregou`)
};

const ru_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Экран не загрузился`)
};

const sv_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här vyn laddades inte`)
};

const tr_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu ekran yüklenmedi`)
};

const zh_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此页面未能加载`)
};

const ja_console_error_title = /** @type {(inputs: Console_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この画面を読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "This screen didn’t load" |
*
* @param {Console_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_error_title = /** @type {((inputs?: Console_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_error_title(inputs)
	if (locale === "de") return de_console_error_title(inputs)
	if (locale === "fr") return fr_console_error_title(inputs)
	if (locale === "it") return it_console_error_title(inputs)
	if (locale === "nl") return nl_console_error_title(inputs)
	if (locale === "pl") return pl_console_error_title(inputs)
	if (locale === "pt") return pt_console_error_title(inputs)
	if (locale === "ru") return ru_console_error_title(inputs)
	if (locale === "sv") return sv_console_error_title(inputs)
	if (locale === "tr") return tr_console_error_title(inputs)
	if (locale === "zh") return zh_console_error_title(inputs)
	if (locale === "ja") return ja_console_error_title(inputs)
	return en_console_error_title(inputs)
});
