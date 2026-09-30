/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Weekly_HintInputs */

const en_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mondays: downloads, followers and reviews of your mods.`)
};

const es_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los lunes: descargas, seguidores y reseñas de tus mods.`)
};

const de_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Montags: Downloads, Follower und Bewertungen deiner Mods.`)
};

const fr_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le lundi : téléchargements, abonnés et avis de vos mods.`)
};

const it_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il lunedì: download, follower e recensioni delle tue mod.`)
};

const nl_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Op maandag: downloads, volgers en reviews van je mods.`)
};

const pl_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W poniedziałki: pobrania, obserwujący i recenzje twoich modów.`)
};

const pt_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Às segundas: downloads, seguidores e avaliações dos seus mods.`)
};

const ru_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По понедельникам: загрузки, подписчики и отзывы о ваших модах.`)
};

const sv_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`På måndagar: nedladdningar, följare och recensioner av dina moddar.`)
};

const tr_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pazartesileri: modlarının indirmeleri, takipçileri ve incelemeleri.`)
};

const zh_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每周一：你的模组的下载量、关注者和评价。`)
};

const ja_settings_notif_weekly_hint = /** @type {(inputs: Settings_Notif_Weekly_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`毎週月曜：あなたのMODのダウンロード数、フォロワー、レビュー。`)
};

/**
* | output |
* | --- |
* | "Mondays: downloads, followers and reviews of your mods." |
*
* @param {Settings_Notif_Weekly_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_weekly_hint = /** @type {((inputs?: Settings_Notif_Weekly_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Weekly_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_weekly_hint(inputs)
	if (locale === "de") return de_settings_notif_weekly_hint(inputs)
	if (locale === "fr") return fr_settings_notif_weekly_hint(inputs)
	if (locale === "it") return it_settings_notif_weekly_hint(inputs)
	if (locale === "nl") return nl_settings_notif_weekly_hint(inputs)
	if (locale === "pl") return pl_settings_notif_weekly_hint(inputs)
	if (locale === "pt") return pt_settings_notif_weekly_hint(inputs)
	if (locale === "ru") return ru_settings_notif_weekly_hint(inputs)
	if (locale === "sv") return sv_settings_notif_weekly_hint(inputs)
	if (locale === "tr") return tr_settings_notif_weekly_hint(inputs)
	if (locale === "zh") return zh_settings_notif_weekly_hint(inputs)
	if (locale === "ja") return ja_settings_notif_weekly_hint(inputs)
	return en_settings_notif_weekly_hint(inputs)
});
