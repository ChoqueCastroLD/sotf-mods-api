/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_LoadingInputs */

const en_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading results…`)
};

const es_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando resultados…`)
};

const de_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnisse werden geladen…`)
};

const fr_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement des résultats…`)
};

const it_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caricamento dei risultati…`)
};

const nl_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten laden…`)
};

const pl_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytywanie wyników…`)
};

const pt_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando resultados…`)
};

const ru_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загружаем результаты…`)
};

const sv_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laddar resultat…`)
};

const tr_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçlar yükleniyor…`)
};

const zh_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载结果…`)
};

const ja_explore_loading = /** @type {(inputs: Explore_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果を読み込んでいます…`)
};

/**
* | output |
* | --- |
* | "Loading results…" |
*
* @param {Explore_LoadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_loading = /** @type {((inputs?: Explore_LoadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_LoadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_loading(inputs)
	if (locale === "de") return de_explore_loading(inputs)
	if (locale === "fr") return fr_explore_loading(inputs)
	if (locale === "it") return it_explore_loading(inputs)
	if (locale === "nl") return nl_explore_loading(inputs)
	if (locale === "pl") return pl_explore_loading(inputs)
	if (locale === "pt") return pt_explore_loading(inputs)
	if (locale === "ru") return ru_explore_loading(inputs)
	if (locale === "sv") return sv_explore_loading(inputs)
	if (locale === "tr") return tr_explore_loading(inputs)
	if (locale === "zh") return zh_explore_loading(inputs)
	if (locale === "ja") return ja_explore_loading(inputs)
	return en_explore_loading(inputs)
});
