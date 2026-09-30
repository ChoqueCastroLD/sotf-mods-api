/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown>, share: NonNullable<unknown> }} Landing_Radar_SummaryInputs */

const en_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game ${i?.build} · ${i?.share} of the top 50 mods confirmed on this patch`)
};

const es_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Juego ${i?.build} · ${i?.share} del top 50 de mods confirmado en este parche`)
};

const de_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spiel ${i?.build} · ${i?.share} der Top-50-Mods auf diesem Patch bestätigt`)
};

const fr_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jeu ${i?.build} · ${i?.share} du top 50 des mods confirmés sur ce patch`)
};

const it_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gioco ${i?.build} · ${i?.share} delle 50 mod più scaricate confermate su questa patch`)
};

const nl_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game ${i?.build} · ${i?.share} van de top 50 mods bevestigd op deze patch`)
};

const pl_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gra ${i?.build} · ${i?.share} z top 50 modów potwierdzono na tym patchu`)
};

const pt_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jogo ${i?.build} · ${i?.share} dos 50 mods mais baixados confirmados neste patch`)
};

const ru_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Игра ${i?.build} · подтверждено ${i?.share} из топ-50 модов на этом патче`)
};

const sv_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spel ${i?.build} · ${i?.share} av topp 50-moddarna bekräftade på den här patchen`)
};

const tr_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oyun ${i?.build} · en popüler 50 modun ${i?.share} kadarı bu yamada doğrulandı`)
};

const zh_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`游戏 ${i?.build} · 前 50 名模组中已有 ${i?.share} 在此补丁上得到确认`)
};

const ja_landing_radar_summary = /** @type {(inputs: Landing_Radar_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ゲーム ${i?.build} · 上位50件のMODのうち ${i?.share} がこのパッチで確認済み`)
};

/**
* | output |
* | --- |
* | "Game {build} · {share} of the top 50 mods confirmed on this patch" |
*
* @param {Landing_Radar_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_radar_summary = /** @type {((inputs: Landing_Radar_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Radar_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_radar_summary(inputs)
	if (locale === "de") return de_landing_radar_summary(inputs)
	if (locale === "fr") return fr_landing_radar_summary(inputs)
	if (locale === "it") return it_landing_radar_summary(inputs)
	if (locale === "nl") return nl_landing_radar_summary(inputs)
	if (locale === "pl") return pl_landing_radar_summary(inputs)
	if (locale === "pt") return pt_landing_radar_summary(inputs)
	if (locale === "ru") return ru_landing_radar_summary(inputs)
	if (locale === "sv") return sv_landing_radar_summary(inputs)
	if (locale === "tr") return tr_landing_radar_summary(inputs)
	if (locale === "zh") return zh_landing_radar_summary(inputs)
	if (locale === "ja") return ja_landing_radar_summary(inputs)
	return en_landing_radar_summary(inputs)
});
