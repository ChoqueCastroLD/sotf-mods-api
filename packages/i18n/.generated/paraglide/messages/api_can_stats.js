/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Can_StatsInputs */

const en_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read your stats: downloads, views and followers over time`)
};

const es_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver tus estadísticas: descargas, visitas y seguidores en el tiempo`)
};

const de_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Statistiken lesen: Downloads, Aufrufe und Follower im Zeitverlauf`)
};

const fr_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consulter vos statistiques : téléchargements, vues et abonnés dans le temps`)
};

const it_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggere le tue statistiche: download, visualizzazioni e follower nel tempo`)
};

const nl_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je statistieken lezen: downloads, weergaven en volgers door de tijd`)
};

const pl_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czytać statystyki: pobrania, wyświetlenia i obserwujących w czasie`)
};

const pt_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver suas estatísticas: downloads, visualizações e seguidores ao longo do tempo`)
};

const ru_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть статистику: скачивания, просмотры и подписчиков во времени`)
};

const sv_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läsa din statistik: nedladdningar, visningar och följare över tid`)
};

const tr_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstatistiklerini oku: zaman içinde indirme, görüntülenme ve takipçiler`)
};

const zh_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看统计：下载量、浏览量和关注者变化`)
};

const ja_api_can_stats = /** @type {(inputs: Api_Can_StatsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`統計を確認：ダウンロード数、閲覧数、フォロワーの推移`)
};

/**
* | output |
* | --- |
* | "Read your stats: downloads, views and followers over time" |
*
* @param {Api_Can_StatsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_can_stats = /** @type {((inputs?: Api_Can_StatsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Can_StatsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_can_stats(inputs)
	if (locale === "de") return de_api_can_stats(inputs)
	if (locale === "fr") return fr_api_can_stats(inputs)
	if (locale === "it") return it_api_can_stats(inputs)
	if (locale === "nl") return nl_api_can_stats(inputs)
	if (locale === "pl") return pl_api_can_stats(inputs)
	if (locale === "pt") return pt_api_can_stats(inputs)
	if (locale === "ru") return ru_api_can_stats(inputs)
	if (locale === "sv") return sv_api_can_stats(inputs)
	if (locale === "tr") return tr_api_can_stats(inputs)
	if (locale === "zh") return zh_api_can_stats(inputs)
	if (locale === "ja") return ja_api_can_stats(inputs)
	return en_api_can_stats(inputs)
});
