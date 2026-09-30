/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_OfflineInputs */

const en_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’re offline. The results on screen may be out of date.`)
};

const es_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estás sin conexión. Los resultados en pantalla pueden estar desactualizados.`)
};

const de_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du bist offline. Die angezeigten Ergebnisse sind eventuell veraltet.`)
};

const fr_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous êtes hors ligne. Les résultats affichés ne sont peut-être plus à jour.`)
};

const it_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei offline. I risultati sullo schermo potrebbero non essere aggiornati.`)
};

const nl_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je bent offline. De resultaten op je scherm zijn mogelijk verouderd.`)
};

const pl_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jesteś offline. Wyniki na ekranie mogą być nieaktualne.`)
};

const pt_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você está offline. Os resultados na tela podem estar desatualizados.`)
};

const ru_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы офлайн. Результаты на экране могут быть устаревшими.`)
};

const sv_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du är offline. Resultaten på skärmen kan vara inaktuella.`)
};

const tr_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevrimdışısın. Ekrandaki sonuçlar güncel olmayabilir.`)
};

const zh_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已离线。屏幕上的结果可能已过时。`)
};

const ja_explore_offline = /** @type {(inputs: Explore_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オフラインです。表示中の結果は古い可能性があります。`)
};

/**
* | output |
* | --- |
* | "You’re offline. The results on screen may be out of date." |
*
* @param {Explore_OfflineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_offline = /** @type {((inputs?: Explore_OfflineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_OfflineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_offline(inputs)
	if (locale === "de") return de_explore_offline(inputs)
	if (locale === "fr") return fr_explore_offline(inputs)
	if (locale === "it") return it_explore_offline(inputs)
	if (locale === "nl") return nl_explore_offline(inputs)
	if (locale === "pl") return pl_explore_offline(inputs)
	if (locale === "pt") return pt_explore_offline(inputs)
	if (locale === "ru") return ru_explore_offline(inputs)
	if (locale === "sv") return sv_explore_offline(inputs)
	if (locale === "tr") return tr_explore_offline(inputs)
	if (locale === "zh") return zh_explore_offline(inputs)
	if (locale === "ja") return ja_explore_offline(inputs)
	return en_explore_offline(inputs)
});
