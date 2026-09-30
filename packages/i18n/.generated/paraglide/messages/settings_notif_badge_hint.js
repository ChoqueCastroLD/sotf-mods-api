/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Badge_HintInputs */

const en_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You unlocked a badge.`)
};

const es_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has desbloqueado una insignia.`)
};

const de_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast ein Abzeichen freigeschaltet.`)
};

const fr_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez débloqué un badge.`)
};

const it_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai sbloccato un distintivo.`)
};

const nl_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt een badge ontgrendeld.`)
};

const pl_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odblokowałeś odznakę.`)
};

const pt_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você desbloqueou uma insígnia.`)
};

const ru_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы получили значок.`)
};

const sv_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har låst upp ett märke.`)
};

const tr_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir rozet açtın.`)
};

const zh_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你解锁了一枚徽章。`)
};

const ja_settings_notif_badge_hint = /** @type {(inputs: Settings_Notif_Badge_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バッジを獲得しました。`)
};

/**
* | output |
* | --- |
* | "You unlocked a badge." |
*
* @param {Settings_Notif_Badge_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_badge_hint = /** @type {((inputs?: Settings_Notif_Badge_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Badge_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_badge_hint(inputs)
	if (locale === "de") return de_settings_notif_badge_hint(inputs)
	if (locale === "fr") return fr_settings_notif_badge_hint(inputs)
	if (locale === "it") return it_settings_notif_badge_hint(inputs)
	if (locale === "nl") return nl_settings_notif_badge_hint(inputs)
	if (locale === "pl") return pl_settings_notif_badge_hint(inputs)
	if (locale === "pt") return pt_settings_notif_badge_hint(inputs)
	if (locale === "ru") return ru_settings_notif_badge_hint(inputs)
	if (locale === "sv") return sv_settings_notif_badge_hint(inputs)
	if (locale === "tr") return tr_settings_notif_badge_hint(inputs)
	if (locale === "zh") return zh_settings_notif_badge_hint(inputs)
	if (locale === "ja") return ja_settings_notif_badge_hint(inputs)
	return en_settings_notif_badge_hint(inputs)
});
