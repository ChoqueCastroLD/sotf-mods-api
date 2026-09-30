/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Emails_Notify_Item_Patch_BreakingInputs */

const en_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game build ${i?.build} may break mods: check yours on Patch Radar`)
};

const es_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La build ${i?.build} del juego puede romper mods: revisa los tuyos en el Radar de parches`)
};

const de_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Der Spiel-Build ${i?.build} kann Mods kaputt machen: prüfe deine im Patch-Radar`)
};

const fr_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La build ${i?.build} du jeu peut casser des mods : vérifiez les vôtres dans le Radar des patchs`)
};

const it_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La build ${i?.build} del gioco potrebbe rompere dei mod: controlla i tuoi nel Radar delle patch`)
};

const nl_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gamebuild ${i?.build} kan mods breken: controleer die van jou in de Patchradar`)
};

const pl_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build gry ${i?.build} może psuć mody: sprawdź swoje w Radarze patchy`)
};

const pt_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A build ${i?.build} do jogo pode quebrar mods: confira os seus no Radar de patches`)
};

const ru_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Сборка игры ${i?.build} может сломать моды: проверьте свои в Радаре патчей`)
};

const sv_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spelbygget ${i?.build} kan förstöra moddar: kolla dina i Patchradarn`)
};

const tr_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} oyun sürümü modları bozabilir: kendi modlarını Yama Radarı’nda kontrol et`)
};

const zh_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`游戏版本 ${i?.build} 可能导致模组失效：请在补丁雷达中检查你的模组`)
};

const ja_emails_notify_item_patch_breaking = /** @type {(inputs: Emails_Notify_Item_Patch_BreakingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ゲームビルド ${i?.build} で MOD が動かなくなる可能性があります。パッチレーダーで確認してください`)
};

/**
* | output |
* | --- |
* | "Game build {build} may break mods: check yours on Patch Radar" |
*
* @param {Emails_Notify_Item_Patch_BreakingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_patch_breaking = /** @type {((inputs: Emails_Notify_Item_Patch_BreakingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Patch_BreakingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_patch_breaking(inputs)
	if (locale === "de") return de_emails_notify_item_patch_breaking(inputs)
	if (locale === "fr") return fr_emails_notify_item_patch_breaking(inputs)
	if (locale === "it") return it_emails_notify_item_patch_breaking(inputs)
	if (locale === "nl") return nl_emails_notify_item_patch_breaking(inputs)
	if (locale === "pl") return pl_emails_notify_item_patch_breaking(inputs)
	if (locale === "pt") return pt_emails_notify_item_patch_breaking(inputs)
	if (locale === "ru") return ru_emails_notify_item_patch_breaking(inputs)
	if (locale === "sv") return sv_emails_notify_item_patch_breaking(inputs)
	if (locale === "tr") return tr_emails_notify_item_patch_breaking(inputs)
	if (locale === "zh") return zh_emails_notify_item_patch_breaking(inputs)
	if (locale === "ja") return ja_emails_notify_item_patch_breaking(inputs)
	return en_emails_notify_item_patch_breaking(inputs)
});
