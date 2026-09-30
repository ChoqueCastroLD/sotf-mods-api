/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Group_FollowsInputs */

const en_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What you follow`)
};

const es_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo que sigues`)
};

const de_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was du folgst`)
};

const fr_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que vous suivez`)
};

const it_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ciò che segui`)
};

const nl_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat je volgt`)
};

const pl_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To, co obserwujesz`)
};

const pt_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que você segue`)
};

const ru_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На что вы подписаны`)
};

const sv_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det du följer`)
};

const tr_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ettiklerin`)
};

const zh_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你关注的内容`)
};

const ja_settings_notif_group_follows = /** @type {(inputs: Settings_Notif_Group_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中`)
};

/**
* | output |
* | --- |
* | "What you follow" |
*
* @param {Settings_Notif_Group_FollowsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_group_follows = /** @type {((inputs?: Settings_Notif_Group_FollowsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Group_FollowsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_group_follows(inputs)
	if (locale === "de") return de_settings_notif_group_follows(inputs)
	if (locale === "fr") return fr_settings_notif_group_follows(inputs)
	if (locale === "it") return it_settings_notif_group_follows(inputs)
	if (locale === "nl") return nl_settings_notif_group_follows(inputs)
	if (locale === "pl") return pl_settings_notif_group_follows(inputs)
	if (locale === "pt") return pt_settings_notif_group_follows(inputs)
	if (locale === "ru") return ru_settings_notif_group_follows(inputs)
	if (locale === "sv") return sv_settings_notif_group_follows(inputs)
	if (locale === "tr") return tr_settings_notif_group_follows(inputs)
	if (locale === "zh") return zh_settings_notif_group_follows(inputs)
	if (locale === "ja") return ja_settings_notif_group_follows(inputs)
	return en_settings_notif_group_follows(inputs)
});
