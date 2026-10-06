/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Error_TitleInputs */

const en_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The list could not be loaded`)
};

const es_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cargar la lista`)
};

const de_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Liste konnte nicht geladen werden`)
};

const fr_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger la liste`)
};

const it_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare l’elenco`)
};

const nl_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De lijst kon niet worden geladen`)
};

const pl_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać listy`)
};

const pt_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar a lista`)
};

const ru_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить список`)
};

const sv_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listan kunde inte läsas in`)
};

const tr_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste yüklenemedi`)
};

const zh_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载列表`)
};

const ja_explore_error_title = /** @type {(inputs: Explore_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リストを読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "The list could not be loaded" |
*
* @param {Explore_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_error_title = /** @type {((inputs?: Explore_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_error_title(inputs)
	if (locale === "de") return de_explore_error_title(inputs)
	if (locale === "fr") return fr_explore_error_title(inputs)
	if (locale === "it") return it_explore_error_title(inputs)
	if (locale === "nl") return nl_explore_error_title(inputs)
	if (locale === "pl") return pl_explore_error_title(inputs)
	if (locale === "pt") return pt_explore_error_title(inputs)
	if (locale === "ru") return ru_explore_error_title(inputs)
	if (locale === "sv") return sv_explore_error_title(inputs)
	if (locale === "tr") return tr_explore_error_title(inputs)
	if (locale === "zh") return zh_explore_error_title(inputs)
	if (locale === "ja") return ja_explore_error_title(inputs)
	return en_explore_error_title(inputs)
});
