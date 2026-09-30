/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Show_Leaderboards_HintInputs */

const en_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top creators and top survivors lists.`)
};

const es_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listas de mejores creadores y mejores supervivientes.`)
};

const de_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listen der besten Creators und Überlebenden.`)
};

const fr_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listes des meilleurs créateurs et survivants.`)
};

const it_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elenchi dei migliori creatori e sopravvissuti.`)
};

const nl_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lijsten met topmakers en topoverlevenden.`)
};

const pl_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listy najlepszych twórców i ocalałych.`)
};

const pt_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listas dos melhores criadores e sobreviventes.`)
};

const ru_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Списки лучших авторов и выживших.`)
};

const sv_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listor över toppskapare och toppöverlevare.`)
};

const tr_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En iyi yapımcılar ve en iyi hayatta kalanlar listeleri.`)
};

const zh_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`顶尖创作者和顶尖幸存者榜单。`)
};

const ja_settings_show_leaderboards_hint = /** @type {(inputs: Settings_Show_Leaderboards_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トップクリエイターとトップサバイバーのリスト。`)
};

/**
* | output |
* | --- |
* | "Top creators and top survivors lists." |
*
* @param {Settings_Show_Leaderboards_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_show_leaderboards_hint = /** @type {((inputs?: Settings_Show_Leaderboards_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Show_Leaderboards_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_show_leaderboards_hint(inputs)
	if (locale === "de") return de_settings_show_leaderboards_hint(inputs)
	if (locale === "fr") return fr_settings_show_leaderboards_hint(inputs)
	if (locale === "it") return it_settings_show_leaderboards_hint(inputs)
	if (locale === "nl") return nl_settings_show_leaderboards_hint(inputs)
	if (locale === "pl") return pl_settings_show_leaderboards_hint(inputs)
	if (locale === "pt") return pt_settings_show_leaderboards_hint(inputs)
	if (locale === "ru") return ru_settings_show_leaderboards_hint(inputs)
	if (locale === "sv") return sv_settings_show_leaderboards_hint(inputs)
	if (locale === "tr") return tr_settings_show_leaderboards_hint(inputs)
	if (locale === "zh") return zh_settings_show_leaderboards_hint(inputs)
	if (locale === "ja") return ja_settings_show_leaderboards_hint(inputs)
	return en_settings_show_leaderboards_hint(inputs)
});
