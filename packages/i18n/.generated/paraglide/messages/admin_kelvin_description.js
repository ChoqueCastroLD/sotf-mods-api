/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_DescriptionInputs */

const en_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usage and cost of the in-game assistant, and its daily budget.`)
};

const es_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uso y coste del asistente del juego, y su presupuesto diario.`)
};

const de_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutzung und Kosten des Assistenten im Spiel und sein Tagesbudget.`)
};

const fr_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisation et coût de l’assistant en jeu, et son budget quotidien.`)
};

const it_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uso e costo dell’assistente di gioco, e il suo budget giornaliero.`)
};

const nl_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik en kosten van de assistent in de game, en het dagbudget.`)
};

const pl_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użycie i koszt asystenta w grze oraz jego dzienny budżet.`)
};

const pt_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uso e custo do assistente do jogo, e o orçamento diário dele.`)
};

const ru_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Использование и стоимость внутриигрового помощника, его дневной бюджет.`)
};

const sv_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användning och kostnad för assistenten i spelet, och dess dagsbudget.`)
};

const tr_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun içi asistanın kullanımı, maliyeti ve günlük bütçesi.`)
};

const zh_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏内助手的使用量、费用和每日预算。`)
};

const ja_admin_kelvin_description = /** @type {(inputs: Admin_Kelvin_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲーム内アシスタントの利用状況、費用、1 日の予算。`)
};

/**
* | output |
* | --- |
* | "Usage and cost of the in-game assistant, and its daily budget." |
*
* @param {Admin_Kelvin_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_description = /** @type {((inputs?: Admin_Kelvin_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_description(inputs)
	if (locale === "de") return de_admin_kelvin_description(inputs)
	if (locale === "fr") return fr_admin_kelvin_description(inputs)
	if (locale === "it") return it_admin_kelvin_description(inputs)
	if (locale === "nl") return nl_admin_kelvin_description(inputs)
	if (locale === "pl") return pl_admin_kelvin_description(inputs)
	if (locale === "pt") return pt_admin_kelvin_description(inputs)
	if (locale === "ru") return ru_admin_kelvin_description(inputs)
	if (locale === "sv") return sv_admin_kelvin_description(inputs)
	if (locale === "tr") return tr_admin_kelvin_description(inputs)
	if (locale === "zh") return zh_admin_kelvin_description(inputs)
	if (locale === "ja") return ja_admin_kelvin_description(inputs)
	return en_admin_kelvin_description(inputs)
});
