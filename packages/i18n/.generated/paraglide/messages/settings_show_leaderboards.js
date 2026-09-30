/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Show_LeaderboardsInputs */

const en_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appear on leaderboards`)
};

const es_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aparecer en las clasificaciones`)
};

const de_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Ranglisten erscheinen`)
};

const fr_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apparaître dans les classements`)
};

const it_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compari nelle classifiche`)
};

const nl_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In ranglijsten verschijnen`)
};

const pl_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pojawiaj się w rankingach`)
};

const pt_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aparecer nos rankings`)
};

const ru_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Участвовать в рейтингах`)
};

const sv_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synas på topplistor`)
};

const tr_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liderlik tablolarında görün`)
};

const zh_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`出现在排行榜上`)
};

const ja_settings_show_leaderboards = /** @type {(inputs: Settings_Show_LeaderboardsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ランキングに表示`)
};

/**
* | output |
* | --- |
* | "Appear on leaderboards" |
*
* @param {Settings_Show_LeaderboardsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_show_leaderboards = /** @type {((inputs?: Settings_Show_LeaderboardsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Show_LeaderboardsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_show_leaderboards(inputs)
	if (locale === "de") return de_settings_show_leaderboards(inputs)
	if (locale === "fr") return fr_settings_show_leaderboards(inputs)
	if (locale === "it") return it_settings_show_leaderboards(inputs)
	if (locale === "nl") return nl_settings_show_leaderboards(inputs)
	if (locale === "pl") return pl_settings_show_leaderboards(inputs)
	if (locale === "pt") return pt_settings_show_leaderboards(inputs)
	if (locale === "ru") return ru_settings_show_leaderboards(inputs)
	if (locale === "sv") return sv_settings_show_leaderboards(inputs)
	if (locale === "tr") return tr_settings_show_leaderboards(inputs)
	if (locale === "zh") return zh_settings_show_leaderboards(inputs)
	if (locale === "ja") return ja_settings_show_leaderboards(inputs)
	return en_settings_show_leaderboards(inputs)
});
