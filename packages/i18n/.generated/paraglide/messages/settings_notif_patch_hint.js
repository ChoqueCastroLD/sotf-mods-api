/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Patch_HintInputs */

const en_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A new game build is likely to break mods (sent to creators).`)
};

const es_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es probable que una build nueva del juego rompa mods (se envía a los creadores).`)
};

const de_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein neuer Spiel-Build macht wahrscheinlich Mods kaputt (an Creators).`)
};

const fr_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une nouvelle build du jeu risque de casser des mods (envoyé aux créateurs).`)
};

const it_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una nuova build del gioco probabilmente romperà delle mod (inviato ai creatori).`)
};

const nl_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een nieuwe game-build breekt waarschijnlijk mods (naar makers).`)
};

const pl_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy build gry prawdopodobnie zepsuje mody (dla twórców).`)
};

const pt_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma nova build do jogo provavelmente vai quebrar mods (enviado aos criadores).`)
};

const ru_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новая сборка игры, вероятно, сломает моды (для авторов).`)
};

const sv_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett nytt spelbygge förstör troligen moddar (skickas till skapare).`)
};

const tr_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bir oyun sürümü muhtemelen modları bozacak (yapımcılara gönderilir).`)
};

const zh_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新的游戏版本可能会导致模组失效（发送给创作者）。`)
};

const ja_settings_notif_patch_hint = /** @type {(inputs: Settings_Notif_Patch_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいゲームビルドでMODが動かなくなる可能性があります（クリエイター向け）。`)
};

/**
* | output |
* | --- |
* | "A new game build is likely to break mods (sent to creators)." |
*
* @param {Settings_Notif_Patch_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_patch_hint = /** @type {((inputs?: Settings_Notif_Patch_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Patch_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_patch_hint(inputs)
	if (locale === "de") return de_settings_notif_patch_hint(inputs)
	if (locale === "fr") return fr_settings_notif_patch_hint(inputs)
	if (locale === "it") return it_settings_notif_patch_hint(inputs)
	if (locale === "nl") return nl_settings_notif_patch_hint(inputs)
	if (locale === "pl") return pl_settings_notif_patch_hint(inputs)
	if (locale === "pt") return pt_settings_notif_patch_hint(inputs)
	if (locale === "ru") return ru_settings_notif_patch_hint(inputs)
	if (locale === "sv") return sv_settings_notif_patch_hint(inputs)
	if (locale === "tr") return tr_settings_notif_patch_hint(inputs)
	if (locale === "zh") return zh_settings_notif_patch_hint(inputs)
	if (locale === "ja") return ja_settings_notif_patch_hint(inputs)
	return en_settings_notif_patch_hint(inputs)
});
