/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_PatchInputs */

const en_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game patches that break mods`)
};

const es_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parches del juego que rompen mods`)
};

const de_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel-Patches, die Mods kaputt machen`)
};

const fr_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patchs du jeu qui cassent des mods`)
};

const it_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch del gioco che rompono le mod`)
};

const nl_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game-patches die mods breken`)
};

const pl_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Łatki gry psujące mody`)
};

const pt_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patches do jogo que quebram mods`)
};

const ru_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Патчи игры, ломающие моды`)
};

const sv_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelpatchar som förstör moddar`)
};

const tr_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozan oyun yamaları`)
};

const zh_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导致模组失效的游戏补丁`)
};

const ja_settings_notif_patch = /** @type {(inputs: Settings_Notif_PatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODを壊すゲームパッチ`)
};

/**
* | output |
* | --- |
* | "Game patches that break mods" |
*
* @param {Settings_Notif_PatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_patch = /** @type {((inputs?: Settings_Notif_PatchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_PatchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_patch(inputs)
	if (locale === "de") return de_settings_notif_patch(inputs)
	if (locale === "fr") return fr_settings_notif_patch(inputs)
	if (locale === "it") return it_settings_notif_patch(inputs)
	if (locale === "nl") return nl_settings_notif_patch(inputs)
	if (locale === "pl") return pl_settings_notif_patch(inputs)
	if (locale === "pt") return pt_settings_notif_patch(inputs)
	if (locale === "ru") return ru_settings_notif_patch(inputs)
	if (locale === "sv") return sv_settings_notif_patch(inputs)
	if (locale === "tr") return tr_settings_notif_patch(inputs)
	if (locale === "zh") return zh_settings_notif_patch(inputs)
	if (locale === "ja") return ja_settings_notif_patch(inputs)
	return en_settings_notif_patch(inputs)
});
