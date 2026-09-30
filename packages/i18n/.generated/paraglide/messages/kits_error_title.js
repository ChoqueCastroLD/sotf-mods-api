/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Error_TitleInputs */

const en_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The kits didn’t load`)
};

const es_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se han podido cargar los kits`)
};

const de_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Kits konnten nicht geladen werden`)
};

const fr_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les kits ne se sont pas chargés`)
};

const it_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile caricare i kit`)
};

const nl_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De kits konden niet worden geladen`)
};

const pl_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać zestawów`)
};

const pt_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar os kits`)
};

const ru_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить наборы`)
};

const sv_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiten kunde inte laddas`)
};

const tr_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitler yüklenemedi`)
};

const zh_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装加载失败`)
};

const ja_kits_error_title = /** @type {(inputs: Kits_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "The kits didn’t load" |
*
* @param {Kits_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_error_title = /** @type {((inputs?: Kits_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_error_title(inputs)
	if (locale === "de") return de_kits_error_title(inputs)
	if (locale === "fr") return fr_kits_error_title(inputs)
	if (locale === "it") return it_kits_error_title(inputs)
	if (locale === "nl") return nl_kits_error_title(inputs)
	if (locale === "pl") return pl_kits_error_title(inputs)
	if (locale === "pt") return pt_kits_error_title(inputs)
	if (locale === "ru") return ru_kits_error_title(inputs)
	if (locale === "sv") return sv_kits_error_title(inputs)
	if (locale === "tr") return tr_kits_error_title(inputs)
	if (locale === "zh") return zh_kits_error_title(inputs)
	if (locale === "ja") return ja_kits_error_title(inputs)
	return en_kits_error_title(inputs)
});
