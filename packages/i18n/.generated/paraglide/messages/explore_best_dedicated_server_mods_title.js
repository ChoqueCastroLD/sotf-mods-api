/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Best_Dedicated_Server_Mods_TitleInputs */

const en_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});return /** @type {LocalizedString} */ (`Best SOTF dedicated server mods (${count__number})`)
};

const es_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});return /** @type {LocalizedString} */ (`Mejores mods para servidores dedicados de SOTF (${count__number})`)
};

const de_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});return /** @type {LocalizedString} */ (`Die besten SOTF Mods für dedizierte Server (${count__number})`)
};

const fr_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});return /** @type {LocalizedString} */ (`Meilleurs mods serveur dédié SOTF (${count__number})`)
};

const it_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});return /** @type {LocalizedString} */ (`Migliori mod per server dedicati SOTF (${count__number})`)
};

const nl_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});return /** @type {LocalizedString} */ (`Beste SOTF-mods voor dedicated servers (${count__number})`)
};

const pl_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});return /** @type {LocalizedString} */ (`Najlepsze mody na serwery dedykowane SOTF (${count__number})`)
};

const pt_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});return /** @type {LocalizedString} */ (`Melhores mods para servidor dedicado de SOTF (${count__number})`)
};

const ru_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});return /** @type {LocalizedString} */ (`Лучшие моды для серверов SOTF (${count__number})`)
};

const sv_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});return /** @type {LocalizedString} */ (`Bästa SOTF-moddarna för dedikerade servrar (${count__number})`)
};

const tr_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});return /** @type {LocalizedString} */ (`En iyi SOTF özel sunucu modları (${count__number})`)
};

const zh_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`最佳 SOTF 专用服务器模组（${count__number}）`)
};

const ja_explore_best_dedicated_server_mods_title = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`SOTF のおすすめ専用サーバー MOD（${count__number} 件）`)
};

/**
* | output |
* | --- |
* | "Best SOTF dedicated server mods ({count__number})" |
*
* @param {Explore_Best_Dedicated_Server_Mods_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_dedicated_server_mods_title = /** @type {((inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Dedicated_Server_Mods_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_dedicated_server_mods_title(inputs)
	if (locale === "de") return de_explore_best_dedicated_server_mods_title(inputs)
	if (locale === "fr") return fr_explore_best_dedicated_server_mods_title(inputs)
	if (locale === "it") return it_explore_best_dedicated_server_mods_title(inputs)
	if (locale === "nl") return nl_explore_best_dedicated_server_mods_title(inputs)
	if (locale === "pl") return pl_explore_best_dedicated_server_mods_title(inputs)
	if (locale === "pt") return pt_explore_best_dedicated_server_mods_title(inputs)
	if (locale === "ru") return ru_explore_best_dedicated_server_mods_title(inputs)
	if (locale === "sv") return sv_explore_best_dedicated_server_mods_title(inputs)
	if (locale === "tr") return tr_explore_best_dedicated_server_mods_title(inputs)
	if (locale === "zh") return zh_explore_best_dedicated_server_mods_title(inputs)
	if (locale === "ja") return ja_explore_best_dedicated_server_mods_title(inputs)
	return en_explore_best_dedicated_server_mods_title(inputs)
});
