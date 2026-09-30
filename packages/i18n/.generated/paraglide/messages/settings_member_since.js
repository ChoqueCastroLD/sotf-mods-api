/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Member_SinceInputs */

const en_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivor since`)
};

const es_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Superviviente desde`)
};

const de_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Überlebender seit`)
};

const fr_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivant depuis`)
};

const it_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sopravvissuto dal`)
};

const nl_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overlevende sinds`)
};

const pl_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocalały od`)
};

const pt_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobrevivente desde`)
};

const ru_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выживает с`)
};

const sv_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlevare sedan`)
};

const tr_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalma başlangıcı`)
};

const zh_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`幸存起始`)
};

const ja_settings_member_since = /** @type {(inputs: Settings_Member_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サバイバー歴`)
};

/**
* | output |
* | --- |
* | "Survivor since" |
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
