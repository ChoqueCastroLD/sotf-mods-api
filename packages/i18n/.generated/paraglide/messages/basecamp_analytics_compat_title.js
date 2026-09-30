/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Compat_TitleInputs */

const en_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibility by game build`)
};

const es_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidad por build del juego`)
};

const de_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilität nach Spiel-Build`)
};

const fr_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilité par build du jeu`)
};

const it_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilità per build del gioco`)
};

const nl_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibiliteit per gamebuild`)
};

const pl_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgodność według buildu gry`)
};

const pt_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidade por build do jogo`)
};

const ru_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совместимость по билдам игры`)
};

const sv_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilitet per spelbuild`)
};

const tr_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümüne göre uyumluluk`)
};

const zh_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按游戏版本的兼容性`)
};

const ja_basecamp_analytics_compat_title = /** @type {(inputs: Basecamp_Analytics_Compat_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルド別の互換性`)
};

/**
* | output |
* | --- |
* | "Compatibility by game build" |
*
* @param {Basecamp_Analytics_Compat_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_compat_title = /** @type {((inputs?: Basecamp_Analytics_Compat_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Compat_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_compat_title(inputs)
	if (locale === "de") return de_basecamp_analytics_compat_title(inputs)
	if (locale === "fr") return fr_basecamp_analytics_compat_title(inputs)
	if (locale === "it") return it_basecamp_analytics_compat_title(inputs)
	if (locale === "nl") return nl_basecamp_analytics_compat_title(inputs)
	if (locale === "pl") return pl_basecamp_analytics_compat_title(inputs)
	if (locale === "pt") return pt_basecamp_analytics_compat_title(inputs)
	if (locale === "ru") return ru_basecamp_analytics_compat_title(inputs)
	if (locale === "sv") return sv_basecamp_analytics_compat_title(inputs)
	if (locale === "tr") return tr_basecamp_analytics_compat_title(inputs)
	if (locale === "zh") return zh_basecamp_analytics_compat_title(inputs)
	if (locale === "ja") return ja_basecamp_analytics_compat_title(inputs)
	return en_basecamp_analytics_compat_title(inputs)
});
