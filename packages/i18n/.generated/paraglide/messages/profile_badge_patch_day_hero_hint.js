/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Patch_Day_Hero_HintInputs */

const en_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release a compatible version within 7 days of a breaking game update.`)
};

const es_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publica una versión compatible en los 7 días siguientes a una actualización del juego que rompa mods.`)
};

const de_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentliche innerhalb von 7 Tagen nach einem Spiel-Update, das Mods bricht, eine kompatible Version.`)
};

const fr_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiez une version compatible dans les 7 jours suivant une mise à jour du jeu qui casse les mods.`)
};

const it_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica una versione compatibile entro 7 giorni da un aggiornamento del gioco che rompe le mod.`)
};

const nl_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiceer een compatibele versie binnen 7 dagen na een game-update die mods breekt.`)
};

const pl_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydaj zgodną wersję w ciągu 7 dni od aktualizacji gry, która psuje mody.`)
};

const pt_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publique uma versão compatível até 7 dias depois de uma atualização do jogo que quebre mods.`)
};

const ru_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выпустите совместимую версию в течение 7 дней после обновления игры, ломающего моды.`)
};

const sv_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp en kompatibel version inom 7 dagar efter en speluppdatering som förstör moddar.`)
};

const tr_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları bozan bir oyun güncellemesinden sonraki 7 gün içinde uyumlu bir sürüm yayınla.`)
};

const zh_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在破坏模组的游戏更新后 7 天内发布兼容版本。`)
};

const ja_profile_badge_patch_day_hero_hint = /** @type {(inputs: Profile_Badge_Patch_Day_Hero_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を壊すゲームアップデートから 7 日以内に互換バージョンを公開する。`)
};

/**
* | output |
* | --- |
* | "Release a compatible version within 7 days of a breaking game update." |
*
* @param {Profile_Badge_Patch_Day_Hero_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_patch_day_hero_hint = /** @type {((inputs?: Profile_Badge_Patch_Day_Hero_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Patch_Day_Hero_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_patch_day_hero_hint(inputs)
	if (locale === "de") return de_profile_badge_patch_day_hero_hint(inputs)
	if (locale === "fr") return fr_profile_badge_patch_day_hero_hint(inputs)
	if (locale === "it") return it_profile_badge_patch_day_hero_hint(inputs)
	if (locale === "nl") return nl_profile_badge_patch_day_hero_hint(inputs)
	if (locale === "pl") return pl_profile_badge_patch_day_hero_hint(inputs)
	if (locale === "pt") return pt_profile_badge_patch_day_hero_hint(inputs)
	if (locale === "ru") return ru_profile_badge_patch_day_hero_hint(inputs)
	if (locale === "sv") return sv_profile_badge_patch_day_hero_hint(inputs)
	if (locale === "tr") return tr_profile_badge_patch_day_hero_hint(inputs)
	if (locale === "zh") return zh_profile_badge_patch_day_hero_hint(inputs)
	if (locale === "ja") return ja_profile_badge_patch_day_hero_hint(inputs)
	return en_profile_badge_patch_day_hero_hint(inputs)
});
