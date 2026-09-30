/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Coauthor_HintInputs */

const en_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone invites you to co-author one of their mods.`)
};

const es_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien te invita a ser coautor de uno de sus mods.`)
};

const de_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand lädt dich ein, an einem seiner Mods mitzuarbeiten.`)
};

const fr_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu'un vous invite à co-créer l'un de ses mods.`)
};

const it_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno ti invita a co-creare una sua mod.`)
};

const nl_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand nodigt je uit als mede-auteur van een van zijn mods.`)
};

const pl_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś zaprasza Cię do współtworzenia jednego ze swoich modów.`)
};

const pt_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém convida você para ser coautor de um dos mods dele.`)
};

const ru_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то приглашает вас стать соавтором одного из своих модов.`)
};

const sv_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon bjuder in dig som medförfattare till en av sina moddar.`)
};

const tr_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biri seni modlarından birinin ortak yazarı olmaya davet ediyor.`)
};

const zh_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人邀请你共同维护他的某个模组。`)
};

const ja_settings_notif_coauthor_hint = /** @type {(inputs: Settings_Notif_Coauthor_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`誰かがあなたを自分の MOD の共同作者に招待します。`)
};

/**
* | output |
* | --- |
* | "Someone invites you to co-author one of their mods." |
*
* @param {Settings_Notif_Coauthor_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_coauthor_hint = /** @type {((inputs?: Settings_Notif_Coauthor_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Coauthor_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_coauthor_hint(inputs)
	if (locale === "de") return de_settings_notif_coauthor_hint(inputs)
	if (locale === "fr") return fr_settings_notif_coauthor_hint(inputs)
	if (locale === "it") return it_settings_notif_coauthor_hint(inputs)
	if (locale === "nl") return nl_settings_notif_coauthor_hint(inputs)
	if (locale === "pl") return pl_settings_notif_coauthor_hint(inputs)
	if (locale === "pt") return pt_settings_notif_coauthor_hint(inputs)
	if (locale === "ru") return ru_settings_notif_coauthor_hint(inputs)
	if (locale === "sv") return sv_settings_notif_coauthor_hint(inputs)
	if (locale === "tr") return tr_settings_notif_coauthor_hint(inputs)
	if (locale === "zh") return zh_settings_notif_coauthor_hint(inputs)
	if (locale === "ja") return ja_settings_notif_coauthor_hint(inputs)
	return en_settings_notif_coauthor_hint(inputs)
});
