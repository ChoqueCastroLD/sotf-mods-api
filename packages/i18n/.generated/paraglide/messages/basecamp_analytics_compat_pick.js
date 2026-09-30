/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Compat_PickInputs */

const en_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a mod to see its field reports by game build.`)
};

const es_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige un mod para ver sus reportes de campo por build del juego.`)
};

const de_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle einen Mod, um seine Feldberichte nach Spiel-Build zu sehen.`)
};

const fr_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un mod pour voir ses rapports de terrain par build du jeu.`)
};

const it_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli una mod per vedere i suoi rapporti sul campo per build del gioco.`)
};

const nl_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een mod om zijn veldrapporten per gamebuild te zien.`)
};

const pl_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz mod, aby zobaczyć jego raporty terenowe według buildu gry.`)
};

const pt_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha um mod para ver os relatórios de campo por build do jogo.`)
};

const ru_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите мод, чтобы увидеть его полевые отчёты по билдам игры.`)
};

const sv_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en mod för att se dess fältrapporter per spelbuild.`)
};

const tr_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümüne göre saha raporlarını görmek için bir mod seç.`)
};

const zh_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择一个模组，查看其按游戏版本划分的实地报告。`)
};

const ja_basecamp_analytics_compat_pick = /** @type {(inputs: Basecamp_Analytics_Compat_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を選ぶと、ゲームビルド別のフィールドレポートが表示されます。`)
};

/**
* | output |
* | --- |
* | "Choose a mod to see its field reports by game build." |
*
* @param {Basecamp_Analytics_Compat_PickInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_compat_pick = /** @type {((inputs?: Basecamp_Analytics_Compat_PickInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Compat_PickInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_compat_pick(inputs)
	if (locale === "de") return de_basecamp_analytics_compat_pick(inputs)
	if (locale === "fr") return fr_basecamp_analytics_compat_pick(inputs)
	if (locale === "it") return it_basecamp_analytics_compat_pick(inputs)
	if (locale === "nl") return nl_basecamp_analytics_compat_pick(inputs)
	if (locale === "pl") return pl_basecamp_analytics_compat_pick(inputs)
	if (locale === "pt") return pt_basecamp_analytics_compat_pick(inputs)
	if (locale === "ru") return ru_basecamp_analytics_compat_pick(inputs)
	if (locale === "sv") return sv_basecamp_analytics_compat_pick(inputs)
	if (locale === "tr") return tr_basecamp_analytics_compat_pick(inputs)
	if (locale === "zh") return zh_basecamp_analytics_compat_pick(inputs)
	if (locale === "ja") return ja_basecamp_analytics_compat_pick(inputs)
	return en_basecamp_analytics_compat_pick(inputs)
});
