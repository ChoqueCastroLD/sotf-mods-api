/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Fair_Play_SpikesInputs */

const en_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sudden download spikes are reviewed by the Rangers.`)
};

const es_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los Rangers revisan los picos repentinos de descargas.`)
};

const de_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plötzliche Download-Spitzen werden von den Rangern geprüft.`)
};

const fr_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les pics soudains de téléchargements sont examinés par les Rangers.`)
};

const it_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I picchi improvvisi di download vengono esaminati dai Ranger.`)
};

const nl_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plotselinge downloadpieken worden door de Rangers bekeken.`)
};

const pl_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nagłe skoki pobrań sprawdzają Rangerzy.`)
};

const pt_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Picos repentinos de downloads são revisados pelos Rangers.`)
};

const ru_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Резкие всплески скачиваний проверяют рейнджеры.`)
};

const sv_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plötsliga toppar i nedladdningar granskas av Rangers.`)
};

const tr_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ani indirme artışları Ranger’lar tarafından incelenir.`)
};

const zh_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量的异常激增会由巡林员审查。`)
};

const ja_profile_achievements_fair_play_spikes = /** @type {(inputs: Profile_Achievements_Fair_Play_SpikesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`急激なダウンロード増加はレンジャーが確認します。`)
};

/**
* | output |
* | --- |
* | "Sudden download spikes are reviewed by the Rangers." |
*
* @param {Profile_Achievements_Fair_Play_SpikesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_fair_play_spikes = /** @type {((inputs?: Profile_Achievements_Fair_Play_SpikesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Fair_Play_SpikesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_fair_play_spikes(inputs)
	if (locale === "de") return de_profile_achievements_fair_play_spikes(inputs)
	if (locale === "fr") return fr_profile_achievements_fair_play_spikes(inputs)
	if (locale === "it") return it_profile_achievements_fair_play_spikes(inputs)
	if (locale === "nl") return nl_profile_achievements_fair_play_spikes(inputs)
	if (locale === "pl") return pl_profile_achievements_fair_play_spikes(inputs)
	if (locale === "pt") return pt_profile_achievements_fair_play_spikes(inputs)
	if (locale === "ru") return ru_profile_achievements_fair_play_spikes(inputs)
	if (locale === "sv") return sv_profile_achievements_fair_play_spikes(inputs)
	if (locale === "tr") return tr_profile_achievements_fair_play_spikes(inputs)
	if (locale === "zh") return zh_profile_achievements_fair_play_spikes(inputs)
	if (locale === "ja") return ja_profile_achievements_fair_play_spikes(inputs)
	return en_profile_achievements_fair_play_spikes(inputs)
});
