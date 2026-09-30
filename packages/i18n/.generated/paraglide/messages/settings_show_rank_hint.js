/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Show_Rank_HintInputs */

const en_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your rank stamp next to your name.`)
};

const es_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu sello de rango junto a tu nombre.`)
};

const de_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Rangstempel neben deinem Namen.`)
};

const fr_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre tampon de rang à côté de votre nom.`)
};

const it_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il timbro del grado accanto al tuo nome.`)
};

const nl_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je rangstempel naast je naam.`)
};

const pl_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pieczęć rangi obok twojej nazwy.`)
};

const pt_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu selo de patente ao lado do seu nome.`)
};

const ru_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Печать ранга рядом с вашим именем.`)
};

const sv_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din rangstämpel bredvid ditt namn.`)
};

const tr_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adının yanındaki rütbe damgası.`)
};

const zh_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你名字旁边的等级印章。`)
};

const ja_settings_show_rank_hint = /** @type {(inputs: Settings_Show_Rank_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前の横のランクスタンプ。`)
};

/**
* | output |
* | --- |
* | "Your rank stamp next to your name." |
*
* @param {Settings_Show_Rank_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_show_rank_hint = /** @type {((inputs?: Settings_Show_Rank_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Show_Rank_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_show_rank_hint(inputs)
	if (locale === "de") return de_settings_show_rank_hint(inputs)
	if (locale === "fr") return fr_settings_show_rank_hint(inputs)
	if (locale === "it") return it_settings_show_rank_hint(inputs)
	if (locale === "nl") return nl_settings_show_rank_hint(inputs)
	if (locale === "pl") return pl_settings_show_rank_hint(inputs)
	if (locale === "pt") return pt_settings_show_rank_hint(inputs)
	if (locale === "ru") return ru_settings_show_rank_hint(inputs)
	if (locale === "sv") return sv_settings_show_rank_hint(inputs)
	if (locale === "tr") return tr_settings_show_rank_hint(inputs)
	if (locale === "zh") return zh_settings_show_rank_hint(inputs)
	if (locale === "ja") return ja_settings_show_rank_hint(inputs)
	return en_settings_show_rank_hint(inputs)
});
