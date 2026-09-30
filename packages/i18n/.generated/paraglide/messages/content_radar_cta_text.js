/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Cta_TextInputs */

const en_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open the mod, pick how you played (solo, host, client or dedicated) and say whether it works. Every field report earns XP and saves other survivors a broken save.`)
};

const es_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abre el mod, elige cómo jugaste (solo, host, cliente o dedicado) y di si funciona. Cada reporte de campo da XP y le ahorra a otros supervivientes una partida rota.`)
};

const de_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffne den Mod, wähle, wie du gespielt hast (solo, Host, Client oder dedizierter Server), und sag, ob er funktioniert. Jeder Feldbericht bringt XP und erspart anderen Überlebenden einen kaputten Spielstand.`)
};

const fr_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrez le mod, choisissez comment vous avez joué (solo, hôte, client ou serveur dédié) et dites s’il fonctionne. Chaque rapport de terrain rapporte de l’XP et évite une partie cassée à d’autres survivants.`)
};

const it_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri la mod, scegli come hai giocato (da solo, host, client o dedicato) e di’ se funziona. Ogni rapporto sul campo fa guadagnare XP e risparmia ad altri sopravvissuti un salvataggio rotto.`)
};

const nl_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open de mod, kies hoe je speelde (solo, host, client of dedicated) en zeg of hij werkt. Elk veldrapport levert XP op en bespaart andere overlevenden een kapotte save.`)
};

const pl_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz mod, wybierz, jak grałeś (solo, host, klient lub serwer dedykowany) i powiedz, czy działa. Każdy raport terenowy daje XP i oszczędza innym ocalałym zepsutego zapisu.`)
};

const pt_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abra o mod, escolha como você jogou (solo, host, cliente ou dedicado) e diga se funciona. Cada relatório de campo rende XP e poupa outros sobreviventes de um save quebrado.`)
};

const ru_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Откройте мод, выберите, как вы играли (соло, хост, клиент или выделенный сервер), и скажите, работает ли он. Каждый полевой отчёт приносит XP и спасает других выживших от сломанного сохранения.`)
};

const sv_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna modden, välj hur du spelade (solo, värd, klient eller dedikerad server) och säg om den fungerar. Varje fältrapport ger XP och besparar andra överlevare ett förstört sparspel.`)
};

const tr_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modu aç, nasıl oynadığını seç (tek oyunculu, sunucu sahibi, istemci veya özel sunucu) ve çalışıp çalışmadığını söyle. Her saha raporu XP kazandırır ve diğer hayatta kalanları bozuk bir kayıttan kurtarır.`)
};

const zh_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开模组，选择你的游玩方式（单人、主机、客户端或专用服务器），告诉我们能否运行。每份实地报告都能获得 XP，并帮其他幸存者避开坏档。`)
};

const ja_content_radar_cta_text = /** @type {(inputs: Content_Radar_Cta_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を開いて、遊び方（ソロ、ホスト、クライアント、専用サーバー）を選び、動いたかどうか教えてください。フィールドレポートごとに XP がもらえ、ほかのサバイバーがセーブを壊さずに済みます。`)
};

/**
* | output |
* | --- |
* | "Open the mod, pick how you played (solo, host, client or dedicated) and say whether it works. Every field report earns XP and saves other survivors a broken ..." |
*
* @param {Content_Radar_Cta_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_cta_text = /** @type {((inputs?: Content_Radar_Cta_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Cta_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_cta_text(inputs)
	if (locale === "de") return de_content_radar_cta_text(inputs)
	if (locale === "fr") return fr_content_radar_cta_text(inputs)
	if (locale === "it") return it_content_radar_cta_text(inputs)
	if (locale === "nl") return nl_content_radar_cta_text(inputs)
	if (locale === "pl") return pl_content_radar_cta_text(inputs)
	if (locale === "pt") return pt_content_radar_cta_text(inputs)
	if (locale === "ru") return ru_content_radar_cta_text(inputs)
	if (locale === "sv") return sv_content_radar_cta_text(inputs)
	if (locale === "tr") return tr_content_radar_cta_text(inputs)
	if (locale === "zh") return zh_content_radar_cta_text(inputs)
	if (locale === "ja") return ja_content_radar_cta_text(inputs)
	return en_content_radar_cta_text(inputs)
});
