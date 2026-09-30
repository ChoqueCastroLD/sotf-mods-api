/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Award_HintInputs */

const en_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mod of yours became Mod of the Week or a Staff pick.`)
};

const es_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod tuyo es el Mod de la semana o una Elección del equipo.`)
};

const de_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Mod von dir ist Mod der Woche oder eine Team-Empfehlung geworden.`)
};

const fr_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un de vos mods est devenu Mod de la semaine ou Choix de l’équipe.`)
};

const it_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una tua mod è diventata Mod della settimana o Scelta dello staff.`)
};

const nl_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod van jou werd Mod van de week of een Staff pick.`)
};

const pl_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój mod został Modem tygodnia lub Wyborem zespołu.`)
};

const pt_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um mod seu virou Mod da semana ou Escolha da equipe.`)
};

const ru_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш мод стал модом недели или выбором команды.`)
};

const sv_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En av dina moddar blev veckans modd eller ett teamval.`)
};

const tr_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarından biri Haftanın Modu ya da Ekip Seçimi oldu.`)
};

const zh_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组当选本周模组或入选团队精选。`)
};

const ja_settings_notif_award_hint = /** @type {(inputs: Settings_Notif_Award_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODが今週のMODやスタッフのおすすめに選ばれました。`)
};

/**
* | output |
* | --- |
* | "A mod of yours became Mod of the Week or a Staff pick." |
*
* @param {Settings_Notif_Award_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_award_hint = /** @type {((inputs?: Settings_Notif_Award_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Award_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_award_hint(inputs)
	if (locale === "de") return de_settings_notif_award_hint(inputs)
	if (locale === "fr") return fr_settings_notif_award_hint(inputs)
	if (locale === "it") return it_settings_notif_award_hint(inputs)
	if (locale === "nl") return nl_settings_notif_award_hint(inputs)
	if (locale === "pl") return pl_settings_notif_award_hint(inputs)
	if (locale === "pt") return pt_settings_notif_award_hint(inputs)
	if (locale === "ru") return ru_settings_notif_award_hint(inputs)
	if (locale === "sv") return sv_settings_notif_award_hint(inputs)
	if (locale === "tr") return tr_settings_notif_award_hint(inputs)
	if (locale === "zh") return zh_settings_notif_award_hint(inputs)
	if (locale === "ja") return ja_settings_notif_award_hint(inputs)
	return en_settings_notif_award_hint(inputs)
});
