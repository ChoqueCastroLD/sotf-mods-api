/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Group_CommunityInputs */

const en_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community and Rangers`)
};

const es_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comunidad y guardabosques`)
};

const de_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community und Ranger`)
};

const fr_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Communauté et rangers`)
};

const it_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community e ranger`)
};

const nl_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community en rangers`)
};

const pl_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Społeczność i strażnicy`)
};

const pt_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comunidade e guardas`)
};

const ru_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщество и рейнджеры`)
};

const sv_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Community och rangers`)
};

const tr_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topluluk ve korucular`)
};

const zh_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`社区和护林员`)
};

const ja_settings_notif_group_community = /** @type {(inputs: Settings_Notif_Group_CommunityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コミュニティとレンジャー`)
};

/**
* | output |
* | --- |
* | "Community and Rangers" |
*
* @param {Settings_Notif_Group_CommunityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_group_community = /** @type {((inputs?: Settings_Notif_Group_CommunityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Group_CommunityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_group_community(inputs)
	if (locale === "de") return de_settings_notif_group_community(inputs)
	if (locale === "fr") return fr_settings_notif_group_community(inputs)
	if (locale === "it") return it_settings_notif_group_community(inputs)
	if (locale === "nl") return nl_settings_notif_group_community(inputs)
	if (locale === "pl") return pl_settings_notif_group_community(inputs)
	if (locale === "pt") return pt_settings_notif_group_community(inputs)
	if (locale === "ru") return ru_settings_notif_group_community(inputs)
	if (locale === "sv") return sv_settings_notif_group_community(inputs)
	if (locale === "tr") return tr_settings_notif_group_community(inputs)
	if (locale === "zh") return zh_settings_notif_group_community(inputs)
	if (locale === "ja") return ja_settings_notif_group_community(inputs)
	return en_settings_notif_group_community(inputs)
});
