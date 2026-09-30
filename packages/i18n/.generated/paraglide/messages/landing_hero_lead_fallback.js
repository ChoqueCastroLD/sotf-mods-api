/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Hero_Lead_FallbackInputs */

const en_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mods, builds and Kits, with compatibility reports from players and direct downloads. No waiting, no sign-up.`)
};

const es_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, builds y Kits de Sons of the Forest, con reportes de compatibilidad de los jugadores y descargas directas. Sin esperas ni registro.`)
};

const de_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, Builds und Kits für Sons of the Forest, mit Kompatibilitätsberichten von Spielern und direkten Downloads. Kein Warten, keine Anmeldung.`)
};

const fr_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, builds et Kits pour Sons of the Forest, avec les rapports de compatibilité des joueurs et des téléchargements directs. Sans attente ni inscription.`)
};

const it_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod, build e Kit per Sons of the Forest, con segnalazioni di compatibilità dei giocatori e download diretti. Niente attese, niente registrazione.`)
};

const nl_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, builds en Kits voor Sons of the Forest, met compatibiliteitsrapporten van spelers en directe downloads. Geen wachttijd, geen account nodig.`)
};

const pl_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody, buildy i zestawy do Sons of the Forest, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`)
};

const pt_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, builds e Kits de Sons of the Forest, com relatórios de compatibilidade dos jogadores e downloads diretos. Sem espera, sem cadastro.`)
};

const ru_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды, постройки и наборы для Sons of the Forest — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`)
};

const sv_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar, byggen och kit till Sons of the Forest, med kompatibilitetsrapporter från spelare och direkta nedladdningar. Ingen väntan, inget konto.`)
};

const tr_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest modları, yapıları ve kitleri; oyunculardan uyumluluk raporları ve doğrudan indirmelerle. Bekleme yok, kayıt yok.`)
};

const zh_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 的模组、建筑和套装，附带玩家的兼容性报告和直接下载。无需等待，无需注册。`)
};

const ja_landing_hero_lead_fallback = /** @type {(inputs: Landing_Hero_Lead_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest のMOD、建築、キット。プレイヤーによる互換性レポートと直接ダウンロード付き。待ち時間も登録も不要です。`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest mods, builds and Kits, with compatibility reports from players and direct downloads. No waiting, no sign-up." |
*
* @param {Landing_Hero_Lead_FallbackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_hero_lead_fallback = /** @type {((inputs?: Landing_Hero_Lead_FallbackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Hero_Lead_FallbackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_hero_lead_fallback(inputs)
	if (locale === "de") return de_landing_hero_lead_fallback(inputs)
	if (locale === "fr") return fr_landing_hero_lead_fallback(inputs)
	if (locale === "it") return it_landing_hero_lead_fallback(inputs)
	if (locale === "nl") return nl_landing_hero_lead_fallback(inputs)
	if (locale === "pl") return pl_landing_hero_lead_fallback(inputs)
	if (locale === "pt") return pt_landing_hero_lead_fallback(inputs)
	if (locale === "ru") return ru_landing_hero_lead_fallback(inputs)
	if (locale === "sv") return sv_landing_hero_lead_fallback(inputs)
	if (locale === "tr") return tr_landing_hero_lead_fallback(inputs)
	if (locale === "zh") return zh_landing_hero_lead_fallback(inputs)
	if (locale === "ja") return ja_landing_hero_lead_fallback(inputs)
	return en_landing_hero_lead_fallback(inputs)
});
