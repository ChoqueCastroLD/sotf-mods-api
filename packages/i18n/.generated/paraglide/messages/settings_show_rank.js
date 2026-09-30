/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Show_RankInputs */

const en_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show my survivor rank and XP`)
};

const es_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar mi rango de superviviente y mi XP`)
};

const de_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meinen Überlebenden-Rang und meine XP zeigen`)
};

const fr_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher mon rang de survivant et mon XP`)
};

const it_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra il mio grado da sopravvissuto e i miei XP`)
};

const nl_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijn overlevingsrang en XP tonen`)
};

const pl_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokazuj moją rangę ocalałego i XP`)
};

const pt_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar minha patente de sobrevivente e meu XP`)
};

const ru_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показывать мой ранг выжившего и XP`)
};

const sv_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa min överlevarrang och XP`)
};

const tr_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalan rütbemi ve XP’mi göster`)
};

const zh_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示我的幸存者等级和 XP`)
};

const ja_settings_show_rank = /** @type {(inputs: Settings_Show_RankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サバイバーランクと XP を表示`)
};

/**
* | output |
* | --- |
* | "Show my survivor rank and XP" |
*
* @param {Settings_Show_RankInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_show_rank = /** @type {((inputs?: Settings_Show_RankInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Show_RankInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_show_rank(inputs)
	if (locale === "de") return de_settings_show_rank(inputs)
	if (locale === "fr") return fr_settings_show_rank(inputs)
	if (locale === "it") return it_settings_show_rank(inputs)
	if (locale === "nl") return nl_settings_show_rank(inputs)
	if (locale === "pl") return pl_settings_show_rank(inputs)
	if (locale === "pt") return pt_settings_show_rank(inputs)
	if (locale === "ru") return ru_settings_show_rank(inputs)
	if (locale === "sv") return sv_settings_show_rank(inputs)
	if (locale === "tr") return tr_settings_show_rank(inputs)
	if (locale === "zh") return zh_settings_show_rank(inputs)
	if (locale === "ja") return ja_settings_show_rank(inputs)
	return en_settings_show_rank(inputs)
});
