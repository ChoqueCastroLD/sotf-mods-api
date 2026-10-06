/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Member_SinceInputs */

const en_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Member since`)
};

const es_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Miembro desde`)
};

const de_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mitglied seit`)
};

const fr_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Membre depuis`)
};

const it_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscritto dal`)
};

const nl_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lid sinds`)
};

const pl_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Członek od`)
};

const pt_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Membro desde`)
};

const ru_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На сайте с`)
};

const sv_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medlem sedan`)
};

const tr_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üyelik tarihi`)
};

const zh_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注册时间`)
};

const ja_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登録日`)
};

/**
* | output |
* | --- |
* | "Member since" |
*
* @param {Settings_Member_SinceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_member_since = /** @type {((inputs?: Settings_Member_SinceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Member_SinceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_member_since(inputs)
	if (locale === "de") return de_settings_member_since(inputs)
	if (locale === "fr") return fr_settings_member_since(inputs)
	if (locale === "it") return it_settings_member_since(inputs)
	if (locale === "nl") return nl_settings_member_since(inputs)
	if (locale === "pl") return pl_settings_member_since(inputs)
	if (locale === "pt") return pt_settings_member_since(inputs)
	if (locale === "ru") return ru_settings_member_since(inputs)
	if (locale === "sv") return sv_settings_member_since(inputs)
	if (locale === "tr") return tr_settings_member_since(inputs)
	if (locale === "zh") return zh_settings_member_since(inputs)
	if (locale === "ja") return ja_settings_member_since(inputs)
	return en_settings_member_since(inputs)
});
