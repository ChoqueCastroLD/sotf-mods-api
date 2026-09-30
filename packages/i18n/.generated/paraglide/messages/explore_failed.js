/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_FailedInputs */

const en_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The results didn’t load. Reloading the page…`)
};

const es_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los resultados no se han cargado. Recargando la página…`)
};

const de_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Ergebnisse wurden nicht geladen. Die Seite wird neu geladen…`)
};

const fr_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les résultats ne se sont pas chargés. Rechargement de la page…`)
};

const it_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I risultati non si sono caricati. Ricarico la pagina…`)
};

const nl_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De resultaten zijn niet geladen. De pagina wordt herladen…`)
};

const pl_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyniki się nie wczytały. Odświeżamy stronę…`)
};

const pt_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os resultados não carregaram. Recarregando a página…`)
};

const ru_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Результаты не загрузились. Перезагружаем страницу…`)
};

const sv_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten laddades inte. Laddar om sidan…`)
};

const tr_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçlar yüklenemedi. Sayfa yeniden yükleniyor…`)
};

const zh_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结果未能加载，正在重新加载页面…`)
};

const ja_explore_failed = /** @type {(inputs: Explore_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果を読み込めませんでした。ページを再読み込みしています…`)
};

/**
* | output |
* | --- |
* | "The results didn’t load. Reloading the page…" |
*
* @param {Explore_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_failed = /** @type {((inputs?: Explore_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_failed(inputs)
	if (locale === "de") return de_explore_failed(inputs)
	if (locale === "fr") return fr_explore_failed(inputs)
	if (locale === "it") return it_explore_failed(inputs)
	if (locale === "nl") return nl_explore_failed(inputs)
	if (locale === "pl") return pl_explore_failed(inputs)
	if (locale === "pt") return pt_explore_failed(inputs)
	if (locale === "ru") return ru_explore_failed(inputs)
	if (locale === "sv") return sv_explore_failed(inputs)
	if (locale === "tr") return tr_explore_failed(inputs)
	if (locale === "zh") return zh_explore_failed(inputs)
	if (locale === "ja") return ja_explore_failed(inputs)
	return en_explore_failed(inputs)
});
