/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Best_Dedicated_Server_Mods_DescriptionInputs */

const en_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods that run on Sons of the Forest dedicated servers: admin tools, server-side tweaks and co-op fixes.`)
};

const es_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que funcionan en servidores dedicados de Sons of the Forest: herramientas de administración, ajustes del servidor y arreglos del cooperativo.`)
};

const de_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods für dedizierte Sons-of-the-Forest-Server: Admin-Werkzeuge, serverseitige Anpassungen und Koop-Fixes.`)
};

const fr_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des mods qui tournent sur les serveurs dédiés Sons of the Forest : outils d’administration, réglages serveur et correctifs coop.`)
};

const it_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod che girano sui server dedicati di Sons of the Forest: strumenti di amministrazione, modifiche lato server e correzioni per la cooperativa.`)
};

const nl_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods die op dedicated servers van Sons of the Forest draaien: beheergereedschap, serveraanpassingen en co-opfixes.`)
};

const pl_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody działające na serwerach dedykowanych Sons of the Forest: narzędzia administracyjne, ustawienia serwera i poprawki kooperacji.`)
};

const pt_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que rodam em servidores dedicados de Sons of the Forest: ferramentas de administração, ajustes do servidor e correções do cooperativo.`)
};

const ru_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для выделенных серверов Sons of the Forest: инструменты администрирования, серверные настройки и исправления кооператива.`)
};

const sv_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar som körs på dedikerade servrar för Sons of the Forest: adminverktyg, serverinställningar och co-op-fixar.`)
};

const tr_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest özel sunucularında çalışan modlar: yönetim araçları, sunucu ayarları ve ortak oyun düzeltmeleri.`)
};

const zh_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可在 Sons of the Forest 专用服务器上运行的模组：管理工具、服务器端调整和合作修复。`)
};

const ja_explore_best_dedicated_server_mods_description = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の専用サーバーで動く MOD。管理ツール、サーバー側の調整、協力プレイの修正。`)
};

/**
* | output |
* | --- |
* | "Mods that run on Sons of the Forest dedicated servers: admin tools, server-side tweaks and co-op fixes." |
*
* @param {Explore_Best_Dedicated_Server_Mods_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_dedicated_server_mods_description = /** @type {((inputs?: Explore_Best_Dedicated_Server_Mods_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Dedicated_Server_Mods_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_dedicated_server_mods_description(inputs)
	if (locale === "de") return de_explore_best_dedicated_server_mods_description(inputs)
	if (locale === "fr") return fr_explore_best_dedicated_server_mods_description(inputs)
	if (locale === "it") return it_explore_best_dedicated_server_mods_description(inputs)
	if (locale === "nl") return nl_explore_best_dedicated_server_mods_description(inputs)
	if (locale === "pl") return pl_explore_best_dedicated_server_mods_description(inputs)
	if (locale === "pt") return pt_explore_best_dedicated_server_mods_description(inputs)
	if (locale === "ru") return ru_explore_best_dedicated_server_mods_description(inputs)
	if (locale === "sv") return sv_explore_best_dedicated_server_mods_description(inputs)
	if (locale === "tr") return tr_explore_best_dedicated_server_mods_description(inputs)
	if (locale === "zh") return zh_explore_best_dedicated_server_mods_description(inputs)
	if (locale === "ja") return ja_explore_best_dedicated_server_mods_description(inputs)
	return en_explore_best_dedicated_server_mods_description(inputs)
});
