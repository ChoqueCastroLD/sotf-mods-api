/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Meta_Not_Found_TitleInputs */

const en_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page not found`)
};

const es_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página no encontrada`)
};

const de_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite nicht gefunden`)
};

const fr_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page introuvable`)
};

const it_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina non trovata`)
};

const nl_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina niet gevonden`)
};

const pl_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono strony`)
};

const pt_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página não encontrada`)
};

const ru_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страница не найдена`)
};

const sv_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidan hittades inte`)
};

const tr_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa bulunamadı`)
};

const zh_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面未找到`)
};

const ja_meta_not_found_title = /** @type {(inputs: Meta_Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページが見つかりません`)
};

/**
* | output |
* | --- |
* | "Page not found" |
*
* @param {Meta_Not_Found_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_not_found_title = /** @type {((inputs?: Meta_Not_Found_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Not_Found_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_not_found_title(inputs)
	if (locale === "de") return de_meta_not_found_title(inputs)
	if (locale === "fr") return fr_meta_not_found_title(inputs)
	if (locale === "it") return it_meta_not_found_title(inputs)
	if (locale === "nl") return nl_meta_not_found_title(inputs)
	if (locale === "pl") return pl_meta_not_found_title(inputs)
	if (locale === "pt") return pt_meta_not_found_title(inputs)
	if (locale === "ru") return ru_meta_not_found_title(inputs)
	if (locale === "sv") return sv_meta_not_found_title(inputs)
	if (locale === "tr") return tr_meta_not_found_title(inputs)
	if (locale === "zh") return zh_meta_not_found_title(inputs)
	if (locale === "ja") return ja_meta_not_found_title(inputs)
	return en_meta_not_found_title(inputs)
});
