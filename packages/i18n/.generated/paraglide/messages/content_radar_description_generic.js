/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Description_GenericInputs */

const en_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Which Sons of the Forest mods work on the current game patch: RedLoader status and field reports from players for the 50 most downloaded mods.`)
};

const es_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué mods de Sons of the Forest funcionan en el parche actual del juego: estado de RedLoader y reportes de campo de los jugadores para los 50 mods más descargados.`)
};

const de_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welche Sons-of-the-Forest-Mods mit dem aktuellen Spielpatch funktionieren: RedLoader-Status und Feldberichte der Spieler zu den 50 meistgeladenen Mods.`)
};

const fr_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quels mods Sons of the Forest fonctionnent sur le patch actuel du jeu : état de RedLoader et rapports de terrain des joueurs pour les 50 mods les plus téléchargés.`)
};

const it_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quali mod di Sons of the Forest funzionano con la patch attuale del gioco: stato di RedLoader e rapporti sul campo dei giocatori per le 50 mod più scaricate.`)
};

const nl_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welke Sons of the Forest-mods werken op de huidige gamepatch: status van RedLoader en veldrapporten van spelers voor de 50 meest gedownloade mods.`)
};

const pl_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Które mody do Sons of the Forest działają na obecnej łatce gry: stan RedLoadera i raporty terenowe graczy dla 50 najczęściej pobieranych modów.`)
};

const pt_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quais mods de Sons of the Forest funcionam no patch atual do jogo: status do RedLoader e relatórios de campo dos jogadores para os 50 mods mais baixados.`)
};

const ru_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Какие моды Sons of the Forest работают на текущем патче игры: статус RedLoader и полевые отчёты игроков по 50 самым скачиваемым модам.`)
};

const sv_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vilka Sons of the Forest-moddar som fungerar på den aktuella spelpatchen: RedLoaders status och fältrapporter från spelare för de 50 mest nedladdade moddarna.`)
};

const tr_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hangi Sons of the Forest modları mevcut oyun yamasında çalışıyor: RedLoader durumu ve en çok indirilen 50 mod için oyuncuların saha raporları.`)
};

const zh_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`哪些 Sons of the Forest 模组能在当前游戏补丁上运行：RedLoader 状态以及玩家对下载量前 50 模组的实地报告。`)
};

const ja_content_radar_description_generic = /** @type {(inputs: Content_Radar_Description_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のゲームパッチで動く Sons of the Forest MOD：RedLoader の状態と、ダウンロード数上位 50 の MOD に対するプレイヤーのフィールドレポート。`)
};

/**
* | output |
* | --- |
* | "Which Sons of the Forest mods work on the current game patch: RedLoader status and field reports from players for the 50 most downloaded mods." |
*
* @param {Content_Radar_Description_GenericInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_description_generic = /** @type {((inputs?: Content_Radar_Description_GenericInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Description_GenericInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_description_generic(inputs)
	if (locale === "de") return de_content_radar_description_generic(inputs)
	if (locale === "fr") return fr_content_radar_description_generic(inputs)
	if (locale === "it") return it_content_radar_description_generic(inputs)
	if (locale === "nl") return nl_content_radar_description_generic(inputs)
	if (locale === "pl") return pl_content_radar_description_generic(inputs)
	if (locale === "pt") return pt_content_radar_description_generic(inputs)
	if (locale === "ru") return ru_content_radar_description_generic(inputs)
	if (locale === "sv") return sv_content_radar_description_generic(inputs)
	if (locale === "tr") return tr_content_radar_description_generic(inputs)
	if (locale === "zh") return zh_content_radar_description_generic(inputs)
	if (locale === "ja") return ja_content_radar_description_generic(inputs)
	return en_content_radar_description_generic(inputs)
});
