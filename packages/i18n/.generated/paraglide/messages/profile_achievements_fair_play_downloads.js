/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Fair_Play_DownloadsInputs */

const en_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads never give XP, so there’s nothing to gain from inflating them.`)
};

const es_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las descargas nunca dan XP, así que no se gana nada inflándolas.`)
};

const de_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads bringen nie XP, also lohnt es sich nicht, sie aufzublähen.`)
};

const fr_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les téléchargements ne rapportent jamais d’XP : il n’y a rien à gagner à les gonfler.`)
};

const it_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I download non danno mai XP, quindi gonfiarli non serve a nulla.`)
};

const nl_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads leveren nooit XP op, dus opblazen heeft geen zin.`)
};

const pl_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania nigdy nie dają XP, więc nie ma sensu ich sztucznie pompować.`)
};

const pt_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads nunca dão XP, então não há nada a ganhar inflando-os.`)
};

const ru_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачивания никогда не дают XP, поэтому накручивать их бессмысленно.`)
};

const sv_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar ger aldrig XP, så det finns inget att vinna på att blåsa upp dem.`)
};

const tr_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler asla XP kazandırmaz; onları şişirmenin bir faydası yok.`)
};

const zh_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量永远不会带来 XP，刷量毫无意义。`)
};

const ja_profile_achievements_fair_play_downloads = /** @type {(inputs: Profile_Achievements_Fair_Play_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数で XP は得られないので、水増ししても意味がありません。`)
};

/**
* | output |
* | --- |
* | "Downloads never give XP, so there’s nothing to gain from inflating them." |
*
* @param {Profile_Achievements_Fair_Play_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_fair_play_downloads = /** @type {((inputs?: Profile_Achievements_Fair_Play_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Fair_Play_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_fair_play_downloads(inputs)
	if (locale === "de") return de_profile_achievements_fair_play_downloads(inputs)
	if (locale === "fr") return fr_profile_achievements_fair_play_downloads(inputs)
	if (locale === "it") return it_profile_achievements_fair_play_downloads(inputs)
	if (locale === "nl") return nl_profile_achievements_fair_play_downloads(inputs)
	if (locale === "pl") return pl_profile_achievements_fair_play_downloads(inputs)
	if (locale === "pt") return pt_profile_achievements_fair_play_downloads(inputs)
	if (locale === "ru") return ru_profile_achievements_fair_play_downloads(inputs)
	if (locale === "sv") return sv_profile_achievements_fair_play_downloads(inputs)
	if (locale === "tr") return tr_profile_achievements_fair_play_downloads(inputs)
	if (locale === "zh") return zh_profile_achievements_fair_play_downloads(inputs)
	if (locale === "ja") return ja_profile_achievements_fair_play_downloads(inputs)
	return en_profile_achievements_fair_play_downloads(inputs)
});
