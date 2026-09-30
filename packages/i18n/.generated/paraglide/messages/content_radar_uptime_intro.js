/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ days: NonNullable<unknown> }} Content_Radar_Uptime_IntroInputs */

const en_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("en", i?.days, {});return /** @type {LocalizedString} */ (`The site, API, downloads and database are probed every 5 minutes. Last ${days__number} days, UTC.`)
};

const es_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("es", i?.days, {});return /** @type {LocalizedString} */ (`El sitio, la API, las descargas y la base de datos se comprueban cada 5 minutos. Últimos ${days__number} días, UTC.`)
};

const de_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("de", i?.days, {});return /** @type {LocalizedString} */ (`Website, API, Downloads und Datenbank werden alle 5 Minuten geprüft. Letzte ${days__number} Tage, UTC.`)
};

const fr_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("fr", i?.days, {});return /** @type {LocalizedString} */ (`Le site, l’API, les téléchargements et la base de données sont testés toutes les 5 minutes. ${days__number} derniers jours, UTC.`)
};

const it_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("it", i?.days, {});return /** @type {LocalizedString} */ (`Sito, API, download e database vengono controllati ogni 5 minuti. Ultimi ${days__number} giorni, UTC.`)
};

const nl_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("nl", i?.days, {});return /** @type {LocalizedString} */ (`De site, API, downloads en database worden elke 5 minuten getest. Laatste ${days__number} dagen, UTC.`)
};

const pl_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("pl", i?.days, {});return /** @type {LocalizedString} */ (`Strona, API, pobieranie i baza danych są sprawdzane co 5 minut. Ostatnie ${days__number} dni, UTC.`)
};

const pt_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("pt", i?.days, {});return /** @type {LocalizedString} */ (`O site, a API, os downloads e o banco de dados são verificados a cada 5 minutos. Últimos ${days__number} dias, UTC.`)
};

const ru_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("ru", i?.days, {});return /** @type {LocalizedString} */ (`Сайт, API, загрузки и база данных проверяются каждые 5 минут. Последние ${days__number} дн., UTC.`)
};

const sv_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("sv", i?.days, {});return /** @type {LocalizedString} */ (`Webbplatsen, API:t, nedladdningarna och databasen kontrolleras var 5:e minut. Senaste ${days__number} dagarna, UTC.`)
};

const tr_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("tr", i?.days, {});return /** @type {LocalizedString} */ (`Site, API, indirmeler ve veritabanı her 5 dakikada bir denetlenir. Son ${days__number} gün, UTC.`)
};

const zh_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("zh", i?.days, {});return /** @type {LocalizedString} */ (`站点、API、下载和数据库每 5 分钟检测一次。最近 ${days__number} 天（UTC）。`)
};

const ja_content_radar_uptime_intro = /** @type {(inputs: Content_Radar_Uptime_IntroInputs) => LocalizedString} */ (i) => {
	const days__number = registry.number("ja", i?.days, {});return /** @type {LocalizedString} */ (`サイト・API・ダウンロード・データベースを 5 分ごとに確認しています。直近 ${days__number} 日間（UTC）。`)
};

/**
* | output |
* | --- |
* | "The site, API, downloads and database are probed every 5 minutes. Last {days__number} days, UTC." |
*
* @param {Content_Radar_Uptime_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_intro = /** @type {((inputs: Content_Radar_Uptime_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_intro(inputs)
	if (locale === "de") return de_content_radar_uptime_intro(inputs)
	if (locale === "fr") return fr_content_radar_uptime_intro(inputs)
	if (locale === "it") return it_content_radar_uptime_intro(inputs)
	if (locale === "nl") return nl_content_radar_uptime_intro(inputs)
	if (locale === "pl") return pl_content_radar_uptime_intro(inputs)
	if (locale === "pt") return pt_content_radar_uptime_intro(inputs)
	if (locale === "ru") return ru_content_radar_uptime_intro(inputs)
	if (locale === "sv") return sv_content_radar_uptime_intro(inputs)
	if (locale === "tr") return tr_content_radar_uptime_intro(inputs)
	if (locale === "zh") return zh_content_radar_uptime_intro(inputs)
	if (locale === "ja") return ja_content_radar_uptime_intro(inputs)
	return en_content_radar_uptime_intro(inputs)
});
