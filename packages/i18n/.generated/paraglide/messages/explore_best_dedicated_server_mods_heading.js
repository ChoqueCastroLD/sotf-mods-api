/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Best_Dedicated_Server_Mods_HeadingInputs */

const en_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The best dedicated server mods`)
};

const es_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mejores mods para servidores dedicados`)
};

const de_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die besten Mods für dedizierte Server`)
};

const fr_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les meilleurs mods pour serveur dédié`)
};

const it_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le migliori mod per server dedicati`)
};

const nl_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beste mods voor dedicated servers`)
};

const pl_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najlepsze mody na serwery dedykowane`)
};

const pt_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os melhores mods para servidor dedicado`)
};

const ru_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лучшие моды для выделенных серверов`)
};

const sv_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De bästa moddarna för dedikerade servrar`)
};

const tr_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En iyi özel sunucu modları`)
};

const zh_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最佳专用服务器模组`)
};

const ja_explore_best_dedicated_server_mods_heading = /** @type {(inputs: Explore_Best_Dedicated_Server_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`おすすめの専用サーバー MOD`)
};

/**
* | output |
* | --- |
* | "The best dedicated server mods" |
*
* @param {Explore_Best_Dedicated_Server_Mods_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_dedicated_server_mods_heading = /** @type {((inputs?: Explore_Best_Dedicated_Server_Mods_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Dedicated_Server_Mods_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_dedicated_server_mods_heading(inputs)
	if (locale === "de") return de_explore_best_dedicated_server_mods_heading(inputs)
	if (locale === "fr") return fr_explore_best_dedicated_server_mods_heading(inputs)
	if (locale === "it") return it_explore_best_dedicated_server_mods_heading(inputs)
	if (locale === "nl") return nl_explore_best_dedicated_server_mods_heading(inputs)
	if (locale === "pl") return pl_explore_best_dedicated_server_mods_heading(inputs)
	if (locale === "pt") return pt_explore_best_dedicated_server_mods_heading(inputs)
	if (locale === "ru") return ru_explore_best_dedicated_server_mods_heading(inputs)
	if (locale === "sv") return sv_explore_best_dedicated_server_mods_heading(inputs)
	if (locale === "tr") return tr_explore_best_dedicated_server_mods_heading(inputs)
	if (locale === "zh") return zh_explore_best_dedicated_server_mods_heading(inputs)
	if (locale === "ja") return ja_explore_best_dedicated_server_mods_heading(inputs)
	return en_explore_best_dedicated_server_mods_heading(inputs)
});
