/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Hub_DescriptionInputs */

const en_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Themed, time-boxed competitions where the community builds new Sons of the Forest mods and votes for the best ones.`)
};

const es_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concursos temáticos con tiempo limitado donde la comunidad crea nuevos mods de Sons of the Forest y vota por los mejores.`)
};

const de_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitlich begrenzte Wettbewerbe mit Thema, bei denen die Community neue Sons-of-the-Forest-Mods baut und für die besten abstimmt.`)
};

const fr_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des concours à thème, limités dans le temps, où la communauté crée de nouveaux mods Sons of the Forest et vote pour les meilleurs.`)
};

const it_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gare a tema con tempo limitato in cui la community crea nuove mod di Sons of the Forest e vota le migliori.`)
};

const nl_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thematische wedstrijden met een tijdslimiet waarin de community nieuwe Sons of the Forest-mods bouwt en op de beste stemt.`)
};

const pl_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tematyczne konkursy z limitem czasu, w których społeczność tworzy nowe mody do Sons of the Forest i głosuje na najlepsze.`)
};

const pt_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Competições temáticas com tempo limitado em que a comunidade cria novos mods de Sons of the Forest e vota nos melhores.`)
};

const ru_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тематические соревнования с ограничением по времени: сообщество создаёт новые моды для Sons of the Forest и голосует за лучшие.`)
};

const sv_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tidsbegränsade tävlingar med tema där communityn bygger nya Sons of the Forest-moddar och röstar på de bästa.`)
};

const tr_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluğun yeni Sons of the Forest modları yaptığı ve en iyilere oy verdiği, temalı ve süreli yarışmalar.`)
};

const zh_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`限时主题比赛：社区制作新的《Sons of the Forest》模组，并为最佳作品投票。`)
};

const ja_jams_hub_description = /** @type {(inputs: Jams_Hub_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テーマと期限のあるコンテスト。コミュニティが新しい Sons of the Forest の Mod を作り、ベストに投票します。`)
};

/**
* | output |
* | --- |
* | "Themed, time-boxed competitions where the community builds new Sons of the Forest mods and votes for the best ones." |
*
* @param {Jams_Hub_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_hub_description = /** @type {((inputs?: Jams_Hub_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Hub_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_hub_description(inputs)
	if (locale === "de") return de_jams_hub_description(inputs)
	if (locale === "fr") return fr_jams_hub_description(inputs)
	if (locale === "it") return it_jams_hub_description(inputs)
	if (locale === "nl") return nl_jams_hub_description(inputs)
	if (locale === "pl") return pl_jams_hub_description(inputs)
	if (locale === "pt") return pt_jams_hub_description(inputs)
	if (locale === "ru") return ru_jams_hub_description(inputs)
	if (locale === "sv") return sv_jams_hub_description(inputs)
	if (locale === "tr") return tr_jams_hub_description(inputs)
	if (locale === "zh") return zh_jams_hub_description(inputs)
	if (locale === "ja") return ja_jams_hub_description(inputs)
	return en_jams_hub_description(inputs)
});
