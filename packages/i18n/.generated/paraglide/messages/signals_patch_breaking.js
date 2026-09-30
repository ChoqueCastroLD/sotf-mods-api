/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Signals_Patch_BreakingInputs */

const en_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game build ${i?.build} may break mods — check yours on the Patch Radar`)
};

const es_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La build ${i?.build} del juego puede romper mods: revisa los tuyos en el Radar de parches`)
};

const de_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spiel-Build ${i?.build} könnte Mods kaputt machen – prüfe deine im Patch-Radar`)
};

const fr_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La build ${i?.build} du jeu peut casser des mods — vérifiez les vôtres dans le Radar des patchs`)
};

const it_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La build ${i?.build} del gioco potrebbe rompere delle mod: controlla le tue nel Radar delle patch`)
};

const nl_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game-build ${i?.build} kan mods breken — controleer de jouwe in de Patchradar`)
};

const pl_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build gry ${i?.build} może psuć mody — sprawdź swoje w Radarze patchy`)
};

const pt_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A build ${i?.build} do jogo pode quebrar mods — confira os seus no Radar de patches`)
};

const ru_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Сборка игры ${i?.build} может сломать моды — проверьте свои в Радаре патчей`)
};

const sv_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spelbygget ${i?.build} kan förstöra moddar — kolla dina i Patchradarn`)
};

const tr_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} oyun sürümü modları bozabilir — kendi modlarını Yama Radarı’nda kontrol et`)
};

const zh_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`游戏版本 ${i?.build} 可能导致模组失效——在补丁雷达中检查你的模组`)
};

const ja_signals_patch_breaking = /** @type {(inputs: Signals_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ゲームビルド ${i?.build} でMODが動かなくなる可能性があります。パッチレーダーで確認してください`)
};

/**
* | output |
* | --- |
* | "Game build {build} may break mods — check yours on the Patch Radar" |
*
* @param {Signals_Patch_BreakingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_patch_breaking = /** @type {((inputs: Signals_Patch_BreakingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Patch_BreakingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_patch_breaking(inputs)
	if (locale === "de") return de_signals_patch_breaking(inputs)
	if (locale === "fr") return fr_signals_patch_breaking(inputs)
	if (locale === "it") return it_signals_patch_breaking(inputs)
	if (locale === "nl") return nl_signals_patch_breaking(inputs)
	if (locale === "pl") return pl_signals_patch_breaking(inputs)
	if (locale === "pt") return pt_signals_patch_breaking(inputs)
	if (locale === "ru") return ru_signals_patch_breaking(inputs)
	if (locale === "sv") return sv_signals_patch_breaking(inputs)
	if (locale === "tr") return tr_signals_patch_breaking(inputs)
	if (locale === "zh") return zh_signals_patch_breaking(inputs)
	if (locale === "ja") return ja_signals_patch_breaking(inputs)
	return en_signals_patch_breaking(inputs)
});
