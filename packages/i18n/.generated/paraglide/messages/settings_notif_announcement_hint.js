/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Announcement_HintInputs */

const en_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`News from the SOTF Mods team.`)
};

const es_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noticias del equipo de SOTF Mods.`)
};

const de_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuigkeiten vom SOTF-Mods-Team.`)
};

const fr_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les nouvelles de l’équipe SOTF Mods.`)
};

const it_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novità dal team di SOTF Mods.`)
};

const nl_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuws van het SOTF Mods-team.`)
};

const pl_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiadomości od zespołu SOTF Mods.`)
};

const pt_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novidades da equipe do SOTF Mods.`)
};

const ru_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новости от команды SOTF Mods.`)
};

const sv_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyheter från SOTF Mods-teamet.`)
};

const tr_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods ekibinden haberler.`)
};

const zh_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来自 SOTF Mods 团队的消息。`)
};

const ja_settings_notif_announcement_hint = /** @type {(inputs: Settings_Notif_Announcement_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods チームからのニュース。`)
};

/**
* | output |
* | --- |
* | "News from the SOTF Mods team." |
*
* @param {Settings_Notif_Announcement_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_announcement_hint = /** @type {((inputs?: Settings_Notif_Announcement_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Announcement_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_announcement_hint(inputs)
	if (locale === "de") return de_settings_notif_announcement_hint(inputs)
	if (locale === "fr") return fr_settings_notif_announcement_hint(inputs)
	if (locale === "it") return it_settings_notif_announcement_hint(inputs)
	if (locale === "nl") return nl_settings_notif_announcement_hint(inputs)
	if (locale === "pl") return pl_settings_notif_announcement_hint(inputs)
	if (locale === "pt") return pt_settings_notif_announcement_hint(inputs)
	if (locale === "ru") return ru_settings_notif_announcement_hint(inputs)
	if (locale === "sv") return sv_settings_notif_announcement_hint(inputs)
	if (locale === "tr") return tr_settings_notif_announcement_hint(inputs)
	if (locale === "zh") return zh_settings_notif_announcement_hint(inputs)
	if (locale === "ja") return ja_settings_notif_announcement_hint(inputs)
	return en_settings_notif_announcement_hint(inputs)
});
