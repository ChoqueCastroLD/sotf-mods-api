/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Boundary_TitleInputs */

const en_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This part of the page didn’t load`)
};

const es_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta parte de la página no cargó`)
};

const de_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Teil der Seite wurde nicht geladen`)
};

const fr_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette partie de la page ne s’est pas chargée`)
};

const it_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa parte della pagina non si è caricata`)
};

const nl_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit deel van de pagina is niet geladen`)
};

const pl_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta część strony się nie wczytała`)
};

const pt_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta parte da página não carregou`)
};

const ru_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта часть страницы не загрузилась`)
};

const sv_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här delen av sidan laddades inte`)
};

const tr_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfanın bu bölümü yüklenemedi`)
};

const zh_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面的这一部分没有加载出来`)
};

const ja_errors_boundary_title = /** @type {(inputs: Errors_Boundary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページのこの部分を読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "This part of the page didn’t load" |
*
* @param {Errors_Boundary_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_boundary_title = /** @type {((inputs?: Errors_Boundary_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Boundary_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_boundary_title(inputs)
	if (locale === "de") return de_errors_boundary_title(inputs)
	if (locale === "fr") return fr_errors_boundary_title(inputs)
	if (locale === "it") return it_errors_boundary_title(inputs)
	if (locale === "nl") return nl_errors_boundary_title(inputs)
	if (locale === "pl") return pl_errors_boundary_title(inputs)
	if (locale === "pt") return pt_errors_boundary_title(inputs)
	if (locale === "ru") return ru_errors_boundary_title(inputs)
	if (locale === "sv") return sv_errors_boundary_title(inputs)
	if (locale === "tr") return tr_errors_boundary_title(inputs)
	if (locale === "zh") return zh_errors_boundary_title(inputs)
	if (locale === "ja") return ja_errors_boundary_title(inputs)
	return en_errors_boundary_title(inputs)
});
