/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_TitleInputs */

const en_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activity`)
};

const es_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actividad`)
};

const de_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktivität`)
};

const fr_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activité`)
};

const it_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attività`)
};

const nl_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activiteit`)
};

const pl_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktywność`)
};

const pt_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atividade`)
};

const ru_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Активность`)
};

const sv_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktivitet`)
};

const tr_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etkinlik`)
};

const zh_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`动态`)
};

const ja_profile_activity_title = /** @type {(inputs: Profile_Activity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクティビティ`)
};

/**
* | output |
* | --- |
* | "Activity" |
*
* @param {Profile_Activity_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_title = /** @type {((inputs?: Profile_Activity_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_title(inputs)
	if (locale === "de") return de_profile_activity_title(inputs)
	if (locale === "fr") return fr_profile_activity_title(inputs)
	if (locale === "it") return it_profile_activity_title(inputs)
	if (locale === "nl") return nl_profile_activity_title(inputs)
	if (locale === "pl") return pl_profile_activity_title(inputs)
	if (locale === "pt") return pt_profile_activity_title(inputs)
	if (locale === "ru") return ru_profile_activity_title(inputs)
	if (locale === "sv") return sv_profile_activity_title(inputs)
	if (locale === "tr") return tr_profile_activity_title(inputs)
	if (locale === "zh") return zh_profile_activity_title(inputs)
	if (locale === "ja") return ja_profile_activity_title(inputs)
	return en_profile_activity_title(inputs)
});
