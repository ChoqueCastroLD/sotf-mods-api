/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_TableInputs */

const en_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field reports by version and game build`)
};

const es_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes de campo por versión y build del juego`)
};

const de_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldberichte nach Version und Spiel-Build`)
};

const fr_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapports de terrain par version et build du jeu`)
};

const it_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporti sul campo per versione e build del gioco`)
};

const nl_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapporten per versie en gamebuild`)
};

const pl_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raporty terenowe według wersji i buildu gry`)
};

const pt_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatórios de campo por versão e build do jogo`)
};

const ru_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевые отчёты по версиям и билдам игры`)
};

const sv_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapporter per version och spelbuild`)
};

const tr_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm ve oyun sürümüne göre saha raporları`)
};

const zh_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按版本和游戏版本划分的实地报告`)
};

const ja_basecamp_compat_table = /** @type {(inputs: Basecamp_Compat_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンとゲームビルド別のフィールドレポート`)
};

/**
* | output |
* | --- |
* | "Field reports by version and game build" |
*
* @param {Basecamp_Compat_TableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_table = /** @type {((inputs?: Basecamp_Compat_TableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_TableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_table(inputs)
	if (locale === "de") return de_basecamp_compat_table(inputs)
	if (locale === "fr") return fr_basecamp_compat_table(inputs)
	if (locale === "it") return it_basecamp_compat_table(inputs)
	if (locale === "nl") return nl_basecamp_compat_table(inputs)
	if (locale === "pl") return pl_basecamp_compat_table(inputs)
	if (locale === "pt") return pt_basecamp_compat_table(inputs)
	if (locale === "ru") return ru_basecamp_compat_table(inputs)
	if (locale === "sv") return sv_basecamp_compat_table(inputs)
	if (locale === "tr") return tr_basecamp_compat_table(inputs)
	if (locale === "zh") return zh_basecamp_compat_table(inputs)
	if (locale === "ja") return ja_basecamp_compat_table(inputs)
	return en_basecamp_compat_table(inputs)
});
