/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_Multiplayer_ServersInputs */

const en_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods for co-op sessions and dedicated servers: admin tools, sync fixes and player management.`)
};

const es_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods para partidas cooperativas y servidores dedicados: herramientas de administración, arreglos de sincronización y gestión de jugadores.`)
};

const de_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods für Koop-Runden und dedizierte Server: Admin-Werkzeuge, Sync-Fixes und Spielerverwaltung.`)
};

const fr_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods pour le coop et les serveurs dédiés : outils d’administration, correctifs de synchronisation et gestion des joueurs.`)
};

const it_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod per partite cooperative e server dedicati: strumenti di amministrazione, correzioni di sincronizzazione e gestione dei giocatori.`)
};

const nl_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods voor co-op en dedicated servers: beheergereedschap, synchronisatiefixes en spelersbeheer.`)
};

const pl_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody do gry w kooperacji i na serwerach dedykowanych: narzędzia administracyjne, poprawki synchronizacji i zarządzanie graczami.`)
};

const pt_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods para cooperativo e servidores dedicados: ferramentas de administração, correções de sincronização e gestão de jogadores.`)
};

const ru_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для кооператива и выделенных серверов: инструменты администрирования, исправления синхронизации и управление игроками.`)
};

const sv_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar för co-op och dedikerade servrar: adminverktyg, synkfixar och spelarhantering.`)
};

const tr_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ortak oyun ve özel sunucular için modlar: yönetim araçları, senkronizasyon düzeltmeleri ve oyuncu yönetimi.`)
};

const zh_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`适用于合作模式和专用服务器的模组：管理工具、同步修复和玩家管理。`)
};

const ja_explore_category_intro_multiplayer_servers = /** @type {(inputs: Explore_Category_Intro_Multiplayer_ServersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`協力プレイと専用サーバー向けの MOD。管理ツール、同期の修正、プレイヤー管理。`)
};

/**
* | output |
* | --- |
* | "Mods for co-op sessions and dedicated servers: admin tools, sync fixes and player management." |
*
* @param {Explore_Category_Intro_Multiplayer_ServersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_multiplayer_servers = /** @type {((inputs?: Explore_Category_Intro_Multiplayer_ServersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_Multiplayer_ServersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_multiplayer_servers(inputs)
	if (locale === "de") return de_explore_category_intro_multiplayer_servers(inputs)
	if (locale === "fr") return fr_explore_category_intro_multiplayer_servers(inputs)
	if (locale === "it") return it_explore_category_intro_multiplayer_servers(inputs)
	if (locale === "nl") return nl_explore_category_intro_multiplayer_servers(inputs)
	if (locale === "pl") return pl_explore_category_intro_multiplayer_servers(inputs)
	if (locale === "pt") return pt_explore_category_intro_multiplayer_servers(inputs)
	if (locale === "ru") return ru_explore_category_intro_multiplayer_servers(inputs)
	if (locale === "sv") return sv_explore_category_intro_multiplayer_servers(inputs)
	if (locale === "tr") return tr_explore_category_intro_multiplayer_servers(inputs)
	if (locale === "zh") return zh_explore_category_intro_multiplayer_servers(inputs)
	if (locale === "ja") return ja_explore_category_intro_multiplayer_servers(inputs)
	return en_explore_category_intro_multiplayer_servers(inputs)
});
