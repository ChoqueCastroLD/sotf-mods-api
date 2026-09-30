/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Reports_AgainstInputs */

const en_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reports against`)
};

const es_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes en contra`)
};

const de_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldungen gegen`)
};

const fr_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalements contre`)
};

const it_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazioni contro`)
};

const nl_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen tegen`)
};

const pl_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia przeciw`)
};

const pt_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denúncias contra`)
};

const ru_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Жалобы на него`)
};

const sv_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmälningar mot`)
};

const tr_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aleyhine şikâyetler`)
};

const zh_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`被举报次数`)
};

const ja_ranger_user_reports_against = /** @type {(inputs: Ranger_User_Reports_AgainstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`被報告`)
};

/**
* | output |
* | --- |
* | "Reports against" |
*
* @param {Ranger_User_Reports_AgainstInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_reports_against = /** @type {((inputs?: Ranger_User_Reports_AgainstInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Reports_AgainstInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_reports_against(inputs)
	if (locale === "de") return de_ranger_user_reports_against(inputs)
	if (locale === "fr") return fr_ranger_user_reports_against(inputs)
	if (locale === "it") return it_ranger_user_reports_against(inputs)
	if (locale === "nl") return nl_ranger_user_reports_against(inputs)
	if (locale === "pl") return pl_ranger_user_reports_against(inputs)
	if (locale === "pt") return pt_ranger_user_reports_against(inputs)
	if (locale === "ru") return ru_ranger_user_reports_against(inputs)
	if (locale === "sv") return sv_ranger_user_reports_against(inputs)
	if (locale === "tr") return tr_ranger_user_reports_against(inputs)
	if (locale === "zh") return zh_ranger_user_reports_against(inputs)
	if (locale === "ja") return ja_ranger_user_reports_against(inputs)
	return en_ranger_user_reports_against(inputs)
});
