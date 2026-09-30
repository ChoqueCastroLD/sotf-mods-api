/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Patch_Day_ReleaseInputs */

const en_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator: compatible version within 14 days of a breaking game update`)
};

const es_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador: versión compatible en los 14 días siguientes a una actualización que rompa mods`)
};

const de_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller: kompatible Version innerhalb von 14 Tagen nach einem Update, das Mods bricht`)
};

const fr_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur : version compatible dans les 14 jours suivant une mise à jour qui casse les mods`)
};

const it_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore: versione compatibile entro 14 giorni da un aggiornamento che rompe le mod`)
};

const nl_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker: compatibele versie binnen 14 dagen na een update die mods breekt`)
};

const pl_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca: zgodna wersja w ciągu 14 dni od aktualizacji psującej mody`)
};

const pt_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador: versão compatível até 14 dias depois de uma atualização que quebre mods`)
};

const ru_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор: совместимая версия в течение 14 дней после обновления, ломающего моды`)
};

const sv_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare: kompatibel version inom 14 dagar efter en uppdatering som förstör moddar`)
};

const tr_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üretici: modları bozan bir güncellemeden sonraki 14 gün içinde uyumlu sürüm`)
};

const zh_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者：在破坏模组的更新后 14 天内发布兼容版本`)
};

const ja_profile_xp_patch_day_release = /** @type {(inputs: Profile_Xp_Patch_Day_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター：MOD を壊すアップデートから 14 日以内に互換バージョンを公開`)
};

/**
* | output |
* | --- |
* | "Creator: compatible version within 14 days of a breaking game update" |
*
* @param {Profile_Xp_Patch_Day_ReleaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_patch_day_release = /** @type {((inputs?: Profile_Xp_Patch_Day_ReleaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Patch_Day_ReleaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_patch_day_release(inputs)
	if (locale === "de") return de_profile_xp_patch_day_release(inputs)
	if (locale === "fr") return fr_profile_xp_patch_day_release(inputs)
	if (locale === "it") return it_profile_xp_patch_day_release(inputs)
	if (locale === "nl") return nl_profile_xp_patch_day_release(inputs)
	if (locale === "pl") return pl_profile_xp_patch_day_release(inputs)
	if (locale === "pt") return pt_profile_xp_patch_day_release(inputs)
	if (locale === "ru") return ru_profile_xp_patch_day_release(inputs)
	if (locale === "sv") return sv_profile_xp_patch_day_release(inputs)
	if (locale === "tr") return tr_profile_xp_patch_day_release(inputs)
	if (locale === "zh") return zh_profile_xp_patch_day_release(inputs)
	if (locale === "ja") return ja_profile_xp_patch_day_release(inputs)
	return en_profile_xp_patch_day_release(inputs)
});
