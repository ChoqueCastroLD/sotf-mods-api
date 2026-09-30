/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Creators_Meta_TitleInputs */

const en_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mod creators`)
};

const es_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creadores de mods de Sons of the Forest`)
};

const de_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Ersteller für Sons of the Forest`)
};

const fr_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateurs de mods Sons of the Forest`)
};

const it_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatori di mod per Sons of the Forest`)
};

const nl_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Makers van Sons of the Forest-mods`)
};

const pl_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórcy modów do Sons of the Forest`)
};

const pt_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criadores de mods de Sons of the Forest`)
};

const ru_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы модов для Sons of the Forest`)
};

const sv_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modskapare för Sons of the Forest`)
};

const tr_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mod üreticileri`)
};

const zh_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 模组创作者`)
};

const ja_profile_creators_meta_title = /** @type {(inputs: Profile_Creators_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の MOD クリエイター`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest mod creators" |
*
* @param {Profile_Creators_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_meta_title = /** @type {((inputs?: Profile_Creators_Meta_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Meta_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_meta_title(inputs)
	if (locale === "de") return de_profile_creators_meta_title(inputs)
	if (locale === "fr") return fr_profile_creators_meta_title(inputs)
	if (locale === "it") return it_profile_creators_meta_title(inputs)
	if (locale === "nl") return nl_profile_creators_meta_title(inputs)
	if (locale === "pl") return pl_profile_creators_meta_title(inputs)
	if (locale === "pt") return pt_profile_creators_meta_title(inputs)
	if (locale === "ru") return ru_profile_creators_meta_title(inputs)
	if (locale === "sv") return sv_profile_creators_meta_title(inputs)
	if (locale === "tr") return tr_profile_creators_meta_title(inputs)
	if (locale === "zh") return zh_profile_creators_meta_title(inputs)
	if (locale === "ja") return ja_profile_creators_meta_title(inputs)
	return en_profile_creators_meta_title(inputs)
});
