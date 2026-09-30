/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Discovery_Title_AlsoInputs */

const en_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Players also downloaded`)
};

const es_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los jugadores también descargaron`)
};

const de_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spieler haben auch geladen`)
};

const fr_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les joueurs ont aussi téléchargé`)
};

const it_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I giocatori hanno scaricato anche`)
};

const nl_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelers downloadden ook`)
};

const pl_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracze pobrali też`)
};

const pt_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os jogadores também descarregaram`)
};

const ru_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игроки также скачали`)
};

const sv_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelare laddade också ner`)
};

const tr_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncular şunları da indirdi`)
};

const zh_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩家还下载了`)
};

const ja_discovery_title_also = /** @type {(inputs: Discovery_Title_AlsoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`こちらもダウンロードされています`)
};

/**
* | output |
* | --- |
* | "Players also downloaded" |
*
* @param {Discovery_Title_AlsoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const discovery_title_also = /** @type {((inputs?: Discovery_Title_AlsoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Discovery_Title_AlsoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_discovery_title_also(inputs)
	if (locale === "de") return de_discovery_title_also(inputs)
	if (locale === "fr") return fr_discovery_title_also(inputs)
	if (locale === "it") return it_discovery_title_also(inputs)
	if (locale === "nl") return nl_discovery_title_also(inputs)
	if (locale === "pl") return pl_discovery_title_also(inputs)
	if (locale === "pt") return pt_discovery_title_also(inputs)
	if (locale === "ru") return ru_discovery_title_also(inputs)
	if (locale === "sv") return sv_discovery_title_also(inputs)
	if (locale === "tr") return tr_discovery_title_also(inputs)
	if (locale === "zh") return zh_discovery_title_also(inputs)
	if (locale === "ja") return ja_discovery_title_also(inputs)
	return en_discovery_title_also(inputs)
});
